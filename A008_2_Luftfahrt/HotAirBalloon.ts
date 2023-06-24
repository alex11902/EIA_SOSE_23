namespace LuftfahrtPolymorphie {
  export class HotAirBalloon extends Moveable {
    position: Vector;
    velocity: Vector;
    isPopped: boolean;

    constructor() {
      super();
      console.log("Balloon constructor");
      this.position = new Vector(480, 400);
      this.velocity = new Vector(0, 0);
      this.velocity.random(100, 150);
      this.isPopped = false;

      // Event Listener für den Klick auf den Ballon hinzufügen
   //   let canvas =<HTMLCanvasElement>document.querySelector('#canvas');
     //canvas.addEventListener("click", this.handleClick.bind(this));
    }

    move(_timeslice: number): void {
      if (this.isPopped) {
        // Wenn der Ballon geplatzt ist, fällt er zum Boden
        this.position.y += 5; // Geschwindigkeit des Falls anpassen
        return;
      }

      let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
      offset.scale(_timeslice * 0.2);
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
        this.velocity.x *= -1;
      } else if (this.position.x > 820) {
        this.position.x = 820;
        this.velocity.x *= -1;
      }
    }

    draw(): void {
      if (this.isPopped) {
        // Wenn der Ballon geplatzt ist, zeichne nichts mehr
        return;
      }

      // Zeichne den Ballon
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
      crc2.fillStyle = "magenta";
      crc2.fill();
      crc2.closePath();

      // Zeichne die Seile
      crc2.beginPath();
      crc2.moveTo(this.position.x - 15, this.position.y + 20);
      crc2.lineTo(this.position.x - 5, this.position.y + 45);
      crc2.moveTo(this.position.x + 15, this.position.y + 20);
      crc2.lineTo(this.position.x + 5, this.position.y + 45);
      crc2.strokeStyle = "black";
      crc2.lineWidth = 1;
      crc2.stroke();
      crc2.closePath();

      // Zeichne den Korb
      crc2.beginPath();
      crc2.rect(this.position.x - 12.5, this.position.y + 45, 25, 20);
      crc2.fillStyle = "brown";
      crc2.fill();
      crc2.closePath();
    }

    handleClick(event: MouseEvent): void {
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Überprüfe, ob der Klick innerhalb des Ballons erfolgt ist
      const distance = Math.sqrt(
        (clickX - this.position.x) ** 2 + (clickY - this.position.y) ** 2
      );

      if (distance <= 25) {
        // Ballon platzen lassen, wenn er angeklickt wurde
        this.isPopped = true;
      }
    }
  }
}
