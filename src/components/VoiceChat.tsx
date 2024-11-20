import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import AudioIcon from './AudioIcon';
import UserAvatar from './UserAvatar';

interface User {
  id: string;
  name: string;
  avatar: string;
  isSpeaking?: boolean;
}

const users: User[] = [
  { id: '1', name: 'Tresor', avatar: '/images/photo1.jpeg', isSpeaking: true },
  { id: '2', name: 'Steph', avatar: '/images/photo2.jpeg' },
  { id: '3', name: 'Mariana', avatar: '/images/photo3.jpeg' },
  { id: '4', name: 'Nitish', avatar: '/images/photo4.jpeg' },
  { id: '5', name: 'Ana', avatar: '/images/photo5.jpeg' },
  { id: '6', name: 'Natko', avatar: '/images/photo6.jpeg', isSpeaking: true },
  { id: '7', name: 'Afshin', avatar: '/images/photo7.jpeg' },
];

const containerVariants = {
    expanded: { 
      width: 420,
      height: 'auto',
      borderRadius: 16,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.05
      }
    },
    collapsed: { 
      width: 200,
      height: 48,
      borderRadius: 50,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        delayChildren: 0.1
      }
    }
  };
  
  const contentVariants = {
    expanded: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    collapsed: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

export default function VoiceChat() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        layout
        initial={false}
        variants={containerVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        className="bg-white shadow-lg overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
            >
              <div className="bg-gray-100 px-6 py-4">
                <div className="flex items-center relative">
                  <h2 className="text-lg font-semibold text-gray-400 mx-auto">Voice Chat</h2>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute p-1.5 right-0 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <motion.div 
                  className="grid grid-cols-4 gap-4 mb-6"
                  variants={{
                    expanded: {
                      transition: { staggerChildren: 0.05 }
                    },
                    collapsed: {
                      transition: { staggerChildren: 0.05 }
                    }
                  }}
                >
                  {users.map((user) => (
                    <UserAvatar key={user.id} user={user} size="lg" showName />
                  ))}
                </motion.div>

                <motion.div
                  variants={{
                    expanded: { y: 0, opacity: 1 },
                    collapsed: { y: 20, opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Join Now
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-3">
                    Mic will be muted initially.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="p-2 flex items-center space-x-2 pr-4 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              <AudioIcon />
              <div className="flex -space-x-3">
                {users.slice(0, 4).map((user) => (
                  <UserAvatar key={user.id} user={user} size="sm" />
                ))}
              </div>
              <span className="text-sm text-gray-600">+3</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );

}