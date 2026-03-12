// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to animated elements
document.querySelectorAll('.servicio-card, .sobre-mi-text, .profile-card, .contacto-form, .info-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form -> WhatsApp
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const servicio = document.getElementById('servicio');
    const servicioText = servicio.options[servicio.selectedIndex].text;
    const mensaje = document.getElementById('mensaje').value.trim();

    const text = `Hola Daniel, soy *${nombre}*.\n\n` +
        `Email: ${email}\n` +
        `Servicio de interes: *${servicioText}*\n\n` +
        `${mensaje}`;

    const url = `https://wa.me/573024392660?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
});

// Smooth reveal on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
