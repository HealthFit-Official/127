song0="";
song1="";

function preload()
{
    song0 = loadSound("L's theme.mp3");
    song1 = loadSound("Gate_steiner.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,500);
}

