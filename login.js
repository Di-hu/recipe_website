// Function to validate login form
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation: ensure email and password are entered
    if (email === "" || password === "") {
        showPopupMessage("Both fields are required.");
        return false;
    }
    
    // Simulate successful login
    // Normally, you'd verify the credentials with a backend service.
    showPopupMessage("Login Successful! Welcome to the Recipe Blog.");
    return false;  // Prevent form submission (for demo purposes)
}

// Function to show the popup message
function showPopupMessage(message) {
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popupMessage.classList.add('show');  // Show the popup

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popupMessage.classList.remove('show');  // Hide the popup
    }, 3000);
}

// Forgot Password Modal Handling
function openForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'block';
}

function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

// Password Reset Logic
function resetPassword() {
    const resetEmail = document.getElementById('resetEmail').value;

    if (resetEmail === "") {
        document.getElementById('resetMessage').textContent = "Please enter your email.";
        return;
    }

    // Simulate sending reset link
    showPopupMessage("A password reset link has been sent to your email.");
    setTimeout(() => {
        closeForgotPasswordModal();
    }, 2000);  // Close the modal after 2 seconds
}
