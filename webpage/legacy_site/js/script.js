// ============================================
// 4SIGHT AI - INTERACTIVE JAVASCRIPT
// Modern, Responsive, Feature-Rich
// ============================================

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initScrollAnimations();
    initStatCounters();

    initContactForm();
    initSmoothScroll();
    initActiveNavLinks();
    initHeaderScroll();
    initVideoBackground();
    initGSAPAnimations();
    // initChart(); // Removed AI Impact Visualization
    initSVGInteractions();

    // New premium animations
    initCursorInteractivity();
    initThreeJSBackground();
    initFluidBackground();
    initPremiumStats();
});

// ========== MOBILE MENU TOGGLE ==========
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                    // Trigger counter animation if this is a stats section
                    if (entry.target.querySelector('.stat-number')) {
                        animateCounters(entry.target);
                    }

                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in, .card, .stat-item');
        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(el);
        });
    }
}

// ========== ANIMATED COUNTERS ==========
function initStatCounters() {
    // This will be triggered by scroll animations
    // See animateCounters function below
}

function animateCounters(container) {
    const counters = container.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    });
}

// ========== MODAL HANDLERS REMOVED ==========

// ========== CONTACT FORM VALIDATION & HANDLING ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Reset previous errors
            clearFormErrors();

            // Validate form
            let isValid = true;

            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                showError(name, 'Please enter your name');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError(email, 'Please enter your email address');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }

            // Validate company
            const company = document.getElementById('company');
            if (!company.value.trim()) {
                showError(company, 'Please enter your company name');
                isValid = false;
            }

            // Validate interest
            const interest = document.getElementById('interest');
            if (!interest.value) {
                showError(interest, 'Please select an option');
                isValid = false;
            }

            // Validate message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                showError(message, 'Please enter your message');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError(message, 'Message must be at least 10 characters long');
                isValid = false;
            }

            // Validate privacy checkbox
            const privacy = document.getElementById('privacy');
            if (!privacy.checked) {
                showError(privacy, 'Please accept the terms and conditions');
                isValid = false;
            }

            // If form is valid, submit (in production, this would send to a server)
            if (isValid) {
                submitContactForm(contactForm);
            }
        });

        // Real-time validation on blur
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    const label = this.previousElementSibling;
                    const labelText = label ? label.textContent.replace('*', '').trim() : 'This field';
                    showError(this, labelText + ' is required');
                } else {
                    clearError(this);
                }
            });

            // Clear error on input
            input.addEventListener('input', function() {
                if (this.parentElement.classList.contains('error')) {
                    clearError(this);
                }
            });
        });

        // Special handling for checkboxes
        const checkboxes = contactForm.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.hasAttribute('required') && !this.checked) {
                    showError(this, 'This field is required');
                } else {
                    clearError(this);
                }
            });
        });
    }
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const errorElement = formGroup.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
}

function clearFormErrors() {
    const errorGroups = document.querySelectorAll('.form-group.error');
    errorGroups.forEach(group => group.classList.remove('error'));
}

function submitContactForm(form) {
    // Get form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // In production, you would send this to a server:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })

    // For demo purposes, show success message
    console.log('Form submitted:', data);

    // Show success message
    const successMessage = document.getElementById('formSuccess');
    if (successMessage) {
        successMessage.style.display = 'block';

        // Reset form
        form.reset();

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide success message after 10 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 10000);
    }

    // Alternative: Create mailto link (basic fallback)
    // const mailtoLink = `mailto:contact@4sightai.com?subject=Contact from ${data.name}&body=${encodeURIComponent(data.message)}`;
    // window.location.href = mailtoLink;
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or if it's meant to trigger a function
            if (href === '#' || this.hasAttribute('onclick')) {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                const headerOffset = 80; // Height of fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== ACTIVE NAV LINKS ==========
function initActiveNavLinks() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Set active class on current page link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// ========== HEADER SCROLL EFFECT ==========
function initHeaderScroll() {
    const header = document.querySelector('header');

    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }
}

// ========== UTILITY FUNCTIONS ==========

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========== LAZY LOADING ENHANCEMENT ==========
// Modern browsers support native lazy loading, but we can add fallback
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========== SCROLL TO TOP ON PAGE LOAD ==========
// Ensure page starts at top (some browsers remember scroll position)
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// ========== ACCESSIBILITY ENHANCEMENTS ==========

