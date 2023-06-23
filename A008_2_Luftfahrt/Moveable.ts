namespace LuftfahrtPolymorphie {
  export class Moveable {
    position: Vector;
    velosity: Vector;

    constructor(_position?: Vector) {
      //console.log("Moveable constructor");

      if (_position) this.position = _position.copy();
      else this.position = new Vector(0, 0);
      //min, max lenght festlegen
      this.velosity = new Vector(0, 0);
    }
    move(_timeslice: number): void {
      //console.log("Moveable move");
      //Verschiebung
      let offset: Vector = this.velosity.copy();
      //offset.x += wind; 
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
    draw(): void {
      console.log("Moveable draw");
    }
  }
}
