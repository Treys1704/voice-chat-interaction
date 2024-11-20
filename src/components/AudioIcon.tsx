import { AudioLines } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioIcon() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }}
      className="bg-gray-100 p-1.5 rounded-full"
    >
      <AudioLines className="w-4 h-4 text-green-500" />
    </motion.div>
  );
}