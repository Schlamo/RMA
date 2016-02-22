var menuState = {
	create: function () {

		var menuHeadline = game.add.sprite(0, 0, 'menu');
		menuHeadline.anchor.set(0.5);
		menuHeadline.x = width/2;
		menuHeadline.y = 100;

		var startLine = game.add.sprite(0, 0, 'start');
		startLine.anchor.set(0.5);
		startLine.x = width/2;
		startLine.y = 375;
		startLine.inputEnabled = true;
		startLine.events.onInputDown.add(this.start);

		var loadLine = game.add.sprite(0, 0, 'load');
		loadLine.anchor.set(0.5);
		loadLine.x = width/2;
		loadLine.y = 500;

	},

	start: function () {

		game.state.start('play');
	}
};