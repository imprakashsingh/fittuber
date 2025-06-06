// Main JS for Fittuber
// Navbar mobile toggle, animations, etc. can be added here

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    function loadComponent(id, file) {
        fetch(file)
            .then(res => res.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if(id === 'header') initMobileMenu();
            });
    }
    if(document.getElementById('header')) loadComponent('header', 'header.html');
    if(document.getElementById('footer')) loadComponent('footer', 'footer.html');

    // Mobile menu toggle
    function initMobileMenu() {
        const menuIcon = document.getElementById('mobile-menu-icon');
        const navbar = document.querySelector('.navbar ul');
        if(menuIcon && navbar) {
            menuIcon.addEventListener('click', () => {
                navbar.classList.toggle('show');
            });
        }
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            const msgBox = document.getElementById('contactMessageBox');
            if (!name || !email || !message) {
                msgBox.textContent = 'Please fill in all fields.';
                msgBox.style.color = '#e74c3c';
                return;
            }
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                msgBox.textContent = 'Please enter a valid email address.';
                msgBox.style.color = '#e74c3c';
                return;
            }
            msgBox.textContent = 'Thank you for contacting us! We will get back to you soon.';
            msgBox.style.color = '#1abc9c';
            contactForm.reset();
        });
    }

    // LOGIN/LOGOUT LOGIC
    function isLoggedIn() {
      return localStorage.getItem('fittuberUser') !== null;
    }
    function updateNavAuth() {
      const loginNav = document.getElementById('loginNav');
      const logoutNav = document.getElementById('logoutNav');
      if (!loginNav || !logoutNav) return;
      if (isLoggedIn()) {
        loginNav.style.display = 'none';
        logoutNav.style.display = 'inline-block';
      } else {
        loginNav.style.display = 'inline-block';
        logoutNav.style.display = 'none';
      }
    }
    function logoutUser() {
      localStorage.removeItem('fittuberUser');
      updateNavAuth();
      window.location.href = 'index.html';
    }
    updateNavAuth();
});
