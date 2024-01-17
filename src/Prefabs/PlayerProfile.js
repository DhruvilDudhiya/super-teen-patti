
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_PlayerProfile
		const container_PlayerProfile = scene.add.container(0, 0);
		this.add(container_PlayerProfile);

		// profilepic
		const profilepic = scene.add.image(-5, -4, "5");
		profilepic.scaleX = 0.5;
		profilepic.scaleY = 0.5;
		container_PlayerProfile.add(profilepic);

		// blind_bg
		const blind_bg = scene.add.image(-5, 39, "blind-bg");
		blind_bg.scaleX = 0.9;
		container_PlayerProfile.add(blind_bg);

		// profile_frame
		const profile_frame = scene.add.image(0, 0, "profilePlayer");
		profile_frame.scaleX = 0.69;
		profile_frame.scaleY = 0.69;
		container_PlayerProfile.add(profile_frame);

		// ring
		const ring = scene.add.image(-5, -4, "timer");
		ring.visible = false;
		ring.tintFill = true;
		ring.tintTopLeft = 1369859;
		ring.tintTopRight = 1369859;
		ring.tintBottomLeft = 1369859;
		ring.tintBottomRight = 1369859;
		container_PlayerProfile.add(ring);

		// profileFrame
		const profileFrame = scene.add.image(-6, 110, "profileFrame");
		profileFrame.scaleX = 0.7;
		profileFrame.scaleY = 0.7;
		container_PlayerProfile.add(profileFrame);

		// text_playerName
		const text_playerName = scene.add.text(0, 95, "", {});
		text_playerName.setOrigin(0.5, 0.5);
		text_playerName.text = "Player!";
		text_playerName.setStyle({ "color": "#d3a17f", "fontFamily": "BIWOLSTBI", "fontSize": "25px" });
		container_PlayerProfile.add(text_playerName);

		// text_playerChipes
		const text_playerChipes = scene.add.text(0, 127, "", {});
		text_playerChipes.setOrigin(0.5, 0.5);
		text_playerChipes.text = "25000";
		text_playerChipes.setStyle({ "color": "#d3a17f", "fontFamily": "BIWOLSTBI", "fontSize": "25px" });
		container_PlayerProfile.add(text_playerChipes);

		// card_status
		const card_status = scene.add.text(-4, 34, "", {});
		card_status.setOrigin(0.5, 0.5);
		card_status.text = "Blind";
		card_status.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "25px", "fontStyle": "bold" });
		this.add(card_status);

		// back-cardContainer
		const back_cardContainer = scene.add.container(170, 0);
		back_cardContainer.scaleX = 0.8;
		back_cardContainer.scaleY = 0.8;
		this.add(back_cardContainer);

		// card_back_2
		const card_back_2 = scene.add.image(-38, 1, "card-back");
		card_back_2.name = "card_back_2";
		card_back_2.scaleX = 1.1;
		card_back_2.scaleY = 1.1;
		card_back_2.angle = -10;
		card_back_2.visible = false;
		back_cardContainer.add(card_back_2);

		// card_back_1
		const card_back_1 = scene.add.image(1, -2, "card-back");
		card_back_1.name = "card_back_1";
		card_back_1.scaleX = 1.1;
		card_back_1.scaleY = 1.1;
		card_back_1.visible = false;
		back_cardContainer.add(card_back_1);

		// card_back
		const card_back = scene.add.image(38, 1, "card-back");
		card_back.name = "card_back";
		card_back.scaleX = 1.1;
		card_back.scaleY = 1.1;
		card_back.angle = 10;
		card_back.visible = false;
		back_cardContainer.add(card_back);

		// container_winnerUi
		const container_winnerUi = scene.add.container(-5, -101);
		container_winnerUi.visible = false;
		this.add(container_winnerUi);

		// rounded_Glow
		const rounded_Glow = scene.add.image(0, 96, "rounded_Glow");
		rounded_Glow.scaleX = 0.65;
		rounded_Glow.scaleY = 0.65;
		container_winnerUi.add(rounded_Glow);

		// winner_tag
		const winner_tag = scene.add.image(-2, 15, "winner_tag");
		winner_tag.scaleX = 0.7;
		winner_tag.scaleY = 0.7;
		container_winnerUi.add(winner_tag);

		// container_reqSideShow
		const container_reqSideShow = scene.add.container(-45, 158);
		container_reqSideShow.visible = false;
		this.add(container_reqSideShow);

		// side_showReqTxt
		const side_showReqTxt = scene.add.text(58, 0, "", {});
		side_showReqTxt.setOrigin(0.5, 0.5);
		side_showReqTxt.text = "player1 want to send req";
		container_reqSideShow.add(side_showReqTxt);

		// yesBtn_btn
		const yesBtn_btn = scene.add.image(0, 39, "red-btn");
		yesBtn_btn.scaleX = 0.3;
		yesBtn_btn.scaleY = 0.3;
		container_reqSideShow.add(yesBtn_btn);

		// no_btn
		const no_btn = scene.add.image(96, 40, "blue-btn");
		no_btn.scaleX = 0.3;
		no_btn.scaleY = 0.3;
		container_reqSideShow.add(no_btn);

		this.container_PlayerProfile = container_PlayerProfile;
		this.profilepic = profilepic;
		this.blind_bg = blind_bg;
		this.ring = ring;
		this.text_playerName = text_playerName;
		this.text_playerChipes = text_playerChipes;
		this.card_status = card_status;
		this.back_cardContainer = back_cardContainer;
		this.card_back_2 = card_back_2;
		this.card_back_1 = card_back_1;
		this.card_back = card_back;
		this.container_winnerUi = container_winnerUi;
		this.rounded_Glow = rounded_Glow;
		this.container_reqSideShow = container_reqSideShow;
		this.side_showReqTxt = side_showReqTxt;
		this.no_btn = no_btn;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene  = scene;
		this.shape = this.oScene.add.graphics();
		this.shape.visible = false;


		const makeShape = this.shape.createGeometryMask();
		this.ring.setMask(makeShape);
		this.shape.x = this.ring.x;
		this.shape.y = this.ring.y;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	container_PlayerProfile;
	/** @type {Phaser.GameObjects.Image} */
	profilepic;
	/** @type {Phaser.GameObjects.Image} */
	blind_bg;
	/** @type {Phaser.GameObjects.Image} */
	ring;
	/** @type {Phaser.GameObjects.Text} */
	text_playerName;
	/** @type {Phaser.GameObjects.Text} */
	text_playerChipes;
	/** @type {Phaser.GameObjects.Text} */
	card_status;
	/** @type {Phaser.GameObjects.Container} */
	back_cardContainer;
	/** @type {Phaser.GameObjects.Image} */
	card_back_2;
	/** @type {Phaser.GameObjects.Image} */
	card_back_1;
	/** @type {Phaser.GameObjects.Image} */
	card_back;
	/** @type {Phaser.GameObjects.Container} */
	container_winnerUi;
	/** @type {Phaser.GameObjects.Image} */
	rounded_Glow;
	/** @type {Phaser.GameObjects.Container} */
	container_reqSideShow;
	/** @type {Phaser.GameObjects.Text} */
	side_showReqTxt;
	/** @type {Phaser.GameObjects.Image} */
	no_btn;

	/* START-USER-CODE */

	// Write your code here.

	setUserName = (username) =>this.text_playerName.setText(username.length > 17 ? username.slice(0,16) + "...." : username)
	setChipes = (chipes) => this.text_playerChipes.text = this.oScene.oGameManager.formatSliderValue(chipes);
    setTurntimer = (x ,y ,turnTimer) => {
        this.intervalTimeReset();
		this.ring.visible = true;
		let ttl = turnTimer / 1000;
		let start = 90;
		let end = 360 / ttl;
		let temp = end ;
		let self = this;
		this.intervalTimer = setInterval(() => {
			this.shape.slice(x , y , 128 , Phaser.Math.DegToRad(start), Phaser.Math.DegToRad(start + end)).fill();
			if(end >= 270){
				this.ring.tintFill = true;
				this.ring.setTintFill(0xaa0000);
			}
			if(end >= 360){
				self.intervalTimeReset();
			}
			end +=(temp / 10);

		} , 100)
	}
	intervalTimeReset(){
		this.shape.clear();
		this.ring.clearTint();
		this.ring.tintFill = false;
		this.ring.visible = false;
		clearInterval(this.intervalTimer);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
