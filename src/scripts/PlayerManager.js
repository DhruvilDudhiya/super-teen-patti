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
                        this.oScene.container_players.add(this.player3);
                    } else if (this.seatNo == 4) {
                        this.player4 = new PlayerProfile(this.oScene, 919, 1159);
                        this.player4.setUserName(sUserName);
                        this.player4.setName(iUserId);
                        this.player4.setChipes(nChips);
                        this.player4.profilepic.setTexture("3");
                        this.oScene.container_players.add(this.player4);
                    }
                    this.seatNo++;
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
                this.oScene.container_players.list[i].setTurntimer(this.oScene.container_players.list[i].x, this.oScene.container_players.list[i].y,data.ttl);
                break;
            }

        }
    }
    resResult = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].eState == "winner") {
                switch (data[i].iUserId) {
                    case this.player1.name:
                        this.player1.card_status.text = "winner";
                        break;
                    case this.player2.name:
                        this.player2.card_status.text = "winner";
                        break;
                    case this.player3.name:
                        this.player3.card_status.text = "winner";
                        break;
                    case this.player4.name:
                        this.player4.card_status.text = "winner";
                        break;
                }
                break;
            }
        }
        // confetti({
        //     particleCount: 100,
        //     spread: 70,
        //     origin: { y: 0.6 },
        // });
    }
    setOpponentPlayerCall = ({ iUserId, nCurrentBootValue, sHandState  }) => {
        if (this.player1.name != iUserId) {
            if (this.oScene.oGameManager.nMaxPlayers == 2) {
                this.player2.text_playerChipes.text = nCurrentBootValue;
            } else if (this.oScene.oGameManager.nMaxPlayers == 3) {
                switch (iUserId) {
                    case this.player2.name:
                        this.player2.text_playerChipes.text = nCurrentBootValue;
                        break;
                    case this.player3.name:
                        this.player3.text_playerChipes.text = nCurrentBootValue;
                        break;
                }
            } else if (this.oScene.oGameManager.nMaxPlayers == 4) {
                switch (iUserId) {
                    case this.player2.name:
                        this.player2.text_playerChipes.text = nCurrentBootValue;
                        break;
                    case this.player3.name:
                        this.player3.text_playerChipes.text = nCurrentBootValue;
                        break;
                    case this.player4.name:
                        this.player4.text_playerChipes.text = nCurrentBootValue;
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


}