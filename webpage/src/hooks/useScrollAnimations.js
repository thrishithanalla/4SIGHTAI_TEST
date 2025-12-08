import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
    useEffect(() => {
        // Check if IntersectionObserver is supported for basic fade-ins
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                    // Trigger counter animation if this is a stats section
                    if (entry.target.querySelector('.stat-number')) {
                        animateCounters(entry.target);
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const fadeElements = document.querySelectorAll('.fade-in, .stat-item');
        fadeElements.forEach(el => {
            // Set initial state via JS if not in CSS to avoid FOUC issues if JS fails
            // But typically better in CSS. relying on class logic here.
            // script.js set these inline:
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(el);
        });

        // --- GSAP Animations ---

        // Hero content 3D tilt
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            gsap.set(heroContent, { rotationY: -15, rotationX: 10, transformPerspective: 1000 });
            gsap.to(heroContent, {
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
        }

        // Explosive intro animation for hero title
        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle && !heroTitle.dataset.animated) {
            // Prevent re-running if already animated (though useEffect runs once per mount)
            const text = heroTitle.textContent;
            heroTitle.innerHTML = text.split('').map(char => `<span class="char" style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
            heroTitle.dataset.animated = "true";

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
        const blob = document.getElementById('heroBlob');
        if (blob) {
            gsap.to(blob, {
                rotation: 360,
                duration: 20,
                ease: 'none',
                repeat: -1
            });
        }

        // Card Grid Stagger
        const cardGrids = document.querySelectorAll('.card-grid');
        cardGrids.forEach((grid) => {
            const cards = grid.querySelectorAll('.card');
            gsap.set(cards, { y: 100, opacity: 0, rotationY: -15, transformPerspective: 1000 });

            gsap.to(cards, {
                y: 0,
                opacity: 1,
                rotationY: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Stats parallax


        // Text gradient
        const gradients = document.querySelectorAll('.text-gradient');
        gradients.forEach((text) => {
            gsap.to(text, {
                backgroundPosition: '200% center',
                duration: 3,
                ease: 'none',
                repeat: -1,
                yoyo: true
            });
        });

        // Cleanup
        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []); // Run once on mount
};

// Helper for counters
function animateCounters(container) {
    const counters = container.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        if (counter.dataset.animated) return;

        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
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

        counter.dataset.animated = "true";
        updateCounter();
    });
}

export default useScrollAnimations;
