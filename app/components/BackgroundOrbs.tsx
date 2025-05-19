'use client';

import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-blue-200 opacity-30 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-purple-300 opacity-30 blur-2xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
