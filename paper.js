class Paper{
    constructor(x, y, radius){
        var properties = {
            
            isStatic: false,
            friction:0.5,
            density:1.2,
            restitution: 0.3
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, properties);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
