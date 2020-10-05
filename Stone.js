class stone {
constructor ( options) {
    var options = {
        isStatic : false,
        restitution : 0,
        friction : 2,
        density : 1.5,
    }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       this.image = loadImage("stone img.png") ;

}

}