class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.see_btn.setInteractive().on('pointerdown', () => {
            this.oScene.oEmitManager.reqShowCard();
            // this.oScene.oCardManager.setOpponentCards();
            this.oScene.container_see.visible = false;
            this.oScene.container_playerHand.visible = true;
            this.oScene.oGameManager.isBlind = false;
            // this.oScene.container_backCards.visible = false;
            this.oScene.show_Disable.visible = false;
        })
        this.oScene.blind_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.buttonClickAnim(this.oScene.container_blind, 0.8, 1, { sEventName: "reqBet", oData: {} });
        })
        this.oScene.yesBtn_btn.setInteractive().on("pointerdown", () => {
           this.oScene.oEmitManager.reqAcceptSideShow();
        });
       
        this.oScene.call_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.buttonClickAnim(this.oScene.container_call, 0.8, 1, { sEventName: "reqBet", oData: { b2XBet: false }});
        })
        this.oScene.raise_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.buttonClickAnim(this.oScene.container_raise, 0.8, 1, { sEventName: "reqBet", oData: { b2XBet: true } });
        })
        this.oScene.fold_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.buttonClickAnim(this.oScene.container_fold, 0.8, 1, {  sEventName: "reqPack", oData: {}});
        });
        this.oScene.show_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.buttonClickAnim(this.oScene.container_Show, 0.8, 1, {  sEventName: "reqShowHand", oData: {}});
        });
        this.oScene.side_show_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.buttonClickAnim(this.oScene.container_sideShow, 0.8, 1, {  sEventName: "reqSideShow", oData: {}});
        });
        this.oScene.close_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.menuAnimation(1, 0 , this.oScene.container_menu);
        });
        this.oScene.nav_btn.setInteractive().on("pointerdown", () => {
            this.oScene.oTweenManager.menuAnimation(0, 1 , this.oScene.container_menu);
        });
        this.oScene.exit_icon.setInteractive().on("pointerdown", () => {
            this.oScene.oEmitManager.reqLeaveTable();
            window.close();
        });
        this.oScene.close_btn_result.setInteractive().on("pointerdown", () => {
            this.oScene.container_resultScreen.visible = false;
        });
        this.oScene.show_Disable.setInteractive().on("pointerdown", function () {
        }, this);
        this.oScene.side_show_Disable.setInteractive().on("pointerdown", function () {
        }, this);
        this.oScene.black_layer_3.setInteractive().on("pointerdown", function () {

        }, this)
        this.oScene.ok_Btn.setInteractive().on("pointerdown", function () {
          window.close();
        },this)
        // this.oScene.changeTurn_btn.setInteractive().on("pointerdown", () => {
        //     this.oScene.oEmitManager.reqChangeTurn();
        // });
    }
}