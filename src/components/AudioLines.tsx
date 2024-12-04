import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface AudioLinesProps {
    width?: string;
    height?: string;
}

const AudioLinesIcon = ({ width, height}: AudioLinesProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  return (
    <div
      className="cursor-pointer select-none hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className='text-green-600'
      >
        <path d="M2 10v3" />
        <motion.path
          variants={{
            normal: { d: 'M6 6v11' },
            animate: {
              d: ['M6 6v11', 'M6 10v3', 'M6 6v11'],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            },
          }}
          d="M6 6v11"
          animate={controls}
        />
        <motion.path
          variants={{
            normal: { d: 'M10 3v18' },
            animate: {
              d: ['M10 3v18', 'M10 9v5', 'M10 3v18'],
              transition: {
                duration: 1,
                repeat: Infinity,
              },
            },
          }}
          d="M10 3v18"
          animate={controls}
        />
        <motion.path
          variants={{
            normal: { d: 'M14 8v7' },
            animate: {
              d: ['M14 8v7', 'M14 6v11', 'M14 8v7'],
              transition: {
                duration: 0.8,
                repeat: Infinity,
              },
            },
          }}
          d="M14 8v7"
          animate={controls}
        />
        <motion.path
          variants={{
            normal: { d: 'M18 5v13' },
            animate: {
              d: ['M18 5v13', 'M18 7v9', 'M18 5v13'],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            },
          }}
          d="M18 5v13"
          animate={controls}
        />
        <path d="M22 10v3" />
      </svg>
    </div>
  );
};

export { AudioLinesIcon };
