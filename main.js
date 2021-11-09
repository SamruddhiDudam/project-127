song1 = "";
song2 = "";
left_wrist_x = "";
left_wrist_y = "";
right_wrist_x = "";
right_wrist_y = "";

function loadSound() {

}

function preload() {
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}



function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

