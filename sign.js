
function validateSignUpForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation: Ensure all fields are filled
    if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
        showPopupMessage("All fields are required.");
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        showPopupMessage("Passwords do not match.");
        return false;
    }

    // Simulate successful sign-up
    // Normally, you would send the data to a server for processing.
    showPopupMessage("Account created successfully! Please log in.");
    return false;  // Prevent form submission (for demo purposes)
}

// Function to show popup message
function showPopupMessage(message) {
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popupMessage.classList.add('show');  // Show the popup

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popupMessage.classList.remove('show');  // Hide the popup
    }, 3000);
}
