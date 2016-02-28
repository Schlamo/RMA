var menuState = {
	create: function () {

		var logo = game.add.sprite(0, 0, 'logo');
		logo.anchor.set(0.5);
		logo.x = width/2;
		logo.y = 70;

		var selectLevel = game.add.sprite(0, 0, 'level');
		selectLevel.anchor.set(0.5);
		selectLevel.x = width / 2;
		selectLevel.y = 220;
		selectLevel.inputEnabled = true;
		selectLevel.events.onInputDown.add(this.getLevelScreen);

		var highscore = game.add.sprite(0, 0, 'highscore');
		highscore.anchor.set(0.5);
		highscore.x = width / 2;
		highscore.y = 300;
		highscore.inputEnabled = true;
		highscore.events.onInputDown.add(this.getHighscoreScreen);

		var shake = game.add.sprite(0, 0, 'shake');
		shake.anchor.set(0.5);
		shake.x = width* 0.85;
		shake.y = 70;
		shake.scale.setTo(0.1);
	},

	getLevelScreen: function () {

		game.state.start('level');
	},

	getHighscoreScreen: function() {

		game.state.start('highscore');
	}
};