class EmitManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    reqShowCard = () =>  this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqCardSeen", oData: {} })
    reqLeaveTable = () =>  this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqLeave", oData: {} })
    reqShowHand = () =>  this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, {  sEventName: "reqShowHand", oData: {} })
    reqPack = () => this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, {  sEventName: "reqPack", oData: {} })
    reqChangeTurn = () => this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId,{ sEventName: "reqChangeTurn", oData: {} })
    // reqBet = () => this.oScene.oSocketManager.emit("reqBet")
   
}