// We will write our JavaScript code here

var resetBtn = document.querySelector("#reset");
var saveBtn = document.querySelector("#save");
var uploadBtn = document.querySelector("#upload");
var fileInput = document.querySelector("#file-input");

var selectedFilter = document.querySelector("#selected-filter");
var value = document.querySelector("#value");
var slider = document.querySelector("#slider");
var mainImage = document.querySelector("#main-image");

var filterButtons = document.querySelectorAll(".filter-button");
var rotateButtons = document.querySelectorAll(".rotate-button");

var brightness = 100;
var saturation = 100;
var inversion = 0;
var grayscale = 0;

var rotate = 0;
var flipX = 1;
var flipY = 1;

uploadBtn.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    mainImage.src = reader.result;
    document.querySelector(".container").classList.remove("disable");
  };
});

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedFilter.innerText = button.innerText;
    document.querySelector(".filter-button.active").classList.remove("active");
    button.classList.add("active");
    var selection = button.id;
    if (selection === "brightness") {
      value.innerText = brightness + "%";
      slider.value = brightness;
      slider.max = 200;
    } else if (selection === "saturation") {
      value.innerText = saturation + "%";
      slider.value = saturation;
      slider.max = 200;
    } else if (selection === "inversion") {
      value.innerText = inversion + "%";
      slider.value = inversion;
      slider.max = 100;
    } else if (selection === "grayscale") {
      value.innerText = grayscale + "%";
      slider.value = grayscale;
      slider.max = 100;
    }
  });
});

function applyFilters() {
  mainImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

slider.addEventListener("input", function () {
  var selection = document.querySelector(".filter-button.active").id;
  if (selection === "brightness") {
    brightness = slider.value;
    value.innerText = brightness + "%";
  } else if (selection === "saturation") {
    saturation = slider.value;
    value.innerText = saturation + "%";
  } else if (selection === "inversion") {
    inversion = slider.value;
    value.innerText = inversion + "%";
  } else if (selection === "grayscale") {
    grayscale = slider.value;
    value.innerText = grayscale + "%";
  }
  applyFilters();
});
