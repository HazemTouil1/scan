'use client';

import { useState, useEffect } from 'react';

interface StatData {
  ethPrice: string;
  priceChange: string;
  marketCap: string;
  transactions: string;
  tps: string;
  gasPrice: string;
  gasUsd: string;
  lastFinalizedBlock: string;
  lastSafeBlock: string;
}

export default function StatsCards() {
  const [stats, setStats] = useState<StatData>({
    ethPrice: '$3,324.37',
    priceChange: '+2.40%',
    marketCap: '$401,235,403,783.00',
    transactions: '3,127.47 M',
    tps: '21.6',
    gasPrice: '0.148',
    gasUsd: '$0.01',
    lastFinalizedBlock: '23983155',
    lastSafeBlock: '23983187',
  });

  return (
    <div className="card bg-white dark:bg-dark-800 py-8 px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: ETH Price & Market Cap */}
        <div>
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-dark-700 rounded">
              <img
                src="images/ethereum-original.svg"
                alt="ETH"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <img
                src="images/ethereum-original-light.svg"
                alt="ETH"
                width={24}
                height={24}
                className="hidden dark:block"
              />
            </div>
            <div className="flex-1">
              <div className="text-cap text-gray-600 dark:text-gray-400 mb-1">Ether Price</div>
              <a href="/chart/etherprice" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500">
                <span>{stats.ethPrice}</span>
                <span className="text-green-600 text-sm ml-2">({stats.priceChange})</span>
              </a>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-dark-700 my-6" />

          <div className="flex gap-4">
            <div className="w-12 h-12 flex items-center justify-center text-2xl">🌐</div>
            <div className="flex-1">
              <div className="text-cap text-gray-600 dark:text-gray-400 mb-1">Market Cap</div>
              <a href="/stat/supply" className="text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500">
                {stats.marketCap}
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Transactions & Gas */}
        <div>
          <div className="flex justify-between gap-4 mb-8">
            <div className="flex-1">
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-2xl">⚙️</div>
                <div className="flex-1">
                  <div className="text-cap text-gray-600 dark:text-gray-400 mb-1">Transactions</div>
                  <a href="/txs" className="text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500">
                    {stats.transactions}
                  </a>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    ({stats.tps} TPS)
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-cap text-gray-600 dark:text-gray-400 mb-1">Med Gas Price</div>
              <a href="/gastracker" className="text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500">
                {stats.gasPrice} Gwei
              </a>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ({stats.gasUsd})
              </div>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-dark-700 my-6" />

          <div className="flex justify-between">
            <div>
              <div className="text-cap text-gray-600 dark:text-gray-400 mb-1">Last Finalized Block</div>
              <div className="text-base font-medium text-gray-900 dark:text-gray-100">
                {stats.lastFinalizedBlock}
              </div>
            </div>
            <div className="text-right">
              <div className="text-cap text-gray-600 dark:text-gray-400 mb-1">Last Safe Block</div>
              <div className="text-base font-medium text-gray-900 dark:text-gray-100">
                {stats.lastSafeBlock}
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Chart */}
        <div className="lg:col-span-1 md:col-span-2">
          <div className="text-cap text-gray-600 dark:text-gray-400 mb-4">Transaction History in 14 days</div>
          <div className="h-24 bg-gray-100 dark:bg-dark-700 rounded flex items-center justify-center">
            <div className="text-center text-gray-400 text-sm">
              <div>Chart Loading...</div>
              <div className="text-xs mt-2">(Integration with charting library)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
