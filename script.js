btns = document.querySelectorAll("button");
let zIndexVal = "0";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getdiv = document.querySelector(`.${btn.id}`);
    getdiv.style.zIndex = zIndexVal;
    zIndexVal -= 1;
  });
});
