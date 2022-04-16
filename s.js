// **************************** TOP SLIDER *******************************
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});


// ******************************** BTM SLIDER ***************************
const imgslider = document.querySelector(".imgslider");
const navnextBtn = document.querySelector(".navigationn .next-btn");
const navprevBtn = document.querySelector(".navigationn .prev-btn");
const imgslides = document.querySelectorAll(".imgslider .slides");
const imgslideIcons = document.querySelectorAll(".navigationn .slides-icon");
const NumberOfSlides = 2;
var imgslideNumber = 0;

//image imgslider next button
navnextBtn.addEventListener("click", () => {
  imgslides.forEach((slides) => {
    slides.classList.remove("active");
  });
  imgslideIcons.forEach((slideIcons) => {
    slideIcons.classList.remove("active");
  });

  imgslideNumber++;

  if(imgslideNumber > (NumberOfSlides - 1)){
    imgslideNumber = 0;
  }

  imgslides[imgslideNumber].classList.add("active");
  imgslideIcons[imgslideNumber].classList.add("active");
});

//image imgslider previous button
navprevBtn.addEventListener("click", () => {
  imgslides.forEach((slides) => {
    slides.classList.remove("active");
  });
  imgslideIcons.forEach((slideIcons) => {
    slideIcons.classList.remove("active");
  });

  imgslideNumber--;

  if(imgslideNumber < 0){
    imgslideNumber = NumberOfSlides - 1;
  }

  imgslides[imgslideNumber].classList.add("active");
  imgslideIcons[imgslideNumber].classList.add("active");
});

