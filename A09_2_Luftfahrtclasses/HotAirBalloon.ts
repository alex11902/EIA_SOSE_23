namespace LuftfahrtClasses {
    export class HotAirBalloon{
    position :Vector;
    velosity: Vector;

    
    constructor(_size: number){
        console.log("Balloon constructor");
        this.position = new Vector(480, 400);
        this.velosity = new Vector(0,0);
        this.velosity.random (100,150);
    }
    move(_timeslice: number): void{
        //console.log("Balloon move");
        let offset: Vector = new Vector (this.velosity.x,this.velosity.y);
        offset.scale(_timeslice);
        this.position.add(offset);

  // Begrenzung auf y-Maximum
  if (this.position.y < 100) {
    this.position.y = 100;
  } else if (this.position.y > 200) {
    this.position.y = 200;
  }

  
  // Begrenzung auf Canvas-Breite
  if (this.position.x < 0) {
    this.position.x = 0;
  } else if (this.position.x > 820) {
    this.position.x = 820;
  }

}
    draw():void{
        //console.log("Balloon draw"); // Ballon
 // Ballon
crc2.beginPath();
crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
crc2.fillStyle = "orange";
crc2.fill();
crc2.closePath();

// Seile
crc2.beginPath();
crc2.moveTo(this.position.x - 15, this.position.y + 20);
crc2.lineTo(this.position.x - 5, this.position.y + 45);
crc2.moveTo(this.position.x + 15, this.position.y + 20);
crc2.lineTo(this.position.x + 5, this.position.y + 45);
crc2.strokeStyle = "black";
crc2.lineWidth = 1;
crc2.stroke();
crc2.closePath();

// Korb
crc2.beginPath();
crc2.rect(this.position.x - 12.5, this.position.y + 45, 25, 20);
crc2.fillStyle = "brown";
crc2.fill();
crc2.closePath();
  }
}
}