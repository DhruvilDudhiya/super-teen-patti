
// You can write more code here

/* START OF COMPILED CODE */

class resultData extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -383, y ?? -72);

		// user_holder
		const user_holder = scene.add.image(382, 84, "user-holder");
		this.add(user_holder);

		// text_PlayerName
		const text_PlayerName = scene.add.text(218, 68, "", {});
		text_PlayerName.setOrigin(0.5, 0.5);
		text_PlayerName.text = "Dhruvil";
		text_PlayerName.setStyle({ "fontSize": "60px" });
		this.add(text_PlayerName);

		// chip_holder
		const chip_holder = scene.add.image(607, 80, "chip-holder");
		chip_holder.scaleX = 1.3;
		chip_holder.scaleY = 1.3;
		this.add(chip_holder);

		// text_chipesValue
		const text_chipesValue = scene.add.text(608, 83, "", {});
		text_chipesValue.setOrigin(0.5, 0.5);
		text_chipesValue.text = "50,00";
		text_chipesValue.setStyle({ "color": "#000000ff", "fontSize": "70px" });
		this.add(text_chipesValue);

		// text_rank
		const text_rank = scene.add.text(-64, 67, "", {});
		text_rank.setOrigin(0.5, 0.5);
		text_rank.text = "1";
		text_rank.setStyle({ "fontSize": "50px" });
		this.add(text_rank);

		this.text_PlayerName = text_PlayerName;
		this.text_chipesValue = text_chipesValue;
		this.text_rank = text_rank;

		/* START-USER-CTR-CODE */
		this.scene = scene;
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	text_PlayerName;
	/** @type {Phaser.GameObjects.Text} */
	text_chipesValue;
	/** @type {Phaser.GameObjects.Text} */
	text_rank;

	/* START-USER-CODE */

	// Write your code here.
	setWinnerData(oData){
		this.text_PlayerName.text = oData.sUserName;
		this.text_chipesValue.text = this.scene.oGameManager.formatSliderValue(oData.nWinningAmount);
		this.text_rank.text = oData.nRank;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
