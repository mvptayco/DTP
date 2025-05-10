// Background Animation
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let hue = 0;

    // Create animated background
    function createAnimatedBackground() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.6';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Basketball court pattern
        function drawCourt() {
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, width, height);

            // Court lines
            ctx.strokeStyle = '#ff6b00';
            ctx.lineWidth = 1.5;
            
            // Center circle
            ctx.beginPath();
            ctx.arc(width/2, height/2, 30, 0, Math.PI * 2);
            ctx.stroke();

            // Three-point line
            ctx.beginPath();
            ctx.arc(width/2, height/2, 90, 0, Math.PI * 2);
            ctx.stroke();

            // Free throw line
            ctx.beginPath();
            ctx.arc(width/2, height/2, 60, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Animated particles
        const particles = [];
        const particleCount = 30; // Reduced particle count

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5; // Smaller particles
                this.speedX = Math.random() * 1.5 - 0.75; // Slower movement
                this.speedY = Math.random() * 1.5 - 0.75;
                this.color = `hsl(${hue}, 100%, 50%)`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            drawCourt();

            hue = (hue + 0.3) % 360; // Slower color transition
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        animate();
    }

    createAnimatedBackground();
}); 