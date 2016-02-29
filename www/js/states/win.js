var winState = {
	init: function (_time) {
		currentTime = _time;
	},
	create: function () {

		//Menu Logo
		var logo = game.add.sprite(0, 0, 'logo');
		logo.anchor.set(0.5);
		logo.x = width / 2;
		logo.y = 70;

		var win = game.add.sprite(0, 0, 'victory');
		win.anchor.set(0.5);
		win.x = width / 2;
		win.y = 150;

		var okay = game.add.sprite(0, 0, 'okay');
		okay.anchor.set(0.5);
		okay.x = width / 2;
		okay.y = height-75;
		okay.inputEnabled = true;
		okay.events.onInputDown.add(this.toMenu);

		var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
		var text = game.add.text(0,0, currentTime, style);
		text.anchor.setTo(0.5);

		switch (currentMap.csv) {
			case 'tutorial':
				crypt.isLocked = false;
				break;
			case 'crypt':
				nexus.isLocked = false;
				break;
			case 'nexus':
				cristpo.isLocked = false;
				break;
			case 'cristpo':
				final.isLocked = false;
		}
	},
	toMenu: function () {
		game.state.start('level')
	}
};