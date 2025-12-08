import React, { useEffect, useRef } from 'react';
import './CursorFollower.css'; // We'll create this CSS file separately

const CursorFollower = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.id = 'cursorFollower';
        document.body.appendChild(cursor);

        // Additional elements for effects
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        let mouseX = 0, mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update main cursor
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            // Update glow with slight delay or different effect if desired
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';

            // Create trail effect
            createCursorTrail(mouseX, mouseY);

            // Random particles
            if (Math.random() < 0.3) {
                createCursorParticle(mouseX, mouseY);
            }
        };

        const createCursorTrail = (x, y) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = x + 'px';
            trail.style.top = y + 'px';
            document.body.appendChild(trail);

            setTimeout(() => {
                trail.remove();
            }, 500); // reduced time for performance
        };

        const createCursorParticle = (x, y) => {
            // Limit number of particles in DOM
            if (document.querySelectorAll('.cursor-particle').length > 20) return;

            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            // Random direction
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2 + 1;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;

            particle.dataset.vx = vx;
            particle.dataset.vy = vy;

            document.body.appendChild(particle);

            // Animate particle
            let opacity = 1;
            const animateParticle = () => {
                if (!particle.parentNode) return;

                const currentLeft = parseFloat(particle.style.left);
                const currentTop = parseFloat(particle.style.top);

                particle.style.left = (currentLeft + vx) + 'px';
                particle.style.top = (currentTop + vy) + 'px';

                opacity -= 0.05;
                particle.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animateParticle);
                } else {
                    particle.remove();
                }
            };

            requestAnimationFrame(animateParticle);
        };

        document.addEventListener('mousemove', onMouseMove);

        // Click effects
        const onMouseDown = () => cursor.classList.add('clicking');
        const onMouseUp = () => cursor.classList.remove('clicking');

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        // Hover effects for links and buttons
        const addHoverClass = () => cursor.classList.add('hovering');
        const removeHoverClass = () => cursor.classList.remove('hovering');

        const interactables = document.querySelectorAll('a, button, input, textarea, .card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', addHoverClass);
            el.addEventListener('mouseleave', removeHoverClass);
        });

        // MutationObserver to attach listeners to dynamic elements could be added here

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);

            if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor);
            if (cursorGlow && cursorGlow.parentNode) cursorGlow.parentNode.removeChild(cursorGlow);

            // Clean up remaining particles/trails
            document.querySelectorAll('.cursor-trail, .cursor-particle').forEach(el => el.remove());
        };
    }, []);

    return null; // This component handles its visual output via DOM manipulation
};

export default CursorFollower;
