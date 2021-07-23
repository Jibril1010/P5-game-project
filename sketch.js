let XmePos= 100;
let YmePos = 100;
let badPosX= 300;
let badPosY= 300;
let myLeft, myRight, myTop, myDown;
let badLeft, badRight, badTop, badDown;

let ballArray= [];
function setup()
{createCanvas(500,500);
noStroke();
rectMode(CENTER);
for (let i =0; i< 20; i++){
   let temp= new Ball(random(0,500),250,0,255,0,random(0,5));
  ballArray.push(temp);
}
}
function draw(){
    myLeft= XmePos-25;
    myRight= XmePos +25;
    myTop = YmePos- 25;
    myDown= YmePos + 25;
background(0);
fill(250,0,0);
rect(XmePos,YmePos,25,25);

//falling ball
for(let i=0;i<ballArray.length;i++){
    fill(ballArray[i].red,ballArray[i].blue,ballArray[i].green);
    ellipse(ballArray[i].xPos,ballArray[i].yPos, 50,50);

    ballArray[i].yPos+= ballArray[i].speed;

    badRight= ballArray[i].xPos +25;
    badLeft = ballArray[i].xPos -25;
    badTop= ballArray[i].yPos - 25;
    badDown=ballArray[i].yPos+ 25;

    if(ballArray[i].yPos> 525){
        ballArray[i].yPos= -25;
    }
    console.log(myLeft, myRight, myTop,myDown);
    console.log(badRight, badLeft,badDown,badTop);
    if(myLeft>badRight ||myRight<badLeft||myTop>badDown||myDown<badTop){
        
        fill(255);
        textSize(22);
        text("I am not collding with my enemy", 120, 400);
        }
        else{
        fill(random(255),random(255),random(255));
        text("I am dying",120,200)
        }
}
// movement

if (keyIsDown(LEFT_ARROW)){

XmePos-= 3    
}
 if(keyIsDown(RIGHT_ARROW)){

    XmePos+=3
 }
 if(keyIsDown(UP_ARROW)){

    YmePos-=3
 }
 if (keyIsDown(DOWN_ARROW)){
     YmePos+=3
 }
//collision




}
 
class Ball {

   constructor(x,y,r,g,b, s){
   this.xPos = x;
   this.yPos= y;
   this.red = r;
   this.green =g ;
   this.blue =b;
   this.speed = s
   }
   
   }