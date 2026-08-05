"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
let mainWindow = null;
let appTray = null;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
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
    const trayMenu = electron_1.Menu.buildFromTemplate([
        { label: 'Open SwitchPilot Console', click: () => mainWindow?.show() },
        { label: 'Sync Offline Changes Now', click: () => triggerOfflineSync() },
        { type: 'separator' },
        { label: 'Quit SwitchPilot', click: () => electron_1.app.quit() },
    ]);
    appTray = new electron_1.Tray(path.join(__dirname, '../../build/icon.ico'));
    appTray.setToolTip('SwitchPilot Enterprise Desktop (Active Sync)');
    appTray.setContextMenu(trayMenu);
}
function triggerOfflineSync() {
    new electron_1.Notification({
        title: 'SwitchPilot Sync Started',
        body: 'Syncing offline device inventories and pending change requests with cloud backend...',
    }).show();
}
electron_1.ipcMain.handle('desktop:get-platform-info', async () => {
    return {
        platform: process.platform,
        arch: process.arch,
        version: electron_1.app.getVersion(),
        isElectron: true,
    };
});
electron_1.app.whenReady().then(() => {
    createMainWindow();
    createSystemTray();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createMainWindow();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
