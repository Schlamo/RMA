var loadState = {
	preload: function () {

		//Menu
		game.load.image('logo','assets/menu/logo.png');
		game.load.image('level','assets/menu/level.png');
		game.load.image('highscore','assets/menu/highscore.png');
		game.load.image('back_red','assets/menu/back_red.png');
		game.load.image('back_green','assets/menu/back_green.png');


		//Levels
		game.load.image('1_unlocked','assets/level/1_unlocked.png');

		game.load.image('2_locked','assets/level/2_locked.png');
		game.load.image('2_unlocked','assets/level/2_unlocked.png');

		game.load.image('3_locked','assets/level/3_locked.png');
		game.load.image('3_unlocked','assets/level/3_unlocked.png');

		game.load.image('4_locked','assets/level/4_locked.png');
		game.load.image('4_unlocked','assets/level/4_unlocked.png');

		game.load.image('5_locked','assets/level/5_locked.png');
		game.load.image('5_unlocked','assets/level/5_unlocked.png');


		//.csv Tilemaps
		game.load.tilemap('tutorial', 'assets/csv/tutorial.csv', null, Phaser.Tilemap.CSV);
		game.load.tilemap('crypt', 'assets/csv/crypt.csv', null, Phaser.Tilemap.CSV);

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