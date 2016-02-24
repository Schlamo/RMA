//Class for maps
function Map(csv, coins, win) {
	this.csv = csv;
	this.coins = coins;
	this.win = win;
}

//Tutorial Map
var tutorial = new Map('tutorial', [{
	//--------------Coins
	x: 64, y: 320
}, {
	x: 96, y: 96
}, {
	x: 128, y: 320
}, {
	x: 192, y: 256
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

