class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.see_btn.setInteractive().on('pointerdown', () => {
            this.oScene.oEmitManager.reqShowCard();
            this.oScene.oCardManager.setOpponentCards();
            this.oScene.container_see.visible = false;
            this.oScene.container_playerHand.visible = true;
            this.oScene.oGameManager.isBlind = false;
            this.oScene.container_backCards.visible = false;
        })
        this.oScene.blind_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqBet", oData: {} })
        })
        this.oScene.call_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqBet", oData: { b2XBet: false } })
        })
        this.oScene.raise_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, { sEventName: "reqBet", oData: { b2XBet: true } }) 
        })
        this.oScene.fold_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oEmitManager.reqPack();
        });
        this.oScene.show_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oEmitManager.reqShowHand();
        });
        this.oScene.close_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.menuAnimation(0);
        });
        this.oScene.nav_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.menuAnimation(1);
        });
        this.oScene.exit_icon.setInteractive().on("pointerdown", () => {
            this.oScene.oEmitManager.reqLeaveTable();
            window.close();
        });
        this.oScene.close_btn_result.setInteractive().on("pointerdown", () => {
            this.oScene.container_resultScreen.visible = false;
        });
        // this.oScene.changeTurn_btn.setInteractive().on("pointerdown", () => {
        //     this.oScene.oEmitManager.reqChangeTurn();
        // });
    }
}