// Jihyeon Song
// Simple Paint Sketch Exercise
// CS099
// Spring 2020

function setup() {
  createCanvas(800,800);
  
  background(220);
  
}

function draw() {
  
  let d = 300;
  
  x = mouseX;
  y = mouseY;
  
  noStroke();
  
  fill(168,143,103,100);
  circle(x,y,d);
  arc(x-100,y-100,d/3,d/3,PI-QUARTER_PI,TWO_PI-QUARTER_PI,OPEN);
  arc(x+100,y-100,d/3,d/3,PI+QUARTER_PI,TWO_PI+QUARTER_PI,OPEN);
  
  fill(255,255,255,100);
  arc(x-100,y-100,d/5,d/5,PI-QUARTER_PI,TWO_PI-QUARTER_PI,OPEN);
  arc(x+100,y-100,d/5,d/5,PI+QUARTER_PI,TWO_PI+QUARTER_PI,OPEN);
  circle(x-50,y-50,d/8);
  circle(x+50,y-50,d/8);
  circle(x,y+40,d/3);
  
  fill(0,0,0,100);
  circle(x-50,y-50,d/17);
  circle(x+50,y-50,d/17);
  
  fill(170,133,63,100);
  ellipse(x,y+20,d/10,d/20);
  
  fill(230,118,104,100);
  arc(x,y+50,d/5,d/7,TWO_PI,PI);
  
}