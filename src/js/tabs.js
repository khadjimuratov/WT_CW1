const tabBtns = document.getElementsByClassName("tab-btn");
const tabCnt = document.getElementsByClassName("tab-text");
console.log(tabCnt);
const hideCnt = () => {
  for (let i = 0; i < tabCnt.length; i++) {
    tabCnt[i].classList.add("d-none");
    tabBtns[i].classList.remove("active");
  }
};
hideCnt();
tabCnt[0].classList.remove("d-none");
tabBtns[0].classList.add("active");
for (let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click", () => {
    hideCnt();
    tabCnt[i].classList.remove("d-none");
    tabCnt[i].classList.add("active");
    tabBtns[i].classList.add("active");
  });
}
