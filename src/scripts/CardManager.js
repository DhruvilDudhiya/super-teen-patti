class CardManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setHandCardData = (card) => {
         this.cardData = card;
         this.oScene.container_playerHand.removeAll(true);
        for (let i = 0; i < card.length; i++) {
            this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.container_playerHand.getAll().length * this.oScene.oGameManager.cardGap + 150), 1600)).setScale(0.8).setAngle(i * 20);
            this.tempCard1.updateCardUi(card[i].suit, card[i].rank, card[i].value, card[i]._id, card[i].nGroupId);
            this.oScene.container_playerHand.add(this.tempCard1);
        }
        this.oScene.container_playerHand.x = (1080 - ((this.oScene.container_playerHand.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
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
        console.log("blind", this.totalCards)

        for (var j = 0; j < this.totalCards; j++) {

            switch (j % this.players) {

                case 1:
                    this.oScene.add.image(this.oScene.oPlayerManager.player2.x - 135 + j * 5, this.oScene.oPlayerManager.player2.y + 67, "card-back").setAngle((j - this.angle) * 7).setScale(0.8).setOrigin(0.5, 1);
                    break;
                case 2:
                    this.oScene.add.image(this.oScene.oPlayerManager.player1.x + 95 + j  *5, this.oScene.oPlayerManager.player1.y + 67, "card-back").setAngle((j - 2) * 7).setScale(0.8).setOrigin(0.5, 1);
                    break;
                case 3:
                    this.oScene.add.image(this.oScene.oPlayerManager.player1.x + 95 + j  *5, this.oScene.oPlayerManager.player1.y + 67, "card-back").setAngle((j - 3)  * 7).setScale(0.8).setOrigin(0.5, 1);
                    break;
            }
        }
    }


    setBlindCards() {
        switch (this.oScene.oGameManager.nMaxPlayers) {
            case 2:
                this.blindCardsData(6, 2);
                break;
            case 3:
                this.blindCardsData(9, 3);
                break;
            case 2:
                this.blindCardsData(12, 4);
                break;
        }
    }

    blindCardsData(nTotalCards, nPlayers) {

        for (var j = 0; j < nTotalCards; j++) {

            if (j % nPlayers == 0) {
                this.oScene.container_backCards.add(this.oScene.add.image(this.oScene.oPlayerManager.player1.x + 100 + j * 5, this.oScene.oPlayerManager.player1.y + 72, "card-back").setAngle(j * 7).setScale(0.8).setOrigin(0.5, 1));
            }
        }
    }

}
