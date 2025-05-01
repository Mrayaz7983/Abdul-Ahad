/**
 * Al-Ahad Digital Marketing - Custom JS
 */

// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });

  feather.replace();



// Future enhancements can be added below
// - Animation effects
// - Form validation
// - Interactive elements
