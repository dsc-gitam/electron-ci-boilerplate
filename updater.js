 const { dialog } = require('electron')
 const {autoUpdater} = require('electron-updater')

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
autoUpdater.autoDownload=false
autoUpdater.setFeedURL({
    provider: 'github',
    repo: 'FirePad',
    owner: 'AsishRaju',
    token: '1d9b7da0d4623bfa29cbfdfa400bb80df36e7db6'
})
 module.exports = ()=>{

    autoUpdater.checkForUpdates()

    autoUpdater.on('update-available',()=>{

        let options  = {
            type: 'info',
            title: "Update Available",
            buttons: ["Update","No",],
            message: "A new version for for FirePad is available, Do you want to Update?"
           }

           dialog.showMessageBox(options).then(result =>{
               if(result.response===0)
               {
                   autoUpdater.downloadUpdate()
               }
           })

    })

    autoUpdater.on('update-downloaded',()=>{
        let options  = {
            type: 'info',
            title: "Update Ready",
            buttons: ["Yes","Later",],
            message: "Install and Restart now?"
           }

           dialog.showMessageBox(options).then(result =>{
            if(result.response===0)
            {
                autoUpdater.quitAndInstall(false,true)
            }
        })
    })
 }