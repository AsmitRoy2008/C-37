var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game, allPlayers;
var distance = 0;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{

}
