import { AudioLines } from 'lucide-react';
import { motion } from 'framer-motion';

interface UserAvatarProps {
  user: {
    name: string;
    avatar: string;
    isSpeaking?: boolean;
  };
  size?: 'sm' | 'lg';
  showName?: boolean;
}

export default function UserAvatar({ user, size = 'sm', showName = false }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    lg: 'w-16 h-16'
  };

  const micSizeClasses = {
    sm: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <motion.div 
      layout
      className={`flex flex-col items-center ${showName ? 'gap-2' : ''}`}
    >
      <div className="relative">
        <motion.img
          layout
          src={user.avatar}
          alt={user.name}
          className={`${sizeClasses[size]} rounded-full object-cover ${size === 'sm' ? 'border-2 border-white' : ''}`}
        />
        {user.isSpeaking && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-1 -right-1 bg-gray-100 shadow-lg rounded-full p-1"
          >
            <AudioLines className={`${micSizeClasses[size]} text-green-600`} />
          </motion.div>
        )}
      </div>
      {showName && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-gray-500"
        >
          {user.name}
        </motion.span>
      )}
    </motion.div>
  );
}