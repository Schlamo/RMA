var winState = {
	create: function () {

		//Menu Logo
		var logo = game.add.sprite(0, 0, 'logo');
		logo.anchor.set(0.5);
		logo.x = width / 2;
		logo.y = 70;


		switch (currentMap.csv) {
			case 'tutorial':
				crypt.isLocked = false;
				break;
			case 'crypt':
				nexus.isLocked = false;
				break;
			case 'nexus':
				crypt.isLocked = false;
				break;
			case 'cookies':
				crypt.isLocked = false;
		}
		game.state.start('menu');
	}
};