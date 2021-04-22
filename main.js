function setup() {
    canvas=createCanvas(650,450);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML="Detecting Objects....";
}
img="";
status="";
objects=[];
function modelLoaded() {
  console.log("cocossd has loaded!😊🌈");
  status=true;
  objectdetector.detect(img,gotResult);
}

function gotResult(error,results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    objects=results;
  }
}

function preload() {
  img=loadImage("dog_cat.jpg");  
}

function draw() {
  image(img,0,0,650,450);
  if(status !="") {
    for (i=0;i<objects.length;i++){
      document.getElementById("status").innerHTML="Objects Detected!😊🌈"
  fill("#a398ff");
  percentage=floor(objects[i].confidence*100);
  text(objects[i].label+" "+percentage+"%",objects[i].x,objects[i].y);

  noFill()
  stroke("#a398ff");
  rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  } 
}



