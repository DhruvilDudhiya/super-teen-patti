
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(0, 0);

		// tablebg
		const tablebg = this.add.image(540, 960, "tablebg_1");
		container_background.add(tablebg);

		// table
		const table = this.add.image(540, 1031, "table_1");
		table.scaleX = 0.9;
		table.scaleY = 0.9;
		container_background.add(table);

		// black_bar
		const black_bar = this.add.image(531, 1829, "black-bar");
		container_background.add(black_bar);

		// container_playerPot
		const container_playerPot = this.add.container(460, 661);
		container_background.add(container_playerPot);

		// chip_bg
		const chip_bg = this.add.image(84, 4, "chip-bg");
		chip_bg.scaleX = 2;
		chip_bg.scaleY = 2;
		container_playerPot.add(chip_bg);

		// chip
		const chip = this.add.image(0, 0, "chip");
		container_playerPot.add(chip);

		// txt_pot
		const txt_pot = this.add.text(96, 2, "", {});
		txt_pot.setOrigin(0.5, 0.5);
		txt_pot.text = "2000";
		txt_pot.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_playerPot.add(txt_pot);

		// txt_nBoardPotLimit
		const txt_nBoardPotLimit = this.add.text(79, -64, "", {});
		txt_nBoardPotLimit.setOrigin(0.5, 0.5);
		txt_nBoardPotLimit.text = "Pot:30";
		txt_nBoardPotLimit.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_playerPot.add(txt_nBoardPotLimit);

		// nav_btn
		const nav_btn = this.add.image(995, 106, "nav-btn");
		nav_btn.scaleX = 0.8;
		nav_btn.scaleY = 0.8;
		container_background.add(nav_btn);

		// gameplay_logo
		const gameplay_logo = this.add.image(537, 858, "gameplay-logo");
		container_background.add(gameplay_logo);

		// container_players
		const container_players = this.add.container(0, 0);

		// container_playerHand
		const container_playerHand = this.add.container(0, 3);
		container_playerHand.visible = false;

		// container_button
		const container_button = this.add.container(0, 0);

		// container_fold
		const container_fold = this.add.container(114, 1821);
		container_button.add(container_fold);

		// fold_btn
		const fold_btn = this.add.image(58, 22, "red-btn");
		fold_btn.scaleX = 0.8;
		fold_btn.scaleY = 0.8;
		container_fold.add(fold_btn);

		// fold_txt
		const fold_txt = this.add.text(3, -1, "", {});
		fold_txt.text = "FOLD";
		fold_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_fold.add(fold_txt);

		// container_Show
		const container_Show = this.add.container(820, 1822);
		container_button.add(container_Show);

		// show_btn
		const show_btn = this.add.image(97, 19, "red-btn");
		show_btn.scaleX = 0.8;
		show_btn.scaleY = 0.8;
		container_Show.add(show_btn);

		// show_txt
		const show_txt = this.add.text(94, 22, "", {});
		show_txt.setOrigin(0.5, 0.5);
		show_txt.text = "SHOW";
		show_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_Show.add(show_txt);

		// show_Disable
		const show_Disable = this.add.image(94, 19, "btn-off");
		show_Disable.scaleX = 0.8;
		show_Disable.scaleY = 0.8;
		show_Disable.visible = false;
		container_Show.add(show_Disable);

		// container_raise
		const container_raise = this.add.container(625, 1801);
		container_button.add(container_raise);

		// raise_btn
		const raise_btn = this.add.image(38, 40, "blue-btn");
		raise_btn.scaleX = 0.8;
		raise_btn.scaleY = 0.8;
		container_raise.add(raise_btn);

		// raise_txt
		const raise_txt = this.add.text(36, 20, "", {});
		raise_txt.setOrigin(0.5, 0.5);
		raise_txt.text = "2X";
		raise_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_raise.add(raise_txt);

		// raise_value
		const raise_value = this.add.text(34, 64, "", {});
		raise_value.setOrigin(0.5, 0.5);
		raise_value.text = "0";
		raise_value.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_raise.add(raise_value);

		// raise_Disable
		const raise_Disable = this.add.image(38, 42, "btn-off");
		raise_Disable.scaleX = 0.8;
		raise_Disable.scaleY = 0.8;
		raise_Disable.visible = false;
		container_raise.add(raise_Disable);

		// container_blind
		const container_blind = this.add.container(354, 1801);
		container_button.add(container_blind);

		// blind_btn
		const blind_btn = this.add.image(61, 39, "red-btn");
		blind_btn.scaleX = 0.8;
		blind_btn.scaleY = 0.8;
		container_blind.add(blind_btn);

		// blind_txt
		const blind_txt = this.add.text(58, 23, "", {});
		blind_txt.setOrigin(0.5, 0.5);
		blind_txt.text = "BLIND";
		blind_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_blind.add(blind_txt);

		// blind_value
		const blind_value = this.add.text(57, 63, "", {});
		blind_value.setOrigin(0.5, 0.5);
		blind_value.text = "0";
		blind_value.setStyle({ "fontSize": "40px" });
		container_blind.add(blind_value);

		// container_call
		const container_call = this.add.container(354, 1801);
		container_call.visible = false;
		container_button.add(container_call);

		// call_btn
		const call_btn = this.add.image(61, 39, "red-btn");
		call_btn.scaleX = 0.8;
		call_btn.scaleY = 0.8;
		container_call.add(call_btn);

		// call_txt
		const call_txt = this.add.text(58, 23, "", {});
		call_txt.setOrigin(0.5, 0.5);
		call_txt.text = "CALL";
		call_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_call.add(call_txt);

		// call_value
		const call_value = this.add.text(57, 63, "", {});
		call_value.setOrigin(0.5, 0.5);
		call_value.text = "100";
		call_value.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_call.add(call_value);

		// container_see
		const container_see = this.add.container(660, 1486);
		container_see.visible = false;

		// see_btn
		const see_btn = this.add.image(39, 10, "see-btn");
		container_see.add(see_btn);

		// see_txt
		const see_txt = this.add.text(17, -2, "", {});
		see_txt.text = "SEE";
		see_txt.setStyle({ "fontFamily": "iwolstyn", "fontSize": "25px" });
		container_see.add(see_txt);

		// container_backCards
		const container_backCards = this.add.container(0, 1);

		// container_menu
		const container_menu = this.add.container(541.6150512695312, 960.3103951187292);
		container_menu.scaleX = 0;

		// black_layer
		const black_layer = this.add.image(2, -2, "black-layer");
		container_menu.add(black_layer);

		// box
		const box = this.add.image(19.384950143648553, -56.31037208572957, "box");
		container_menu.add(box);

		// close_btn
		const close_btn = this.add.image(487.38495014364855, -415.31037208572957, "close-btn");
		container_menu.add(close_btn);

		// exit_icon
		const exit_icon = this.add.image(-231.61504985635145, -154.31037208572957, "exit-icon");
		container_menu.add(exit_icon);

		// info_icon
		const info_icon = this.add.image(-231.61504985635145, 18.68962791427043, "info-icon");
		container_menu.add(info_icon);

		// music_icon
		const music_icon = this.add.image(-231.61504985635145, 207.68962791427043, "music-icon");
		container_menu.add(music_icon);

		// text_leaveTable
		const text_leaveTable = this.add.text(101, -150, "", {});
		text_leaveTable.setOrigin(0.5, 0.5);
		text_leaveTable.text = "Leave Game";
		text_leaveTable.setStyle({ "fontFamily": "iwolstyn", "fontSize": "50px", "fontStyle": "bold" });
		container_menu.add(text_leaveTable);

		// text_gameInfo
		const text_gameInfo = this.add.text(90, 16, "", {});
		text_gameInfo.setOrigin(0.5, 0.5);
		text_gameInfo.text = "Game Info";
		text_gameInfo.setStyle({ "fontFamily": "iwolstyn", "fontSize": "50px", "fontStyle": "bold" });
		container_menu.add(text_gameInfo);

		// on_off_bg
		const on_off_bg = this.add.image(68, 192, "on-off-bg");
		container_menu.add(on_off_bg);

		// on_btn
		const on_btn = this.add.image(119, 191, "on-btn");
		container_menu.add(on_btn);

		// text_menu
		const text_menu = this.add.text(29.384950143648553, -423.31037208572957, "", {});
		text_menu.setOrigin(0.5, 0.5);
		text_menu.text = "Menu";
		text_menu.setStyle({ "color": "#f9e4bc", "fontFamily": "iwolstyn", "fontSize": "70px", "fontStyle": "bold" });
		container_menu.add(text_menu);

		// text_on
		const text_on = this.add.text(50, 191, "", {});
		text_on.setOrigin(0.5, 0.5);
		text_on.text = "On";
		text_on.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "30px" });
		container_menu.add(text_on);

		// container_resultScreen
		const container_resultScreen = this.add.container(0, 0);
		container_resultScreen.visible = false;

		// black_layer_1
		const black_layer_1 = this.add.image(540, 939, "black-layer");
		container_resultScreen.add(black_layer_1);

		// glow
		const glow = this.add.image(551, 455, "glow");
		container_resultScreen.add(glow);

		// trophy
		const trophy = this.add.image(554, 416, "trophy");
		container_resultScreen.add(trophy);

		// resultScreen_box
		const resultScreen_box = this.add.image(554, 934, "box_1");
		container_resultScreen.add(resultScreen_box);

		// text_LeaderBoard
		const text_LeaderBoard = this.add.text(555, 531, "", {});
		text_LeaderBoard.setOrigin(0.5, 0.5);
		text_LeaderBoard.text = "LeaderBoard";
		text_LeaderBoard.setStyle({ "fontSize": "70px" });
		container_resultScreen.add(text_LeaderBoard);

		// close_btn_result
		const close_btn_result = this.add.image(956, 334, "close-btn");
		container_resultScreen.add(close_btn_result);

		// container_waitingScene
		const container_waitingScene = this.add.container(0, 0);
		container_waitingScene.visible = false;

		// black_layer_2
		const black_layer_2 = this.add.image(547, 968, "black-layer");
		container_waitingScene.add(black_layer_2);

		// wait_box
		const wait_box = this.add.image(553, 938, "wait-box");
		container_waitingScene.add(wait_box);

		// text_wait
		const text_wait = this.add.text(548, 932, "", {});
		text_wait.setOrigin(0.5, 0.5);
		text_wait.text = "Game WILL START IN 6 SECONDS..\n";
		text_wait.setStyle({ "fontSize": "35px" });
		container_waitingScene.add(text_wait);

		this.container_background = container_background;
		this.container_playerPot = container_playerPot;
		this.txt_pot = txt_pot;
		this.txt_nBoardPotLimit = txt_nBoardPotLimit;
		this.nav_btn = nav_btn;
		this.container_players = container_players;
		this.container_playerHand = container_playerHand;
		this.container_button = container_button;
		this.fold_btn = fold_btn;
		this.fold_txt = fold_txt;
		this.show_btn = show_btn;
		this.show_txt = show_txt;
		this.show_Disable = show_Disable;
		this.raise_btn = raise_btn;
		this.raise_txt = raise_txt;
		this.raise_value = raise_value;
		this.raise_Disable = raise_Disable;
		this.container_blind = container_blind;
		this.blind_btn = blind_btn;
		this.blind_txt = blind_txt;
		this.blind_value = blind_value;
		this.container_call = container_call;
		this.call_btn = call_btn;
		this.call_txt = call_txt;
		this.call_value = call_value;
		this.container_see = container_see;
		this.see_btn = see_btn;
		this.see_txt = see_txt;
		this.container_backCards = container_backCards;
		this.container_menu = container_menu;
		this.close_btn = close_btn;
		this.exit_icon = exit_icon;
		this.info_icon = info_icon;
		this.music_icon = music_icon;
		this.text_leaveTable = text_leaveTable;
		this.text_on = text_on;
		this.container_resultScreen = container_resultScreen;
		this.resultScreen_box = resultScreen_box;
		this.text_LeaderBoard = text_LeaderBoard;
		this.close_btn_result = close_btn_result;
		this.container_waitingScene = container_waitingScene;
		this.text_wait = text_wait;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Container} */
	container_playerPot;
	/** @type {Phaser.GameObjects.Text} */
	txt_pot;
	/** @type {Phaser.GameObjects.Text} */
	txt_nBoardPotLimit;
	/** @type {Phaser.GameObjects.Image} */
	nav_btn;
	/** @type {Phaser.GameObjects.Container} */
	container_players;
	/** @type {Phaser.GameObjects.Container} */
	container_playerHand;
	/** @type {Phaser.GameObjects.Container} */
	container_button;
	/** @type {Phaser.GameObjects.Image} */
	fold_btn;
	/** @type {Phaser.GameObjects.Text} */
	fold_txt;
	/** @type {Phaser.GameObjects.Image} */
	show_btn;
	/** @type {Phaser.GameObjects.Text} */
	show_txt;
	/** @type {Phaser.GameObjects.Image} */
	show_Disable;
	/** @type {Phaser.GameObjects.Image} */
	raise_btn;
	/** @type {Phaser.GameObjects.Text} */
	raise_txt;
	/** @type {Phaser.GameObjects.Text} */
	raise_value;
	/** @type {Phaser.GameObjects.Image} */
	raise_Disable;
	/** @type {Phaser.GameObjects.Container} */
	container_blind;
	/** @type {Phaser.GameObjects.Image} */
	blind_btn;
	/** @type {Phaser.GameObjects.Text} */
	blind_txt;
	/** @type {Phaser.GameObjects.Text} */
	blind_value;
	/** @type {Phaser.GameObjects.Container} */
	container_call;
	/** @type {Phaser.GameObjects.Image} */
	call_btn;
	/** @type {Phaser.GameObjects.Text} */
	call_txt;
	/** @type {Phaser.GameObjects.Text} */
	call_value;
	/** @type {Phaser.GameObjects.Container} */
	container_see;
	/** @type {Phaser.GameObjects.Image} */
	see_btn;
	/** @type {Phaser.GameObjects.Text} */
	see_txt;
	/** @type {Phaser.GameObjects.Container} */
	container_backCards;
	/** @type {Phaser.GameObjects.Container} */
	container_menu;
	/** @type {Phaser.GameObjects.Image} */
	close_btn;
	/** @type {Phaser.GameObjects.Image} */
	exit_icon;
	/** @type {Phaser.GameObjects.Image} */
	info_icon;
	/** @type {Phaser.GameObjects.Image} */
	music_icon;
	/** @type {Phaser.GameObjects.Text} */
	text_leaveTable;
	/** @type {Phaser.GameObjects.Text} */
	text_on;
	/** @type {Phaser.GameObjects.Container} */
	container_resultScreen;
	/** @type {Phaser.GameObjects.Image} */
	resultScreen_box;
	/** @type {Phaser.GameObjects.Text} */
	text_LeaderBoard;
	/** @type {Phaser.GameObjects.Image} */
	close_btn_result;
	/** @type {Phaser.GameObjects.Container} */
	container_waitingScene;
	/** @type {Phaser.GameObjects.Text} */
	text_wait;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oPlayerManager = new PlayerManger(this);
		this.oInputManager = new InputManager(this);
		this.oEmitManager = new EmitManager(this);
		this.oGameManager = new GameManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oCardManager = new CardManager(this);
		this.oTweenManager = new TweenManager(this)
		this.instantiateSocketManager();
	}
	instantiateSocketManager() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const iBoardId = urlParams.get("iBoardId");
		const sAuthToken = urlParams.get("sAuthToken");
		const sRootUrl = urlParams.get("sRootUrl");
		const nChips = urlParams.get("nChips");
		this.oSocketManager = new SocketManager(this, iBoardId, sAuthToken, sRootUrl, nChips);
	}
	resetTableData = () => {
		this.container_playerHand.removeAll(true);
		this.oPlayerManager.ownPlayerTurnReset.intervalTimeReset();
	}
	setBoardPotValue = ({ nBoardPotValue }) => this.txt_pot.text = this.oGameManager.formatSliderValue(nBoardPotValue);
	setButtonStatus = ({ iUserId }) => {
		if (iUserId == this.oPlayerManager.player1.name) {
			if (!this.oGameManager.isBlind) {
				this.container_call.visible = true;
				this.container_blind.visible = false;
				this.call_value.text = this.oGameManager.currnentBootValue * 2;
				this.raise2X = this.oGameManager.currnentBootValue * 2
				this.raise_value.text = this.raise2X * 2;
			} else {
				this.container_call.visible = false;
				this.container_blind.visible = true;
				console.log("blind");
				this.blind_value.text = this.oGameManager.currnentBootValue * 2;
				this.raise2X = this.oGameManager.currnentBootValue * 2
				this.raise_value.text = this.raise2X * 2;
			}
		}
	}
	changePlayerValue = ({ iUserId, nCurrentBootValue }) => {
		if (iUserId == this.oPlayerManager.player1.name) {
			this.oGameManager.currnentBootValue = nCurrentBootValue;
			if (this.oGameManager.isBlind) {
				this.show_Disable.visible = false;
				this.show_Disable.setInteractive();
				this.blind_value.text = this.oGameManager.currnentBootValue;
				this.raise_value.text = this.oGameManager.currnentBootValue * 2;
			} else {
				this.show_Disable.visible = true;
				this.show_Disable.disableInteractive();
				this.call_value.text = this.oGameManager.currnentBootValue;
				this.raise_value.text = this.oGameManager.currnentBootValue * 2;
			}
		}
	}
	showResultScreen(data) {
		this.container_resultScreen.visible = true;
		for (var i = 0; i < data.length; i++) {
			this.winnerPrefab = this.add.existing(new resultData(this, 244, 700 + (i * 200)));
			this.winnerPrefab.setScale(0.8);
			this.container_resultScreen.add(this.winnerPrefab);
			this.winnerPrefab.setWinnerData(data[i]);
		}
	}
	setInitializeTimer = ({ value }) => {
		if (this.container_resultScreen.visible == true) {
			this.container_resultScreen.visible = false;
		}
		this.container_waitingScene.visible = true;
		this.text_wait.text = "GAME WILL START IN " + value + " SECONDS.."
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
