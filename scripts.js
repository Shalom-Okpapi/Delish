// Delish Eats - JavaScript File

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Scroll Pop Up
const animatedItems = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedItems.forEach((item) => observer.observe(item));

// Hero Section Video Play/Pause Toggle
const video = document.querySelector('.hero-video');
const heroOverlay = document.querySelector('.hero-overlay');
heroOverlay.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Scrollable Testimonials Carousel
const scrollable = document.querySelector('.scrollable');
let isDown = false;
let startX;
let scrollLeft;

scrollable.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollable.classList.add('active');
    startX = e.pageX - scrollable.offsetLeft;
    scrollLeft = scrollable.scrollLeft;
});
scrollable.addEventListener('mouseleave', () => {
    isDown = false;
    scrollable.classList.remove('active');
});
scrollable.addEventListener('mouseup', () => {
    isDown = false;
    scrollable.classList.remove('active');
});
scrollable.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollable.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    scrollable.scrollLeft = scrollLeft - walk;
});

// Contact Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const message = form.querySelector('textarea[placeholder="Your Message"]').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Gallery Image Lightbox
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);
        
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
