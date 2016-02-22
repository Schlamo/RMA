var menuState = {
	create: function () {

		var logo = game.add.sprite(0, 0, 'logo');
		logo.anchor.set(0.5);
		logo.x = width/2;
		logo.y = 100;

		var startLine = game.add.sprite(0, 0, 'start');
		startLine.anchor.set(0.5);
		startLine.x = width / 2;
		startLine.y = 250;
		startLine.inputEnabled = true;
		startLine.events.onInputDown.add(this.start);

		var loadLine = game.add.sprite(0, 0, 'highscore');
		loadLine.anchor.set(0.5);
		loadLine.x = width / 2;
		loadLine.y = 330;

	},

	start: function () {

		game.state.start('play', true, false, 'map', 'obstacle');
	}
};