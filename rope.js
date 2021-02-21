class Rope {
constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options={
        bodyA: body1,
        bodyB: body2,
       pointB:{x:this.offsetX, y:this.offsetY}
    }

      this.rope = Matter.Constraint.create(options);
      World.add(world,this.rope);
}
display(){

//push();
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    strokeWeight(3)

    var ballx = pointA.x;
    var bally = pointA.y;

    var wallx = pointB.x + this.offsetX;
    var wally = pointB.y + this.offsetY;

    line(ballx,bally,wallx,wally);
   // pop();
}
}


