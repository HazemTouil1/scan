'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import StatsCards from '@/components/StatsCards';
import LatestBlocks from '@/components/LatestBlocks';
import LatestTransactions from '@/components/LatestTransactions';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('displaymode');
    if (savedMode === 'dark' || savedMode === 'dim') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-900">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow">
        <SearchSection />
        <div className="container mx-auto px-4 py-12">
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            <LatestBlocks />
            <LatestTransactions />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
