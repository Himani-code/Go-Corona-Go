function Corona(x, y){
    this.x = x;
    this.y = y;
    this.r = 30;
    this.ydir = 0;
    this.xdir = 1;

    this.vanish = function(cov){
        this.r = 0;
        //this.x = -500;
        //cov.remove();
    }

    this.move = function(){
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
    }

    this.show=function(img){
        //fill("yellowgreen");
        image(img,this.x, this.y, this.r*2, this.r*2);
        //ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}