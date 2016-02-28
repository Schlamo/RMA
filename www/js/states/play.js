var playState = {
	init: function (_map) {

		currentMap = _map;
		currentCoins = 0;
		map = game.add.tilemap(currentMap.csv, 32, 32);
	},

	create: function () {
		shake.startWatch(this.back, 40);

		//Now add the Tileset
		map.addTilesetImage('tiles');
		layer = map.createLayer(0);
		layer.resizeWorld();
		map.setCollisionBetween(1, 5);
		map.setCollision(20);

		//Enable Game Physics
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Adds the Player Character & Settings
		player = game.add.sprite(96, game.world.height - 144, 'dude');
		game.physics.arcade.enable(player);
		player.body.gravity.y = 400;
		player.body.collideWorldBounds = true;
		game.camera.follow(player);

		//Animations for the player sprite
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		//Show Controls
		control_left = game.add.sprite(25, height - 80, 'controls_left_inactive');
		control_left.fixedToCamera = true;
		control_left.inputEnabled = true;
		control_left.events.onInputDown.add(this.moveLeft, this);
		control_left.events.onInputUp.add(this.stopMoveLeft, this);

		control_right = game.add.sprite(125, height - 80, 'controls_right_inactive');
		control_right.fixedToCamera = true;
		control_right.inputEnabled = true;
		control_right.events.onInputDown.add(this.moveRight, this);
		control_right.events.onInputUp.add(this.stopMoveRight, this);

		control_top = game.add.sprite(width - 100, height - 80, 'controls_top_inactive');
		control_top.fixedToCamera = true;
		control_top.inputEnabled = true;
		control_top.events.onInputDown.add(this.jump, this);

		//Coins
		coins = game.add.group();
		coins.enableBody = true;
		for (var i = 0; i < currentMap.coins.length; i++) {
			var coin = coins.create(currentMap.coins[i].x * 32, currentMap.coins[i].y * 32, 'coin');
			coin.body.velocity.y = 300;
		}
		coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 5, true);
		coins.callAll('animations.play', 'animations', 'spin');


		//Spikes
		spikes = game.add.group();
		spikes.enableBody = true;
		if (currentMap.spikes) {
			for (i = 0; i < currentMap.spikes.length; i++) {
				var spike = spikes.create(currentMap.spikes[i].x * 32, currentMap.spikes[i].y * 32, 'spike');
				coin.body.velocity.y = 300;
			}
		}


		//Enemies
		enemies = game.add.group();
		enemies.enableBody = true;
		if (currentMap.enemies) {

			for (i = 0; i < currentMap.enemies.length; i++) {
				var currentEnemy = currentMap.enemies[i];
				var enemy = enemies.create(currentEnemy.src * 32, currentEnemy.y * 32 + 6, currentEnemy.sprite);
				enemy.reverse = false;
			}
		}
		enemies.callAll('animations.add', 'animations', 'right', [1, 2], 5, true);
		enemies.callAll('animations.add', 'animations', 'left', [4, 4], 5, true);
		enemies.callAll('animations.play', 'animations', 'left');
		enemies.callAll('body.velocity.x', 50);

		//Character looking at the camera
		this.stop();
	},

	update: function () {
		//Player and coins collide with the Tilemap
		game.physics.arcade.collide(player, layer);
		game.physics.arcade.collide(coins, layer);

		game.physics.arcade.overlap(player, coins, this.collectCoin, null, this);
		game.physics.arcade.overlap(player, enemies, this.die, null, this);
		game.physics.arcade.overlap(player, spikes, this.die, null, this);
		game.physics.arcade.overlap(player, win, this.win, null, this);

		if (player.body.velocity.y > 0) {
			control_top.loadTexture('controls_top_inactive');
		}

		if (playerDirection > 0) {
			player.body.velocity.x = 150;
		} else if (playerDirection < 0) {
			player.body.velocity.x = -150;
		} else {
			player.body.velocity.x = 0;
		}

		enemies.forEach(function (enemy) {
			var index = enemies.getChildIndex(enemy);
			var src = currentMap.enemies[index].src;
			var dest = currentMap.enemies[index].dest;
			if (enemy.worldPosition.x >= dest * 32) {
				enemy.reverse = true;
				enemy.animations.play('left');
			} else if (enemy.worldPosition.x <= src * 32) {
				enemy.reverse = false;
				enemy.animations.play('right');
			}

			if (enemy.reverse) {
				enemy.body.velocity.x = -100;
			} else {
				enemy.body.velocity.x = 100;
			}

		});
	},

	win: function (player, win) {
		win.kill();
		game.state.start('win', true, false, currentMap);
	},

	lose: function () {
		game.state.start('lose');
	},

	moveLeft: function () {
		control_left.loadTexture('controls_left_active');
		playerDirection -= 1;
		player.animations.play('left');
	},

	stopMoveLeft: function () {
		control_left.loadTexture('controls_left_inactive');
		playerDirection += 1;
		this.stop();
	},

	moveRight: function () {
		control_right.loadTexture('controls_right_active');
		playerDirection += 1;
		player.animations.play('right');
	},

	stopMoveRight: function () {
		control_right.loadTexture('controls_right_inactive');
		playerDirection -= 1;
		this.stop();
	},

	jump: function () {
		if (player.body.velocity.y == 0) {
			player.body.velocity.y = -300;
			control_top.loadTexture('controls_top_active');
		}
	},

	stop: function () {
		player.animations.stop();
		player.loadTexture('dude', 4);
		player.body.velocity.x = 0;
	},

	collectCoin: function (player, coin) {
		coin.kill();
		currentCoins++;
		if (currentCoins == maxCoins) {
			win = game.add.sprite(currentMap.win.x * 32, currentMap.win.y * 32, 'win');
			win.enableBody = true;
			game.physics.arcade.enable(win);
		}
	},

	back: function () {
		game.state.start('level');
	},

	die: function () {
		game.state.start('level');
	}
};