// This script handles common functionality across all pages
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully");
    
    // Example: Simple Scroll Effect for Nav
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = '#000';
        } else {
            nav.style.background = '#0f172a';
        }
    });
});
