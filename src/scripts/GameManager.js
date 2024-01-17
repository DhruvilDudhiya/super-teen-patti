class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.ownSocketId = "";
        this.nMaxPlayers = 0;
        this.cardGap = 25;
        this.ownPlayeId = "";
        this.iBoardId = "";
        this.isOwnturn = false;
        this.isBlind = true;
        this.currnentBootValue = 0;
    }
    setGameData = (data) => {
        this.nMaxPlayers = data.nMaxPlayer;
    }
    resGameState = (data) => {
        this.oScene.setBoardPotValue(data.oBoard);
        this.oScene.container_playerPot.visible = true;
        this.potLimit = data.oBoard.nBoardPotLimit;
        this.currnentBootValue = data.oBoard.nCurrentBootValue;
        this.oScene.txt_nBoardPotLimit.text = "Pot:" + this.formatSliderValue(this.potLimit);
        this.resPlayerTurn(data);
        for (let i = 0; i < data.aParticipant.length; i++) {
            if (data.aParticipant[i].iUserId == this.oScene.oPlayerManager.player1.name) {
                this.oScene.oCardManager.setHandCardData(data.aParticipant[i].aHand);
                if (data.aParticipant[i].bCardSeen == true) {
                    this.oScene.container_playerHand.visible = true;
                    this.oScene.container_see.visible = false;
                    this.oScene.container_call.visible = true;
                    this.oScene.container_blind.visible = false;
                    this.oScene.call_value.text = this.formatSliderValue(this.currnentBootValue);
                    this.oScene.raise_value.text = this.formatSliderValue(this.currnentBootValue * 2);
                    this.oScene.oPlayerManager.player1.back_cardContainer.list.forEach(containerElement => {
                        containerElement.visible = false;
                    });
                } else {
                    this.oScene.container_call.visible = false;
                    this.oScene.container_blind.visible = true;
                    this.oScene.container_see.visible = true;
                    this.oScene.blind_value.text = this.formatSliderValue(this.currnentBootValue);
                    this.oScene.raise_value.text = this.formatSliderValue(this.currnentBootValue * 2);
                    this.oScene.oPlayerManager.player1.back_cardContainer.list.forEach(containerElement => {
                        containerElement.visible = true;
                    })
                }
            } else {
                if (this.nMaxPlayers == 2) {
                    if (data.aParticipant[i].iUserId == this.oScene.oPlayerManager.player2.name)
                        this.oScene.oPlayerManager.player2.back_cardContainer.list.forEach(containerElement => {
                            containerElement.visible = true;
                        })
                }
            }
        }
    }
    resPlayerTurn(data) {
        this.currentPlayerTurn = data.oBoard.iUserTurn;
        if (data.oBoard.iUserTurn == this.oScene.oPlayerManager.player1.name) {
            this.oScene.container_button.visible = true;
        } else {
            this.oScene.container_button.visible = false;
        }
        for (let i = 0; i < this.oScene.oPlayerManager.players.size; i++) {
            for (let j = 0; j < this.oScene.oPlayerManager.players.size; j++) {
                if (this.oScene.container_players.list[j].name !== this.currentPlayerTurn) {
                    this.ownPlayerTurnReset = "";
                    this.oScene.container_players.list[j].intervalTimeReset();
                }
            }
            if (this.oScene.container_players.list[i].name === this.currentPlayerTurn) {
                this.ownPlayerTurnReset = this.oScene.container_players.list[i];
                this.oScene.container_players.list[i].setTurntimer(this.oScene.container_players.list[i].x, this.oScene.container_players.list[i].y, data.turnInfo.ttl);
                break;
            }
        }
    }
    setTableData = (data) => {
        this.oScene.container_playerPot.visible = true;
        this.potLimit = data.nBoardPotLimit;
        this.oScene.txt_nBoardPotLimit.text = "Pot:" + this.formatSliderValue(this.potLimit);
        this.oScene.txt_pot.text = this.formatSliderValue(data.nAmountIn)
        this.currnentBootValue = data.nCurrentBootValue;
        this.oScene.blind_value.text = this.formatSliderValue(this.currnentBootValue);
        this.oScene.raise_value.text = this.formatSliderValue(this.currnentBootValue * 2);
        this.oScene.oPlayerManager.player1.card_status.text = "Blind";
        this.oScene.oPlayerManager.player2.card_status.text = "Blind";

    }
    resetTableData = () => {
        this.oScene.container_playerHand.removeAll(true);
        this.oScene.container_resultHandCard.removeAll(true);
        this.resetPlayerProfile();
        this.oScene.container_playerHand.visible = false;
        this.oScene.oPlayerManager.ownPlayerTurnReset.intervalTimeReset();
        this.oScene.oGameManager.isBlind = true;
        this.oScene.container_blind.visible = true;
        this.oScene.container_call.visible = false;
    }
    resetPlayerProfile = () => {
        const playersToHandle = Math.min(this.nMaxPlayers, 4); // Ensure we handle up to 3 players at most

        for (let i = 0; i < playersToHandle; i++) {
            const player = this.oScene.oPlayerManager[`player${i + 1}`];
            player.back_cardContainer.visible = false;
            player.card_status.text = "Blind";
            player.text_playerChipes.text = "";

            if (player.blind_bg.texture.key !== "blind-bg") {
                player.blind_bg.setTexture("blind-bg"); 
            }

            for (let j = 0; j < player.back_cardContainer.list.length; j++) {
                player.back_cardContainer.list[j].visible = false;
            }
        }
    }
    formatSliderValue = (nBalance) => {
        this.selectetAmount = nBalance;
        if (nBalance <= 0) {
            return 0;
        }
        let v = Number.isInteger(nBalance) ? 0 : 1;
        if (v == 1) {
            nBalance = nBalance.toFixed(v);
            nBalance = (parseFloat(nBalance));
        }
        if (nBalance > 999 && nBalance < 1000000) {
            nBalance = (nBalance / 1000);
            let v = Number.isInteger(nBalance) ? 0 : 1;
            nBalance = nBalance.toFixed(v);
            return nBalance / 1 + 'K'
        } else if (nBalance > 1000000) {
            nBalance = (nBalance / 1000000);
            nBalance = nBalance.toFixed(v);
            return nBalance / 1 + 'M'
        } else {
            return nBalance;
        }
    }

}
