const indicatorChange = (someIndicatorIndex) => {
  const slides = [...document.querySelectorAll(".top-podcasts__audio")];
  const activeSlide = document.querySelector(".isActive");
  const currentIndex = slides.indexOf(activeSlide);
  const indicators = [...document.querySelectorAll(".top-podcasts__pagination-circle")];
  const activeIndicator = document.querySelector(".isCurrent");
  const currentIndicator = indicators.indexOf(activeIndicator);

  if (currentIndicator !== someIndicatorIndex) {
    slides[someIndicatorIndex].classList.add("isActive"); // можно использовать classList.toggle вместо remove и add
    activeSlide.classList.remove("isActive");
    indicators[someIndicatorIndex].classList.add("isCurrent");
    activeIndicator.classList.remove("isCurrent");
  }
};







