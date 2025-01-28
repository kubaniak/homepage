window.onload = function() {
    const container = document.querySelector('.container');
    container.classList.add('fade-in');
};

document.querySelectorAll('.download-item a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('font-minion'); // Add the Minion Pro class on hover
    });
    
    link.addEventListener('mouseleave', () => {
        link.classList.remove('font-minion'); // Remove the class when not hovering
    });
});

