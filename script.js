// JavaScript code to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert for demo purposes
    alert(`Thank you, ${name}! We will get back to you shortly.`);

    // Clear the form
    document.getElementById('contactForm').reset();
});

// Learn more button functionality
function learnMore() {
    alert("Thank you for your interest! Visit our services section to learn more.");
}
if (window.location.pathname === '/cctv') {
  window.location.href = '/cctv.html';
}
