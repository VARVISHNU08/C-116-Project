function preload(){
   moustach = loadImage('https://i.postimg.cc/cJwpcw4y/profile.png');
   lipstick = loadImage('https://i.postimg.cc/GhD6RvGB/png-transparent-lipstick-lip-liner-cosmetics-lip-gloss-lips-miscellaneous-face-people.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(620, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function moustache(){
    count = "moustache";
}

function draw(){
     
    image(video, 0, 0, 300, 300);
    image(moustach, noseX, noseY, 20, 20);
}

function photo(){
    save('Photo.png');
}