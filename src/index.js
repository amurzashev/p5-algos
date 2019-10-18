const WIDTH = window.innerWidth;
const HEIGHT = 600;
const bg = 51;
const COLUMN_WIDTH = 10;

let columns;

async function swap (a, b) {
  await sleep(5);
  const temp = columns[a].h;
  columns[a].h = columns[b].h;
  columns[b].h = temp;
}

async function bubbleSort () {
  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < columns.length - 1 - i; j++) {
      if (columns[j].h < columns[j + 1].h) {
        await swap(j, j + 1);
      }
    }
  }
};

function randomizeColumns () {
  columns = generateColumns();
};

function generateColumns () {
  const arr = [];
  for (let i = 0; i < WIDTH / COLUMN_WIDTH; i++) {
    arr.push({
      x: i * COLUMN_WIDTH,
      y: HEIGHT,
      w: COLUMN_WIDTH,
      h: randomHeight(),
    });
  }
  return arr;
};

function randomHeight () {
  return -Math.floor(Math.random() * HEIGHT) + 1;
};

function setup () {
  createCanvas(WIDTH, HEIGHT);
  columns = generateColumns();
};

function draw () {
  background(bg);
  columns.forEach(c => {
    rect(c.x, c.y, c.w, c.h);
  });
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
