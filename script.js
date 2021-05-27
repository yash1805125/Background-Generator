var h3 = document.querySelector("h3");
var bd = document.querySelector("#gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// body.style.background = "red";

console.log(h3, color1, color2);

const setGradient = function () {
  bd.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = bd.style.background;
};
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
