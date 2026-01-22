// Reading Level Toggle
document.addEventListener('DOMContentLoaded', function() {
    const levelButtons = document.querySelectorAll('.level-btn');

    if (levelButtons.length > 0) {
        levelButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                levelButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Get selected level
                const selectedLevel = this.getAttribute('data-level');

                // Hide all content blocks
                document.querySelectorAll('.content-block').forEach(block => {
                    block.classList.add('hidden');
                });

                // Show selected level content
                document.querySelectorAll(`.${selectedLevel}`).forEach(block => {
                    block.classList.remove('hidden');
                });
            });
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add scroll effect to navigation
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else if (currentScroll > lastScroll) {
            nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        }

        lastScroll = currentScroll;
    });
});
