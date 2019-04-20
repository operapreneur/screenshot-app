
// Modules
const electron = require('electron')
const {BrowserWindow, webContents} = require('electron')
const fs = require('fs')
const xtend = require("xtend")

// variables
let winObject = []

const newError = (page, method, type, desc) => {
  // TODO Create table output for error report
}

// 1. Determine browser width
const setBrowserWidth = (settings, screenshot) => {
  if (screenshot.size == 'default') {
    if (screenshot.type == 'desktop'){
      return settings.desktop
    } else if (screenshot.type == 'tablet') {
      return settings.tablet
    } else {
      // remaining choice is mobile
      return settings.mobile
    }
  } else {
    // if screenshot does not use a default size
    return screenshot.width
  }
}

// 2. Determine browser height
const setBrowserHeight = (settings, screenshot) => {
  if (screenshot.device) {
    // TODO add list of device
    return 768
  } else {
    // TODO: Default Height?
    return 768
  }
}

// 3. Determine margin
const setPageMargins = (settings, screenshot) => {
  if (screenshot.margin) {
    return [
      screenshot.m_top,
      screenshot.m_right,
      screenshot.m_bottom,
      screenshot.m_left
    ]
  } else if (screenshot.margin == null) {
    return [0,0,0,0]
  } else if (settings.margin) {
    return [
      settings.m_top,
      settings.m_right,
      settings.m_bottom,
      settings.m_left
    ]
  } else {
    return [0,0,0,0]
  }
}

// 4. Create BrowserWindow
const setBrowserWindow = (settings, screenshot, i) => {

  let width = setBrowserWidth(settings, screenshot)
  let height = setBrowserHeight(settings, screenshot)
  let marginArray = setPageMargins(settings, screenshot)

  let browserWidth = width + marginArray[0] + marginArray[2]
  let browserHeight = height + marginArray[1] + marginArray[3]

  // Simple multiple windows management
  let obj = {}
  // if needed potential package: https://github.com/TamkeenLMS/electron-window-manager

  obj['win'] = new BrowserWindow({
    width: browserWidth,
    height: browserHeight,
    show: false,
    useContentSize: false,
    enableLargerThanScreen: true,
    webPreferences: {
      offscreen: true
    }
  })
  winObject.push(obj);

}

// 5. Load Page
const pageLoad = (settings, screenshot, i, win) => {

  win.loadURL(screenshot.URL)
  // Define webContents
  let pageContents = win.webContents
  // If login credentials
  pageContents.on('login', (e, req, authInfo, callback) => {
    // e.preventDefault()
    // callback('login','password')
  })
  // Catch httpResponse codes
  pageContents.on('did-navigate', (e, url, httpResponseCode, httpStatusText) => {
    if((httpResponseCode == '401') || (httpResponseCode == '400')) {
      console.log(`ERROR: ${screenshot.URL} | Page Navigate | ${httpResponseCode} | ${httpStatusText}`)
      // TODO: add error report
    }
  })

  // NEXT
  renderPage(settings, screenshot, i, win, pageContents)

}

// 6. Render page
const renderPage = (settings, screenshot, i, win, pageContents) => {

  // Wait for page to finish loading
  pageContents.on('did-finish-load', (e) => {
    console.log(`did-finish: ${screenshot.URL}`)

    setTimeout(function () {
      if (screenshot.clip) {
        setClipSize(settings, screenshot, i, win, pageContents)
      } else if (screenshot.size == 'default') {
        getPageHeight(settings, screenshot, i, win, pageContents)
      } else {
        //screenshot.size = viewport
        console.log(screenshot.size);
        renderScreenshot(settings, screenshot, i, win, pageContents)
      }
    }, 2000);

    // return errors when page fails to load
  }).on('did-fail-load', (e, errorCode, errorDescription) => {
    console.log(`ERROR: ${screenshot.URL} | Load Fail | ${errorCode} | ${errorDescription}`);
    // TODO: add error report
  })

}

const getMeta = (name) => {
  const metaTags = document.getElementsByTagName('meta');

  for (let i = 0; i < metaTags.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
}

// 7. Add page meta
const renderMeta = () => {
  pageContents.getTitle()
  let pageTitle = document.title
  getMeta('description')
}

// 6. Add CSS
// Inject css
// https://electronjs.org/docs/api/web-contents#contentsinsertcsscss

// 7. Add JS
// Inject js
// https://electronjs.org/docs/api/web-contents#contentsexecutejavascriptcode-usergesture-callback

// 8. Determine clip
const setClipSize = (settings, screenshot, i, win, pageContents) => {
  let rectObj = {
    x: screenshot.crop_x,
    y: screenshot.crop_y,
    width: parseInt(screenshot.crop_w * electron.screen.getPrimaryDisplay().scaleFactor),
    height: parseInt(screenshot.crop_h * electron.screen.getPrimaryDisplay().scaleFactor)
  }
  console.log(rectObj);
  if (win.getBounds().height < screenshot.crop_h) {
    let newHeight = screenshot.crop_h + screenshot.crop_y
    win.setContentSize(win.getBounds().width, newHeight)
  }
  renderScreenshot(settings, screenshot, i, win, pageContents, rectObj)
}

// 9. Determine true page height
const getPageHeight = (settings, screenshot, i, win, pageContents) => {
  pageContents.executeJavaScript('document.body.offsetHeight')
  .then((result) => {
    let rectObj = {
      x: 0,
      y: 0,
      width: parseInt(win.getBounds().width * electron.screen.getPrimaryDisplay().scaleFactor),
      height: parseInt(result * electron.screen.getPrimaryDisplay().scaleFactor)
    }
    console.log(rectObj);
    win.setContentSize(rectObj.width, rectObj.height)
    renderScreenshot(settings, screenshot, i, win, pageContents, rectObj)
  })
}

// 10. Render screenshot
const renderScreenshot = (settings, screenshot, i, win, pageContents, rectObj) => {
  pageContents.capturePage(xtend({
    x: 0,
    y: 0,
    width: win.getContentSize()[0],
    height: win.getContentSize()[1]
  }, rectObj || {}), (img) => {
    if (img.isEmpty()) {
      console.log('empty');
    } else {
      let screenImg = img.toPNG()
      createFile(settings, screenshot, i, screenImg)
    }
    removeWindow(win)
  })
}

// writeFile
const createFile = (settings, screenshot, i, screenImg) => {
  fs.writeFile(`${settings.file_path}${settings.file_name}_${i}.png`, screenImg, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// FINAL remove BrowserWindow
const removeWindow = (win) => {
  win.close()
  win = null
}


// Screenshot method
module.exports = (shotObject, callback) => {

  let settings = shotObject.project
  let shotlist = shotObject.screenshots
  let report = []

  for (var i = 0; i < shotlist.length; i++) {
    let screenshot = shotlist[i]
      setBrowserWindow(settings, screenshot, i)

    let single = winObject[i]
    let win = single.win
      pageLoad(settings, screenshot, i, win)

  }

  // Return report via callback
  callback(report)

}


// Capture page
// https://electronjs.org/docs/api/web-contents#contentscapturepagerect-callback

// Device mode
// https://electronjs.org/docs/api/web-contents#contentsenabledeviceemulationparameters

// Create an event - mouseDown, etc
// https://electronjs.org/docs/api/web-contents#contentssendinputeventevent
