namespace LuftfahrtPolymorphie {
  export class Insect extends Moveable  {
    position: Vector;
    velosity: Vector;
    size: number;

    constructor() {
      super();
      //console.log("Insect constructor");
      this.position = new Vector(0, 0);
      this.velosity = new Vector(0, 0);
      this.velosity.random(100, 200);

  
    }
    move(_timeslice: number): void {
      // console.log("Insect move");
     super.move(_timeslice);
    }

    draw(): void {
      // console.log("Insect draw");
      let radius: number = 3;

      crc2.save();

      // Körper
      crc2.beginPath();
      crc2.fillStyle = "yellow";
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
    }
  }
}
