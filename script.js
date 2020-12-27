var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var barPosition = 80;
var ballX = 100;
var ballY = 100;
var xspeed = 10;
var yspeed = 1;
var hit = 0;
var bg = new Image();
bg.src = "https://raw.githubusercontent.com/utkarshtrivedi/bargame/main/img/bg.png";


function RectCircleColliding() {
  var circle = { x: ballX, y: ballY, r: 15 };
  var rect = { x: 0, y: barPosition, w: 20, h: 70 };
	if(ballX <= 40){
		if(ballY>barPosition && ballY<barPosition+70){
			xspeed = -xspeed;
			
		}
		else{
			
			youLose();
		}
	}
  

  //  if ballX - (ballRadius + barWidth) <=0
  // then ball is at a distance of barwidths from left wall
  // then lets check if the ballY is between barPosition and barPosition+h 
  // if it is, then ball is probabaly touching the panel and we should reverse speed.
  // otherwise its not.
}

// ctx.fillRect(480,0,20,700);



function createBar() {
  ctx.fillRect(0, barPosition, 20, 70);
}

function createCircle() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, 15, 0, 2 * Math.PI);
  ctx.fill();
}

window.addEventListener("keydown", function (event) {
  var x = event.keyCode;
  moveBar(x);
});

function moveBar(x) {
  if (x == 38) {
    if (barPosition != 0) {
      barPosition = barPosition - 20;
      // ctx.clearRect(0,0,20,500);
      // ctx.fillRect(0,barPosition,20,70);
    }
  }

  if (x == 40) {
    if (barPosition != 440) {
      barPosition = barPosition + 20;
      // ctx.clearRect(0,0,20,500);
      // ctx.fillRect(0,barPosition,20,70);
    }
  }
}

function moveCircle() {
  ctx.clearRect(20, 0, 480, 500);
  ctx.drawImage(bg, 0, 0, 500, 500);
  createBar();
  createCircle();
  ballX += xspeed;
  ballY += yspeed;
  if (ballX >= 460) {
    xspeed = -xspeed;
		
  }
  if (ballY >= 460 || ballY <= 40) {
    yspeed = -yspeed;
  }

  RectCircleColliding()
  requestAnimationFrame(moveCircle);
}

function youLose(){
ctx.fillStyle = "Red";
ctx.font = "20px Verdana";
ctx.fillText("You Lost", canvas.width / 2 - 50,canvas.height / 2 - 10);
}

moveCircle();