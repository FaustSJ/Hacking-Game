var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

}

var num1;
var num2;
var num3;
var num4;
var guess1;
var guess2;
var guess3;
var guess4;
var guessCount= 0;

function create() {
	var num1 = game.rnd.integerInRange(1, 6);
	var num2 = game.rnd.integerInRange(1, 6);
	var num3 = game.rnd.integerInRange(1, 6);
	var num4 = game.rnd.integerInRange(1, 6);
	
	this.wasd = {
                g1: game.input.keyboard.addKey(Phaser.Keyboard.1),
                g2: game.input.keyboard.addKey(Phaser.Keyboard.2),
                g3: game.input.keyboard.addKey(Phaser.Keyboard.3),
                g4: game.input.keyboard.addKey(Phaser.Keyboard.4),
                g5: game.input.keyboard.addKey(Phaser.Keyboard.5),
                g6: game.input.keyboard.addKey(Phaser.Keyboard.6),
            };
	
}

function update() {


}

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    //game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}



