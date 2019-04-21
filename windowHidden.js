
// Modules
const {BrowserWindow} = require('electron')
const fs = require('fs')

// BrowserWindow
let winOffscreen

// New read item method
module.exports = (url, callback) => {

  // Create new offscreen BrowserWindow
  winOffscreen = new BrowserWindow({
    width: 1000,
    height: 1000,
    show: false,
    webPreferences: {
      offscreen: true
    }
  })

  // Load read item
  winOffscreen.loadURL(url)

  // Wait for page to finish loading
  winOffscreen.webContents.on('did-finish-load', () => {

    let screenshot;
    let i = 1;

    // Get screenshot (thumbnail)
    winOffscreen.webContents.capturePage((img) => {

      let screenshot = img.toPNG()

      fs.writeFile(`${__dirname}/tmp/screenshot${i}.png`, screenshot, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

      // Get page title
      let title = winOffscreen.getTitle()

      // Return new item via callback
      callback({ title, url })

      // Clean up
      winOffscreen.close()
      winOffscreen = null
    })
  })
}

// EVENT dom-ready
// https://electronjs.org/docs/api/web-contents#event-dom-ready
// browserView.addEventListener('dom-ready', () => {
//   const browser = browserView.getWebContents()
// })

// RELOAD BrowserWindow or webContents
// https://electronjs.org/docs/api/browser-window#winreload
// https://electronjs.org/docs/api/web-contents#contentsreload


// webContents https://electronjs.org/docs/api/web-contents
// Render and control web pages.

// Find contents in page
// https://electronjs.org/docs/api/web-contents#contentsstopfindinpageaction

// Capture page
// https://electronjs.org/docs/api/web-contents#contentscapturepagerect-callback

// Inject css
// https://electronjs.org/docs/api/web-contents#contentsinsertcsscss

// Inject js
// https://electronjs.org/docs/api/web-contents#contentsexecutejavascriptcode-usergesture-callback

// Device mode
// https://electronjs.org/docs/api/web-contents#contentsenabledeviceemulationparameters

// Create an event - mouseDown, etc
// https://electronjs.org/docs/api/web-contents#contentssendinputeventevent
