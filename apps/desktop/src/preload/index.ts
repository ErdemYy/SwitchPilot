import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('switchpilotDesktop', {
  getPlatformInfo: () => ipcRenderer.invoke('desktop:get-platform-info'),
  saveSecureCredential: (key: string, secret: string) => ipcRenderer.invoke('desktop:save-credential', key, secret),
  getSecureCredential: (key: string) => ipcRenderer.invoke('desktop:get-credential', key),
  triggerSync: () => ipcRenderer.invoke('desktop:trigger-sync'),
});
