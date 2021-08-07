noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelLoded);
    posenet.on("pose",gotposes);
}
function modelLoded(){
    console.log("pose net is started");
}
function gotposes(results){
if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
}
}

function draw(){
    background("#0800ff");
    document.getElementById("side").innerHTML = "width and height of a square will be = " + difference + "px";
    fill("#ff00ee");
    stroke("#00fffb");
    square(noseY,noseX,difference);
}