const leftArr = document.getElementById("left");
const rightArr = document.getElementById("right");

let product = document.getElementsByClassName("slide");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let perMove = 18;
let maxMove = 19;

let tabletView = window.matchMedia("(min-width: 500px)");
let mobView = window.matchMedia("(max-width: 500px)");

if (mobView.matches) {
  perMove = 19.7;
  maxMove = 70;
}
if (tabletView.matches) {
  perMove = 21.5;
  maxMove = 61;
}

let rightMover = () => {
  l = l - perMove;

  for (const i of product) {
    i.style.left = `${l}rem`;
  }
};
let leftMover = () => {
  l = l + perMove;

  for (const i of product) {
    i.style.left = `${l}rem`;
  }
};

rightArr.onclick = () => {
  if (l > -maxMove) {
    rightMover();
  }
};
leftArr.onclick = () => {
  if (l < maxMove) {
    leftMover();
  }
};
