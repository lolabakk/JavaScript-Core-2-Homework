// Write your code here

let images = [
  "Images/CAKE/side1.jpg",
  "Images/CAKE/side2.jpg",
  "Images/CAKE/side5.jpg",
  "Images/CAKE/side4.jpg",
];
let reversalIndex = images.length - 1;
let forwardIndex = 0;

let imageSliderImage = document.getElementById("imageSlider");
let autoBackButton = document.getElementById("autoReverse");
let stopForwardInterval;
let stopBackwardInterval;
document.getElementById("imageSlider").src = images[0];
autoBackButton.addEventListener("click", function () {
  clearInterval(stopBackwardInterval);
  clearInterval(stopForwardInterval);
  stopBackwardInterval = setInterval(function () {
    console.log(reversalIndex);
    document.getElementById("imageSlider").src = images[reversalIndex];
    reversalIndex -= 1;
    if (reversalIndex === -1) {
      reversalIndex = images.length - 1;
    }
  }, 2000);
});

let forwardButton = document.getElementById("forwardButton");
forwardButton.addEventListener("click", function () {
  clearInterval(stopBackwardInterval);
  clearInterval(stopForwardInterval);
  stopForwardInterval = setInterval(function () {
    console.log(forwardIndex);
    document.getElementById("imageSlider").src = images[forwardIndex];
    forwardIndex++;
    if (forwardIndex === images.length) {
      forwardIndex = 0;
    }
  }, 2000);
});

let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function () {
  clearInterval(stopForwardInterval);
  clearInterval(stopBackwardInterval);
});

let manualForward = document.getElementById("manualForward").addEventListener("click", function () {
  document.getElementById("imageSlider").src = images[forwardIndex];
  forwardIndex++;
  if (forwardIndex === images.length) {
    forwardIndex = 0;
  }


});

let manualBackward = document.getElementById("manualBackward").addEventListener("click", function () {
  reversalIndex -= 1;
  document.getElementById("imageSlider").src = images[reversalIndex];
  if (reversalIndex === 0) {
    reversalIndex = images.length;
  }


});