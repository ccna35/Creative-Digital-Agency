const slider = document.querySelector(".slider");
const slider_container = document.querySelector(".reviews__container");

let sliderGrabbed = false;

slider.addEventListener("mousedown", (e) => {
  sliderGrabbed = true;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", (e) => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseenter", (e) => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider_container.scrollLeft -= e.movementX;
  }
});
