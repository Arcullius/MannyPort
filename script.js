// Define rotation speed variable
let rotationSpeed = 0.05;

// Define planets with their properties
const planets = [
    { name: 'about', icon: 'fa-user', color: '#FF6B6B', orbitSize: 450, speed: 15, label: 'About Me' },
    { name: 'experience', icon: 'fa-briefcase', color: '#4ECDC4', orbitSize: 1250, speed: 35, label: 'Experience' },
    { name: 'projects', icon: 'fa-code', color: '#45B7D1', orbitSize: 650, speed: 20, label: 'Projects' },
    { name: 'skills', icon: 'fa-tools', color: '#96CEB4', orbitSize: 1050, speed: 30, label: 'Skills' },
    { name: 'contact', icon: 'fa-envelope', color: '#FFEEAD', orbitSize: 850, speed: 25, label: 'Contact' }
];

// Typewriter effect for the title
function typewriterEffect() {
    const title = document.querySelector('.title');
    const phrases = [
        "The Moundhalaverse",                    // 17
        "Enjoy Your Stay",                       // 14
        "Welcome Traveler",                      // 15
        "Explore My Universe",                   // 17
        "Light takes 8min to reach Earth",       // 29
        "More stars than Earth's sand",          // 27
        "100+ billion stars in our galaxy",      // 31
        "The Moundhalaverse Awaits",            // 24
        "Space: The Ultimate Silence",           // 26
        "Venus: A day longer than its year",     // 32
        "The Moundhalaverse",                    // 17
        "Billions of galaxies exist",            // 25
        "Stars brighter than galaxies",          // 27
        "Welcome to The Moundhalaverse",         // 27
        "Black holes bend time",                 // 20
        "The universe keeps expanding",          // 26
        "The Moundhalaverse Beckons",           // 25
        "Saturn's rings: Ice and rock",          // 26
        "Jupiter has 79 moons",                  // 20
        "Neutron stars spin 600x/second",        // 30
        "Space has no direction",                // 22
        "The Moundhalaverse",
        "Every atom is 99.99% empty space",
        "Light bends near massive objects",
        "The Moundhalaverse Beckons",
        "Quantum particles can be entangled",
        "Your DNA would reach Pluto if stretched",
        "The Moundhalaverse Awaits",
        "Time stops at light speed",
        "A spoonful of neutron star = 1B tons",
        "The Moundhalaverse Dreams",
        "Sound can't travel in space",
        "Your body has 37 trillion cells",
        "The Moundhalaverse Expands",
        "Black holes emit Hawking radiation",
        "Water can exist as 3 states at once",
        "The Moundhalaverse Calls",
        "Lightning creates antimatter",
        "Glass flows very slowly",
        "The Moundhalaverse Pulses",
        "Quantum computers use superposition",
        "Your brain uses 20W of power",
        "The Moundhalaverse Glows",
        "Time moves slower in mountains",
        "Atoms never actually touch",
        "The Moundhalaverse Shimmers",
        "Light takes 8min from Sun to Earth",
        "DNA can store 215M GB per gram",
        "The Moundhalaverse Whispers",
        "Jupiter's red spot is shrinking",
        "Neutron stars spin 600 times/sec",
        "The Moundhalaverse Dances",
        "Venus spins backwards",
        "Most of the universe is dark energy",
        "The Moundhalaverse Flows",
        "Saturn would float in water",
        "Quantum tunneling happens in DNA",
        "The Moundhalaverse Ripples",
        "Space smells like burnt steak",
        "Time is relative to gravity",
        "The Moundhalaverse Echoes",
        "Pluto has mountains of ice",
        "Your atoms are billions years old",
        "The Moundhalaverse Breathes",
        "Mars has blue sunsets",
        "Diamonds can form from peanut butter",
        "The Moundhalaverse Evolves",
        "Bacteria talk using electricity",
        "Gold comes from neutron stars",
        "The Moundhalaverse Creates",
        "Quantum radar sees through walls",
        "The sun loses 4M tons per second",
        "The Moundhalaverse Resonates",
        "Tardigrades can survive in space",
        "Black holes store information",
        "The Moundhalaverse Vibrates",
        "Quantum computers are near absolute 0",
        "Your body is 99.9999% empty space",
        "The Moundhalaverse Illuminates",
        "Time dilation is measurable on Earth",
        "Neutrinos pass through everything",
        "The Moundhalaverse Unfolds",
        "Some clouds weigh a million pounds",
        "Light can be frozen",
        "The Moundhalaverse Expands",
        "Human DNA glows faintly",
        "Neptune has supersonic winds",
        "The Moundhalaverse Radiates",
        "Quantum teleportation is real",
        "Every cell contains 6 feet of DNA",
        "The Moundhalaverse Pulses",
        "Space is not a perfect vacuum",
        "Mercury has ice in its craters",
        "The Moundhalaverse Oscillates",
        "Electrons can be in two places",
        "The universe is mostly hydrogen",
        "The Moundhalaverse Transforms",
        "Cosmic rays pass through you",
        "Black holes create new universes",
        "The Moundhalaverse Harmonizes",
        "Time runs faster in space",
        "Stars make sound below human hearing",
        "The Moundhalaverse Synchronizes",
        "Quantum computers speak in qubits",
        "Your atoms were once stardust",
        "The Moundhalaverse Materializes",
        "Light can push objects",
        "Brain signals travel 268 mph",
        "The Moundhalaverse Crystallizes",
        "Some metals never stop moving",
        "Space has a temperature: -455°F",
        "The Moundhalaverse Synthesizes",
        "Earth's core is as hot as the sun",
        "Quantum particles dance together",
        "The Moundhalaverse Energizes",
        "Time is not a constant",
        "Dark matter binds galaxies",
        "The Moundhalaverse Accelerates",
        "Gravity bends light like a lens",
        "Every star you see is in the past",
        "The Moundhalaverse Converges",
        "Your body creates light"
    ];
    let currentPhraseIndex = 0;
    
    // Animate text with typewriter effect
    async function animateText() {
        while (true) {
            const phrase = phrases[currentPhraseIndex];
            
            // Create temporary element to measure width
            const temp = document.createElement('span');
            temp.style.cssText = `
                font-family: 'Space Mono', monospace;
                font-size: 2.5rem;
                letter-spacing: 4px;
                visibility: hidden;
                position: absolute;
                white-space: nowrap;
            `;
            temp.textContent = phrase;
            document.body.appendChild(temp);
            const width = temp.offsetWidth;
            document.body.removeChild(temp);
            
            // Reset animations
            title.style.animation = 'none';
            title.offsetHeight; // Force reflow
            
            // Set up for typing
            title.textContent = phrase;
            title.style.width = '0px';
            title.style.setProperty('--typing-width', `${width}px`);
            
            // Type out text
            title.style.animation = 'typing 2s steps(40, end) forwards, blink 0.75s step-end infinite';
            await new Promise(resolve => setTimeout(resolve, 4000));
            
            // Delete text
            title.style.animation = 'deleting 1.5s steps(40, end) forwards, blink 0.75s step-end infinite';
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Move to next phrase
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            
            // Pause between phrases
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    
    // Start animation
    animateText().catch(console.error);
}

// Create the starry background effect
function createStars() {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`;
        stars.appendChild(star);
    }
}

// Generate random colors for orbit effects
function getRandomColor() {
    const colors = [
        'rgba(255, 0, 0, 0.9)',     // Red
        'rgba(0, 255, 0, 0.9)',     // Green
        'rgba(0, 0, 255, 0.9)',     // Blue
        'rgba(255, 0, 255, 0.9)',   // Magenta
        'rgba(0, 255, 255, 0.9)',   // Cyan
        'rgba(255, 165, 0, 0.9)',   // Orange
        'rgba(147, 51, 234, 0.9)',  // Purple
        'rgba(255, 255, 0, 0.9)'    // Yellow
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create a planet with all its effects and animations
function createPlanet(planetInfo, index) {
    // Create the orbit container
    const orbit = document.createElement('div');
    orbit.className = 'orbit entry-animation';
    orbit.style.width = `${planetInfo.orbitSize}px`;
    orbit.style.height = `${planetInfo.orbitSize}px`;
    
    // Create the planet itself
    const planet = document.createElement('div');
    planet.className = 'planet entry-animation';
    planet.style.background = planetInfo.color;
    planet.style.left = `${planetInfo.orbitSize / 2}px`;
    planet.setAttribute('data-label', planetInfo.label);
    planet.setAttribute('data-speed', planetInfo.speed);
    planet.innerHTML = `<i class="fas ${planetInfo.icon}"></i>`;
    
    // Add to DOM but keep hidden initially
    orbit.style.visibility = 'hidden';
    planet.style.visibility = 'hidden';
    orbit.appendChild(planet);
    document.querySelector('.solar-system').appendChild(orbit);

    // Force reflow for animations
    orbit.offsetHeight;
    planet.offsetHeight;

    // Start entry animation after delay
    setTimeout(() => {
        orbit.style.visibility = 'visible';
        planet.style.visibility = 'visible';
        
        requestAnimationFrame(() => {
            orbit.classList.add('entry-animation-start');
            
            setTimeout(() => {
                planet.classList.add('entry-animation-start');
            }, 200);
        });
    }, index * 800);

    // Remove animation classes after completion
    setTimeout(() => {
        orbit.classList.remove('entry-animation', 'entry-animation-start');
        planet.classList.remove('entry-animation', 'entry-animation-start');
    }, index * 800 + 2000);

    // Set up orbit rotation animation
    let startTime = performance.now();
    let animationFrame;
    let isHovered = false;
    let pausedRotation = 0;
    let lastKnownRotation = 0;

    function updateOrbit(currentTime) {
        if (!isHovered) {
            const elapsed = currentTime - startTime;
            const rotation = (elapsed * 360) / (planetInfo.speed * 1000);
            lastKnownRotation = rotation % 360;
            orbit.style.transform = `rotateX(60deg) rotate(${rotation}deg)`;
        }
        animationFrame = requestAnimationFrame(updateOrbit);
    }

    // Start orbit animation after entry
    setTimeout(() => {
        orbit.classList.remove('entry-animation');
        planet.classList.remove('entry-animation');
        animationFrame = requestAnimationFrame(updateOrbit);
    }, index * 500 + 1000);

    // Handle hover effects
    let hoverTimeout;
    let leaveTimeout;
    let resumeTimeout;

    planet.addEventListener('mouseenter', () => {
        clearTimeout(leaveTimeout);
        clearTimeout(hoverTimeout);
        clearTimeout(resumeTimeout);
        
        hoverTimeout = setTimeout(() => {
            isHovered = true;
            const matrix = new DOMMatrix(getComputedStyle(orbit).transform);
            pausedRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
            if (pausedRotation < 0) pausedRotation += 360;
            lastKnownRotation = pausedRotation;
            
            const randomColor = getRandomColor();
            orbit.classList.add('hover-glow');
            orbit.style.boxShadow = `
                0 0 30px ${randomColor},
                inset 0 0 30px ${randomColor}
            `;
        }, 50);
    });

    planet.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        clearTimeout(leaveTimeout);
        clearTimeout(resumeTimeout);
        
        leaveTimeout = setTimeout(() => {
            orbit.classList.remove('hover-glow');
            orbit.style.boxShadow = '';
            
            resumeTimeout = setTimeout(() => {
                isHovered = false;
                const currentTime = performance.now();
                startTime = currentTime - (lastKnownRotation * planetInfo.speed * 1000 / 360);
            }, 300);
        }, 100);
    });

    // Open modal on click
    planet.addEventListener('click', () => openModal(`${planetInfo.name}Modal`));
    
    return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
        clearTimeout(hoverTimeout);
        clearTimeout(leaveTimeout);
        clearTimeout(resumeTimeout);
    };
}

// Open a modal and show overlay
function openModal(modalId) {
    closeAllModals();
    
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('active');
        overlay.style.display = 'block';
    }
}

// Close all modals and hide overlay
function closeAllModals() {
    const modals = document.querySelectorAll('.content-modal');
    const overlay = document.getElementById('overlay');
    modals.forEach(modal => {
        modal.style.display = 'none';
        modal.classList.remove('active');
    });
    overlay.style.display = 'none';
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create stars
    createStars();
    
    // Animate sun
    const sun = document.querySelector('.sun');
    sun.style.opacity = '0';
    sun.style.animation = `
        sunEntry 5s ease-out forwards,
        sunFloat 5s ease-in-out infinite 5s
    `;
    
    // Create planets with delay
    setTimeout(() => {
        planets.forEach((planet, index) => createPlanet(planet, index));
    }, 8000);

    // Initialize typewriter effect
    typewriterEffect();

    // Initialize solar system rotation
    const solarSystem = document.querySelector('.solar-system');
    let mouseX = 0, mouseY = 0;
    let currentRotationX = 0, currentRotationY = 0;
    
    // Track mouse movement for rotation
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        // Calculate distance from center for glow effect
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseDistanceX = Math.abs(e.clientX - centerX) / centerX;
        const mouseDistanceY = Math.abs(e.clientY - centerY) / centerY;
        const mouseDistance = Math.abs(mouseDistanceX - mouseDistanceY);
        
        // Apply glow effect to orbits
        document.querySelectorAll('.orbit').forEach(orbit => {
            if (mouseDistance > 0.1) {
                orbit.classList.add('glow');
            } else {
                orbit.classList.remove('glow');
            }
        });
    });

    // Update rotation based on mouse position
    function updateRotation() {
        currentRotationX += (mouseY - currentRotationX) * rotationSpeed;
        currentRotationY += (mouseX - currentRotationY) * rotationSpeed;
        
        const xRotation = currentRotationX * 2.95;
        
        solarSystem.style.transform = `
            rotateX(${xRotation}deg)
            rotateY(${-currentRotationY * 1.2}deg)
        `;
        
        requestAnimationFrame(updateRotation);
    }

    // Start rotation after entry animations
    setTimeout(() => {
        updateRotation();
    }, 2500);

    // Set up navigation click handlers
    const navItems = document.querySelectorAll('.planet-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            if (modalId) {
                openModal(modalId);
                document.querySelector('.settings-panel').classList.remove('active');
            }
        });
    });

    // Set up close button handlers
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    // Close modals when clicking overlay
    document.getElementById('overlay').addEventListener('click', closeAllModals);

    // Close modals with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    // Initialize settings panel functionality
    const settingsIcon = document.querySelector('.settings-icon');
    const settingsPanel = document.querySelector('.settings-panel');
    const perspectiveControl = document.getElementById('perspectiveControl');
    const rotationSpeedControl = document.getElementById('rotationSpeedControl');

    // Toggle settings panel
    settingsIcon.addEventListener('click', () => {
        settingsPanel.style.display = 'block';
        settingsPanel.offsetHeight;
        settingsPanel.classList.toggle('active');
    });

    // Close settings when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsPanel.contains(e.target) && !settingsIcon.contains(e.target)) {
            settingsPanel.classList.remove('active');
            setTimeout(() => {
                if (!settingsPanel.classList.contains('active')) {
                    settingsPanel.style.display = 'none';
                }
            }, 300);
        }
    });

    // Handle rotation speed control
    rotationSpeedControl.addEventListener('input', (e) => {
        rotationSpeed = e.target.value / 100;
    });

    // Handle perspective control
    perspectiveControl.addEventListener('input', (e) => {
        document.body.style.perspective = `${e.target.value}px`;
    });
});