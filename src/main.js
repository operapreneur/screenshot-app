// Modules
const {app, ipcMain} = require('electron')
const windowMain = require('./processMain/windowMain')
const renderPages = require('./processMain/renderPages')

// Enable Electron-Reload
if ( process.env.ELECTRON_ENV === "dev" ) {
  require('electron-reload')(__dirname)
}

//https://electronjs.org/docs/api/app#appsetbadgecountcount-linux-macos
app.setBadgeCount(15)
let introWindow


// Listen for shot object
ipcMain.on('shot-object', (e, shotObject) => {

  // Get item with renderPages module
  renderPages( shotObject, (err) => {

    // TODO: Send to renderer for Screenshot PROGRESS
    // e.sender.send('shoot-progress', err)

    // Send to renderer when Screenshot DONE
    e.sender.send('shoot-success', err)

  })
})

// Some APIs can only be used after this event occurs.
app.on('ready', function(e){
  // console.log(e);

  windowMain.createWindow()

  // CREATE introWindow
  // introWindow = new BrowserWindow({
  //   parent: windowMain,
  //   width: 600,
  //   height: 400,
  //   modal: true,
  //   show: false
  // })
  // introWindow.loadURL('https://github.com')
  // introWindow.once('ready-to-show', () => {
  //   introWindow.show()
  // })

  // Open the DevTools.
  // windowMain.webContents.openDevTools()


  // USING webContents on new window
  // let mainContents = windowMain.webContents;
  // // LISTEN for new-window
  // mainContents.on('new-window', (e, url) => {
  //   e.preventDefault();
  //   let blankTarget = new BrowserWindow({
  //     width: 600,
  //     height: 400,
  //     parent: windowMain,
  //     webPreferences: {
  //       partition: 'partition1'
  //     }
  //   })
  //   blankTarget.loadURL(url)
  //   // EVENT login
  //   blankTarget.on('login', (e, req, authInfo, callback) => {
  //     e.preventDefault()
  //     // pass creds
  //     callback('login', 'password')
  //   })
  //   // EVENT did-finish-load
  //   blankTarget.on('did-finish-load', () => {
  //     console.log('did-finish-load');
  //   })
  //   // EVENT dom-ready
  //   blankTarget.on('dom-ready', () => {
  //     console.log('dom-ready');
  //   })
  //   // EVENT closed
  //   blankTarget.on('closed', () => {
  //     windowMain = null
  //   })
})

// before the application starts closing
app.on('before-quit', (e) => {

  console.log('app is about to quit');

  // Prompt if file is not saved
  // SAVE file

  // to cancel quit prompt e.preventDefault()

})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windowMain === null) windowMain.createWindow()
})
