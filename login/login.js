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