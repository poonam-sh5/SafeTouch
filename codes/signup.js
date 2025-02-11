function validateForm() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    // Validate if fields are filled
    if (!email || !password || !confirmPassword) {
        alert('Please enter complete information.');
        return false;
    }

    // Password strength check (example: at least 8 characters, one uppercase letter, one special character)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password-condition').textContent = 'Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.';
        return false;
    } else {
        document.getElementById('password-condition').textContent = '';
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-condition').textContent = 'Password doesn\'t match.';
        return false;
    } else {
        document.getElementById('confirm-password-condition').textContent = '';
    }

    alert('Account created successfully! Redirecting to dashboard...');
    window.location.href = 'dashboard.html'; // Redirect to dashboard after successful sign-up
    return true;
}