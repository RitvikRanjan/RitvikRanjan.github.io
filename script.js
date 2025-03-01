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
    ```

**Explanation of the JavaScript:**

1.  **Particles.js:**
    * The `particlesJS()` function initializes the particle background using the `particles.min.js` library.
    * It configures the number, color, shape, opacity, size, and movement of the particles.
    * The `interactivity` section enables particle interaction on hover (repulse) and click (push).
    * `retina_detect: true` ensures the particles look sharp on high-resolution screens.

2.  **Click Event Listeners:**
    * The code adds click event listeners to each experience, club, and community item.
    * When an item is clicked, it retrieves the `data-link` attribute from the corresponding image element.
    * If a link is found, it redirects the user to the specified page using `window.location.href`. This makes the boxes clickable.

**To complete the setup:**

* **Download Particles.js:**
    * Download the `particles.min.js` file from a CDN (e.g., cdnjs.com) or the official particles.js GitHub repository.
    * Place the `particles.min.js` file in the same directory as your `index.html` file.
* **Create HTML Files:**
    * Create the HTML files for each experience, club, and community item (e.g., `nasa.html`, `nlp.html`, `math.html`, etc.).
* **Add Images:**
    * Add the images to the `images` folder.
* **Update Placeholders:**
    * Update the placeholder text and links in the HTML.
