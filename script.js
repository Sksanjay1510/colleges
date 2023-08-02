// JavaScript code for the college website

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Get the contact form element
  const contactForm = document.getElementById('contactForm');

  // Add event listener to the contact form submit button
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Get the values from the form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Display a pop-up alert with the form data
    const message = `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`;
    alert('Form Submitted!\n\n' + message);

    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
});