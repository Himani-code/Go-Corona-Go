function Voil(){
    this.x = width/2;



    this.show=function(img_syringe){
        image(img_syringe,this.x, height-100, 20, 100);
        //fill("blue");
        //rectMode(CENTER); 
        //rect(this.x, height-20, 20, 60);
    }

    this.move = function(dir){
        this.x += dir*5;
        }
}
