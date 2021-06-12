var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(60);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey == true && key_pressed == "80") {
        console.log("P and shift key have been pressed together.");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && key_pressed == "77") {
        console.log("M and shift key have been pressed together.");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(key_pressed == "38") {
        up();
        console.log("Up!");
    }
    if(key_pressed == "40") {
        down();
        console.log("Down!");
    }
    if(key_pressed == "37") {
        left();
        console.log("Left!");
    }
    if(key_pressed == "39") {
        right();
        console.log("Right!");
    }
    if(key_pressed == "70") {
        new_image('face.jpg');
        console.log("f");
    }
    if(key_pressed == "66") {
        new_image('body.png');
        console.log("b");
    }
    if(key_pressed == "76") {
        new_image('legs.jpg');
        console.log("l");
    }
    if(key_pressed == "82") {
        new_image('right_hand.jpg');
        console.log("r");
    }
    if(key_pressed == "72") {
        new_image('left_hand.jpg');
        console.log("h");
    }
}

function up() {
    if(player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When the up arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When the down arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When the left arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x <= 935) {
        player_x = player_x + block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When the right arrow is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}