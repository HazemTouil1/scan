'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('displaymode', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <header className="bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <img
                src="images/logo-etherscan.svg"
                alt="Etherscan Logo"
                width={150}
                height={40}
                className="dark:hidden"
              />
              <img
                src="images/logo-etherscan-light.svg"
                alt="Etherscan Logo"
                width={150}
                height={40}
                className="hidden dark:block"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-1">
              <a href="/" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500">
                Home
              </a>
              <div className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Blockchain
              </div>
              <div className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Tokens
              </div>
              <div className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
                Resources
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a
              href="/login"
              className="hidden lg:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
