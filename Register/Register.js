document.addEventListener('DOMContentLoaded', function() {
    // Registration confirm password logic
    const regForm = document.getElementById('registerForm');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            const pwd = document.getElementById('password').value;
            const confirm = document.getElementById('confirmPassword').value;
            const msg = document.getElementById('registerMessage');
            if (pwd !== confirm) {
                e.preventDefault();
                msg.textContent = 'Passwords do not match!';
                msg.style.color = '#e74c3c';
            } else {
                msg.textContent = 'Registration successful!';
                msg.style.color = '#1abc9c';
            }
        });
    }
});

window.onload = function() {
    // Google reCAPTCHA v2 integration
    if (document.getElementById('registerForm')) {
        var recaptchaScript = document.createElement('script');
        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        document.body.appendChild(recaptchaScript);
    }
};