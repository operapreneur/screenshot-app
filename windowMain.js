
// Modules
const {BrowserWindow} = require('electron');
const windowStateKeeper = require('electron-window-state');

// Variables
const globalMinWidth = 320;
const globalMinHeight = 568;

// BrowserWindow instance
exports.win

// windowMain createWindow fn
exports.createWindow = () => {

  // Load the previous state with fallback to defaults
  let windowMainState = windowStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 700
  });

  this.win = new BrowserWindow({
    x: windowMainState.x,
    y: windowMainState.y,
    width: windowMainState.width,
    height: windowMainState.height,
    minWidth: globalMinWidth,
    minHeight: globalMinHeight,
    backgroundColor: '#282828',
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      images: true,
      defaultFontFamily: {
        sansSerif: 'Arial'
      }
    }
  })

  // Manages Main Window State
  windowMainState.manage(this.win);

  if ( process.env.ELECTRON_ENV === "dev" ) {
    // Devtools
    this.win.webContents.openDevTools({ mode: 'detach' })
  }
  
  // Load main window content
  this.win.loadURL(`file://${__dirname}/src/main.html`)

  // Handle window closed
  this.win.on('closed', () => {
    this.win = null
  })
}
