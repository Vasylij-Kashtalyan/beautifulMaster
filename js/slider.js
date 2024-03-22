const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

sliderItems.forEach((slide, index) => {
  if (index !== 0) slide.classList.add("hidden");

  slide.dataset.index = index;

  sliderItems[0].setAttribute("data-active", "");
});

btnNext.addEventListener("click", onClickBtnNext);
btnPrev.addEventListener("click", onClickBtnPrev);

function onClickBtnNext() {
  const currentSlide = slider.querySelector("[data-active]");

  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // Індекс наступного фото
  const nextSlideIndex =
    currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;

  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}

function onClickBtnPrev() {
  const currentSlide = slider.querySelector("[data-active]");

  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // Індекс наступного фото
  const nextSlideIndex =
    currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;

  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}
