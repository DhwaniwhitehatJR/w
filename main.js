noseX=0;
noseY=0;
lipX=0;
lipY=0;
mustacheX=0
mustacheY=0
glassesX=0
glassesY=0
function preload(){
 clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png") ; 
 clown_nose1=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png") ; 
 clown_nose2=loadImage("https://i.postimg.cc/3x3QzSGq/m.png") ; 
 clown_nose3=loadImage("1.png") ;
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is inisilized');
}

function gotPoses(results){
    if(results.length > 0)
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-25;
    lipX = results[0].pose.nose.x-30;
    lipY = results[0].pose.nose.y+20;
    mustacheX = results[0].pose.nose.x-25;
    mustacheY = results[0].pose.nose.y-10;
    glassesX = results[0].pose.nose.x-1;
    glassesY = results[0].pose.nose.y-60;
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
    image(clown_nose1, lipX, lipY, 50, 20);
    image(clown_nose2, mustacheX, mustacheY, 80, 35);
    image(clown_nose3, glassesX, glassesY, 80, 35);
  }
  

  
  