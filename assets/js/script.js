// Updated component loader
document.addEventListener('DOMContentLoaded', function() {
    const includes = document.querySelectorAll('[data-include]');
    
    includes.forEach(include => {
        const filePath = include.getAttribute('data-include');
        
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.text();
            })
            .then(data => include.innerHTML = data)
            .catch(error => {
                console.error('Component loading error:', error);
                include.innerHTML = `Error loading ${filePath}`;
            });
    });
});

// Interactive skill cloud
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    });
    
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'rotate(0deg)';
    });
});

// Dynamic theme switcher
const themes = {
    dark: { bg: '#0F172A', primary: '#6C63FF', text: '#F8FAFC' },
    light: { bg: '#F8FAFC', primary: '#6C63FF', text: '#0F172A' },
    cyber: { bg: '#000', primary: '#0FF', text: '#FFF' }
};

function changeTheme(themeName) {
    const theme = themes[themeName];
    document.documentElement.style.setProperty('--bg', theme.bg);
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--text', theme.text);
}
// Auto-swipe testimonial
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function cycleTestimonials() {
    testimonials.forEach(card => card.classList.remove('active'));
    
    testimonials[currentTestimonial].classList.add('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Start auto-rotation
setInterval(cycleTestimonials, 3500);

// Initialize first testimonial
testimonials[0].classList.add('active');