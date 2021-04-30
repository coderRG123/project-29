class Box {
    constructor(x,y) {
      var options = {
          'restitution':1,
            'friction':3.0,
            'density':0.5
      }
      this.body = Bodies.rectangle(x,y,30, 40,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, 30, 40);
    }
  };
