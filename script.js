// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Form submission
const form = document.getElementById('offerteForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Versturen...';
  btn.disabled = true;

  // Simulate send
  setTimeout(() => {
    form.innerHTML = `
      <div class="form-success">
        <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
        <h3>Aanvraag ontvangen!</h3>
        <p>Bedankt voor uw aanvraag. Wij nemen binnen 24 uur contact met u op.</p>
      </div>
    `;
  }, 1200);
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply to cards and sections
document.querySelectorAll('.dienst-card, .over__stat, .werkgebied__plaats, .contact__item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
