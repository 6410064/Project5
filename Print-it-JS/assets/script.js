let slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let index = 0;
// nombre de slide au total (4)
const numberOfSlides = slides.length;
// fleches
let previous = document.getElementById("left__arrow-id");
let next = document.getElementById("right__arrow-id");

const imageContainer = document.getElementById("banner");
let dots = document.querySelectorAll(".dot");
// console.log(dots)

next.addEventListener("click", function () {
  dots[index].classList.remove("dot_selected");
  if (index === 3) {
    index = 0;
  } else {
    index++;
  }
  dots[index].classList.add("dot_selected");
  let newImage = document.createElement("img");
  newImage.className = "banner-img";
  imageContainer.appendChild(newImage);
  let taglineElement = document.querySelector("#banner p");
  newImage.src = `./assets/images/slideshow/${slides[index].image}`;
  taglineElement.innerHTML = slides[index].tagLine;
  // console.log(index);
});

previous.addEventListener("click", function () {
  dots[index].classList.remove("dot_selected");
  if (index === 0) {
    index = 3;
  }
  else {
    index--;
  }
  dots[index].classList.add("dot_selected");
  let newImage = document.createElement("img");
  newImage.className = "banner-img";
  imageContainer.appendChild(newImage);
  let taglineElement = document.querySelector("#banner p");
  newImage.src = `./assets/images/slideshow/${slides[index].image}`;
  taglineElement.innerHTML = slides[index].tagLine;
});
