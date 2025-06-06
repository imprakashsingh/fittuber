window.onload = function() {
    // Google reCAPTCHA v2 integration
    if (document.getElementById('loginForm')) {
        var recaptchaScript = document.createElement('script');
        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        document.body.appendChild(recaptchaScript);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Login form logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = loginForm.email.value.trim();
            const password = loginForm.password.value.trim();
            const msg = document.getElementById('loginMessage');
            if (!email || !password) {
                msg.textContent = 'Please enter both email and password.';
                msg.style.color = '#e74c3c';
                return;
            }
            // Simulate login (for static site)
            localStorage.setItem('fittuberUser', email);
            msg.textContent = 'Login successful! Redirecting...';
            msg.style.color = '#1abc9c';
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1000);
        });
    }
});