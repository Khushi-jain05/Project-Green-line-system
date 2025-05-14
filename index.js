const images = document.querySelectorAll('.slider-img');
let current = 0;

function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}


setInterval(changeImage, 5000);
