class Ball{
    constructor(x, y, width, height,angle) {
        var options = {
           
            restitution :0.4,
            frictionAir:0.005,
            density:1
        
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //var pos= this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
       // rectMode(CENTER);
       // strokeWeight(4);
        stroke("green");
        //rectMode(CENTER);
      //  fill(255);
       // rect(0,0,this.width, this.height);
       ellipse(0,0,this.width,this.height);
        pop();
        push();
      }
  }
  