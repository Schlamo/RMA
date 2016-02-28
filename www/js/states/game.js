//Variables-------------------------------------------------------------------------------------------------------------

//Window Width & Height
var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameDiv');

//Map
var map,
	layer;

//Player (Sprite etc.)
var player,
	timer,
	win,
	currentMap,
	currentTime ,
	playerDirection = 0;    //Walk Direction for the player sprite ( -1 = left  |  0 = none  |  1 = right )

//Coins
var maxCoins = 1,
	currentCoins = 0;

//Controls
var control_left,
	control_right,
	control_top;


//States----------------------------------------------------------------------------------------------------------------
game.state.add('boot', bootState);              //Boot
game.state.add('load', loadState);              //Load
game.state.add('menu', menuState);              //Game Menu
game.state.add('level', levelState);            //Level Select
game.state.add('highscore', highscoreState);    //Highscore Screen
game.state.add('play', playState);              //The Game
game.state.add('win', winState);                //Winning Screen

game.state.start('boot');                       //Start bootState