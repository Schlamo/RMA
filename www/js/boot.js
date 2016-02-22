var bootState = {
	init: function () {

		//Scale to fit Mobile Screen
		game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		game.scale.pageAlignVertically = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.setShowAll();
		game.scale.refresh();
	},

	create: function () {

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('load');
	}
};