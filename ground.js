class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(560,740,1900,50,ground_options)
          World.add(world,this.ground);
    }
    display(){
        var posX = this.ground.position.x;
        var posY = this.ground.position.y;
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(posX,posY, 1950,65);
    }
}