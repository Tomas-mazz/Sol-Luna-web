'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const variants = {
  initial: { rotateY: 0 },
  flipped: { rotateY: 180 },
};

export default function FlipCard({
  children,
  onFlipComplete,
  transition = { duration: 0.6, ease: 'easeInOut' },
  layoutId,
  className,
}) {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start('flipped');
    onFlipComplete?.();
    controls.set('initial');
  };

  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      initial="initial"
      animate={controls}
      variants={variants}
      transition={transition}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}

FlipCard.propTypes = {
  children: PropTypes.node.isRequired,
  onFlipComplete: PropTypes.func,
  transition: PropTypes.object,
  layoutId: PropTypes.string,
  className: PropTypes.string,
};

