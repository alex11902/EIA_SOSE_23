namespace LuftfahrtClasses {
    export class Paraglider{
    position :Vector;
    velosity: Vector;
    size: number;
    
    constructor(_size: number){
       // console.log("Paraglider constructor");
        this.position = new Vector(0,0);
        this.velosity = new Vector(0,0);
        this.velosity.random (100,200);

        this.size = _size;
    }
    move(_timeslice: number): void{
       // console.log("Paraglider move");
        let Startpoint: Vector = new Vector (this.velosity.x,this.velosity.y);
        let Endpoint: Vector = new Vector (this.velosity.x,this.velosity.y);
        Startpoint.scale(_timeslice);
        this.position.add(Startpoint);
    }
    draw():void{
        //console.log("Paraglider draw");
  // Paraglider
  crc2.beginPath();
  crc2.arc(this.position.x, this.position.y, 15, Math.PI, Math.PI * 2);
  crc2.fillStyle = "blue";
  crc2.fill();
  crc2.closePath();

  // Seile
  crc2.beginPath();
  crc2.moveTo(this.position.x - 15, this.position.y);
  crc2.lineTo(this.position.x - 5, this.position.y + 40);
  crc2.moveTo(this.position.x + 15, this.position.y);
  crc2.lineTo(this.position.x + 5, this.position.y + 40);
  crc2.strokeStyle = "black";
  crc2.lineWidth = 1;
  crc2.stroke();
  crc2.closePath();

  // Körper
  crc2.beginPath();
  crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
  crc2.fillStyle = "yellow";
  crc2.fill();
  crc2.closePath();
}

    }
    
}