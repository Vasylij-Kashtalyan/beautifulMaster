const ref = document.querySelector(".letgo-brows");
const letGo = document.querySelector(".letgo");

console.log(letGo);

let words = ["EYEBROWS", "EYELASHES"];

setInterval(() => {
  // opOne();

  ref.textContent = "ВІЇ";
  letGo.style.backgroundImage = 'url("../img/beautiful-woman.jpg")';
}, 4000);

setInterval(() => {
  ref.textContent = "БРОВІ";
  letGo.style.backgroundImage = 'url("../img/eyebrows.jpg")';
}, 8000);

// setInterval(() => {
//   opOne();
// }, 4000);

// setInterval(() => {
//   opZer();
// }, 5500);

// function opZer() {
//   ref.style.opacity = "0";
// }

// function opOne() {
//   ref.style.opacity = "1";
// }
