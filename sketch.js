// select canvas
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

// draw rect function

function drawRect(){
  ctx.fillstyle = color;
  ctx.fillRect(x,y,w,h);

}
      drawRect(0,0, cvs.width, cvs.height, "Black");












xpos = 200
ypos = 200
dx = 5;
dy = 3;

function preload()
{

}

function setup() {
  createCanvas(400,400);
 
}

function draw() 
{
background('blue');
rect(10,ypos,10,80);
rect(388,mouseY,10,80);
ellipse(xpos,ypos,15,15);
if(xpos>=width-20 || xpos==20)
   {
    dx = -dx
   }
   if (ypos>=height-20 || ypos==20)


   function render(){
   drawRect(0,0, canvas.width, canvas.height, "BLUE");
   drawText(user.score, canvas.width/4, canvas.height/5,"WHITE");
   drawText(come.score,3*canvas.width/4, canvas.height/5, "WHITE");
   drawNet();
   drawRect(user.x, user.y, user.width, user,height, user.color);
   drawCircle(ball.x, ball.y, ball.radius, ball.color);
   }

   function game(){
      update(); // Movements, collision detection, Score update, -
       render();
   }

    const framePerSecond = 50;
    setInterval(game,1000/framePerSecond); //Call game(); 50 timese every 1000ms = 1sec

    const ball = {
      x : canvas.width/2,
      y : canvas.height/2,
      radius : 10,
      speed : 5,
      velocityX : 5,
      velocityY : 5,
      color : "WHITE"
    }

    function collision(b, p){
      p.top = p.y;
      p.bottom = p.y + p.height
      p.left = p.x;
      p.right = p.x + p.width

      b.top = b.y - b.radius;
      b.bottom = b.y + b.radius;
      b.left = b.x - b.radius;
      b.right = b.x + b.radius;

               b.right > p.left && b.btop < p.bottom && b.left < p.right && p.right && b.bottom && p.top;
      
      

    }
   
   
      
      

fill('white')
text(' PING PONG GAME',200,30);
xpos = xpos +dx;
ypos = ypos +dy;
for (var i=0; i < 400; i+=20){
    line(200,i,200,i+10);
}

  
  drawSprites();
}


