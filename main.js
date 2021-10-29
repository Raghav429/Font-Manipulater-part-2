function setup()
{
    video= createCapture(VIDEO);
    video.size(400, 400);
    video.position(100,100)
    
canvas= createCanvas(400, 400);
canvas.position(500, 100);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
    console.log('PoseNet is Loaded');
}
function gotPoses(results)