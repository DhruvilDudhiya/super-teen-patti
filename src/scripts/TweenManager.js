class TweenManager {
    constructor(oScene) {
        this.oScene = oScene
        this.cards = []

    }
    menuAnimation(scale) {
        this.oScene.tweens.add({
            targets: this.oScene.container_menu,
            scaleX: scale,
            ease: "power2",
            duration: 300,
        })
    }
    cardDistributeAnimation = () => {
        var self = this;
        if (this.oScene.oGameManager.nMaxPlayers == 2) {
            this.cardAnimation(6, 2, 4, 5);
        }

        if (this.oScene.oGameManager.nMaxPlayers == 3) {
            this.cardAnimation(9, 3, 7, 7);
        }

        if (this.oScene.oGameManager.nMaxPlayers == 4) {
            this.cardAnimation(12, 4, 10, 9);
        }
    }

    cardAnimation(nTotalCards, nPlayers, n, angle) {
        console.log((nTotalCards, nPlayers, n));
        for (var i = 0; i < nTotalCards; i++) {
            this.cards[i] = this.oScene.add.image(540, 328, "card-back");
            this.cards[i].setScale(0.8).setOrigin(0.5, 1);
            this.oScene.container_backCards.add(this.cards[i]);
        }
        console.log("backCardCont",this.oScene.container_backCards);
        for (var j = 0; j < nTotalCards; j++) {
            if (j % nPlayers === 0) {
                console.log("l", j);
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: this.oScene.oPlayerManager.player1.x + 100 + j * 5,
                    y: this.oScene.oPlayerManager.player1.y + 72,
                    angle: j * 7,
                    duration: 150,
                    delay: (j * 100),

                })
            } else if (j % nPlayers == 1) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: this.oScene.oPlayerManager.player2.x - 135 + j * 5,
                    y: this.oScene.oPlayerManager.player2.y + 67,
                    angle: (j - angle) * 7,
                    duration: 210,
                    delay: (j * 50),
                })
            } else if (j % nPlayers == 2) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: this.oScene.oPlayerManager.player3.x + 95 + j * 5,
                    y: this.oScene.oPlayerManager.player3.y + 67,
                    angle: (j - 2) * 7,
                    duration: 150,
                    delay: (j * 100),
                })
            }
            else if (j % nPlayers == 3) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: this.oScene.oPlayerManager.player4.x + 95 + j * 5,
                    y: this.oScene.oPlayerManager.player4.y + 67,
                    angle: (j - 3) * 7,
                    duration: 150,
                    delay: (j * 100),
                })
            }
        }
        for (let j = 0; j < nTotalCards; j++) {
            if (j % 2 == 0) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    onComplete: () => {
                        if (j == n) {
                         
                        }
                    }

                })
            }
        }
    }

}