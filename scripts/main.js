function playVideo() {
    alert('Video player would launch here in a real implementation!');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(63, 75, 59, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--darkest-green)';
        navbar.style.backdropFilter = 'none';
    }
});

// Ensure video plays on load
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-background video');
    if (video) {
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });
    }
});