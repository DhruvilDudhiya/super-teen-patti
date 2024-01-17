
// You can write more code here

/* START OF COMPILED CODE */

class CardPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 5);

		// frontCard
		const frontCard = scene.add.image(0, -77, "frontCard");
		frontCard.scaleX = 0.3;
		frontCard.scaleY = 0.3;
		this.add(frontCard);

		// cardIcon
		const cardIcon = scene.add.image(0, -77, "Diamond");
		cardIcon.scaleX = 0.2;
		cardIcon.scaleY = 0.2;
		this.add(cardIcon);

		// cardNumber
		const cardNumber = scene.add.text(-44, -147, "", {});
		cardNumber.scaleX = 0.7;
		cardNumber.scaleY = 0.7;
		cardNumber.text = "1";
		cardNumber.setStyle({ "color": "#a60606ff", "fontSize": "36px" });
		this.add(cardNumber);

		// small_cardIcon
		const small_cardIcon = scene.add.image(-26, -109, "Diamond");
		small_cardIcon.scaleX = 0.1;
		small_cardIcon.scaleY = 0.1;
		this.add(small_cardIcon);

		this.frontCard = frontCard;
		this.cardIcon = cardIcon;
		this.cardNumber = cardNumber;
		this.small_cardIcon = small_cardIcon;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.eSuitData ;
		this.nLabelData;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	frontCard;
	/** @type {Phaser.GameObjects.Image} */
	cardIcon;
	/** @type {Phaser.GameObjects.Text} */
	cardNumber;
	/** @type {Phaser.GameObjects.Image} */
	small_cardIcon;

	/* START-USER-CODE */

	// Write your code here.
	updateCardUi(eSuit, nLabel) {
		this.cardIcon.setTexture(eSuit);
        this.eSuitData  = eSuit;
		this.nLabelData = nLabel;
		switch (eSuit) {
			case "Clubs":
				this.cardIcon.setTexture("Club");
				this.small_cardIcon.setTexture("Club");
				this.cardNumber.setColor("#000000");
				break;
			case "Spades":
				this.cardIcon.setTexture("spades");
				this.small_cardIcon.setTexture("spades");
				this.cardNumber.setColor("#000000");
				break;
			case "Hearts":
				this.cardIcon.setTexture("heart");
				this.small_cardIcon.setTexture("heart");
				this.cardNumber.setColor("#b30000");
				break;
			case "Diamonds":
				this.cardIcon.setTexture("Diamond");
				this.small_cardIcon.setTexture("Diamond");
				this.cardNumber.setColor("#b30000");
				break;
		}
		switch (nLabel) {
			case 11:
				this.cardNumber.text = "J";
				break;
			case 12:
				this.cardNumber.text = "Q";
				break;
			case 13:
				this.cardNumber.text = "K";
				break;
			case 14:
				this.cardNumber.text = "A";
				break;
			default:
				this.cardNumber.text = nLabel;
				break;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
