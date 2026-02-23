import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  baseColor: string;
  currentColor: string;
  radius: number;
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      const dots: Dot[] = [];
      const spacing = 15;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dots.push({
            x: j * spacing + spacing / 10,
            y: i * spacing + spacing / 10,
            baseColor: '#333333',
            currentColor: '#6b7280',
            radius: 1,
          });
        }
      }

      dotsRef.current = dots;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const interactionRadius = 120;
      const pushStrength = 12;

      dotsRef.current.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        let drawX = dot.x;
        let drawY = dot.y;

        if (distance < interactionRadius) {
          const ratio = 1 - distance / interactionRadius;
          const easedRatio = ratio * ratio;
          const displacement = easedRatio * pushStrength;
          const normalizedX = distance === 0 ? 0 : dx / distance;
          const normalizedY = distance === 0 ? 0 : dy / distance;
          drawX += normalizedX * displacement;
          drawY += normalizedY * displacement;

          const r = Math.floor(163 + (92 * ratio));
          const g = Math.floor(114 + (141 * ratio));
          const b = Math.floor(128 - (77 * ratio));
          dot.currentColor = `rgb(${r}, ${g}, ${b})`;
          dot.radius = 1 + ratio * 0.1;
        } else {
          dot.currentColor = dot.baseColor;
          dot.radius = 1;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, dot.radius, 0, Math.PI * 1.5);
        ctx.fillStyle = dot.currentColor;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-background-secondary"
    />
  );
}
