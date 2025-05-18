const images = document.querySelectorAll('.slider-img');
let current = 0;

function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}


setInterval(changeImage, 5000);
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("send_mail.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    alert(result);
  })
  .catch(error => {
    alert("Error: " + error);
  });
});
