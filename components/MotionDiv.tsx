'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function MotionDiv({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'backInOut', delay: 0.2 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
