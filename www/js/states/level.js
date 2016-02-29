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
		var back = game.add.sprite(0, 0, 'back_green');
		back.x = 15;
		back.y = 15;
		back.inputEnabled = true;
		back.events.onInputDown.add(this.back);

		var level1 = game.add.sprite(0, 0, '1_unlocked');
		level1.anchor.set(0.5);
		level1.x = width * 0.1;
		level1.y = height - 75;
		level1.inputEnabled = true;
		level1.events.onInputDown.add(function () {
			levelState.startLevel(1);
		});

		var level2 = game.add.sprite(0, 0, '2_locked');
		if (!crypt.isLocked) {
			level2.loadTexture('2_unlocked');
		}
		level2.anchor.set(0.5);
		level2.x = width * 0.3;
		level2.y = height - 75;
		level2.inputEnabled = true;
		level2.events.onInputDown.add(function () {
			levelState.startLevel(2);
		});

		var level3 = game.add.sprite(0, 0, '3_locked');
		if (!nexus.isLocked) {
			level3.loadTexture('3_unlocked');
		}
		level3.anchor.set(0.5);
		level3.x = width * 0.5;
		level3.y = height - 75;
		level3.inputEnabled = true;
		level3.events.onInputDown.add(function () {
			levelState.startLevel(3);
		});

		var level4 = game.add.sprite(0, 0, '4_locked');
		if (!cristpo.isLocked) {
			level4.loadTexture('4_unlocked');
		}
		level4.anchor.set(0.5);
		level4.x = width * 0.7;
		level4.y = height - 75;
		level4.inputEnabled = true;
		level4.events.onInputDown.add(function () {
			levelState.startLevel(4);
		});

		var level5 = game.add.sprite(0, 0, '5_locked');
		if (!final.isLocked) {
			level5.loadTexture('5_unlocked');
		}
		level5.anchor.set(0.5);
		level5.x = width * 0.9;
		level5.y = height - 75;
		level5.inputEnabled = true;
		level5.events.onInputDown.add(function () {
			levelState.startLevel(5);
		});

		var shake = game.add.sprite(0, 0, 'shake');
		shake.anchor.set(0.5);
		shake.x = width* 0.85;
		shake.y = 70;
		shake.scale.setTo(0.1);
	},

	back: function () {

		game.state.start('menu');
	},

	startLevel: function (number) {

		switch (number) {
			case 1:
				game.state.start('play', true, false, tutorial);
				break;
			case 2:
				if (!crypt.isLocked) {
					game.state.start('play', true, false, crypt);
				}
				break;
			case 3:
				if (!nexus.isLocked) {
					game.state.start('play', true, false, nexus);
				}
				break;
			case 4:
				if (!cristpo.isLocked) {
					game.state.start('play', true, false, cristpo);
				}
				break;
			case 5:
				if (!final.isLocked) {
					game.state.start('play', true, false, final);
				}
				break;
		}
	}
};