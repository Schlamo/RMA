//Window Width & Height
var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameDiv');

//Variables
//Map
var map,
	obstacle;
//Map Layer
var layer;
//Player (Sprite etc.)
var player,
	win;
//Walk Direction for the player sprite ( -1 = left  |  0 = none  |  1 = right )
var playerDirection = 0;
//Coins
var maxCoins = 10,
	currentCoins = 0,
	scoreText;

//Controls
var control_left,
	control_right,
	control_top;

//States
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

//Start bootState
game.state.start('boot');

function Map(csv, coins, win) {
	this.csv = csv;
	this.coins = coins;
	this.win = win;
}

var currentMap;

var tutorial = new Map('tutorial', [{
	//--------------Coins
	x: 64, y: 320
}, {
	x: 96, y: 96
}, {
	x: 128, y: 320
}, {
	x: 196, y: 256
}, {
	x: 260, y: 64
}, {
	x: 384, y: 128
}, {
	x: 480, y: 160
}, {
	x: 608, y: 64
}, {
	x: 704, y: 160
}, {
	x: 704, y: 256
}, {}], {
	//--------------Diamond
	x: 32, y: 64
});

