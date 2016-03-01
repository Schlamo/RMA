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
		var text = game.add.text(0,0, currentTime + 's', style);
		text.anchor.setTo(0.5);
		text.x = width/2;
		text.y = height/2 +30;

		switch (currentMap.csv) {
			case 'tutorial':
				crypt.isLocked = false;
				if(window.localStorage){
					window.localStorage.setItem(crypt.csv,'unlocked');
				}
				break;
			case 'crypt':
				nexus.isLocked = false;
				if(window.localStorage){
					window.localStorage.setItem(nexus.csv,'unlocked');
				}
				break;
			case 'nexus':
				cristpo.isLocked = false;
				if(window.localStorage){
					window.localStorage.setItem(cristpo.csv,'unlocked');
				}
				break;
			case 'cristpo':
				final.isLocked = false;
				if(window.localStorage){
					window.localStorage.setItem(final.csv,'unlocked');
				}
		}
	},
	toMenu: function () {
		game.state.start('level')
	}
};