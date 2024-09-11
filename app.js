const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");
const code = document.querySelector("#code");

document.addEventListener("keydown", (e) => {
  key.placeholder = e.key;
  if (e.key === " ") {
    key.placeholder = "Space";
  }
  keyCode.placeholder = e.keyCode;
  code.placeholder = e.code;
});
