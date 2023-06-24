/*
Aufgabe: <L10.2_Luftfahrt_Polymorphie>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <24.06.2023>
Quellen: <Marie Eckl,Theresa Hauser, chat GPT,Lara Halmosi>
*/
// Handle-load function
namespace LuftfahrtPolymorphie {
  window.addEventListener("load", handleLoad);
  export let crc2: CanvasRenderingContext2D;
  let golden: number = 0.62;
  let background: ImageData;

  let moveables: Moveable[] = [];
  console.log(moveables);
  create();

  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas) return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let horizon: number = crc2.canvas.height * golden;
    console.log("horizon");
    canvas = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    backgroundgradient();

    drawStaticObjects(horizon);

    background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.putImageData(background, 0, 0);
    console.log(drawStaticObjects);

    window.requestAnimationFrame(update);
    window.setInterval(update, 20);
  }

 // namespace LuftfahrtPolymorphie {
    class HotAirBalloon extends Moveable {
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
       //let canvas =<HTMLCanvasElement>document.querySelector('#canvas');
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
//  }
  

  function drawStaticObjects(horizon: number): void {
    backgroundgradient();
    let sunPosition: Vector = new Vector(700, 70);
    drawSun(sunPosition);

    let cloud1Position: Vector = new Vector(50, 125);
    let cloud1Size: Vector = new Vector(150, 50);
    drawClouds(cloud1Position, cloud1Size);

    let cloud2Position: Vector = new Vector(300, 100);
    let cloud2Size: Vector = new Vector(150, 50);
    drawClouds(cloud2Position, cloud2Size);

    let cloud3Position: Vector = new Vector(600, 125);
    let cloud3Size: Vector = new Vector(150, 50);
    drawClouds(cloud3Position, cloud3Size);

    let mountainsPosition: Vector = new Vector(0, horizon);
    drawMountains(mountainsPosition, 75, 200, "grey", "white");

    let smallerMountainsPosition: Vector = new Vector(0, horizon);
    drawMountains(smallerMountainsPosition, 50, 150, "grey", "lightgrey");

    drawTrees(horizon);

    let kioskPosition: Vector = new Vector(680, 360);
    drawKiosk(kioskPosition);

    let landingPlacePosition: Vector = new Vector(480, 400);
    drawLandingPlace(landingPlacePosition);

    drawfrontMountain("grey", "lightgrey");

    let windsockPosition: Vector = new Vector(550, 390);
    drawWindsock(windsockPosition);

    drawGrass(150);
  }

  function backgroundgradient() {
    // Define linear Gradient
    let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue"); // lightblue
    gradient.addColorStop(golden, "HSL(291,2%,77%)"); // grey
    gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // green

    // draw gradient
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
  }

  // Function sun
  function drawSun(_position: Vector): void {
    console.log("sun", _position);

    let r1: number = 30;
    let r2: number = 100;
    let gradient: CanvasGradient = crc2.createRadialGradient(
      0,
      0,
      r1,
      0,
      0,
      r2
    );

    gradient.addColorStop(0, "HSLA(60,100%,90%,1)");
    gradient.addColorStop(1, "HSLA(60,100%,50%,0)");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();
  }
  // Draw Clouds
  function drawClouds(_position: Vector, _size: Vector): void {
    console.log("Cloud", _position, _size);
    let nParticles: number = 20;
    let radiusParticle: number = 40;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(
      0,
      0,
      0,
      0,
      0,
      radiusParticle
    );

    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
    gradient.addColorStop(0, "HSLA(0,100%,100%,0.5");
    gradient.addColorStop(1, "HSLA(0,100%,100%,0");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
      crc2.save();
      let x: number = (Math.random() - 0.5) * _size.x;
      let y: number = -Math.random() * _size.y;
      crc2.translate(x, y);
      crc2.fill(particle);
      crc2.restore();
    }
    crc2.restore();
  }

  function drawMountains(
    _position: Vector,
    _min: number,
    _max: number,
    _colorLow: string,
    _colorHigh: string
  ): void {
    console.log("Mountains");
    // steps between Mountains and valley
    let stepMin: number = 50;
    let stepMax: number = 150;
    let x: number = 0;

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(0, -_max);
    //solange zeichnen bis komplette width ausgefüllt ist
    do {
      x += stepMin + Math.random() * (stepMax - stepMin);
      let y: number = -_min - Math.random() * (_max - _min);

      crc2.lineTo(x, y);
    } while (x < crc2.canvas.width);

    crc2.lineTo(x, 0);
    crc2.closePath();

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
    gradient.addColorStop(0, _colorLow);
    gradient.addColorStop(0.7, _colorHigh);

    crc2.fillStyle = gradient;
    crc2.fill();

    crc2.restore();
  }
  function drawTrees(horizon: number): void {
    // Anzahl der Bäume festlegen
    const numberOfTrees: number = 40;

    // Baumparameter festlegen
    const treeHeight: number = 30;
    const treeColor: string = "darkgreen";
    const trunkColor: string = "brown";

    // Zufällige Positionen für die Bäume generieren
    for (let i = 0; i < numberOfTrees; i++) {
      const treeX: number = Math.random() * crc2.canvas.width;
      const treeY: number = horizon - treeHeight;

      // Baumstamm zeichnen
      crc2.fillStyle = trunkColor;
      crc2.fillRect(treeX - 5, treeY + treeHeight, 10, -treeHeight * 0.4);

      // Baumkronen zeichnen
      crc2.beginPath();
      crc2.moveTo(treeX, treeY);
      crc2.lineTo(treeX + 25, treeY + 20);
      crc2.lineTo(treeX - 25, treeY + 20);
      crc2.closePath();
      crc2.fillStyle = treeColor;
      crc2.fill();

      crc2.beginPath();
      crc2.moveTo(treeX, treeY - 10);
      crc2.lineTo(treeX + 20, treeY + 10);
      crc2.lineTo(treeX - 20, treeY + 10);
      crc2.closePath();
      crc2.fillStyle = treeColor;
      crc2.fill();

      crc2.beginPath();
      crc2.moveTo(treeX, treeY - 20);
      crc2.lineTo(treeX + 15, treeY);
      crc2.lineTo(treeX - 15, treeY);
      crc2.closePath();
      crc2.fillStyle = treeColor;
      crc2.fill();
    }
  }

  function drawKiosk(_position: Vector) {
    console.log("kiosk");
    // Farben für  Kiosk festlegen
    let roofColor = "hsl(15,49%,50%)"; //brown
    let windowColor = "#FFFFFF"; // white
    let hutColor = "hsl(15,49%,50%)"; // brown

    // Größe des Kiosks festlegen
    let kioskWidth = 80;
    let kioskHeight = 60;
    crc2.save();

    // Dach zeichnen
    crc2.fillStyle = roofColor;
    crc2.beginPath();
    crc2.moveTo(_position.x, _position.y);
    crc2.lineTo(_position.x + kioskWidth / 2, _position.y - kioskHeight / 3);
    crc2.lineTo(_position.x + kioskWidth, _position.y);
    crc2.closePath();
    crc2.fill();
    crc2.restore();
    // Fenster zeichnen
    crc2.fillStyle = windowColor;
    crc2.fillRect(_position.x, _position.y, kioskWidth, kioskHeight);

    // Hütte zeichnen
    let hutWidth = kioskWidth;
    let hutHeight = kioskHeight / 2;
    let hutX = _position.x + (kioskWidth - hutWidth) / 2;
    let hutY = _position.y + kioskHeight - hutHeight;

    crc2.fillStyle = hutColor;
    crc2.fillRect(hutX, hutY, hutWidth, hutHeight);
  }

  function drawLandingPlace(_position: Vector) {
    crc2.beginPath();
    crc2.ellipse(
      _position.x,
      _position.y,
      30,
      100,
      Math.PI / 2,
      0,
      2 * Math.PI
    );
    // Ellipse füllen
    crc2.fillStyle = "HSLA(111,47%,56%)";
    crc2.fill();
  }

  function drawfrontMountain(_colorLow: string, _colorHigh: string): void {
    crc2.save();
    crc2.beginPath();
    crc2.moveTo(-50, 400);
    crc2.lineTo(0, 50);
    crc2.lineTo(250, 430);
    crc2.closePath();
    let gradient: CanvasGradient = crc2.createLinearGradient(250, 430, 0, 50);
    gradient.addColorStop(0, _colorLow);
    gradient.addColorStop(0.7, _colorHigh);

    crc2.fillStyle = gradient;
    crc2.fill();
    crc2.restore();
  }

  function drawWindsock(_position: Vector) {
    //Stab
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(_position.x, _position.y, 5, 60);
    crc2.closePath();

    //Windsack
    crc2.beginPath();
    crc2.fillStyle = "#d90000";
    crc2.moveTo(_position.x, _position.y);
    crc2.lineTo(_position.x, _position.y);
    crc2.lineTo(600, 400);
    crc2.lineTo(600, 410);
    crc2.lineTo(_position.x, 415);
    crc2.fill();
    crc2.closePath();
  }
  function drawGrass(numGrass: number) {
    let grassColor = "#00ad0e";

    for (let i = 0; i < numGrass; i++) {
      const x = Math.random() * crc2.canvas.width;
      const y = 450 + Math.random() * 20;

      const grassHeight = 50;
      const grassWidth = Math.random() * 2 + 1;

      crc2.beginPath();
      crc2.moveTo(x, y);
      crc2.lineTo(x + grassWidth, y + grassHeight);
      crc2.strokeStyle = grassColor;
      crc2.lineWidth = grassWidth;
      crc2.stroke();
    }
  }
  function create(): void {
    for (let index: number = 0; index < 5; index++) {
      let hotairballoon: HotAirBalloon = new HotAirBalloon();
      moveables.push(hotairballoon);
    }
    for (let index: number = 0; index < 4; index++) {
      let paraglider: Paraglider = new Paraglider();
      moveables.push(paraglider);
    }
    for (let index: number = 0; index < 10; index++) {
      let insect: Insect = new Insect();
      moveables.push(insect);
    }
  }

  export function update(): void {
    crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.putImageData(background, 0, 0);

    for (let moveable of moveables) {
      moveable.move(1 / 60);
      moveable.draw();
    }
  }
}
