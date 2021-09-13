var voil;
var corona = [];
var vaccines = [];
var score = 0;

function preload(){
    img=loadImage("https://i.postimg.cc/0545C13G/covid.png");
    img_syringe=loadImage("https://i.postimg.cc/T35pM383/syringe.png");
}
function setup(){
    canvas = createCanvas(800,500);
    canvas.center();
    voil = new Voil();
    //vaccine = new Vaccine(width/2, height/2);
    for(i=0;i<9;i++){
        corona[i] = new Corona(i*80+60,20);
    }
    
}

function draw(){
    background("black");
    voil.show(img_syringe);
    //stroke(50,255,50);
    textSize(50);
    text('Score: '+score,280,100);
    for(i=0; i<vaccines.length;i++){
        vaccines[i].show();
        vaccines[i].move();

        for(j=0; j<corona.length;j++){
            if(vaccines[i].hits(corona[j])){
                console.log("corona dead");
                vaccines[i].vanish();
                //corona[j].vanish(corona[j]);
                corona.splice(j, 1);
                score = score + 1;
            }
        }
    }

    var right = false;
    var left = false;

    for(i=0; i<corona.length;i++){
        corona[i].show(img);
        corona[i].move();
        if(corona[i].x > width-50){
            right = true;
        }
        if(corona[i].x < 0){
            left = true;
        }
        if(corona[i].y > height-100){
            //stroke(255,255,255);
            textSize(100);
            text('GAME OVER',100,200);
            for(i=0; i<corona.length;i++){
                corona[i].vanish();
            }
        }
    }
    if(right){
        for(i=0; i<corona.length;i++){
            corona[i].xdir = -1;
            corona[i].ydir = +.5;
        }
    }

    if(left){
        for(i=0; i<corona.length;i++){
            corona[i].xdir = +1;
        }
    }
}

function keyPressed(e){
    if(key === ' '){
        var vaccine = new Vaccine(voil.x+10, height-40);
        vaccines.push(vaccine);
    }
    if(keyCode === RIGHT_ARROW){
        voil.move(1);
    }
    else if(keyCode === LEFT_ARROW){
        voil.move(-1);
    }
}