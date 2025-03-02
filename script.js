particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Add click event listeners to experience, club, and community items
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('.experience-image').getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});

const clubItems = document.querySelectorAll('.club-item');
clubItems.forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('.club-image').getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});

const communityItems = document.querySelectorAll('.community-item');
communityItems.forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('.community-image').getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
