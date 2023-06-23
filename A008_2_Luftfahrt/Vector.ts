namespace LuftfahrtPolymorphie {
  export class Vector {
    x: number;
    y: number;

    constructor(_x: number, _y: number) {
      this.set(_x, _y);
    }

    set(_x: number, _y: number): void {
      this.x = _x;
      this.y = _y;
    }

    scale(_factor: number): void {
      this.x *= _factor;
      this.y *= _factor;
    }

    scaleReturn(_factor: number): Vector {
      this.x *= _factor;
      this.y *= _factor;
      return this;
    }

    add(_addend: Vector): void {
      this.x += _addend.x;
      this.y += _addend.y;
    }

    addReturn(_addend: Vector): Vector {
      this.x += _addend.x;
      this.y += _addend.y;
      return this;
    }

    random(_minLength: number, _maxLength: number): void {
      let length: number =
        _minLength + Math.random() * (_maxLength - _minLength);
      let direction: number = Math.random() * 2 * Math.PI;

      this.set(Math.cos(direction), Math.sin(direction));
      this.scale(length);
    }
    subtract(_vector: Vector): Vector {
      return new Vector(this.x - _vector.x, this.y - _vector.y);
    }
    copy(): Vector {
      return new Vector(this.x, this.y)
    }
  }
}
