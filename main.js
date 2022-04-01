canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rower_width=100;
rower_height=90;
rower_x=50;
rower_y=50;
array_images=["image1.jfif", "image2.jfif", "image3.jpg", "image4.jpg", "image5.jpg"];
randomNumber=Math.floor (Math.random()*5)
background_image=array_images[randomNumber];
var rower_image="rover.png";

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;
    rower_imagetag=new Image();
    rower_imagetag.onload=uploadrower;
    rower_imagetag.src=rower_image;
}

function uploadbackground(){
ctx.drawImage(background_imagetag, 0,0, canvas.width, canvas.height);
}

function uploadrower(){
    ctx.drawImage(rower_imagetag, rower_x, rower_y, rower_width, rower_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");

    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if (rower_y>=0){
    rower_y=rower_y-10;
    uploadbackground();
    uploadrower();
    }
}
function down(){
    if (rower_y<=500){
        rower_y=rower_y+10;
        uploadbackground();
        uploadrower();
    
}
}

function left(){
if(rower_x>=0){
    rower_x=rower_x-10;
    uploadbackground();
    uploadrower();
}
}
function right(){
    if(rower_x<=700){
rower_x=rower_x+10;
uploadbackground();
uploadrower();
    }
}