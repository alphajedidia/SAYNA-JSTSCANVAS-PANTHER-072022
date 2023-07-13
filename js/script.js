
const fadeSlideElements = document.querySelectorAll('.fade-in');

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScrollFadeSlide() {
  fadeSlideElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.transform = 'translateX(0)';
    }
  });
}
window.addEventListener('scroll', handleScrollFadeSlide);

handleScrollFadeSlide();

const fadeZoomImages = document.querySelectorAll('.fade-zoom');

function isImageVisible(image) {
  const rect = image.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
function handleScrollFadeZoom() {
  fadeZoomImages.forEach((image) => {
    if (isImageVisible(image)) {
      image.style.opacity = '1';
      image.style.visibility = 'visible';
      image.style.transform = 'scale(1)';
    }
  });
}

window.addEventListener('scroll', handleScrollFadeZoom);

handleScrollFadeZoom();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100vw";
canvas.style.height = "100vh";

const mouse = {
    x: 0,
    y: 0,
};

const image = new Image();
image.src = "images/all/logo_souris_BP2_blanc.png";
image.style.width = '1em';
image.style.height = '1em';
const imageSize = {
    width: 50,
    height:50,
};

document.addEventListener("mousemove", function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imageX = mouse.x - imageSize.width / 2;
    const imageY = mouse.y - imageSize.height / 2;
    ctx.drawImage(image, imageX, imageY, imageSize.width, imageSize.height);
}

image.onload = function () {
    drawImage();
};

document.addEventListener("mousemove", drawImage);