class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.rope = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);

    }
    fly(){
        this.rope.bodyA =null;
    }
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
        push();
        }
        }
    
}
