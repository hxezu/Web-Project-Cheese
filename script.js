// JavaScript source code
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var dx= 5;
var dy= 5;
var x = 100;
var y = 100;
var ballRadius = 20;
function drawBall() {
	context.beginPath();
	context.arc(x, y, ballRadius, 0, 2.0*Math.PI, true);
	context.fillStyle = "red";
	context.fill();
}
		function calculate() {
			x = x + dx;
			y = y + dy;
			if (x == 0 || x == 300)
			{
				dx = -dx;
			}
			if ( y == 0 || y == 200)
			{
				dy = -dy;
			}
		}
		function draw() {
			context.clearRect(0, 0, 300, 200);
			drawBall();
			calculate();
		}
		var ball=setInterval(draw,10);
		function stopBall(){
			clearInterval(ball);
		}
