import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import '~/styles/utility6.css';

const BackgroundAnimation = ({ children }) => {
  const gradientRef = useRef(null);
  const patternRef = useRef(null);

  useEffect(() => {
    // Hexagon pattern generation
    const patternElement = patternRef.current;
    if (patternElement) {
      const countY = Math.ceil(patternElement.clientHeight / 40) + 1;
      const countX = Math.ceil(patternElement.clientWidth / 48) + 1;

      for (let i = 0; i < countY; i++) {
        for (let j = 0; j < countX; j++) {
          const hexagon = document.createElement('div');
          hexagon.className = 'hexagon';
          hexagon.style.top = `${i * 40}px`;
          hexagon.style.left = `${j * 48 + ((i * 24) % 48)}px`;
          patternElement.appendChild(hexagon);
        }
      }
    }

    // Mouse movement animation
    let mousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const loop = () => {
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      }
      window.requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.requestAnimationFrame(loop);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box>
        { children }
      <Box id="gradient" ref={gradientRef}></Box>
      <Box id="pattern" ref={patternRef}></Box>
    </Box>
  );
};

export default BackgroundAnimation;
