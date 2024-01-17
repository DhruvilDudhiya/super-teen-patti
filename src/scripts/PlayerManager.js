class PlayerManger {
    constructor(oScene) {
        this.oScene = oScene;
        this.players = new Map();
        this.player1;
        this.player2;
        this.player3;
        this.player4;

        this.seatNo = 2;
    }
    setUserData(oData) {
        if (!this.players.has(oData.iUserId)) {
            this.players.set(oData.iUserId, oData.sUserName);
            this.setUserInfo(oData);
        }
    }
    setUserInfo({ iUserId, nSeat, nTurnMissed, sUserName, nChips, eState, sRootSocket }) {
        console.log("player1", sRootSocket, this.oScene.oGameManager.ownSocketId);
        if (sRootSocket == this.oScene.oGameManager.ownSocketId) {
            this.oScene.oGameManager.isOwnturn = true;
            this.player1 = new PlayerProfile(this.oScene, 550, 1583);
            this.player1.setUserName(sUserName);
            this.player1.setChipes(nChips);
            this.player1.setName(iUserId);
            console.log("player1", this.player1.name);
            this.oScene.container_players.add(this.player1);
        } else {
            this.oScene.oGameManager.isOwnturn = false;
            console.log(this.oScene.oGameManager.nMaxPlayers, this.seatNo);
            switch (this.oScene.oGameManager.nMaxPlayers) {
                case 2:
                    if (this.seatNo == 2) {
                        this.player2 = new PlayerProfile(this.oScene, 200, 958);
                        this.player2.setUserName(sUserName);
                        this.player2.setName(iUserId);
                        this.player2.setChipes(nChips);
                        this.player2.profilepic.setTexture("6");
                        this.oScene.container_players.add(this.player2);
                    }
                    this.seatNo++;
                    break;
                case 3:
                    if (this.seatNo == 2) {
                        this.player2 = new PlayerProfile(this.oScene, 200, 958);
                        this.player2.setUserName(sUserName);
                        this.player2.setName(iUserId);
                        this.player2.setChipes(nChips);
                        this.player2.profilepic.setTexture("6");
                        this.oScene.container_players.add(this.player2);
                    } else if (this.seatNo == 3) {
                        this.player3 = new PlayerProfile(this.oScene, 894, 958);
                        this.player3.setUserName(sUserName);
                        this.player3.setName(iUserId);
                        this.player3.setChipes(nChips);
                        this.player3.profilepic.setTexture("1");
                        this.player3.back_cardContainer.x = -170;
                        this.oScene.container_players.add(this.player3);
                    }
                    this.seatNo++;
                    break;
                case 4:
                    if (this.seatNo == 2) {
                        this.player2 = new PlayerProfile(this.oScene, 200, 958);
                        this.player2.setUserName(sUserName);
                        this.player2.setName(iUserId);
                        this.player2.setChipes(nChips);
                        this.player2.profilepic.setTexture("6");
                        this.oScene.container_players.add(this.player2);
                    }
                    else if (this.seatNo == 3) {
                        this.player3 = new PlayerProfile(this.oScene, 852, 689);
                        this.player3.setUserName(sUserName);
                        this.player3.setName(iUserId);
                        this.player3.setChipes(nChips);
                        this.player3.profilepic.setTexture("1");
                        this.player3.back_cardContainer.x = -170;
                        this.oScene.container_players.add(this.player3);
                    } else if (this.seatNo == 4) {
                        this.player4 = new PlayerProfile(this.oScene, 919, 1159);
                        this.player4.setUserName(sUserName);
                        this.player4.setName(iUserId);
                        this.player4.setChipes(nChips);
                        this.player4.back_cardContainer.x = -170;
                        this.player4.profilepic.setTexture("3");
                        this.oScene.container_players.add(this.player4);
                    }
                    this.seatNo++;
                    break;
            }
        }
    }
    setPlayerData = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].sRootSocket == this.oScene.oGameManager.ownSocketId) {
                this.player1.setUserName(data[i].sUserName);
                this.player1.setChipes(data[i].nChips);
            } else {
                if (this.player2.name == data[i].iUserId) {
                    this.player2.setUserName(data[i].sUserName);
                }
            }
        }

    }
    setPlayerLeft = ({ iUserId, sReason }) => {
        if (this.player1.name == iUserId) {
        } else {
            switch (iUserId) {
                case this.player2.name:
                    this.player2.destroy();
                    this.players.delete(iUserId);
                    break;
                case this.player3.name:
                    this.players.delete(iUserId);
                    break;
                case this.player4.name:
                    this.players.delete(iUserId);
                    break;
                default:
                    break;
            }
        }
    }
    changePlayerTurn = (data) => {
        this.currenPlayerTurn = data.iUserId;
        if (data.iUserId == this.player1.name) {
            this.oScene.container_button.visible = true;
        } else {
            this.oScene.container_button.visible = false;
        }
        for (let i = 0; i < this.players.size; i++) {
            for (let j = 0; j < this.players.size; j++) {
                if (this.oScene.container_players.list[j].name !== this.currenPlayerTurn) {
                    this.ownPlayerTurnReset = "";
                    this.oScene.container_players.list[j].intervalTimeReset();
                }
            }
            if (this.oScene.container_players.list[i].name === this.currenPlayerTurn) {
                this.ownPlayerTurnReset = this.oScene.container_players.list[i];
                this.oScene.container_players.list[i].setTurntimer(this.oScene.container_players.list[i].x, this.oScene.container_players.list[i].y, data.ttl);
                break;
            }

        }
    }
    resResult = (data) => {
        this.oScene.container_see.visible = false;
        this.oScene.container_button.visible = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].eState == "winner") {
                switch (data[i].iUserId) {
                    case this.player1.name:
                        this.player1.ring.visible = false;
                        this.player1.card_status.text = "winner";
                        this.player1.container_winnerUi.visible = true;
                        setTimeout(() => {
                            this.player1.container_winnerUi.visible = false;
                        }, 6000);
                        this.setwinnerAnimation_Partical(this.player1.x, this.player1.y);
                        // this.oScene.oTweenManager.winnertween(this.player1.rounded_Glow , this.player1.container_winnerUi) ;
                        this.oScene.oTweenManager.betTweenAnimation(this.oScene.container_playerPot.x, this.oScene.container_playerPot.y, this.player1.x, this.player1.y);
                        break;
                    case this.player2.name:
                        this.player2.ring.visible = false;
                        this.player2.card_status.text = "winner";
                        this.player2.container_winnerUi.visible = true;
                        setTimeout(() => {
                            this.player2.container_winnerUi.visible = false;
                        }, 6000);
                        // this.oScene.oTweenManager.winnertween(this.player2.rounded_Glow , this.player2.container_winnerUi);
                        this.oScene.oTweenManager.betTweenAnimation(this.oScene.container_playerPot.x, this.oScene.container_playerPot.y, this.player2.x, this.player2.y);
                        break;
                    case this.player3.name:
                        this.player3.card_status.text = "winner";
                        this.player3.container_winnerUi.visible = true;
                        setTimeout(() => {
                            this.player3.container_winnerUi.visible = false;
                        }, 6000);
                        // this.oScene.oTweenManager.winnertween(this.player3.rounded_Glow , this.player3.container_winnerUi);
                        this.oScene.oTweenManager.betTweenAnimation(this.oScene.container_playerPot.x, this.oScene.container_playerPot.y, this.player3.x, this.player3.y);
                        break;
                    case this.player4.name:
                        this.player4.card_status.text = "winner";
                        this.player4.container_winnerUi.visible = true;
                        setTimeout(() => {
                            this.player4.container_winnerUi.visible = false;
                        }, 6000);
                        // this.oScene.oTweenManager.winnertween(this.player4.rounded_Glow , this.player4.container_winnerUi);
                        this.oScene.oTweenManager.betTweenAnimation(this.oScene.container_playerPot.x, this.oScene.container_playerPot.y, this.player4.x, this.player4.y);
                        break;
                }
                break;
            }
        }
    }
    setwinnerAnimation_Partical(tempX, tempY) {
        var particles = this.oScene.add.particles('yellow_star').setScale(0.8);
        var emitter = particles.createEmitter({
            x: tempX + 120,
            y: tempY + 350,
            speed: 150,
        })
        emitter.setFrequency(200, 2);
        setTimeout(() => {
            emitter.stop();
        }, 2000)
    }
    setOpponentPlayerCall = ({ iUserId, nCurrentBootValue, sHandState, nBetAmount }) => {
        if (this.player1.name != iUserId) {
            if (this.oScene.oGameManager.nMaxPlayers == 2) {
                this.player2.text_playerChipes.text = nBetAmount;
            } else if (this.oScene.oGameManager.nMaxPlayers == 3) {
                switch (iUserId) {
                    case this.player2.name:
                        this.player2.text_playerChipes.text = nBetAmount;
                        break;
                    case this.player3.name:
                        this.player3.text_playerChipes.text = nBetAmount;
                        break;
                }
            } else if (this.oScene.oGameManager.nMaxPlayers == 4) {
                switch (iUserId) {
                    case this.player2.name:
                        this.player2.text_playerChipes.text = nBetAmount;
                        break;
                    case this.player3.name:
                        this.player3.text_playerChipes.text = nBetAmount;
                        break;
                    case this.player4.name:
                        this.player4.text_playerChipes.text = nBetAmount;
                        break;
                }
            }
        }
    }
    setOpponentCardStatus = ({ iUserId }) => {
        if (this.player1.name != iUserId) {
            if (this.oScene.oGameManager.nMaxPlayers == 2) {
                this.player2.card_status.text = "seen";
                this.player2.blind_bg.setTexture("seen-bg");
            } else if (this.oScene.oGameManager.nMaxPlayers == 3) {
                switch (iUserId) {
                    case this.player2.name:
                        this.player2.card_status.text = "seen";
                        this.player2.blind_bg.setTexture("seen-bg");
                        break;
                    case this.player3.name:
                        this.player3.card_status.text = "seen";
                        this.player3.blind_bg.setTexture("seen-bg");
                        break;
                }
            } else if (this.oScene.oGameManager.nMaxPlayers == 4) {
                switch (iUserId) {
                    case this.player2.name:
                        this.player2.card_status.text = "seen";
                        this.player2.blind_bg.setTexture("seen-bg");
                        break;
                    case this.player3.name:
                        this.player3.card_status.text = "seen";
                        this.player3.blind_bg.setTexture("seen-bg");
                        break;
                    case this.player4.name:
                        this.player4.card_status.text = "seen";
                        this.player4.blind_bg.setTexture("seen-bg");
                        break;
                }
            }
        } else {
            this.player1.card_status.text = "seen";
            this.player1.blind_bg.setTexture("seen-bg");
        }

    }
    setSideShowOption = (data) => {
        this.playerId = data.reqToParticipant.iUserId;
        this.fromPlayerId = data.reqFromParticipant.iUserId;
        this.fromPlayerName = data.reqFromParticipant.sUserName;
        this.oScene.container_reqSideShow.visible = true;
        this.oScene.side_showReqTxt.text = this.fromPlayerName + " want to see your card";
        switch (this.playerId) {
            case this.player1.name:
                this.oScene.side_showReqTxt.text = this.fromPlayerName + " want to see your card";
                break;
            case this.player2.name:
                this.oScene.side_showReqTxt.text = this.fromPlayerName + " want to see your card";
                break;
            case this.player3.name:
                this.oScene.side_showReqTxt.text = this.fromPlayerName + " want to see your card";
                break;
            case this.player4.name:
                this.oScene.side_showReqTxt.text = this.fromPlayerName + " want to see your card";
                break;
            default:
                break;
        }

    }
    placeBetAnimation = ({ iUserId }) => {
        if (this.player1.name != iUserId) {
            if (this.oScene.oGameManager.nMaxPlayers == 2) {
                this.oScene.oTweenManager.betTweenAnimation(this.player2.x, this.player2.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
            } else if (this.oScene.oGameManager.nMaxPlayers == 3) {
                switch (iUserId) {
                    case this.player2.name:
                        this.oScene.oTweenManager.betTweenAnimation(this.player2.x, this.player2.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
                        break;
                    case this.player3.name:
                        this.oScene.oTweenManager.betTweenAnimation(this.player3.x, this.player3.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
                        break;
                    default:
                        break;
                }
            } else if (this.oScene.oGameManager.nMaxPlayers == 4) {
                switch (iUserId) {
                    case this.player2.name:
                        this.oScene.oTweenManager.betTweenAnimation(this.player2.x, this.player2.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
                        break;
                    case this.player3.name:
                        this.oScene.oTweenManager.betTweenAnimation(this.player3.x, this.player3.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
                        break;
                    case this.player4.name:
                        this.oScene.oTweenManager.betTweenAnimation(this.player4.x, this.player4.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
                        break;
                    default:
                        break;
                }
            }
        } else {
            this.oScene.oTweenManager.betTweenAnimation(this.player1.x, this.player1.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
        }

    }

}