// for scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting){
          entry.target.classList.add('show');
          }
      // } else {
      //     entry.target.classList.remove('show');
      // }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// end

const hero = document.getElementById("hero");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = [
  "hero-img1.jpeg",
  "hero-img2.jpeg",
  "hero-img3.jpeg",
  "hero-img4.jpeg",
  "hero-img5.jpeg",
];

let currentIndex = 0;

function updateBackground() {
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
}

let autoSlide = setInterval(showNext, 30000);

next.addEventListener("click", () => {
  showNext();
  resetAutoSlide();
});

prev.addEventListener("click", () => {
  showPrev();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(showNext, 30000);
}

updateBackground();

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navbar.classList.toggle('active');
});

// Close menu on nav link click
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navbar.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInside = navbar.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove("active");
    navbar.classList.remove("active");
  }
});

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.getElementById("prev-lightbox");
const nextBtn = document.getElementById("next-lightbox");
const counter = document.getElementById("lightbox-counter");

let currentImgIndex = 0;

// Update lightbox image and counter
function updateLightbox(index) {
  lightboxImg.src = galleryItems[index].src;
  counter.textContent = `Image ${index + 1} of ${galleryItems.length}`;
}

// Open lightbox
function openLightbox(index) {
  currentImgIndex = index;
  updateLightbox(currentImgIndex);
  lightbox.style.display = "flex";

  // Small delay for smooth CSS transition
  setTimeout(() => {
    lightbox.classList.add("show");
  }, 10);
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 400); // match your CSS transition duration
}

// Event listeners
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

nextBtn.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex + 1) % galleryItems.length;
  updateLightbox(currentImgIndex);
});

prevBtn.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightbox(currentImgIndex);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the page from refreshing

  // Hide the form
  this.style.display = 'none';

  // Show the success message
  document.getElementById('formMessage').style.display = 'flex';
});

