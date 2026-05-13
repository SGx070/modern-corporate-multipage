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

// Add this to your existing main.js
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            
            // Close other open items (Optional)
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Add to your main.js
const contactForm = document.getElementById('mainContactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.innerHTML = `<h3>Success!</h3><p>Thank you for reaching out. Our team will contact you shortly.</p>`;
    });
}
