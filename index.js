import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";

let canvas = document.getElementById("game1");
let ctx = canvas.getContext("2d");
let timer;
let x=true;
canvas.width = 600;
canvas.height = 600;
var l=0;
var index;
var time_elapsed;
var maxTime;
var start_time;
let background = new Image();
background.src = "images/space.png";
let playerBulletController;
let enemyBulletController;
let enemyController;
let player;
let isGameOver;
let didWin;
var music= new Audio('sounds/main_.mp3');
var ship= new Audio('sounds/ship-ded.mp3');
var playerHurt = new Audio("sounds/destroy.mp3");
playerHurt.volume = 0.2;
var i=0;
var myScores;
var b=false;

$("#loginButton").click(function(){
  myScores=[];
});

function game() {
  document.getElementById('playA').style.visibility = "visible";
  document.getElementById('playA').disabled = false;
  
  if (i <= 0 && (!isGameOver)){
    i = 60;
    timer--;
  }
  else{
    i--;
  }
  document.getElementById('time1').innerText = timer;
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  displayGameOver();
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  }
}

function displayGameOver() {

  if (isGameOver && !b) {
    setTimeout(function() {
      printHighScores();
    }, 1000);
    
    b=true;
  }
  if (isGameOver){ 
    let text="";
    if (timer<=0){
      if(document.getElementById('score').innerHTML < 100){
        text = "you can do better"
      }
      else{
        text = "Winner!"
      }
    }
    else{
      text = didWin ? "Champion!" : "You Lost";
    }
    let textOffset = didWin ? 3.5 : 5;

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
  }
}

function checkGameOver() {
  if (isGameOver) {
    music.pause();
    return;
  }
  if (enemyBulletController.collideWith(player)) {
    ship.play();
    playerHurt.play();
    l = l - 1;
    player.y = player.y_player;
    player.x = player.x_player;
    if (heart3.style.display !== 'none') {
      heart3.style.display = 'none';
    } else if (heart2.style.display !== 'none') {
      heart2.style.display = 'none';
    } else {
      heart1.style.display = 'none';
      clearInterval(intervalId);
    }
  }

  if (l <= 0){
    isGameOver = true;
  }

  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
  if (timer <= 0){
    isGameOver = true;
  }

}


  if (Math.floor(time_elapsed)>=maxTime){
    isGameOver = true;
  }

function addHighScore(){
	let finalScore = enemyController.score;
	myScores.push(finalScore)
}

function printHighScores(){
	addHighScore()
	let scoreBoard = document.getElementById("highScores")
	let list = document.getElementById("scoresList");
	list.innerHTML = ''
	let data = myScores.slice()
	let sortedData = data.sort(function(a, b) {return a - b;}).reverse()
	for(let i=0; i<sortedData.length; i++){
		console.log(sortedData[i])
		let li = document.createElement("li");
		li.innerText = " Score: " + sortedData[i];
		list.appendChild(li);
	}
	scoreBoard.style.display = "block"
}

$(".close-highScores").click(function(){
  scoreBoard.style.display = "none";
  b=false;

})

$("#play").click(function(){
  if (document.getElementById('setTm').value>=120){
    music.loop=true;
	  music.play();
    canvas = document.getElementById("game1");
    ctx = canvas.getContext("2d");
    start_time = new Date();
    canvas.width = 600;
    canvas.height = 600;
    
    background = new Image();
    background.src = "images/space.png";
    
    playerBulletController = new BulletController(canvas, 10, "red", true);
    enemyBulletController = new BulletController(canvas, 2, "white", false);
    enemyController = new EnemyController(
      canvas,
      enemyBulletController,
      playerBulletController
    );
    player = new Player(canvas, 3, playerBulletController);
    isGameOver = false;
    didWin = false;
    l = 3;
    heart3.style.display = 'block';
    heart2.style.display = 'block';
    heart1.style.display = 'block';
    timer=document.getElementById("setTm").value;
    b=false;

    if (x){
      setInterval(game, 1000 / 60);
      x = false;
    }
  }
});


$("#playA").click(function(){
  music.pause();
  
});



