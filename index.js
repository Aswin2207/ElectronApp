const { app, ipcMain, BrowserWindow } = require('electron');
const path = require("path");
var win;



const createWindow = () => {
  win = new BrowserWindow({
    width: 1240,
    height: 768,
    icon: 'icon.png',
    show: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  })
  win.loadFile('index.html');
  win.setMenu(null);
  win.once('ready-to-show', () => {
    win.webContents.setZoomFactor(0.8);
    win.show()
  });
  //   var currentZoom = win.webContents.getZoomFactor();
  //   console.log(currentZoom)
  //  win.webContents.zoomFactor = currentZoom + 0.2;
  // win.webContents.zoomFactor = currentZoom - 0.2;
  // win.loadURL('https://digitieke.com/Intro-Login/artboard-1.html');
}

app.whenReady().then(() => {
  createWindow()
});
ipcMain.on('app/minimize', () => {
  win.minimize();
});
ipcMain.on('app/maximize', () => {
  win.isMaximized() ? win.unmaximize() : win.maximize();
});
ipcMain.on('app/close', () => {
  console.log('quit')
  app.quit();
});
ipcMain.on('app/zoomIn', () => {
  var currentZoom = win.webContents.getZoomFactor();
  currentZoom = currentZoom - 0.2
  win.webContents.setZoomFactor(currentZoom);
});
ipcMain.on('app/zoomOut', () => {
  var currentZoom = win.webContents.getZoomFactor();
  currentZoom = currentZoom + 0.2
  win.webContents.setZoomFactor(currentZoom);
});
