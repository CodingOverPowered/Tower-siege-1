class Rbox{
    constructor(x,y){
        var option={
            isStatic:false
        }
    this.body=Bodies.rectangle(x,y,50,50,option)
    this.width=50;
    this.height=20
    World.add(world,this.body)
    }
display(){
    var pos = this.body.position
    rectMode(CENTER)
    fill("red")
    rect(pos.x,pos.y,50,50) 
}
}