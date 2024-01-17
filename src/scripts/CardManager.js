class CardManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setHandCardData = (card) => {
        this.cardData = card;
        this.oScene.container_playerHand.removeAll(true);
        for (let i = 0; i < card.length; i++) {
            this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.container_playerHand.getAll().length * this.oScene.oGameManager.cardGap + 180), 1660)).setScale(0.8).setAngle((i == 0) ? -10 : ((i == 1) ? 0 : 10));
            this.tempCard1.updateCardUi(card[i].suit, card[i].rank, card[i].value, card[i]._id, card[i].nGroupId);
            this.oScene.container_playerHand.add(this.tempCard1);
        }
        this.oScene.container_playerHand.x = (1080 - ((this.oScene.container_playerHand.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }

    resultHandCard = (data) => {
        this.oScene.container_playerHand.removeAll(true);
        if (data.length == 2) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].iUserId == this.oScene.oPlayerManager.player1.name) {
                    if(this.oScene.oPlayerManager.player1.back_cardContainer.visible == true){
                        this.oScene.oPlayerManager.player1.back_cardContainer.visible = false;
                    }
                    this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player1.x, this.oScene.oPlayerManager.player1.y);
                } else {
                    if(data[i].eState != "left"){
                        if(this.oScene.oPlayerManager.player2.back_cardContainer.visible == true){
                            this.oScene.oPlayerManager.player2.back_cardContainer.visible = false;
                        }
                        this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player2.x, this.oScene.oPlayerManager.player2.y);
                    }
                }
            }
        } else if (data.length == 3) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].iUserId != this.oScene.oPlayerManager.player1.name) {
                    this.playerId = data[i].iUserId
                    switch (this.playerId) {
                        case this.oScene.oPlayerManager.player2.name:
                            if(this.oScene.oPlayerManager.player2.back_cardContainer.visible == true){
                                this.oScene.oPlayerManager.player2.back_cardContainer.visible = false;
                            }
                            this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player2.x, this.oScene.oPlayerManager.player2.y);
                            break;
                        case this.oScene.oPlayerManager.player3.name:
                            if(this.oScene.oPlayerManager.player3.back_cardContainer.visible == true){
                                this.oScene.oPlayerManager.player3.back_cardContainer.visible = false;
                            }
                            this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player3.x - 320 , this.oScene.oPlayerManager.player3.y);
                            break;
                        default:
                            break;
                    }
                }
                else{
                    if(this.oScene.oPlayerManager.player1.back_cardContainer.visible == true){
                        this.oScene.oPlayerManager.player1.back_cardContainer.visible = false;
                    }
                    this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player1.x, this.oScene.oPlayerManager.player1.y);
                }
            }
        } else if(data.length == 4) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].iUserId != this.oScene.oPlayerManager.player1.name) {
                    this.playerId = data[i].iUserId
                    switch (this.playerId) {
                        case this.oScene.oPlayerManager.player2.name:
                            if(this.oScene.oPlayerManager.player2.back_cardContainer.visible == true){
                                this.oScene.oPlayerManager.player2.back_cardContainer.visible = false;
                            }
                            this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player2.x, this.oScene.oPlayerManager.player2.y);
                            break;
                        case this.oScene.oPlayerManager.player3.name:
                            if(this.oScene.oPlayerManager.player3.back_cardContainer.visible == true){
                                this.oScene.oPlayerManager.player3.back_cardContainer.visible = false;
                            }
                            this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player3.x - 320 , this.oScene.oPlayerManager.player3.y);
                            break;
                        case this.oScene.oPlayerManager.player4.name:
                            if(this.oScene.oPlayerManager.player3.back_cardContainer.visible == true){
                                this.oScene.oPlayerManager.player3.back_cardContainer.visible = false;
                            }
                            this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player4.x - 300 , this.oScene.oPlayerManager.player4.y);    
                        default:
                            break;
                    }
                }
                else{
                    if(this.oScene.oPlayerManager.player4.back_cardContainer.visible == true){
                        this.oScene.oPlayerManager.player4.back_cardContainer.visible = false;
                    }
                    this.PlayerResultData(data[i].aHand, this.oScene.oPlayerManager.player1.x, this.oScene.oPlayerManager.player1.y);
                }
            } 
        }
    }
    PlayerResultData = (cardData, playerX, playerY) => {
        for (let i = 0; i < cardData.length; i++) {
            this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, playerX + 140 + (i * 25), playerY + 90)).setScale(0.8).setAngle((i == 0) ? -10 : ((i == 1) ? 0 : 10));
            this.tempCard1.updateCardUi(cardData[i].suit, cardData[i].rank, cardData[i].value, cardData[i]._id, cardData[i].nGroupId);
            this.oScene.container_resultHandCard.add(this.tempCard1);
        }
    }

    setRules() {
        console.log(this.cardData, this.oScene.oGameManager.isBlind);
        this.cardData.sort((a, b) => a.value - b.value)
        if (this.cardData[0].rank === this.cardData[1].rank && this.cardData[1].rank === this.cardData[2].rank) {
            if (this.oScene.oGameManager.isBlind == false) this.oScene.oPlayerManager.player1.text_playerName.text = "Trail";
        } else if ((this.cardData[0].value === this.cardData[1].value - 1 && this.cardData[1].value === this.cardData[2].value - 1) && (this.cardData[0].suit === this.cardData[1].suit && this.cardData[1].suit === this.cardData[2].suit)) {
            if (this.oScene.oGameManager.isBlind == false) this.oScene.oPlayerManager.player1.text_playerName.text = "PureSeq";
        } else if (this.cardData[0].value === this.cardData[1].value - 1 && this.cardData[1].value === this.cardData[2].value - 1) {
            if (this.oScene.oGameManager.isBlind == false) this.oScene.oPlayerManager.player1.text_playerName.text = "Sequence";
        } else if (this.cardData.every(card1 => card1.suit === this.cardData[0].suit)) {
            if (this.oScene.oGameManager.isBlind == false) this.oScene.oPlayerManager.player1.text_playerName.text = "Color";
        } else if (this.cardData[0].rank === this.cardData[1].rank || this.cardData[1].rank === this.cardData[2].rank) {
            if (this.oScene.oGameManager.isBlind == false) this.oScene.oPlayerManager.player1.text_playerName.text = "Pair";
        } else {
            if (this.oScene.oGameManager.isBlind == false) this.oScene.oPlayerManager.player1.text_playerName.text = "HighCard";
        }
    }

    setOpponentCards() {
        this.players = this.oScene.oGameManager.nMaxPlayers;
        this.totalCards = this.players * 3;
        this.angle = this.players * 2 + 1;

        for (var j = 0; j < this.totalCards; j++) {
            switch (j % this.players) {
                case 1:
                    let back_img = this.oScene.add.image(this.oScene.oPlayerManager.player2.x - 135 + j * 5, this.oScene.oPlayerManager.player2.y + 67, "card-back").setAngle((j - this.angle) * 7).setScale(0.8).setOrigin(0.5, 1);
                    this.oScene.container_backCards.add(back_img);
                    break;
                case 2:
                    let back_img1 = this.oScene.add.image(this.oScene.oPlayerManager.player1.x + 95 + j * 5, this.oScene.oPlayerManager.player1.y + 67, "card-back").setAngle((j - 2) * 7).setScale(0.8).setOrigin(0.5, 1);
                    this.oScene.container_backCards.add(back_img1);
                    break;
                case 3:
                    let back_img2 = this.oScene.add.image(this.oScene.oPlayerManager.player1.x + 95 + j * 5, this.oScene.oPlayerManager.player1.y + 67, "card-back").setAngle((j - 3) * 7).setScale(0.8).setOrigin(0.5, 1);
                    this.oScene.container_backCards.add(back_img2)
                    break;
            }
        }
    }



}