// ========== PERFORMANCE MONITORING ==========
// Log performance metrics (can be removed in production)
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('Performance Metrics:');
            console.log('Page Load Time:', (pageLoadTime / 1000).toFixed(2), 'seconds');
            console.log('Connection Time:', (connectTime / 1000).toFixed(2), 'seconds');
            console.log('Render Time:', (renderTime / 1000).toFixed(2), 'seconds');
        }, 0);
    });
}

// ========== CONSOLE BRANDING ==========
console.log(
    '%c4sight AI%c\n' +
    'Empowering Enterprises to harness the power of AI\n' +
    'Website: https://4sightai.com\n' +
    'Contact: contact@4sightai.com',
    'color: #00e5ff; font-size: 24px; font-weight: bold;',
    'color: #6c757d; font-size: 14px;'
);

// ========== ANIMATED CANVAS BACKGROUND ==========
function initVideoBackground() {
    const canvas = document.getElementById('heroCanvas');

    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 229, 255, 0.8)';
            ctx.fill();
        }
    }

    // Create particles
    function createParticles() {
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    createParticles();

    // Draw connections between nearby particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const opacity = (1 - distance / 150) * 0.3;
                    ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw and update particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        drawConnections();

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', function() {
        resizeCanvas();
        createParticles();
    });
}

