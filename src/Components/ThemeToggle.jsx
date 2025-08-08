import React,{useState, useEffect} from 'react'
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
     // On mount, read theme from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  // Toggle handler
  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded focus:outline-none"
    >
      {isDark
        ? <Sun size={24} strokeWidth={2} className="text-yellow-400" />
        : <Moon size={24} strokeWidth={2} className="text-gray-800" />
      }
    </button>
  );
 
}

export default ThemeToggle