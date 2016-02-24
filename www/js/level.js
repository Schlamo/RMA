var levelState = {
	create: function () {

		//Menu Logo
		var logo = game.add.sprite(0, 0, 'logo');
		logo.anchor.set(0.5);
		logo.x = width / 2;
		logo.y = 70;

		var level = game.add.sprite(0, 0, 'level');
		level.anchor.set(0.5);
		level.x = width / 2;
		level.y = 130;

		//Back Button
		var back = game.add.sprite(0, 0, 'back')
		back.x = 15;
		back.y = 15;
		back.inputEnabled = true;
		back.events.onInputDown.add(this.back);

		var level1 = game.add.sprite(0, 0, '1_unlocked');
		level1.anchor.set(0.5);
		level1.x = width * 0.1;
		level1.y = height - 125;
		level1.inputEnabled = true;
		level1.events.onInputDown.add(this.startLevel);

		var level2 = game.add.sprite(0, 0, '2_locked');
		level2.anchor.set(0.5);
		level2.x = width * 0.3;
		level2.y = height - 125;

		var level3 = game.add.sprite(0, 0, '3_locked');
		level3.anchor.set(0.5);
		level3.x = width * 0.5;
		level3.y = height - 125;

		var level4 = game.add.sprite(0, 0, '4_locked');
		level4.anchor.set(0.5);
		level4.x = width * 0.7;
		level4.y = height - 125;

		var level5 = game.add.sprite(0, 0, '5_locked');
		level5.anchor.set(0.5);
		level5.x = width * 0.9;
		level5.y = height - 125;
	},

	back: function () {

		game.state.start('menu');
	},

	startLevel: function (number) {

		game.state.start('play', true, false, tutorial);
	}
};