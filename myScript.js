//alert("sample text");
class Rectangle{

    constructor(_width,_height,_color){
        this.width = _width;
        this.height = _height;
        this.color = _color;

        console.log("This is a rectangle! \n width:"+ this.width +" height:"+this.height+" color:"+this.color);
    }
}
let r1 = new Rectangle(3,5,"blue");
let r2 = new Rectangle(4,9,"red");