"use client";
import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
