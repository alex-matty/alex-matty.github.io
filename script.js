// script.js
// Simplified for minimalistic layout

document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth scrolling for navigation links ---
    // Useful for smaller screens where overflow might occur.
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }
        });
    });
});
