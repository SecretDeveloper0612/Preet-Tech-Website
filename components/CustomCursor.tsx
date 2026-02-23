
import React, { useEffect, useState, memo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable = !!target.closest('button, a, .clickable, [data-cursor]');
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', moveMouse, { passive: true });
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="bg-indigo-500 rounded-full"
          animate={{
            width: isHovering ? 48 : 8,
            height: isHovering ? 48 : 8,
            opacity: isHovering ? 0.15 : 1,
          }}
          transition={{ type: 'spring', ...springConfig }}
        />
      </motion.div>
    </div>
  );
};

export default memo(CustomCursor);
