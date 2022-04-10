function setup() {
    video=createCapture(VIDEO);
    video.size(550,550);
    
     canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    
    function modelLoaded(){
        console.log("POSENET IS INITIALIED");
    }
    
    function gotPoses(results){
    if (results.lenght >0)
    {
        console.log(results);
    }
    }
    
    function draw() {
        background('red');
    }