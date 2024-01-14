// Function to smooth scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to redirect to the app store
function redirectToAppStore() {
    // Add your app store redirection logic here
    console.log("Redirecting to the app store...");
}

// Function to send a message (dummy function, replace with actual logic)
function sendMessage() {
    alert("Message sent! (This is a dummy function)");
}

// Function to show/hide the scroll-to-top button based on scroll position
function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Attach the toggleScrollToTopButton function to the scroll event
window.onscroll = function () {
    toggleScrollToTopButton();
};