// ========== GSAP ANIMATIONS ==========
function initGSAPAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section 3D animation
    gsap.set('.hero-content', { rotationY: -15, rotationX: 10, transformPerspective: 1000 });
    gsap.to('.hero-content', {
        rotationY: 0,
        rotationX: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    });

    // Explosive intro animation for hero title
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = text.split('').map(char => `<span class="char">${char}</span>`).join('');

        gsap.set('.char', { opacity: 0, y: 50, rotationX: -90 });
        gsap.to('.char', {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.05,
            delay: 0.5
        });
    }

    // Morphing blob animation
    gsap.to('#heroBlob', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1
    });

    // Enhanced Cards scroll-triggered animations with staggered entrance and 3D effects
    gsap.utils.toArray('.card-grid').forEach((grid) => {
        const cards = grid.querySelectorAll('.card');

        // Staggered entrance animation for card grids
        gsap.set(cards, { y: 100, opacity: 0, rotationY: -15, transformPerspective: 1000 });

        gsap.to(cards, {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.1, // Stagger each card by 0.1s
            scrollTrigger: {
                trigger: grid,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Enhanced 3D hover effects and particle system
        cards.forEach((card, index) => {
            // Add particle container and particles to each card
            const particleContainer = document.createElement('div');
            particleContainer.className = 'card-particles';
            card.appendChild(particleContainer);

            // Create floating particles
            for (let i = 0; i < 6; i++) {
                const particle = document.createElement('div');
                particle.className = 'card-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particleContainer.appendChild(particle);
            }

            // Enhanced 3D hover effect
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    rotationY: 20,
                    rotationX: 15,
                    scale: 1.08,
                    duration: 0.4,
                    ease: 'power2.out'
                });

                // Animate particles on hover
                gsap.to(particleContainer.querySelectorAll('.card-particle'), {
                    scale: 1.5,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.05
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });

                // Reset particles
                gsap.to(particleContainer.querySelectorAll('.card-particle'), {
                    scale: 1,
                    opacity: 0.6,
                    duration: 0.3
                });
            });

            // Ripple click effect
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.className = 'card-ripple';
                ripple.style.left = (e.offsetX - 10) + 'px';
                ripple.style.top = (e.offsetY - 10) + 'px';
                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    });

    // Stats section parallax effect
    gsap.to('.stats', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.stats',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Text gradient animation
    gsap.utils.toArray('.text-gradient').forEach((text) => {
        gsap.to(text, {
            backgroundPosition: '200% center',
            duration: 3,
            ease: 'none',
            repeat: -1,
            yoyo: true
        });
    });

    // Floating elements animation
    gsap.utils.toArray('.floating-contact').forEach((element) => {
        gsap.to(element, {
            y: -10,
            duration: 2,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
        });
    });

    // Scroll-triggered parallax for sections
    gsap.utils.toArray('.section').forEach((section) => {
        gsap.to(section, {
            backgroundPosition: '50% 100px',
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// ========== CHART.JS INITIALIZATION (REMOVED) ==========
// Chart functionality removed as per user request

// ========== ADVANCED CURSOR SYSTEM ==========
function initCursorInteractivity() {
    // Create cursor elements
    const cursor = document.getElementById('cursorFollower');
    const cursorGlow = createCursorElement('cursor-glow');
    const cursorMagnetic = createCursorElement('cursor-magnetic');
    const cursorTextReveal = createCursorElement('cursor-text-reveal');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isMouseMoving = false;
    let trailTimeout;
    let particleCount = 0;

    // Create cursor element helper
    function createCursorElement(className) {
        const element = document.createElement('div');
        element.className = className;
        document.body.appendChild(element);
        return element;
    }

    // Mouse move handler with trail effects
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;

        // Create trail effect
        createCursorTrail(mouseX, mouseY);
        
        // Create particles occasionally
        if (Math.random() < 0.3) {
            createCursorParticle(mouseX, mouseY);
        }

        // Update glow effect
        updateCursorGlow(mouseX, mouseY);
    });

    // Create cursor trail
    function createCursorTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 800);
    }

    // Create cursor particles
    function createCursorParticle(x, y) {
        if (particleCount > 10) return; // Limit particles
        
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);

        particleCount++;
        setTimeout(() => {
            particle.remove();
            particleCount--;
        }, 2000);
    }

    // Update cursor glow
    function updateCursorGlow(x, y) {
        cursorGlow.style.left = x + 'px';
        cursorGlow.style.top = y + 'px';
        cursorGlow.style.opacity = '0.3';
    }

    // Smooth cursor following
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorMagnetic.style.left = cursorX + 'px';
        cursorMagnetic.style.top = cursorY + 'px';

        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Show/hide cursor system
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorGlow.style.opacity = '0.3';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorGlow.style.opacity = '0';
        cursorMagnetic.style.opacity = '0';
        cursorTextReveal.style.opacity = '0';
    });

    // Interactive element detection
    const interactiveElements = document.querySelectorAll('a, button, .card, .btn, input, textarea, [data-cursor]');
    
    interactiveElements.forEach(el => {
        // Add cursor interactive class
        el.classList.add('cursor-interactive');
        
        // Hover effects
        el.addEventListener('mouseenter', (e) => {
            cursor.classList.add('cursor-hover');
            cursorMagnetic.style.opacity = '0.8';
            
            // Magnetic attraction effect
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            gsap.to(cursor, {
                x: centerX - mouseX,
                y: centerY - mouseY,
                duration: 0.3,
                ease: 'power2.out'
            });

            // Show text reveal for specific elements
            if (el.hasAttribute('data-cursor-text')) {
                cursorTextReveal.textContent = el.getAttribute('data-cursor-text');
                cursorTextReveal.style.left = mouseX + 'px';
                cursorTextReveal.style.top = mouseY + 'px';
                cursorTextReveal.style.opacity = '1';
            }
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover', 'cursor-click', 'cursor-text', 'cursor-link');
            cursorMagnetic.style.opacity = '0';
            cursorTextReveal.style.opacity = '0';
            
            // Reset cursor position
            gsap.to(cursor, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        // Click effects
        el.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-click');
            createCursorRipple(mouseX, mouseY);
        });

        el.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-click');
        });

        // Special cursor states based on element type
        if (el.tagName === 'A') {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-link');
            });
        }

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-text');
            });
        }
    });

    // Create ripple effect
    function createCursorRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Text reveal effects for headings
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .text-gradient');
    textElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-text');
            createTextRevealEffect(el);
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-text');
        });
    });

    // Text reveal effect
    function createTextRevealEffect(element) {
        const text = element.textContent;
        const letters = text.split('');
        
        element.innerHTML = letters.map(letter => 
            `<span class="letter-reveal" style="opacity: 0; transform: translateY(20px);">${letter}</span>`
        ).join('');

        gsap.to(element.querySelectorAll('.letter-reveal'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: 'back.out(1.7)'
        });

        setTimeout(() => {
            element.innerHTML = text;
        }, 2000);
    }

    // Morphing cursor effects
    document.addEventListener('mousemove', () => {
        if (Math.random() < 0.1) {
            cursor.classList.add('cursor-morph');
            setTimeout(() => {
                cursor.classList.remove('cursor-morph');
            }, 1000);
        }
    });

    // Loading cursor effect
    function showLoadingCursor() {
        const loadingCursor = createCursorElement('cursor-loading');
        loadingCursor.style.left = mouseX + 'px';
        loadingCursor.style.top = mouseY + 'px';
        loadingCursor.style.opacity = '1';
        
        setTimeout(() => {
            loadingCursor.remove();
        }, 2000);
    }

    // Global click effects
    document.addEventListener('click', (e) => {
        createCursorRipple(e.clientX, e.clientY);
        
        // Create explosion effect
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createCursorParticle(
                    e.clientX + (Math.random() - 0.5) * 100,
                    e.clientY + (Math.random() - 0.5) * 100
                );
            }, i * 50);
        }
    });

    // Scroll-based cursor effects
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        cursor.classList.add('cursor-morph');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            cursor.classList.remove('cursor-morph');
        }, 300);
    });

    // Advanced cursor effects
    function createAdvancedCursorEffects() {
        // Explosion effect on special interactions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.card') || e.target.closest('.btn-primary')) {
                createExplosionEffect(e.clientX, e.clientY);
            }
        });

        // Wave effect on scroll
        let waveTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(waveTimeout);
            waveTimeout = setTimeout(() => {
                createWaveEffect(mouseX, mouseY);
            }, 100);
        });

        // Energy lines on fast mouse movement
        let lastMouseTime = 0;
        document.addEventListener('mousemove', (e) => {
            const now = performance.now();
            if (now - lastMouseTime < 50) { // Fast movement
                createEnergyLine(e.clientX, e.clientY);
            }
            lastMouseTime = now;
        });

        // Neural network effect on hover over AI-related elements
        const aiElements = document.querySelectorAll('[class*="ai"], [class*="AI"], .card');
        aiElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                createNeuralNetworkEffect(mouseX, mouseY);
            });
        });

        // Quantum effect on special interactions
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                createQuantumEffect(mouseX, mouseY);
            }
        });

        // AI Brain effect on focus
        document.addEventListener('focusin', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                createAIBrainEffect(mouseX, mouseY);
            }
        });

        // Matrix effect on special key combinations
        let keySequence = [];
        document.addEventListener('keydown', (e) => {
            keySequence.push(e.key);
            if (keySequence.length > 5) keySequence.shift();
            
            if (keySequence.join('') === 'matrix') {
                createMatrixEffect(mouseX, mouseY);
                keySequence = [];
            }
        });
    }

    // Create explosion effect
    function createExplosionEffect(x, y) {
        const explosion = document.createElement('div');
        explosion.className = 'cursor-explosion';
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
        document.body.appendChild(explosion);

        setTimeout(() => {
            explosion.remove();
        }, 800);
    }

    // Create wave effect
    function createWaveEffect(x, y) {
        const wave = document.createElement('div');
        wave.className = 'cursor-wave';
        wave.style.left = x + 'px';
        wave.style.top = y + 'px';
        document.body.appendChild(wave);

        setTimeout(() => {
            wave.remove();
        }, 1200);
    }

    // Create energy line
    function createEnergyLine(x, y) {
        const line = document.createElement('div');
        line.className = 'cursor-energy-line';
        line.style.left = x + 'px';
        line.style.top = y + 'px';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(line);

        setTimeout(() => {
            line.remove();
        }, 1000);
    }

    // Create neural network effect
    function createNeuralNetworkEffect(x, y) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const node = document.createElement('div');
                node.className = 'cursor-neural-node';
                node.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
                node.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
                document.body.appendChild(node);

                setTimeout(() => {
                    node.remove();
                }, 2000);
            }, i * 200);
        }
    }

    // Create quantum effect
    function createQuantumEffect(x, y) {
        const quantum = document.createElement('div');
        quantum.className = 'cursor-quantum';
        quantum.style.left = x + 'px';
        quantum.style.top = y + 'px';
        document.body.appendChild(quantum);

        setTimeout(() => {
            quantum.remove();
        }, 1000);
    }

    // Create AI brain effect
    function createAIBrainEffect(x, y) {
        const brain = document.createElement('div');
        brain.className = 'cursor-ai-brain';
        brain.style.left = x + 'px';
        brain.style.top = y + 'px';
        document.body.appendChild(brain);

        setTimeout(() => {
            brain.remove();
        }, 2000);
    }

    // Create matrix effect
    function createMatrixEffect(x, y) {
        const matrix = document.createElement('div');
        matrix.className = 'cursor-matrix';
        matrix.style.left = x + 'px';
        matrix.style.top = y + 'px';
        document.body.appendChild(matrix);

        setTimeout(() => {
            matrix.remove();
        }, 3000);
    }

    // Create data stream effect
    function createDataStreamEffect(x, y) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const stream = document.createElement('div');
                stream.className = 'cursor-data-stream';
                stream.style.left = (x + i * 10) + 'px';
                stream.style.top = y + 'px';
                document.body.appendChild(stream);

                setTimeout(() => {
                    stream.remove();
                }, 800);
            }, i * 100);
        }
    }

    // Create hologram effect
    function createHologramEffect(x, y) {
        const hologram = document.createElement('div');
        hologram.className = 'cursor-hologram';
        hologram.style.left = x + 'px';
        hologram.style.top = y + 'px';
        document.body.appendChild(hologram);

        setTimeout(() => {
            hologram.remove();
        }, 2000);
    }

    // Initialize advanced effects
    createAdvancedCursorEffects();

    // Performance optimization
    let lastTime = 0;
    function optimizedUpdate() {
        const now = performance.now();
        if (now - lastTime > 16) { // 60fps
            updateCursor();
            lastTime = now;
        }
        requestAnimationFrame(optimizedUpdate);
    }
    optimizedUpdate();
}

