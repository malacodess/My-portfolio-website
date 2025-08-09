document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Bunny guide interaction
    const bunnyGuide = document.querySelector('.bunny-guide');
    const speechBubble = document.querySelector('.speech-bubble');
    
    if (bunnyGuide && speechBubble) {
        // Make bunny follow cursor
        document.addEventListener('mousemove', function(e) {
            bunnyGuide.style.left = `${e.clientX + 15}px`;
            bunnyGuide.style.top = `${e.clientY + 15}px`;
        });
        
        // Bunny click interaction
        let currentMessage = 0;
        const messages = [
            "Welcome to Kashmala's portfolio!",
            "Click the menu to explore different sections!",
            "This is her first project - isn't it cute?",
            "Check out her projects page to see what she's made!",
            "Bunny out! 🐰"
        ];
        
        bunnyGuide.addEventListener('click', function() {
            speechBubble.textContent = messages[currentMessage];
            currentMessage = (currentMessage + 1) % messages.length;
            
            // Animate the speech bubble
            speechBubble.style.animation = 'none';
            void speechBubble.offsetWidth; // Trigger reflow
            speechBubble.style.animation = 'float 3s ease-in-out infinite';
        });
    }
    
    // Set active nav item based on current page
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (currentPage === itemHref) {
            item.classList.add('active');
        }
    });
});