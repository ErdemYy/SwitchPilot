"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('switchpilotDesktop', {
    getPlatformInfo: () => electron_1.ipcRenderer.invoke('desktop:get-platform-info'),
    saveSecureCredential: (key, secret) => electron_1.ipcRenderer.invoke('desktop:save-credential', key, secret),
    getSecureCredential: (key) => electron_1.ipcRenderer.invoke('desktop:get-credential', key),
    triggerSync: () => electron_1.ipcRenderer.invoke('desktop:trigger-sync'),
});
