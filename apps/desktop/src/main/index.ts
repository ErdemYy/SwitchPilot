import { app, BrowserWindow, ipcMain, Tray, Menu, Notification } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;
let appTray: Tray | null = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    title: 'SwitchPilot Enterprise Desktop',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const devUrl = 'http://localhost:3000';
  mainWindow.loadURL(devUrl);

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createSystemTray() {
  const trayMenu = Menu.buildFromTemplate([
    { label: 'Open SwitchPilot Console', click: () => mainWindow?.show() },
    { label: 'Sync Offline Changes Now', click: () => triggerOfflineSync() },
    { type: 'separator' },
    { label: 'Quit SwitchPilot', click: () => app.quit() },
  ]);

  appTray = new Tray(path.join(__dirname, '../../build/icon.ico'));
  appTray.setToolTip('SwitchPilot Enterprise Desktop (Active Sync)');
  appTray.setContextMenu(trayMenu);
}

function triggerOfflineSync() {
  new Notification({
    title: 'SwitchPilot Sync Started',
    body: 'Syncing offline device inventories and pending change requests with cloud backend...',
  }).show();
}

ipcMain.handle('desktop:get-platform-info', async () => {
  return {
    platform: process.platform,
    arch: process.arch,
    version: app.getVersion(),
    isElectron: true,
  };
});

app.whenReady().then(() => {
  createMainWindow();
  createSystemTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
