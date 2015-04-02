//http://wonderdeep.github.io/LostTrack/index.html
var game = new Phaser.Game(900, 500, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.load.image('bg', 'assets/cpu.jpg');
	game.load.image('n0', 'assets/n0.png');
	game.load.image('n1', 'assets/n1.png');
	game.load.image('n2', 'assets/n2.png');
	game.load.image('n3','assets/n3.png');
	game.load.image('n4','assets/n4.png');
	game.load.image('n5','assets/n5.png');
	game.load.image('n6','assets/n6.png');
	game.load.image('newline','assets/newline.png');
	game.load.image('intro1', 'assets/Intro1.jpg');
	game.load.image('intro2','assets/intro2.jpg');
	game.load.image('intro3','assets/intro3.jpg');
	game.load.image('ok','assets/ok.jpg');
	game.load.image('next','assets/next.jpg');
	game.load.image('alert','assets/alert.jpg');
	game.load.image('win','assets/winning.jpg');
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
var timer1 = 0;
var timer2 = 0;
var timer3 = 0;
var timer4 = 0;
var timer5 = 0;
var timer6 = 0;



function create() {
	var num1 = game.rnd.integerInRange(1, 6);
	var num2 = game.rnd.integerInRange(1, 6);
	var num3 = game.rnd.integerInRange(1, 6);
	var num4 = game.rnd.integerInRange(1, 6);
	
	background = game.add.sprite(0, 0, 'intro1');
	next = game.add.sprite(370,400, 'next');
	
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
////////////////////////////////////////////////////////////////////////////////
function infopage1() {
	background.loadTexture('intro2',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(infopage2, this);
}

function infopage2() {
	background.loadTexture('intro3',0);
	next.loadTexture('ok',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(startpage, this);
}

function startpage(){
	background.loadTexture('bg',0);
	next.visible = false;
	next.inputEnabled = false;
	game.add.sprite(10, 3, 'newline');
	numCount +=1;
	update();
}
////////////////////////////////////////////////////////////////////////////////
function update() {
	if(this.nums.g1.isDown)
	{
		if(game.time.now>timer1)
		{
			make1();
			timer1 = game.time.now+2000;
		}
			
	}
	
	if(this.nums.g2.isDown)
	{
		if(game.time.now>timer2)
		{
			make2();
			timer2 = game.time.now+2000;
		}
	}
	
	if(this.nums.g3.isDown)
	{
		if(game.time.now>timer3)
		{
			make3();
			timer3 = game.time.now+2000;
		}
	}
	
	if(this.nums.g4.isDown)
	{
		if(game.time.now>timer4)
		{
			make4();
			timer4 = game.time.now+2000;
		}
	}
	
	if(this.nums.g5.isDown)
	{
		if(game.time.now>timer5)
		{
			make5();
			timer5 = game.time.now+2000;
		}
	}
	
	if(this.nums.g6.isDown)
	{
		if(game.time.now>timer6)
		{
			make6();
			timer6 = game.time.now+2000;
		}
	}

}
////////////////////////////////////////////////////////////////////////////////
function make1() {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	game.add.sprite(xval,yval, 'n1');

	
	if(numCount===2){
		guess1 = 1;
	}
	if(numCount===3){
		guess2 = 1;
	}
	if(numCount===4){
		guess3 = 1;
	}
	if(numCount===5){
		guess4 = 1;
		check();
		numCount = 1;
		guessCount += 50;
		yval = guessCount+3;
		game.add.sprite(10, yval, 'newline');
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
	
}
function make2() {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	game.add.sprite(xval,yval, 'n2');
	
	if(numCount===2){
		guess1 = 2;
	}
	if(numCount===3){
		guess2 = 2;
	}
	if(numCount===4){
		guess3 = 2;
	}
	if(numCount===5){
		guess4 = 2;
		check();
		numCount = 1;
		guessCount += 50;
		yval = guessCount+3;
		game.add.sprite(10, yval, 'newline');
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make3() {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	game.add.sprite(xval,yval, 'n3');
	
	if(numCount===2){
		guess1 = 3;
	}
	if(numCount===3){
		guess2 = 3;
	}
	if(numCount===4){
		guess3 = 3;
	}
	if(numCount===5){
		guess4 = 3;
		check();
		numCount = 1;
		guessCount += 50;
		yval = guessCount+3;
		game.add.sprite(10, yval, 'newline');
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make4() {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	game.add.sprite(xval,yval, 'n4');
	
	if(numCount===2){
		guess1 = 4;
	}
	if(numCount===3){
		guess2 = 4;
	}
	if(numCount===4){
		guess3 = 4;
	}
	if(numCount===5){
		guess4 = 4;
		check();
		numCount = 1;
		guessCount += 50;
		yval = guessCount+3;
		game.add.sprite(10, yval, 'newline');
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make5() {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	game.add.sprite(xval,yval, 'n5');
	
	if(numCount===2){
		guess1 = 5;
	}
	if(numCount===3){
		guess2 = 5;
	}
	if(numCount===4){
		guess3 = 5;
	}
	if(numCount===5){
		guess4 = 5;
		check();
		numCount = 1;
		guessCount += 50;
		yval = guessCount+3;
		game.add.sprite(10, yval, 'newline');
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
function make6() {
	var xval = (numCount*20)+5;
	numCount += 1;
	var yval = guessCount + 3;
	game.add.sprite(xval,yval, 'n6');
	
	if(numCount===2){
		guess1 = 6;
	}
	if(numCount===3){
		guess2 = 6;
	}
	if(numCount===4){
		guess3 = 6;
	}
	if(numCount===5){
		guess4 = 6;
		check();
		numCount = 1;
		guessCount += 50;
		yval = guessCount+3;
		game.add.sprite(10, yval, 'newline');
	}
		 
		 
	if(guessCount===100)
	{
		endGame();
	}
}
////////////////////////////////////////////////////////////////////////////////
function check(){
	var xval = 450;
	var amount = 0;
	var yval = 0;
	
	//first, any 1's are taken care of.
	if (guess1===num1){
		yval = y=guessCount+3;
		xval += (amount*20);
		game.add.sprite(xval,yval, 'n1');
		amount += 1;
	}
	if (guess2===num2){
		yval = y=guessCount+3;
		xval += (amount*20);
		game.add.sprite(xval,yval, 'n1');
		amount += 1;
	}
	if (guess3===num3){
		yval = y=guessCount+3;
		xval += (amount*20);
		game.add.sprite(xval,yval, 'n1');
		amount += 1;
	}
	if (guess4===num4){
		yval = y=guessCount+3;
		xval += (amount*20);
		game.add.sprite(xval,yval, 'n1');
		amount += 1;
	}
	
	if(amount===4){
		winning();
	}
	else
	{
		//then, any zeros are counted
		//By nesting the if statements, we avoid any repeats
		
		//guess1
		if(guess1===num2){
			yval = y=guessCount+3;
			xval += (amount*20);
			game.add.sprite(xval,yval, 'n0');
			amount += 1;
		}
		else{
			if(guess1===num3){
				yval = y=guessCount+3;
				xval += (amount*20);
				game.add.sprite(xval,yval, 'n0');
				amount += 1;
			
			}
			else{
				if(guess1===num4){
					yval = y=guessCount+3;
					xval += (amount*20);
					game.add.sprite(xval,yval, 'n0');
					amount += 1;
				}
			}
		}
		
		//guess2
		if(guess2===num1){
			yval = y=guessCount+3;
			xval += (amount*20);
			game.add.sprite(xval,yval, 'n0');
			amount += 1;
		}
		else{
			if(guess2===num3){
				yval = y=guessCount+3;
				xval += (amount*20);
				game.add.sprite(xval,yval, 'n0');
				amount += 1;
			
			}
			else{
				if(guess2===num4){
					yval = y=guessCount+3;
					xval += (amount*20);
					game.add.sprite(xval,yval, 'n0');
					amount += 1;
				}
			}
		}
		
		//guess3
		if(guess3===num2){
			yval = y=guessCount+3;
			xval += (amount*20);
			game.add.sprite(xval,yval, 'n0');
			amount += 1;
		}
		else{
			if(guess3===num1){
				yval = y=guessCount+3;
				xval += (amount*20);
				game.add.sprite(xval,yval, 'n0');
				amount += 1;
			
			}
			else{
				if(guess3===num4){
					yval = y=guessCount+3;
					xval += (amount*20);
					game.add.sprite(xval,yval, 'n0');
					amount += 1;
				}
			}
		}
		
		//guess4
		if(guess4===num2){
			yval = y=guessCount+3;
			xval += (amount*20);
			game.add.sprite(xval,yval, 'n0');
			amount += 1;
		}
		else{
			if(guess4===num3){
				yval = y=guessCount+3;
				xval += (amount*20);
				game.add.sprite(xval,yval, 'n0');
				amount += 1;
			
			}
			else{
				if(guess4===num1){
					yval = y=guessCount+3;
					xval += (amount*20);
					game.add.sprite(xval,yval, 'n0');
					amount += 1;
				}
			}
		}
	}
}
////////////////////////////////////////////////////////////////////////////////
function endGame(){
	background.loadTexture('alert',0);
	next.visible= true;
	next.loadTexture('ok',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(restart, this);
	
}

function winning(){
	background.loadTexture('win',0);
	next.visible = true;
	next.loadTexture('ok',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(restart, this);
}

function restart(){
	background.loadTexture('intro1',0);
	next.loadTexture('next',0);
	next.inputEnabled = true;
  	next.events.onInputDown.add(infopage1, this);
}

function render() {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    //game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}



