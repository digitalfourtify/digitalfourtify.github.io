document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display an alert (in a real application, you would send this data to a server)
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    
    // Reset the form
    this.reset();
});
