const animatCorner = document.querySelector(".slider");

window.addEventListener("scroll", () => {
  let scrolledPortion = window.scrollY;

  if (scrolledPortion >= 700) animatCorner.classList.add("slider-corner");
  console.log(scrolledPortion);
});
