import { motion } from "motion/react";
import { ReactNode } from "react";

export function Fade({ children, className = "", delay = 0, y = 24 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
