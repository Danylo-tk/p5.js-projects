let inc = 0.05;
let scl = 20;
let cols, rows;

let zoff = 0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);

  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(255);

  let yoff = 0;

  for (let x = 0; x < cols; x++) {
    let xoff = 0;
    for (let y = 0; y < rows; y++) {
      let rand = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(rand);
      xoff += inc;

      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
  }
  zoff += 0.01;
}

/* let inc = 0.003;

function setup() {
  createCanvas(200, 200);
  background(0);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;

  loadPixels();
  for (let x = 0; x < width; x++) {
    let xoff = 0;
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let rand = noise(xoff, yoff) * 255;
      pixels[index] = rand;
      pixels[index + 1] = rand;
      pixels[index + 2] = rand;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();

  noLoop();
}
 */
