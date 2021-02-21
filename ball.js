class Ball{
    constructor(x,y){
        var options = {
                'restitution':0.3, 
        'friction':0.5,
        'dentity':1.2,   
        }
        this.body = Bodies.circle(x,y,25,options);
        this.width =this.body.circleRadius;
        this.height=this.body.circleRadius;
        this.maxSides = {x:85,y:-85};
        World.add(world,this.body);
    }
    display(){
        fill("red");
       push();
     
  //ellipse(0,0,this.width,this.height);
        var pos = this.body.position;
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.width,this.height);
      pop();
    }

}