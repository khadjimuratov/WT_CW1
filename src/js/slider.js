const leftArr = document.getElementById("left");
const rightArr = document.getElementById("right");

let product = document.getElementsByClassName("slide");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let perMove = 18;
let maxMove = 19;

let tablet_view = window.matchMedia("(min-width: 500px)");
let mob_view = window.matchMedia("(max-width: 500px)");

if (mob_view.matches) {
  perMove = 19.7;
  maxMove = 70;
}
if (tablet_view.matches) {
  perMove = 21.5;
  maxMove = 61;
}

let right_mover = () => {
  l = l - perMove;

  for (const i of product) {
    i.style.left = `${l}rem`;
  }
};
let left_mover = () => {
  l = l + perMove;

  for (const i of product) {
    i.style.left = `${l}rem`;
  }
};

rightArr.onclick = () => {
  if (l > -maxMove) {
    right_mover();
  }
};
leftArr.onclick = () => {
  if (l < maxMove) {
    left_mover();
  }
};
