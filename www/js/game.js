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
game.state.add('level', levelState);
game.state.add('highscore', highscoreState);
game.state.add('play', playState);
game.state.add('win', winState);

//Start bootState
game.state.start('boot');

var currentMap;