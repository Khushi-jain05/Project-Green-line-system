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
const navItems = document.querySelectorAll('.nav-links a, .nav-links button');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  });
});
if ('IntersectionObserver' in window) {
  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.about-box-img, .highlight-img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    fadeUpObserver.observe(el);
  });
  const slideLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.1 });
  
  const slideRightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('#project-box-left').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-300px)';
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    slideLeftObserver.observe(el);
  });
  
  document.querySelectorAll('#project-box-right').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(300px)';
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    slideRightObserver.observe(el);
  });
}
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});