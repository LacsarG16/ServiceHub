import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ particleCount = 50, connectionDistance = 150, isAuroraActive = true }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        // Get theme colors
        const getThemeColor = () => {
            const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
            const theme = document.documentElement.getAttribute('data-theme');

            // In starry mode, use contrasting colors based on theme
            if (!isAuroraActive) {
                if (theme === 'dark') return '#ffffff'; // White stars on dark
                return '#06b6d4'; // Bright cyan stars on light
            }
            return primary || '#06b6d4';
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * (isAuroraActive ? 0.3 : 0.2); // Slower in starry mode
                this.vy = (Math.random() - 0.5) * (isAuroraActive ? 0.3 : 0.2);
                this.radius = isAuroraActive ? Math.random() * 2 + 1 : Math.random() * 1.5 + 0.5;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleFactor = Math.random() * Math.PI;
                this.baseAlpha = isAuroraActive ? 0.4 : (Math.random() * 0.6 + 0.3);
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                this.twinkleFactor += this.twinkleSpeed;

                // Mouse interaction
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    this.x -= dx * 0.02 * force;
                    this.y -= dy * 0.02 * force;
                }
            }

            draw() {
                const alpha = this.baseAlpha + Math.sin(this.twinkleFactor) * (isAuroraActive ? 0.1 : 0.3);

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = getThemeColor();
                ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
                ctx.fill();

                if (!isAuroraActive && Math.sin(this.twinkleFactor) > 0.9) {
                    // Small glow for bright stars
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = getThemeColor();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }

                ctx.globalAlpha = 1;
            }
        }

        // Initialize particles
        particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Add subtle gradient background when Aurora is off
            if (!isAuroraActive) {
                const theme = document.documentElement.getAttribute('data-theme');
                const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));

                if (theme === 'dark') {
                    gradient.addColorStop(0, 'rgba(15, 23, 42, 0.3)');
                    gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.2)');
                    gradient.addColorStop(1, 'rgba(15, 23, 42, 0.4)');
                } else {
                    // Light mode: subtle blue-gray gradient
                    gradient.addColorStop(0, 'rgba(226, 232, 240, 0.4)');
                    gradient.addColorStop(0.5, 'rgba(203, 213, 225, 0.3)');
                    gradient.addColorStop(1, 'rgba(148, 163, 184, 0.2)');
                }

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections (only if aurora is active or in a subtle way for stars)
            if (isAuroraActive || connectionDistance > 0) {
                particlesRef.current.forEach((p1, i) => {
                    particlesRef.current.slice(i + 1).forEach(p2 => {
                        const dx = p1.x - p2.x;
                        const dy = p1.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        const currentDistance = isAuroraActive ? connectionDistance : connectionDistance * 0.5;

                        if (distance < currentDistance) {
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = getThemeColor();
                            ctx.globalAlpha = (1 - distance / currentDistance) * (isAuroraActive ? 0.2 : 0.15);
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                            ctx.globalAlpha = 1;
                        }
                    });
                });
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particlesRef.current = Array.from({ length: particleCount }, () => new Particle());
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, connectionDistance, isAuroraActive]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: isAuroraActive ? 0.4 : 0.9 // Higher opacity in starry mode
            }}
        />
    );
};

export default ParticleBackground;
