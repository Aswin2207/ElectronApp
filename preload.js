const { contextBridge, ipcRenderer } = require('electron');

const API={
    window:{
        min:()=>ipcRenderer.send('app/minimize'),
        max:()=>ipcRenderer.send('app/maximize'),
        close:()=>ipcRenderer.send('app/close'),
        zoomIn:()=>ipcRenderer.send('app/zoomIn'),
        zoomOut:()=>ipcRenderer.send('app/zoomOut')
    }
}

contextBridge.exposeInMainWorld("app",API);