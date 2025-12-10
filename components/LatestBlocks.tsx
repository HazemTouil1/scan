'use client';

interface Block {
  number: number;
  miner: {
    address: string;
    name: string;
  };
  txCount: number;
  reward: string;
  timestamp: string;
}

const mockBlocks: Block[] = [
  {
    number: 23983227,
    miner: { address: '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5', name: 'beaverbuild' },
    txCount: 329,
    reward: '0.01293',
    timestamp: '11 secs ago',
  },
  {
    number: 23983226,
    miner: { address: '0xdadb0d80178819f2319190d340ce9a924f783711', name: 'BuilderNet' },
    txCount: 292,
    reward: '0.01651',
    timestamp: '23 secs ago',
  },
  {
    number: 23983225,
    miner: { address: '0xdadb0d80178819f2319190d340ce9a924f783711', name: 'BuilderNet' },
    txCount: 248,
    reward: '0.00733',
    timestamp: '35 secs ago',
  },
  {
    number: 23983224,
    miner: { address: '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97', name: 'Titan Builder' },
    txCount: 324,
    reward: '0.018',
    timestamp: '47 secs ago',
  },
  {
    number: 23983223,
    miner: { address: '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97', name: 'Titan Builder' },
    txCount: 356,
    reward: '0.03339',
    timestamp: '1 min ago',
  },
  {
    number: 23983222,
    miner: { address: '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97', name: 'Titan Builder' },
    txCount: 266,
    reward: '0.01008',
    timestamp: '1 min ago',
  },
];

export default function LatestBlocks() {
  return (
    <div className="card bg-white dark:bg-dark-800 overflow-hidden">
      <div className="card-header flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Latest Blocks</h2>
        <a href="/blocks" className="text-sm text-blue-500 hover:text-blue-600">
          View all blocks →
        </a>
      </div>

      <div className="card-body divide-y divide-gray-200 dark:divide-dark-700 max-h-96 overflow-y-auto">
        {mockBlocks.map((block) => (
          <div key={block.number} className="py-4 first:pt-0 last:pb-0">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-dark-700 rounded text-xl">
                📦
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-2">
                  <div>
                    <a href={`/block/${block.number}`} className="text-blue-500 hover:text-blue-600 font-medium">
                      {block.number}
                    </a>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {block.timestamp}
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-dark-700 rounded text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    {block.reward} ETH
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a href={`/address/${block.miner.address}`} className="text-blue-500 hover:text-blue-600 truncate">
                    Miner: {block.miner.name}
                  </a>
                  <a href={`/txs?block=${block.number}`} className="text-blue-500 hover:text-blue-600">
                    {block.txCount} txns
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-dark-700">
        <a href="/blocks" className="block text-center py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-dark-700">
          View all blocks →
        </a>
      </div>
    </div>
  );
}
