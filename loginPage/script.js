document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.querySelector('.login-btn');

    // Function to validate inputs and toggle button state
    function validateForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        loginBtn.disabled = !(username && password);
    }

    // Add input event listeners
    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Form submission handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password) {
            console.log('Login attempt:', { username, password });
            alert('Logging in...'); // Replace with actual authentication logic
            loginForm.reset();
            loginBtn.disabled = true;
        }
    });

    // Initial validation
    validateForm();
});