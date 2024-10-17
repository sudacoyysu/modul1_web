function validateForm() {
    // Clear any previous errors
    clearErrors();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Validate Name
    if (name === "") {
        showError('nameError', 'Nama tidak boleh kosong');
        valid = false;
    }

    // Validate Email
    if (email === "") {
        showError('emailError', 'Email tidak boleh kosong');
        valid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Format email tidak valid');
        valid = false;
    }

    // Validate Password
    if (password === "") {
        showError('passwordError', 'Password tidak boleh kosong');
        valid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password harus lebih dari 6 karakter');
        valid = false;
    }

    return valid;
}

// Function to check if email format is valid
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to show error message
function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = errorMessage;
    errorElement.style.visibility = 'visible';
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => {
        error.style.visibility = 'hidden';
        error.innerText = '';
    });
}
