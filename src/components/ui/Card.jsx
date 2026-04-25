import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Card = ({ className, children, ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
