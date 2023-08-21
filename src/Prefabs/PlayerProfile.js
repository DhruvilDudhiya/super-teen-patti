
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

		this.container_PlayerProfile = container_PlayerProfile;
		this.profilepic = profilepic;
		this.blind_bg = blind_bg;
		this.ring = ring;
		this.text_playerName = text_playerName;
		this.text_playerChipes = text_playerChipes;
		this.card_status = card_status;

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
