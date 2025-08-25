document.addEventListener('DOMContentLoaded', function() {
    const tutorialsSection = document.getElementById('tutorials');
    const imageElement = document.getElementById('tutorials-image');
    let imageShown = false;
    
    // Function to show the image
    function showImage() {
        if (!imageShown) {
            imageElement.classList.add('visible');
            imageShown = true;
        }
    }
    
    // Use Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !imageShown) {
                // Wait a moment before showing the image
                setTimeout(showImage, 500);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(tutorialsSection);
    
    // Also show image on hover
    tutorialsSection.addEventListener('mouseenter', function() {
        if (!imageShown) {
            showImage();
        }
    });
});