class SocketManager {
    constructor(oScene, iBoardId, sAuthToken, sRootUrl, nChips) {
        this.oScene = oScene;
        this.sRootUrl = sRootUrl;
        this.iBoardId = iBoardId;
        this.sAuthToken = sAuthToken;
        this.nChips = nChips;
        this.oScene.oGameManager.iBoardId = this.iBoardId;


        //Root Socket conenction
        this.socket = io(this.sRootUrl, {
            transports: ["websocket", "polling"],
            query: {
                authorization: this.sAuthToken,
            },
            extraHeaders: {
                authorization: this.sAuthToken,
            }
        });

        // Root Socket Connection Events - Start
        this.socket.on("connect", () => {
            this.oScene.oGameManager.ownSocketId = this.socket.id;
            console.log(
                "Connected to Socket :: ",
                this.socket.id,
            );
            console.log("Socket URL :: ", this.sRootUrl);
        });
        this.socket.on("disconnect", () => {
            console.log("Disconnected from Socket");
        });
        this.socket.on("reconnect", () => {
            console.log("Reconnecting to Socket");
        });
        this.socket.on("error", (error) => {
            console.log("Connection Error :: ", error);
        });
        // Root Socket Connection Events - End

        // Refresh Purpose
        this.socket.on(this.iBoardId, (data) => {
            // console.log("refresh :",data);
            this.onReceivedData(data);
        });

        // Socket Connection
        this.socket.emit(
            "reqJoinBoard",
            { iBoardId: this.iBoardId },
            (data, error) => {
                console.log("Event Emmited!!!", data, error);
                this.onReceivedData(data);
            }
        );
        this.emit = (sEventName, oData = {}, callback) => {
            this.socket.emit(this.iBoardId, { sEventName, oData }, callback);
        };
    }


    onReceivedData(data) {
        switch (data.sEventName) {
            case undefined:
                console.log("undefined", data);
                this.oScene.oGameManager.setGameData(data.oData);
                for (let i = 0; i < data.oData.aParticipant.length; i++) {
                    // if(data.oData.aParticipant.length == this.oScene.oGameManager.nMaxPlayers) {
                    this.oScene.oPlayerManager.setUserData(data.oData.aParticipant[i]);
                    // }
                }
                break;
            case "resUserJoined":
                console.log('resUserJoined', data);
                this.oScene.oPlayerManager.setUserData(data.oData);
                if (data.oData.aHand.length == 3) {
                    if(data.oData.iUserId == this.oScene.oPlayerManager.player1.name){
                        this.oScene.oCardManager.setHandCardData(data.oData.aHand);
                    }
                }
                break;
            case "resGameInitializeTimer":
                console.log("resGameInitializeTimer", data);
                this.oScene.setInitializeTimer(data.oData);
                break;
            case "resHand":
                console.log("resHand", data);
                this.oScene.oTweenManager.cardDistributeAnimation();
                this.oScene.container_see.visible = true;
                this.oScene.oCardManager.setHandCardData(data.oData);
                // this.oScene.oCardManager.setOpponentCards();
                break;
            case "resGameState":
                console.log("resGameState ", data);
                this.oScene.oGameManager.resGameState(data.oData);
                break;
            case "resPlayerTurn":
                console.log("resPlayerTurn :", data.oData);
                this.oScene.oPlayerManager.changePlayerTurn(data.oData);
                this.oScene.changePlayerValue(data.oData);
                break;
            case "resBoardState":
                console.log('%c resBoardState', 'color: #CE375C', data.oData);
                this.oScene.container_waitingScene.visible = false;
                this.oScene.oGameManager.setTableData(data.oData)
                break;
            case "resPlayersState":
                console.log('%c resPlayersState', 'color: #CE375C', data.oData);
                break;
            case "resCardSeen":
                console.log('%c resCardSeen', 'color: #CE375C', data.oData);
                this.oScene.oPlayerManager.setOpponentCardStatus(data.oData);
                this.oScene.oCardManager.setRules();
                this.oScene.setButtonStatus(data.oData);
                break;
            case "resTurnMissed":
                console.log('%c resTurnMissed', 'color: #5BB381', data.oData);
                break;
            case "resPlayerLeft":
                console.log('%c resPlayerLeft', 'color: #E3B34C', data.oData);
                break;
            case "resResult":
                console.log('%c resResult', 'color: #5BB381', data.oData);
                this.oScene.oPlayerManager.resResult(data.oData);
                this.oScene.showResultScreen(data.oData)
                break;
            case "resPack":
                console.log(' %c resPack', 'color: #5BB381', data.oData);
                break;
            case "resPlaceBet":
                console.log(" %c resPlaceBet", 'color: #5BB381', data.oData);
                this.oScene.setBoardPotValue(data.oData);
                this.oScene.oPlayerManager.setOpponentPlayerCall(data.oData);
                // this.oScene.container_button.visible = false;
                break;
            case "resShowHand":
                console.log("resShowHand", data.oData);
                break;
            case "resetTable":
                this.oScene.resetTableData();
                break;
            default:
                console.log('%c New Event !!!!!! ', 'color: #E3B34C', data.sEventName, data);
                break;

        }

    }
}
