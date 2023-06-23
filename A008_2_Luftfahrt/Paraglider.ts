namespace LuftfahrtPolymorphie {
  export class Paraglider extends Moveable {
    position: Vector;
    velosity: Vector;
    size: number;
    activity: string;

    constructor() {
      // console.log("Paraglider constructor");
      super();
      this.position = new Vector(0, 0);
      this.velosity = new Vector(0, 0);
      this.velosity.random(100, 200);
      this.activity = "walk";
    }
    move(_timeslice: number): void {
      // console.log("Paraglider move");
      // fly
      if (this.activity == "fly") {
        let offset: Vector = new Vector(this.velosity.x, this.velosity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
        if (this.position.y > 120, this.position.x>320) {
          this.activity = "walk";
          this.velosity.set(-50, 0);
        }
      }
      if (this.activity == "walk") {
        let offset: Vector = new Vector(this.velosity.x, this.velosity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
        if (this.position.x <= 50) {
          this.activity = "climb";
          this.velosity.set(0, -50);
        }
      }
      if (this.activity == "climb") {
        let offset: Vector = new Vector(this.velosity.x, this.velosity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
        if (this.position.y <= 50) {
          this.activity = "fly";
          this.velosity.set(100, 40);
        }
      }
    }

    draw(): void {
      //console.log("Paraglider draw");
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      if (this.activity == "fly") {
        // Paraglider
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, 15, Math.PI, Math.PI * 2);
        crc2.fillStyle = "White";
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
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
      } else {
        // Wanderer
        // Körper
        crc2.beginPath();
        crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
      }
    }
  }
}
