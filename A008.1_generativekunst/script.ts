let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
let crc2  = canvas.getContext("2d");

// Set the canvas width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a random color
function randomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Draw random circles
for (let i = 0; i < 1000; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 100;
  const color = randomColor();
  crc2!.beginPath();
  crc2!.arc(x, y, radius, 0, 2 * Math.PI);
  crc2!.fillStyle = color;
  crc2!.fill();
}

// Draw random lines
for (let i = 0; i < 1000; i++) {
  const x1 = Math.random() * canvas.width;
  const y1 = Math.random() * canvas.height;
  const x2 = Math.random() * canvas.width;
  const y2 = Math.random() * canvas.height;
  const color = randomColor();
  crc2!.beginPath();
  crc2!.moveTo(x1, y1);
  crc2!.lineTo(x2, y2);
  crc2!.strokeStyle = color;
  crc2!.stroke();
}
