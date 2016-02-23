var loadState = {
	preload: function () {

		//Menu
		game.load.image('logo','assets/menu/logo.png');
		game.load.image('start','assets/menu/start.png');
		game.load.image('highscore','assets/menu/highscore.png');


		//.csv Tilemap
		game.load.tilemap('tutorial', 'assets/csv/level1.csv', null, Phaser.Tilemap.CSV);
		var tutorial = new Map();

		//Tiles
		game.load.image('tiles', 'assets/tiles/tiles.png');

		//Player
		game.load.spritesheet('dude', 'assets/sprites/dude.png', 32, 48);

		//Coins
		game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

		//Pokal
		game.load.image('win', 'assets/items/win.png', 32, 32);


		//Controls
		game.load.image('controls_left_inactive', 'assets/controls/left_inactive.png');
		game.load.image('controls_left_active', 'assets/controls/left_active.png');
		game.load.image('controls_right_inactive', 'assets/controls/right_inactive.png');
		game.load.image('controls_right_active', 'assets/controls/right_active.png');
		game.load.image('controls_top_inactive', 'assets/controls/top_inactive.png');
		game.load.image('controls_top_active', 'assets/controls/top_active.png');

	},

	create: function () {

		game.state.start('menu');
	}
};