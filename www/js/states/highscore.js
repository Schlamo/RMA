var highscoreState = {
	create: function () {

		//Menu Logo
		var logo = game.add.sprite(0, 0, 'logo');
		logo.anchor.set(0.5);
		logo.x = width / 2;
		logo.y = 70;

		var highscore = game.add.sprite(0, 0, 'highscore');
		highscore.anchor.set(0.5);
		highscore.x = width / 2;
		highscore.y = 130;

		//Back Button
		var back = game.add.sprite(0, 0, 'back_red');
		back.x = 15;
		back.y = 15;
		back.inputEnabled = true;
		back.events.onTap.add(this.back);

	},

	back: function () {
		game.state.start('menu');
	}
};