var playState = {
	init : function (mapParamter) {

		map = game.add.tilemap(mapParamter, 32, 32);
	},
	create: function () {

		//Now add in the tileset
		map.addTilesetImage('tiles');

		layer = map.createLayer(0);

		layer.resizeWorld();
		layer.y -= 75;
		//Defines colliding Tiles
		map.setCollisionBetween(1, 5);

		//Enable Game Physics
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Adds the player character defines settings
		player = game.add.sprite(32, game.world.height -144, 'dude');
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.05;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

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

		game.camera.follow(player);
		this.stop();
		//Show Menu
		/*enu = game.add.sprite(0,0, 'menu');*/
	},

	update: function () {
		game.physics.arcade.collide(player, layer);
		if(player.body.velocity.y > 0) {
			control_top.loadTexture('controls_top_inactive');
		}
		if(playerDirection > 0) {
			player.body.velocity.x = 150;
		} else if (playerDirection < 0) {
			player.body.velocity.x = -150;
		} else {
			player.body.velocity.x = 0;
		}
	},

	win: function () {
		game.state.start('win');
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
		playerDirection +=1;
		this.stop();
	},

	moveRight: function () {
		control_right.loadTexture('controls_right_active');
		playerDirection +=1;
		player.animations.play('right');
	},

	stopMoveRight: function () {
		control_right.loadTexture('controls_right_inactive');
		playerDirection -=1;
		this.stop();
	},

	jump: function () {
		if (player.body.velocity.y < 0 && player.body.velocity.y > -1) {
			player.body.velocity.y = -250;
			control_top.loadTexture('controls_top_active');
		}
	},

	stop: function () {
		player.animations.stop();
		player.loadTexture('dude', 4);
		player.body.velocity.x = 0;
	}
};