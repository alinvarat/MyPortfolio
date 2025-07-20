"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-transparent"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
