// function playVideo() {
//     alert('Video player would launch here in a real implementation!');
// }

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Add scroll effect to navbar
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.backgroundColor = 'rgba(63, 75, 59, 0.95)';
//         navbar.style.backdropFilter = 'blur(10px)';
//     } else {
//         navbar.style.backgroundColor = 'var(--darkest-green)';
//         navbar.style.backdropFilter = 'none';
//     }
// });

// // Ensure video plays on load
// // document.addEventListener('DOMContentLoaded', function() {
// //     const video = document.querySelector('.video-background video');
// //     if (video) {
// //         video.play().catch(function(error) {
// //             console.log("Video autoplay failed:", error);
// //         });
// //     }
// // });

// // Mobile menu toggle functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // Create mobile menu button
//     const navbar = document.querySelector('.navbar');
//     const navContainer = document.querySelector('.nav-container');
//     const navLinks = document.querySelector('.nav-links');
    
//     // Only add mobile menu if screen is small
//     if (window.innerWidth < 768) {
//         const menuToggle = document.createElement('button');
//         menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//         menuToggle.classList.add('menu-toggle');
//         menuToggle.style.cssText = `
//             background: none;
//             border: none;
//             color: white;
//             font-size: 1.5rem;
//             cursor: pointer;
//             display: none;
//             position: absolute;
//             right: 1rem;
//             top: 1rem;
//         `;
        
//         navContainer.appendChild(menuToggle);
        
//         // Initially hide nav links on mobile
//         navLinks.style.display = 'none';
//         navLinks.style.flexDirection = 'column';
//         navLinks.style.width = '100%';
//         navLinks.style.marginTop = '1rem';
        
//         // Toggle menu function
//         menuToggle.addEventListener('click', function() {
//             if (navLinks.style.display === 'none') {
//                 navLinks.style.display = 'flex';
//                 menuToggle.innerHTML = '<i class="fas fa-times"></i>';
//             } else {
//                 navLinks.style.display = 'none';
//                 menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//             }
//         });
        
//         // Show menu toggle on mobile
//         menuToggle.style.display = 'block';
        
//         // Close menu when a link is clicked
//         navLinks.querySelectorAll('a').forEach(link => {
//             link.addEventListener('click', function() {
//                 navLinks.style.display = 'none';
//                 menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//             });
//         });
//     }
    
//     // Rest of your existing code...
//     const video = document.querySelector('.video-background video');
//     if (video) {
//         video.play().catch(function(error) {
//             console.log("Video autoplay failed:", error);
//         });
//     }
// });

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container') && 
                navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
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
});