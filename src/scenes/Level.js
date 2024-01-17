
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
		container_playerPot.visible = false;
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

		// lady
		const lady = this.add.image(542, 181, "lady");
		container_background.add(lady);

		// container_playerHand
		const container_playerHand = this.add.container(0, 2);
		container_playerHand.visible = false;

		// container_resultHandCard
		const container_resultHandCard = this.add.container(0, 0);

		// container_players
		const container_players = this.add.container(0, 1);

		// container_tempCoin
		const container_tempCoin = this.add.container(0, 0);

		// container_button
		const container_button = this.add.container(0, 0);

		// container_fold
		const container_fold = this.add.container(168.19956957013034, 1837.9373654906658);
		container_button.add(container_fold);

		// fold_btn
		const fold_btn = this.add.image(3.800430429869664, 5.0626345093342024, "red-btn");
		fold_btn.scaleX = 0.8;
		fold_btn.scaleY = 0.8;
		container_fold.add(fold_btn);

		// fold_txt
		const fold_txt = this.add.text(-51.199569570130336, -17.937365490665798, "", {});
		fold_txt.text = "FOLD";
		fold_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_fold.add(fold_txt);

		// container_Show
		const container_Show = this.add.container(916.5429832967947, 1838.9373654906658);
		container_button.add(container_Show);

		// show_btn
		const show_btn = this.add.image(0.4570167032053405, 2.0626345093342024, "red-btn");
		show_btn.scaleX = 0.8;
		show_btn.scaleY = 0.8;
		container_Show.add(show_btn);

		// show_txt
		const show_txt = this.add.text(-2.5429832967946595, 5.0626345093342024, "", {});
		show_txt.setOrigin(0.5, 0.5);
		show_txt.text = "SHOW";
		show_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_Show.add(show_txt);

		// show_Disable
		const show_Disable = this.add.image(-2.5429832967946595, 2.0626345093342024, "btn-off");
		show_Disable.scaleX = 0.8;
		show_Disable.scaleY = 0.8;
		container_Show.add(show_Disable);

		// container_raise
		const container_raise = this.add.container(663.9559406285312, 1838.2622040794647);
		container_button.add(container_raise);

		// raise_btn
		const raise_btn = this.add.image(-0.9559406285311525, 2.737795920535291, "blue-btn");
		raise_btn.scaleX = 0.8;
		raise_btn.scaleY = 0.8;
		container_raise.add(raise_btn);

		// raise_txt
		const raise_txt = this.add.text(-2.9559406285311525, -17.26220407946471, "", {});
		raise_txt.setOrigin(0.5, 0.5);
		raise_txt.text = "2X";
		raise_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_raise.add(raise_txt);

		// raise_value
		const raise_value = this.add.text(-4.9559406285311525, 26.73779592053529, "", {});
		raise_value.setOrigin(0.5, 0.5);
		raise_value.text = "0";
		raise_value.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_raise.add(raise_value);

		// raise_Disable
		const raise_Disable = this.add.image(-0.9559406285311525, 4.737795920535291, "btn-off");
		raise_Disable.scaleX = 0.8;
		raise_Disable.scaleY = 0.8;
		raise_Disable.visible = false;
		container_raise.add(raise_Disable);

		// container_blind
		const container_blind = this.add.container(413.28077921733006, 1836.568467530398);
		container_button.add(container_blind);

		// blind_btn
		const blind_btn = this.add.image(1.719220782669936, 3.4315324696019616, "red-btn");
		blind_btn.scaleX = 0.8;
		blind_btn.scaleY = 0.8;
		container_blind.add(blind_btn);

		// blind_txt
		const blind_txt = this.add.text(-1.280779217330064, -12.568467530398038, "", {});
		blind_txt.setOrigin(0.5, 0.5);
		blind_txt.text = "BLIND";
		blind_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_blind.add(blind_txt);

		// blind_value
		const blind_value = this.add.text(-2.280779217330064, 27.43153246960196, "", {});
		blind_value.setOrigin(0.5, 0.5);
		blind_value.text = "0";
		blind_value.setStyle({ "fontSize": "40px" });
		container_blind.add(blind_value);

		// container_call
		const container_call = this.add.container(409.5870426682635, 1836.8747309813314);
		container_call.visible = false;
		container_button.add(container_call);

		// call_btn
		const call_btn = this.add.image(3.412957331736493, 5.125269018668632, "red-btn");
		call_btn.scaleX = 0.8;
		call_btn.scaleY = 0.8;
		container_call.add(call_btn);

		// call_txt
		const call_txt = this.add.text(0.41295733173649296, -10.874730981331368, "", {});
		call_txt.setOrigin(0.5, 0.5);
		call_txt.text = "CALL";
		call_txt.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_call.add(call_txt);

		// call_value
		const call_value = this.add.text(-0.587042668263507, 29.125269018668632, "", {});
		call_value.setOrigin(0.5, 0.5);
		call_value.text = "100";
		call_value.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "40px" });
		container_call.add(call_value);

		// container_sideShow
		const container_sideShow = this.add.container(923, 1665);
		container_sideShow.visible = false;
		container_button.add(container_sideShow);

		// side_show_btn
		const side_show_btn = this.add.image(0.4570167032053405, 2.0626345093342024, "red-btn");
		side_show_btn.scaleX = 0.8;
		side_show_btn.scaleY = 0.8;
		container_sideShow.add(side_show_btn);

		// side_show_txt
		const side_show_txt = this.add.text(-2.5429832967946595, 5.0626345093342024, "", {});
		side_show_txt.setOrigin(0.5, 0.5);
		side_show_txt.text = "SIDE \nSHOW";
		side_show_txt.setStyle({ "align": "center", "fontFamily": "BIWOLSTBI", "fontSize": "35px" });
		container_sideShow.add(side_show_txt);

		// side_show_Disable
		const side_show_Disable = this.add.image(-2.5429832967946595, 2.0626345093342024, "btn-off");
		side_show_Disable.scaleX = 0.8;
		side_show_Disable.scaleY = 0.8;
		container_sideShow.add(side_show_Disable);

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

		// container_menu
		const container_menu = this.add.container(541.6150512695312, 960.3103951187292);
		container_menu.scaleX = 0;
		container_menu.scaleY = 0;

		// black_layer
		const black_layer = this.add.image(2, -2, "black-layer");
		black_layer.scaleX = 1.1;
		black_layer.scaleY = 1.1;
		container_menu.add(black_layer);

		// box
		const box = this.add.image(19.384950143648553, -56.31037208572957, "box");
		container_menu.add(box);

		// close_btn
		const close_btn = this.add.image(467, -415, "close-btn");
		close_btn.scaleX = 0.8;
		close_btn.scaleY = 0.8;
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
		const on_off_bg = this.add.image(76, 203, "on-off-bg");
		on_off_bg.scaleY = 1.2;
		container_menu.add(on_off_bg);

		// on_btn
		const on_btn = this.add.image(127, 202, "on-btn");
		container_menu.add(on_btn);

		// text_menu
		const text_menu = this.add.text(29.384950143648553, -423.31037208572957, "", {});
		text_menu.setOrigin(0.5, 0.5);
		text_menu.text = "Menu";
		text_menu.setStyle({ "color": "#f9e4bc", "fontFamily": "iwolstyn", "fontSize": "70px", "fontStyle": "bold" });
		container_menu.add(text_menu);

		// text_on
		const text_on = this.add.text(64, 204, "", {});
		text_on.setOrigin(0.5, 0.5);
		text_on.text = "On";
		text_on.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "30px" });
		container_menu.add(text_on);

		// container_resultScreen
		const container_resultScreen = this.add.container(-5, 9);
		container_resultScreen.visible = false;

		// black_layer_1
		const black_layer_1 = this.add.image(540, 939, "black-layer");
		black_layer_1.scaleX = 1.1;
		black_layer_1.scaleY = 1.1;
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
		const black_layer_2 = this.add.image(547, 962, "black-layer");
		black_layer_2.scaleX = 1.1;
		black_layer_2.scaleY = 1.1;
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

		// container_kickOut
		const container_kickOut = this.add.container(595.6658363492907, 818.1209377575311);
		container_kickOut.scaleX = 0;
		container_kickOut.scaleY = 0;

		// black_layer_3
		const black_layer_3 = this.add.image(-1.6658363492906574, 45.879062242468876, "black-layer");
		black_layer_3.scaleX = 1.1;
		black_layer_3.scaleY = 1.1;
		container_kickOut.add(black_layer_3);

		// box_popup
		const box_popup = this.add.image(4.334163650709343, 21.879062242468876, "wait-box");
		container_kickOut.add(box_popup);

		// text_kickOut
		const text_kickOut = this.add.text(10.334163650709343, 7.879062242468876, "", {});
		text_kickOut.setOrigin(0.5, 0.5);
		text_kickOut.text = "There are not enough players to start the game.\n";
		text_kickOut.setStyle({ "align": "center", "baselineX":1.4,"fontSize": "35px", "maxLines":2});
		text_kickOut.setPadding({"left":5,"top":5,"right":5,"bottom":5});
		text_kickOut.setLineSpacing(20);
		text_kickOut.setWordWrapWidth(700);
		container_kickOut.add(text_kickOut);

		// ok_Btn
		const ok_Btn = this.add.image(-2, 252, "ok-Btn");
		ok_Btn.scaleX = 2.5;
		ok_Btn.scaleY = 2.5;
		container_kickOut.add(ok_Btn);

		// text_ok
		const text_ok = this.add.text(-6, 258, "", {});
		text_ok.setOrigin(0.5, 0.5);
		text_ok.text = "OK";
		text_ok.setStyle({ "color": "#671e02", "fontSize": "55px" });
		container_kickOut.add(text_ok);

		// container_reqSideShow
		const container_reqSideShow = this.add.container(371.5, -924.06005859375);
		container_reqSideShow.visible = false;

		// side_showReqTxt
		const side_showReqTxt = this.add.text(168.5, 1884.06005859375, "", {});
		side_showReqTxt.setOrigin(0.5, 0.5);
		side_showReqTxt.setStyle({ "align": "center", "fontFamily": "BIWOLSTBI", "fontSize": "25px" });
		container_reqSideShow.add(side_showReqTxt);

		// yesBtn_btn
		const yesBtn_btn = this.add.image(50, 1970, "red-btn");
		yesBtn_btn.scaleX = 0.5;
		yesBtn_btn.scaleY = 0.5;
		container_reqSideShow.add(yesBtn_btn);

		// no_btn
		const no_btn = this.add.image(277, 1970, "blue-btn");
		no_btn.scaleX = 0.5;
		no_btn.scaleY = 0.5;
		container_reqSideShow.add(no_btn);

		// accept_text
		const accept_text = this.add.text(50, 1968, "", {});
		accept_text.setOrigin(0.5, 0.5);
		accept_text.text = "Accept";
		accept_text.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "35px" });
		container_reqSideShow.add(accept_text);

		// reject_text
		const reject_text = this.add.text(275, 1966, "", {});
		reject_text.setOrigin(0.5, 0.5);
		reject_text.text = "Reject";
		reject_text.setStyle({ "fontFamily": "BIWOLSTBI", "fontSize": "35px" });
		container_reqSideShow.add(reject_text);

		this.container_background = container_background;
		this.container_playerPot = container_playerPot;
		this.chip_bg = chip_bg;
		this.chip = chip;
		this.txt_pot = txt_pot;
		this.txt_nBoardPotLimit = txt_nBoardPotLimit;
		this.nav_btn = nav_btn;
		this.lady = lady;
		this.container_playerHand = container_playerHand;
		this.container_resultHandCard = container_resultHandCard;
		this.container_players = container_players;
		this.container_tempCoin = container_tempCoin;
		this.container_button = container_button;
		this.container_fold = container_fold;
		this.fold_btn = fold_btn;
		this.fold_txt = fold_txt;
		this.container_Show = container_Show;
		this.show_btn = show_btn;
		this.show_txt = show_txt;
		this.show_Disable = show_Disable;
		this.container_raise = container_raise;
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
		this.container_sideShow = container_sideShow;
		this.side_show_btn = side_show_btn;
		this.side_show_txt = side_show_txt;
		this.side_show_Disable = side_show_Disable;
		this.container_see = container_see;
		this.see_btn = see_btn;
		this.see_txt = see_txt;
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
		this.container_kickOut = container_kickOut;
		this.black_layer_3 = black_layer_3;
		this.text_kickOut = text_kickOut;
		this.ok_Btn = ok_Btn;
		this.text_ok = text_ok;
		this.container_reqSideShow = container_reqSideShow;
		this.side_showReqTxt = side_showReqTxt;
		this.yesBtn_btn = yesBtn_btn;
		this.no_btn = no_btn;
		this.accept_text = accept_text;
		this.reject_text = reject_text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Container} */
	container_playerPot;
	/** @type {Phaser.GameObjects.Image} */
	chip_bg;
	/** @type {Phaser.GameObjects.Image} */
	chip;
	/** @type {Phaser.GameObjects.Text} */
	txt_pot;
	/** @type {Phaser.GameObjects.Text} */
	txt_nBoardPotLimit;
	/** @type {Phaser.GameObjects.Image} */
	nav_btn;
	/** @type {Phaser.GameObjects.Image} */
	lady;
	/** @type {Phaser.GameObjects.Container} */
	container_playerHand;
	/** @type {Phaser.GameObjects.Container} */
	container_resultHandCard;
	/** @type {Phaser.GameObjects.Container} */
	container_players;
	/** @type {Phaser.GameObjects.Container} */
	container_tempCoin;
	/** @type {Phaser.GameObjects.Container} */
	container_button;
	/** @type {Phaser.GameObjects.Container} */
	container_fold;
	/** @type {Phaser.GameObjects.Image} */
	fold_btn;
	/** @type {Phaser.GameObjects.Text} */
	fold_txt;
	/** @type {Phaser.GameObjects.Container} */
	container_Show;
	/** @type {Phaser.GameObjects.Image} */
	show_btn;
	/** @type {Phaser.GameObjects.Text} */
	show_txt;
	/** @type {Phaser.GameObjects.Image} */
	show_Disable;
	/** @type {Phaser.GameObjects.Container} */
	container_raise;
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
	container_sideShow;
	/** @type {Phaser.GameObjects.Image} */
	side_show_btn;
	/** @type {Phaser.GameObjects.Text} */
	side_show_txt;
	/** @type {Phaser.GameObjects.Image} */
	side_show_Disable;
	/** @type {Phaser.GameObjects.Container} */
	container_see;
	/** @type {Phaser.GameObjects.Image} */
	see_btn;
	/** @type {Phaser.GameObjects.Text} */
	see_txt;
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
	/** @type {Phaser.GameObjects.Container} */
	container_kickOut;
	/** @type {Phaser.GameObjects.Image} */
	black_layer_3;
	/** @type {Phaser.GameObjects.Text} */
	text_kickOut;
	/** @type {Phaser.GameObjects.Image} */
	ok_Btn;
	/** @type {Phaser.GameObjects.Text} */
	text_ok;
	/** @type {Phaser.GameObjects.Container} */
	container_reqSideShow;
	/** @type {Phaser.GameObjects.Text} */
	side_showReqTxt;
	/** @type {Phaser.GameObjects.Image} */
	yesBtn_btn;
	/** @type {Phaser.GameObjects.Image} */
	no_btn;
	/** @type {Phaser.GameObjects.Text} */
	accept_text;
	/** @type {Phaser.GameObjects.Text} */
	reject_text;

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

	setBoardPotValue = ({ nBoardPotValue }) => this.txt_pot.text = this.oGameManager.formatSliderValue(nBoardPotValue);
	setButtonStatus = ({ iUserId }) => {
		if (iUserId == this.oPlayerManager.player1.name) {
			if (!this.oGameManager.isBlind) {
				this.oPlayerManager.player1.back_cardContainer.visible = false;
				this.container_call.visible = true;
				this.container_blind.visible = false;
				this.call_value.text = this.oGameManager.currnentBootValue * 2;
				this.raise2X = this.oGameManager.currnentBootValue * 2
				this.raise_value.text = this.raise2X * 2;
			} else {
				this.container_call.visible = false;
				this.container_blind.visible = true;
				this.blind_value.text = this.oGameManager.currnentBootValue * 2;
				this.raise2X = this.oGameManager.currnentBootValue * 2
				this.raise_value.text = this.raise2X * 2;
			}
		}
	}
	changePlayerValue = ({ iUserId, nCurrentBootValue , bEnableSideShowButton }) => {
		if (iUserId == this.oPlayerManager.player1.name) {
			bEnableSideShowButton ? this.side_show_Disable.visible = false : this.side_show_Disable.visible = true;
			this.oGameManager.currnentBootValue = nCurrentBootValue;
			if (this.oGameManager.isBlind) {
				this.blind_value.text = this.oGameManager.currnentBootValue;
				this.raise_value.text = this.oGameManager.currnentBootValue * 2;
			} else {
				this.call_value.text = this.oGameManager.currnentBootValue;
				this.raise_value.text = this.oGameManager.currnentBootValue * 2;
			}
		}
		if(this.oPlayerManager.players.size > 2){
			this.show_Disable.visible = true;
		   }else{
			this.show_Disable.visible = false;
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
