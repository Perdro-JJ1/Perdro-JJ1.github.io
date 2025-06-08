// Navigation Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');

// Transform toggle button to X
const spans = navToggle.querySelectorAll('span');
if (navMenu.classList.contains('active')) {
spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
spans[1].style.opacity = '0';
spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
} else {
spans[0].style.transform = 'none';
spans[1].style.opacity = '1';
spans[2].style.transform = 'none';
}
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
link.addEventListener('click', () => {
navMenu.classList.remove('active');
const spans = navToggle.querySelectorAll('span');
spans[0].style.transform = 'none';
spans[1].style.opacity = '1';
spans[2].style.transform = 'none';
});
});

// Change header style on scroll
window.addEventListener('scroll', () => {
const header = document.querySelector('header');
if (window.scrollY > 100) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

// Active link highlighting
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (window.scrollY >= (sectionTop - 200)) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active');
}
});
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
let currentSlide = 0;

// Create dots
testimonialSlides.forEach((_, index) => {
const dot = document.createElement('div');
dot.classList.add('dot');
if (index === 0) dot.classList.add('active');
dot.addEventListener('click', () => {
showSlide(index);
});
dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
if (index < 0) index = testimonialSlides.length - 1;
if (index >= testimonialSlides.length) index = 0;

testimonialSlides.forEach(slide => {
slide.classList.remove('active');
});

dots.forEach(dot => {
dot.classList.remove('active');
});

testimonialSlides[index].classList.add('active');
dots[index].classList.add('active');
currentSlide = index;
}

prevBtn.addEventListener('click', () => {
showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
showSlide(currentSlide + 1);
});

// Initial show
showSlide(0);

// Auto slide
setInterval(() => {
showSlide(currentSlide + 1);
}, 5000);

// Contact Form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
// In a real app, you would send the form data to a server here
contactForm.style.display = 'none';
formSuccess.style.display = 'block';

// Reset form after 5 seconds
setTimeout(() => {
contactForm.reset();
contactForm.style.display = 'block';
formSuccess.style.display = 'none';
}, 5000);
});
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
newsletterForm.addEventListener('submit', (e) => {
e.preventDefault();
// In a real app, you would send the email to a server here
const input = newsletterForm.querySelector('input');
const originalValue = input.value;
input.value = 'Subscribed!';
input.disabled = true;

// Reset form after 3 seconds
setTimeout(() => {
input.value = '';
input.disabled = false;
newsletterForm.reset();
}, 3000);
});
}

// Animation on scroll
const animateOnScroll = () => {
const elements = document.querySelectorAll('.service-card, .work-item, .about-image, .about-text');

elements.forEach(element => {
const elementPosition = element.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (elementPosition < windowHeight - 100) {
element.style.opacity = '1';
element.style.transform = 'translateY(0)';
}
});
};

// Add initial styles for animation
document.querySelectorAll('.service-card, .work-item, .about-image, .about-text').forEach(element => {
element.style.opacity = '0';
element.style.transform = 'translateY(20px)';
element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run on initial load
window.addEventListener('load', animateOnScroll);

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const noticiasGrid = document.querySelector('.noticias-grid');
  
    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.noticia-card').length;
  
    // Función para mover el carrusel a la izquierda
    function moveToPrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalItems - 1; // Volver al último elemento
      }
      updateCarouselPosition();
    }
  
    // Función para mover el carrusel a la derecha
    function moveToNext() {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Volver al primer elemento
      }
      updateCarouselPosition();
    }
  
    // Función para actualizar la posición del carrusel
    function updateCarouselPosition() {
      const offset = -currentIndex * (document.querySelector('.noticia-card').offsetWidth + 30); // Ancho de las tarjetas + margen
      noticiasGrid.style.transform = `translateX(${offset}px)`;
    }
  
    // Eventos de clic para las flechas
    prevButton.addEventListener('click', moveToPrev);
    nextButton.addEventListener('click', moveToNext);
  });
  
const counters = document.querySelectorAll('.counter');

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); // Obtiene el valor de la meta
        const current = +counter.innerText; // Obtiene el valor actual mostrado

        const increment = target / 100; // Incremento pequeño para hacer el conteo más fluido
        if (current < target) {
          counter.innerText = Math.ceil(current + increment); // Aumenta el número
          setTimeout(updateCounter, 10); // Llama a la función nuevamente después de 10 ms
        } else {
          counter.innerText = target; // Asegura que llegue al número exacto
        }
      };
      updateCounter();
    });
  };

  // Ejecutar la animación cuando la sección sea visible en el viewport
  const aboutSection = document.querySelector('#about');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
    }
  }, { threshold: 0.5 });

  observer.observe(aboutSection);

  const acercaDeBtn = document.getElementById('acercaDeBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Agregar el evento de clic al botón
acercaDeBtn.addEventListener('click', function(event) {
  // Evitar que el clic en el botón de "Acerca de" cierre el submenú
  event.stopPropagation();

  // Cambiar la visibilidad del submenú
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

// Agregar un evento de clic global en el documento
document.addEventListener('click', function(event) {
  // Si el clic es fuera del botón de "Acerca de" y del submenú, cerrar el submenú
  if (!acercaDeBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});

