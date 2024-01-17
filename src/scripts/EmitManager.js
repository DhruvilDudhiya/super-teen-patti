class EmitManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    reqShowCard = () =>  this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqCardSeen", oData: {} },(error, data) => {
        console.warn("reqCardSeen", error, data);
    })
    reqLeaveTable = () =>  this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqLeave", oData: {} },(error, data) => {
        console.warn("reqLeave", error, data);
    })
    reqShowHand = () =>  this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, {  sEventName: "reqShowHand", oData: {} },(error, data) => {
        console.warn("reqShowHand", error, data);
    })
    reqPack = () => this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, {  sEventName: "reqPack", oData: {} },(error, data) => {
        console.warn("reqPack", error, data);
    })
    reqChangeTurn = () => this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId,{ sEventName: "reqChangeTurn", oData: {} },(error, data) => {
        console.warn("reqChangeTurn", error, data);
    })
    reqAcceptSideShow = () => {
        this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId,{ sEventName: "acceptSideShow", oData: {iParticipantId : this.oScene.oPlayerManager.fromPlayerId} },(error, data) => {
            console.warn("acceptSideShow", error, data);
        })
    }
   
}