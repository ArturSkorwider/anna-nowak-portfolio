// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Smooth scroll & highlight menu items
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const sectionId = item.textContent.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    navUl.classList.remove('active'); // close menu after click
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.textContent.toLowerCase() === currentSection) {
      item.classList.add('active');
    }
  });
});
