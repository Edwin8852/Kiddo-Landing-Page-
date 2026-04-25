import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-full border transition-all duration-300 active:scale-90 ${
        isDark 
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
          : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
      } ${className}`}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
