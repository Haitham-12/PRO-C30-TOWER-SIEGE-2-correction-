class Block {
    constructor(x, y, width, height){
      //super(x,y,50,50)
      this.Visibility = 255;
      var options = {
        restitution:1,
        friction:100,
    }
    //this.Visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      console.log(this.body.speed);
      //correction you told me to do 
      if(this.body.speed < 3){
      var pos =this.body.position;
       rectMode(CENTER); fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
         console.log(this.body.speed);} 
         else{
            World.remove(world, this.body);
             push(); this.Visibility = this.Visibility - 5;
              pop(); 
      }
    }
  
  };

  class Striker {
    
    constructor(x, y, width, height){
      var options = {
        restitution:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
      //this.image = loadImage("sprites/wood1.png");
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }

  