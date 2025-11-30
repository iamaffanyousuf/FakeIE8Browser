const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    title: "Internet Explorer",
    icon: path.join(__dirname, 'assets', 'ie_icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    frame: false // we'll draw a fake IE8 frame in the HTML
  });

  win.loadFile('index.html');

  const currentWin = win;

  require('electron').ipcMain.on('win-min', () => { currentWin.minimize(); });
  require('electron').ipcMain.on('win-max', () => { if (currentWin.isMaximized()) currentWin.unmaximize(); else currentWin.maximize(); });
  require('electron').ipcMain.on('win-close', () => { currentWin.close(); });

  // open external links in real browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});