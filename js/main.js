var game = new Phaser.Game(900, 500, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.load.image('bg', 'assets/cpu.jpg');
	game.load.image('n0', 'assets/n0.jpg');
	game.load.image('n1', 'assets/n1.jpg');
	game.load.image('n2', 'assets/n2.jpg');
	game.load.image('n3','assets/n3.jpg');
	game.load.image('n4','assets/n4.jpg');
	game.load.image('n5','assets/n5.jpg');
	game.load.image('n6','assets/n6.jpg');
	game.load.image('newline','assets/newline.jpg');
	game.load.image('intro1', 'assets/intro1.jpg');
	game.load.image('intro2','assets/intro2.jpg');
	game.load.image('intro3','assets/intro3.jpg');
	game.load.image('ok','assets/ok.jpg');
	game.load.image('next','assets/next.jpg');
}

var num1;
var num2;
var num3;
var num4;
var guess1;
var guess2;
var guess3;
var guess4;
var guessCount= 0; //what line are we on?
var numCount = 0; //what digit are we on?
var background;
var next;



function create() {
	var num1 = game.rnd.integerInRange(1, 6);
	var num2 = game.rnd.integerInRange(1, 6);
	var num3 = game.rnd.integerInRange(1, 6);
	var num4 = game.rnd.integerInRange(1, 6);
	
	background = game.add.sprite(0, 0, 'intro1');
	next = game.add.sprite(440,300, 'next');
	
	next.inputEnabled = true;
  	next.events.onInputDown.add(infopage1, this);
	
	this.nums = {
                g1: game.input.keyboard.addKey(Phaser.Keyboard.Q),
                g2: game.input.keyboard.addKey(Phaser.Keyboard.W),
                g3: game.input.keyboard.addKey(Phaser.Keyboard.E),
                g4: game.input.keyboard.addKey(Phaser.Keyboard.R),
                g5: game.input.keyboard.addKey(Phaser.Keyboard.T),
                g6: game.input.keyboard.addKey(Phaser.Keyboard.Y),
            };
	
}

function infopage1 () {
	background.loadTexture('intro2',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(infopage2, this);
}

function infopage1 () {
	background.loadTexture('intro3',0);
	next.loadTexture('ok',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(update, this);
}

function update() {
	if(this.nums.g1.onTap)
	{
		make1()
			
	}
	
	if(this.nums.g2.onTap)
	{
		make2();
	}
	
	if(this.nums.g3.onTap)
	{
		make3();
	}
	
	if(this.nums.g4.onTap)
	{
		make4();
	}
	
	if(this.nums.g5.onTap)
	{
		make5();
	}
	
	if(this.nums.g6.onTap)
	{
		make6();
	}

}

function make1 () {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	var someSprite = game.add.sprite(xval,yval, 'n1');

	
	if(numCount===1){
		guess1 = 1;
	}
	if(numCount===2){
		guess2 = 1;
	}
	if(numCount===3){
		guess3 = 1;
	}
	if(numCount===4){
		guess4 = 1;
	}
	
	if(numCount===4){
		check();
		numCount = 0;
		guessCount += 50;
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
	
}
function make2 () {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	var someSprite = game.add.sprite(xval,yval, 'n2');
	
	if(numCount===1){
		guess1 = 2;
	}
	if(numCount===2){
		guess2 = 2;
	}
	if(numCount===3){
		guess3 = 2;
	}
	if(numCount===4){
		guess4 = 2;
	}
	
	if(numCount===4){
		check();
		numCount = 0;
		guessCount += 50;
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make3 () {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	var someSprite = game.add.sprite(xval,yval, 'n3');
	
	if(numCount===1){
		guess1 = 3;
	}
	if(numCount===2){
		guess2 = 3;
	}
	if(numCount===3){
		guess3 = 3;
	}
	if(numCount===4){
		guess4 = 3;
	}
	
	if(numCount===4){
		check();
		numCount = 0;
		guessCount += 50;
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make4 () {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	var someSprite = game.add.sprite(xval,yval, 'n4');
	
	if(numCount===1){
		guess1 = 4;
	}
	if(numCount===2){
		guess2 = 4;
	}
	if(numCount===3){
		guess3 = 4;
	}
	if(numCount===4){
		guess4 = 4;
	}
	
	if(numCount===4){
		check();
		numCount = 0;
		guessCount += 50;
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make5 () {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	var someSprite = game.add.sprite(xval,yval, 'n5');
	
	if(numCount===1){
		guess1 = 5;
	}
	if(numCount===2){
		guess2 = 5;
	}
	if(numCount===3){
		guess3 = 5;
	}
	if(numCount===4){
		guess4 = 5;
	}
	
	if(numCount===4){
		check();
		numCount = 0;
		guessCount += 50;
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make6 () {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	var someSprite = game.add.sprite(xval,yval, 'n6');
	
	if(numCount===1){
		guess1 = 6;
	}
	if(numCount===2){
		guess2 = 6;
	}
	if(numCount===3){
		guess3 = 6;
	}
	if(numCount===4){
		guess4 = 6;
	}
	
	if(numCount===4){
		check();
		numCount = 0;
		guessCount += 50;
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}

function check (){
	//(call checking function that prints results @ x=450, y=guessCount+3)
}

function endGame (){
}

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    //game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}