// ========== THREE.JS WEBGL BACKGROUND ==========
function initThreeJSBackground() {
    const container = document.getElementById('webglBackground');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create molecular structure
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.6 });

    const particles = [];
    for (let i = 0; i < 50; i++) {
        const particle = new THREE.Mesh(geometry, material.clone());
        particle.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        scene.add(particle);
        particles.push(particle);
    }

    // Add connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x007bff, transparent: true, opacity: 0.3 });
    particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
            const distance = particle.position.distanceTo(otherParticle.position);
            if (distance < 3) {
                const geometry = new THREE.BufferGeometry().setFromPoints([particle.position, otherParticle.position]);
                const line = new THREE.Line(geometry, lineMaterial);
                scene.add(line);
            }
        });
    });

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        particles.forEach((particle, i) => {
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
            particle.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
        });

        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ========== FLUID ANIMATION BACKGROUND ==========
function initFluidBackground() {
    const container = document.getElementById('fluidBg');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let time = 0;

    function animate() {
        time += 0.01;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create fluid-like waves
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let x = 0; x < canvas.width; x += 10) {
                const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 20 + Math.sin(x * 0.005 + time * 0.5) * 10;
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = `rgba(0, 229, 255, ${0.1 - i * 0.02})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        requestAnimationFrame(animate);
    }
    animate();
}

// ========== PREMIUM STATS ANIMATIONS ==========
function initPremiumStats() {
    const statItems = document.querySelectorAll('.premium-stat');

    statItems.forEach((item, index) => {
        // Staggered entrance animation
        gsap.fromTo(item,
            {
                opacity: 0,
                y: 50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "back.out(1.7)"
            }
        );

        // Hover effects with GSAP
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });

            const sparkle = item.querySelector('.stat-sparkle');
            if (sparkle) {
                gsap.to(sparkle, {
                    scale: 1.5,
                    rotation: 180,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

            const sparkle = item.querySelector('.stat-sparkle');
            if (sparkle) {
                gsap.to(sparkle, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

        // Number counting animation with enhanced effects
        const numberElement = item.querySelector('.stat-number');
        if (numberElement) {
            const target = parseInt(numberElement.getAttribute('data-target'));
            let current = 0;
            const increment = target / 100;

            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                numberElement.textContent = Math.floor(current).toLocaleString();

                // Add pulse effect during counting
                gsap.to(numberElement, {
                    scale: 1.1,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.out"
                });
            }, 20);
        }
    });

    // Add scroll-triggered animations for stats section
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.stats',
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.stats',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
}

// ========== SVG INTERACTIONS ==========
function initSVGInteractions() {
    const svgElements = document.querySelectorAll('.animated-svg');

    svgElements.forEach((svg) => {
        svg.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.2,
                rotation: 360,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        svg.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        // Click interaction
        svg.addEventListener('click', function() {
            gsap.timeline()
                .to(this, { scale: 1.5, duration: 0.2, ease: 'power2.out' })
                .to(this, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
    });

    // Morphing icon interactions
    const morphingIcons = document.querySelectorAll('.morphing-icon');
    morphingIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            gsap.to(this, {
                morphSVG: { shape: '#blobPath', type: 'rotational' },
                duration: 1,
                ease: 'power2.inOut'
            });
        });
    });
}

// ========== EXPORT FUNCTIONS FOR GLOBAL USE ==========
