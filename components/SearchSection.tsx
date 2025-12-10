'use client';

import { useState } from 'react';

export default function SearchSection() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
    }
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <section className="bg-gradient-to-b from-slate-800 to-slate-700 py-16 md:py-20 relative overflow-hidden">
      {/* Background wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            The Ethereum Blockchain Explorer
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-2 bg-white rounded-lg p-2">
              {/* Search Input */}
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                className="flex-1 px-4 py-3 bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500"
                maxLength={68}
              />

              {/* Clear Button */}
              {searchValue && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="px-3 py-2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Ad Placeholder */}
          <div className="text-white text-opacity-75 text-sm min-h-6">
            <p>Discover blockchain insights with Etherscan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
