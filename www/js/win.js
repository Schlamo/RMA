var winState = {
	create: function () {

		var winLabel = game.add.text(80, 80, 'YOU WON!', {
			font: '50px Arial',
			fill: '#00FF00'
		});

		var startLabel = game.add.text(80, game.world.height - 80, 'Press the W key to restart!', {
			font: '25px Arial',
			fill: '#FFFFFF'
		});

	},
	restart: function () {

		game.state.start('menu');
	}
}