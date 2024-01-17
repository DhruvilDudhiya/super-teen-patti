class TweenManager {
    constructor(oScene) {
        this.oScene = oScene
        this.cards = []
        this.chipes = []
        this.chipes1 = []
    }
    menuAnimation = (scale, tweenScale , target) => {
        this.tween = this.oScene.tweens.add({
            targets: target,
            scaleX: { from: scale, to: tweenScale },
            scaleY: { from: scale, to: tweenScale },
            duration: 300,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                this.tween.stop();
            }
        })
    }
    betTweenAnimation = (posX, posY, destX, destY) => {
        for (let i = 0; i < 7; i++) {
            this.chipes[i] = this.oScene.add.image(posX, posY, "chip");
            this.chipes[i].setScale(0.6);
            this.oScene.container_tempCoin.add(this.chipes[i]);
        }
        for (let j = 0; j < 7; j++) {
            this.tween = this.oScene.tweens.add({
                targets: this.chipes[j],
                x: destX,
                y: destY,
                duration: (j === 0) ? 350 : (j === 5) ? 500 : 600 + (j * 50),
                onComplete: () => {
                    for (let d = 0; d < this.oScene.container_tempCoin.list.length; d++) {
                        this.oScene.container_tempCoin.list[d].visible = false;
                    }
                }
            })
        }
    }

    buttonClickAnim = (btn, scale, tweenScale, eventData) => {
        this.tween = this.oScene.tweens.add({
            targets: btn,
            scaleX: { from: scale, to: tweenScale, to: tweenScale, from: scale },
            scaleY: { from: scale, to: tweenScale, to: tweenScale, from: scale },
            duration: 200,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBoardId, eventData, (error, data) => {
                    console.warn("Requested Card", error, data);
                });
            }
        })
    }
    betTweenAnimation1 = () => {
        const maxPlayers = Math.min(this.oScene.oGameManager.nMaxPlayers, 4);
        for (let i = 1; i <= maxPlayers; i++) {
            const player = this.oScene.oPlayerManager[`player${i}`];
            this.betTweenAnimation(player.x, player.y, this.oScene.container_playerPot.x, this.oScene.container_playerPot.y);
        }
    }
    cardDistributeAnimation = () => {
        var self = this;
        switch (this.oScene.oGameManager.nMaxPlayers) {
            case 2:
                this.cardAnimation(6, 2)
                break;
            case 3:
                this.cardAnimation(9, 3);
                break;
            case 4 :
                this.cardAnimation(9, 3);
                break;    
            default:
                break;
        }
    }
    cardAnimation(totalCards, players) {
        for (let i = 0; i < totalCards; i++) {
            this.cards[i] = this.oScene.add.image(600, 328, "card-back");
            this.cards[i].setScale(0.9).setOrigin(0.5, 1);
        }
        if (players == 2) {
            for (let j = 0; j < totalCards; j++) {
                if (j % 2 == 0) {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player1.x + 140,
                        y: this.oScene.oPlayerManager.player1.y + 72,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                        }
                    })
                } else {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player2.x + 110,
                        y: this.oScene.oPlayerManager.player2.y + 72,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                            if (j == 5) {
                                this.cardTween(players);
                                this.oScene.oPlayerManager.player1.back_cardContainer.visible = true;
                                this.oScene.oPlayerManager.player2.back_cardContainer.visible = true;
                            }
                        }
                    })
                }
            }
        } else if (players == 3) {
            for (let j = 0; j < 9; j++) {
                if (j % 3 == 0) {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player1.x + 140,
                        y: this.oScene.oPlayerManager.player1.y + 71,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                        }
                    })
                } else if (j % 3 == 1) {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player2.x + 140,
                        y: this.oScene.oPlayerManager.player2.y + 71,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                        }
                    })
                } else {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player3.x - 140,
                        y: this.oScene.oPlayerManager.player3.y + 71,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                            if (j == 8) {
                                this.cardTween(players);
                                console.log( this.oScene.oPlayerManager.player3.back_cardContainer);
                                this.oScene.oPlayerManager.player1.back_cardContainer.visible = true;
                                this.oScene.oPlayerManager.player2.back_cardContainer.visible = true;
                                this.oScene.oPlayerManager.player3.back_cardContainer.visible = true;
                            }
                        }
                    })

                }
            }

        } else if (players == 4) {
            for (let j = 0; j < 12; j++) {
                if (j % 4 == 0) {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player1.x + 140,
                        y: this.oScene.oPlayerManager.player1.y + 72,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                        }
                    })
                } else if (j % 4 == 1) {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player2.x + 140,
                        y: this.oScene.oPlayerManager.player2.y + 72,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                        }
                    })
                } else if (j % 4 == 2) {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player3.x - 140,
                        y: this.oScene.oPlayerManager.player3.y + 72,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                        }
                    })
                } else {
                    this.oScene.tweens.add({
                        targets: this.cards[j],
                        x: this.oScene.oPlayerManager.player4.x -  140,
                        y: this.oScene.oPlayerManager.player4.y + 72,
                        duration: 150,
                        delay: (j * 300),
                        onComplete: () => {
                            if (j == 11) {
                                this.cardTween(players);
                                this.oScene.oPlayerManager.player1.back_cardContainer.visible = true;
                                this.oScene.oPlayerManager.player2.back_cardContainer.visible = true;
                                this.oScene.oPlayerManager.player3.back_cardContainer.visible = true;
                                this.oScene.oPlayerManager.player4.back_cardContainer.visible = true;
                            }
                        }
                    })

                }
            }

        }

    }
    cardTween = (player) => {
        console.log(this.cards, player);
        const cardGap = 10;
        if (player == 2) {
            for (let i = 0; i < this.cards.length; i++) {
                if (i % 2 == 0) {
                    this.oScene.tweens.add({
                        targets: this.cards[i],
                        duration: 250,
                        angle: (i == 0) ? -10 : (i == 2) ? 0 : (i == 4) ? 10 : 0,
                        x: this.cards[i].x + (i * cardGap),
                        onComplete: () => {
                            this.cards[i].visible = false;
                            this.oScene.oPlayerManager.player1.back_cardContainer.list.forEach(containerElement => {
                                containerElement.visible = true;
                            });
                        }

                    })
                } else {
                    this.oScene.tweens.add({
                        targets: this.cards[i],
                        duration: 250,
                        angle: (i == 1) ? -10 : (i == 3) ? 0 : (i == 5) ? 10 : 0,
                        x: this.cards[i].x + (i * cardGap),
                        onComplete: () => {
                            this.cards[i].visible = false;
                            this.oScene.oPlayerManager.player2.back_cardContainer.list.forEach(containerElement => {
                                containerElement.visible = true;
                            });

                        }
                    })

                }

            }
        } else if (player == 3) {
            for (let i = 0; i < this.cards.length; i++) {
                if (i % 3 == 0) {
                    this.oScene.tweens.add({
                        targets: this.cards[i],
                        duration: 250,
                        angle: (i == 0) ? -10 : (i == 2) ? 0 : (i == 4) ? 10 : 0,
                        x: this.cards[i].x + (i * cardGap),
                        onComplete: () => {
                            this.cards[i].visible = false;
                            this.oScene.oPlayerManager.player1.back_cardContainer.list.forEach(containerElement => {
                                containerElement.visible = true;
                            });
                        }

                    })
                } else if (i % 3 == 1) {
                    this.oScene.tweens.add({
                        targets: this.cards[i],
                        duration: 250,
                        angle: (i == 1) ? -10 : (i == 3) ? 0 : (i == 5) ? 10 : 0,
                        x: this.cards[i].x + (i * cardGap),
                        onComplete: () => {
                            this.cards[i].visible = false;
                            this.oScene.oPlayerManager.player2.back_cardContainer.list.forEach(containerElement => {
                                containerElement.visible = true;
                            });

                        }
                    })
                } else if (i % 3 == 2) {
                    this.oScene.tweens.add({
                        targets: this.cards[i],
                        x: this.cards[i].x + (i * cardGap),
                        duration: 250,
                        angle: (i == 1) ? -10 : (i == 3) ? 0 : (i == 5) ? 10 : 0,
                        onComplete: () => {
                            this.cards[i].visible = false;
                            this.oScene.oPlayerManager.player3.back_cardContainer.list.forEach(containerElement => {
                                containerElement.visible = true;
                            });

                        }
                    })
                }

            }

        }
    }
    winnertween = (img, cont) => {
        console.log(img);
        this.oScene.tweens.add({
            targets: img,
            rotation: 100,
            repeat: 0,
            duration: 10000,
            onComplete: () => {
                cont.visible = false
            }
        })
    }
}