namespace LuftfahrtClasses {
    export class Insect{
    position :Vector;
    velosity: Vector;
    size: number;
    
    constructor(_size: number){
        //console.log("Insect constructor");
        this.position = new Vector(0,0);
        this.velosity = new Vector(0,0);
        this.velosity.random (100,200);

        this.size = _size;
    }
    move(_timeslice: number): void{
       // console.log("Insect move");
        let offset: Vector = new Vector (this.velosity.x,this.velosity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
        // wenn position canvas verlässt
        if (this.position.x < 0)
        //addend
        this.position.x += crc2.canvas.width;
        if (this.position.y < 0)
        //addend
        this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
        //addend
        this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
        //addend
        this.position.y -= crc2.canvas.height;
    
    
    }




    draw():void{
   // console.log("Insect draw");
       let radius: number = 3;

  crc2.save();

  // Körper
  crc2.beginPath();
  crc2.fillStyle = "red";
  crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
  crc2.fill();
  crc2.closePath();

  // Beine
  crc2.translate(this.position.x, this.position.y);
  crc2.scale(this.size, this.size);
  crc2.beginPath();
  crc2.strokeStyle = "black";
  crc2.moveTo(0, 1);
  crc2.lineTo(3, 7);
  crc2.moveTo(0, 0);
  crc2.lineTo(-3, 7);
  crc2.moveTo(0, 0);
  crc2.lineTo(1, 2);
  crc2.moveTo(0, 0);
  crc2.lineTo(-1.5, 2);
  crc2.stroke();

  crc2.restore();
};


    }
    }
