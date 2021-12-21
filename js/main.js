// Slider behaviour on Desktop

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

// Slider behaviour on Mobile & tablet

const circles = document.querySelectorAll(".circles span");
const reviews = document.querySelectorAll(".review");

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    reviews.forEach((review) => {
      review.classList.remove("active");
    });
    reviews.forEach((review) => {
      if (circle.dataset.name === review.dataset.name) {
        review.classList.add("active");
      }
    });
  });
});

reviews.forEach((review) => {
  review.addEventListener("click", (e) => {
    console.log(review.dataset.name);
  });
});

// Navbar menu

const burgerIcon = document.querySelector(".burger-menu");
const mobileContainer = document.querySelector(".mobile_menu_container");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  mobileContainer.classList.toggle("active");
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile_menu_container")) {
    mobileContainer.classList.remove("active");
    burgerIcon.classList.remove("active");
  }
});
