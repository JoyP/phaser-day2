var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', {preload:preload, create:create, update:update});

function preload(){
    game.load.spritesheet('button', '/img/buttons/button_sprite_sheet.png', 193,71);
//  game.load.spritesheet('arrows', '/img/arrow-button.png');
//  game.load.spritesheet('ood', '/img/button_texture_atlas.png');
//  game.load.spritesheet('numbers', '/img/number-buttons-90x90.png');

}

var arrows, ood, numbers;

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);

  button = game.add.button(game, 0, 0, 'button', actionOnClick, this, 0, 2, 1);
}

function update(){

}

function actionOnClick(){
  console.log('button clicked');
}
