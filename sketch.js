
var scAngle;
var minAngle;
var hrAngle;

var hr;
var min; 
var sec;  


function setup() {

  createCanvas(1707,800);

  angleMode(DEGREES);

}

function draw() {
  background(0);
  
  translate(833,400); 
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();
  
  scAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  drawSprites();
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  stroke(255,0,255); 
  point(0,0); 
  //drawing the arcs 
  strokeWeight(10); 
  noFill(); 
  //Seconds 
  stroke(255,0,0); 
  arc(0,0,600,600,0,scAngle); 
  //Minutes 
  stroke(0,255,0); 
  arc(0,0,560,560,0,minAngle); 
  //Hour 
  stroke(0,0,255); 
  arc(0,0,520,520,0,hrAngle);

}

  