function Vaccine(x,y){
    this.x = x;
    this.y = y;
    this.r = 8;

    this.show=function(){
        stroke("green");
        lineWidth=10;
        fill("cyan"); 
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.vanish = function(){
        this.r = 0;
    }

    this.hits = function(corona){
        var dis = dist(this.x, this.y, corona.x, corona.y);
        if(dis < this.r + corona.r){
            return true;
        }
        else{
            return false;
        }
    }

    this.move = function(){
        this.y = this.y - 5;
    }
}