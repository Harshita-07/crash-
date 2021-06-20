class Rock {
    constructor(x,y,width,height){
      var options ={ 
          isStatic: false
        }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.image2 = loadImage('images/rock1.jpg');
      this.width = width;
      this.height = height;
    }
    display()
    {
        imageMode(CENTER);
        image(this.image2, this.body.position.x, this.body.position.y, this.width, this.height)

    }
        
}