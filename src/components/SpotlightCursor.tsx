import React, { useState, useEffect } from 'react';

const SpotlightCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-30 inset-0 transition-all duration-200 ease-out"
      style={{
        background: `
          radial-gradient(80px at ${position.x}px ${position.y}px, rgba(200, 220, 255, 0.25), transparent 40%),
          radial-gradient(200px at ${position.x}px ${position.y}px, rgba(180, 200, 255, 0.15), transparent 70%),
          radial-gradient(400px at ${position.x}px ${position.y}px, rgba(160, 190, 255, 0.08), transparent 90%)
        `,
      }}
    />
  );
};

export default SpotlightCursor;
