//Window Width & Height
var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameDiv');

//Variables
//Map
var map;
//Map Layer
var layer;
//Player (Sprite etc.)
var player;
//Walk Direction for the player sprite ( -1 = left  |  0 = none  |  1 = right )
var playerDirection = 0;

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
