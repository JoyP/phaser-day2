var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('background','assets/misc/starfield.jpg');


    game.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
    game.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    // game.load.audio('sfx', [ 'assets/audio/SoundEffects/fx_mixdown.mp3', 'assets/audio/SoundEffects/fx_mixdown.ogg' ]);
    game.load.audio('sfx', 'assets/audio/SoundEffects/fx_mixdown.ogg');
    game.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);


}

var fx;

function create() {

	game.add.image(0, 0, 'background');

	//	Here we set-up our audio sprite
	fx = game.add.audio('sfx');

	//	And this defines the markers.

	//	They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
	//	You can also set the volume and loop state, although we don't use them in this example (see the docs)

	fx.addMarker('alien death', 1, 1.0);
	fx.addMarker('escape', 4, 3.2);
	fx.addMarker('numkey', 9, 0.1);
	fx.addMarker('ping', 10, 1.0);
	fx.addMarker('death', 12, 4.2);

	//	Make some buttons to trigger the sounds
	makeButton('alien death', 0, 0);
	makeButton('escape', 150, 75);
	makeButton('numkey', 300, 0);
	makeButton('ping', 0, 160);
	makeButton('death', 300, 160);

  musicButton('Pause', 0, 300);
  musicButton('Resume', 300, 300);

  music = game.add.audio('boden');
  music.play();

}

function startStop(button) {

    if (button.name === 'Pause')
    {
        music.pause();
    }
    else
    {
        music.resume();
    }

}

function makeButton(name, x, y) {

    var button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    var text = game.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

}

function musicButton(name, x, y) {

    var button = game.add.button(x, y, 'button', startStop, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    var text = game.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

}

function click(button) {

	fx.play(button.name);

}
