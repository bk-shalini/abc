var fixedRect, movingRect;

function setup()
{
  createCanvas(1200,800);

  fixedRect = createSprite(600,200,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw()
{
background("black");

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if (movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
  &&
  fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
  &&
  fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
  &&
  movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
  )
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
         else {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }


drawSprites();

}





/*var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  //car.shapeColor = color(255);
  wall=createSprite(1500,200,60,height/2);
  //wall.shapeColor=color(80,80,80);
 
   
}

function draw() {
  background(255,255,255);  
 
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
     car.velocity=0;
     var deformation=0.5*weight*speed*speed/22509 ;
     if(deformation>180)
     {
        car.shapeColor=color(255,0,0);
     }

     if(deformation<180 && deformation>100)
     {
        car.shapeColor=color(230,230,0);
     }

     if(deformation<180)
     {
        car.shapeColor=color(0,255,0);
     }
  }
  drawSprites();
  
}






/*var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() 
{
  background(0,0,0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  
  if (isTouching(movingRect,gameObject2))
  {
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
else
{
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
}


  drawSprites();
}
*/



































/*


function draw() 
{
  background("black");  

 



  if (movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  



  drawSprites();
}

*/



/*
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}

*/

