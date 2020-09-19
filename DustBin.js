
class DustBin{

    constructor(x,y,width,height){
        this.color = "whiteJ";
        this.body = Bodies.rectangle(x,y,width,height, {isStatic:true});
        this.image= loadImage("dustbingreen.png")
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

		this.leftWall=Bodies.rectangle(this.x-this.width/2+90, this.y-this.height/2-50, 20, 180, {isStatic:true})
		this.rightWall=Bodies.rectangle(this.x+this.width/2+90, this.y-this.height/2-50, 20, 180, {isStatic:true})
		
	
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var posLeft = this.leftWall.position;
        var posRight = this.rightWall.position;
       // console.log(this.rightWall.position);

        push();
        translate(posLeft.x,posLeft.y)
        rectMode(CENTER);
        fill(this.color)
       // rect(0,0,20,180)
        pop();

        push();
        translate(posRight.x,posRight.y)
        rectMode(CENTER);
        fill(this.color)
       //rect(0,0,20,180)
        pop();


        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill(this.color)
        image(this.image,0,-180, 180, 200);
       // rect(0,0,180,20)
        pop();




    }
}