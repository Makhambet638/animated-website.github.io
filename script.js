const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNavMenu() {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav-close.svg";
    } else {
        navBtnImg.src = "./img/nav-open.svg";
    }
}

navBtn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleNavMenu();
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        toggleNavMenu();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// script.js

// Dynamically load the Particles.js library
var particlesScript = document.createElement('script');
particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
document.head.appendChild(particlesScript);

// Function to initialize Particles.js for the contact section
function initializeParticles() {
    particlesJS('particles-js-contact', {
        "particles": {
            "number": {
                "value": 100, // Increase the number of particles for a denser star field
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // Set the color of the stars to white
            },
            "shape": {
                "type": "star" // Set the shape of the particles to star
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 2 // Adjust the size of the stars
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 0.5, // Adjust the speed of the movement
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": false
                }
            }
        }
    });
}

// Call the function to initialize Particles.js
initializeParticles();
