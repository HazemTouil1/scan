'use client';

interface Transaction {
  hash: string;
  from: {
    address: string;
    display: string;
  };
  to: {
    address: string;
    display: string;
  };
  amount: string;
  timestamp: string;
}

const mockTransactions: Transaction[] = [
  {
    hash: '0x49a8bc3c1906eae7df8a4340e1c07865682df06b98c410fe6f95107074cf4181',
    from: { address: '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5', display: '0x95222290...5CC4BAfe5' },
    to: { address: '0xd4d3fde5145141ddf7c465889923f29154526de3', display: '0xd4D3fde5...154526De3' },
    amount: '0.03862',
    timestamp: '11 secs ago',
  },
  {
    hash: '0x53d93c73a1eb75a282d39bd5c93f8a8e8e0be3e4f7c04554cae5228998ab90f5',
    from: { address: '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5', display: '0x95222290...5CC4BAfe5' },
    to: { address: '0x6f84ce2f474df6086aefc2abb2c346cffc8820c0', display: '0x6f84ce2F...FfC8820c0' },
    amount: '0.00004',
    timestamp: '11 secs ago',
  },
  {
    hash: '0xd0e6c041f9344ee647833627013dde1a3d98729f7d58c123410cd6175cc1ae55',
    from: { address: '0xe017ea4d031df329efb27d87c50719dce7a42ee0', display: '0xe017eA4d...cE7A42eE0' },
    to: { address: '0x9cd8a5b91ee80fdee6c0e2832d75a56555b9f37f', display: '0x9cd8a5B9...555B9F37f' },
    amount: '0',
    timestamp: '11 secs ago',
  },
  {
    hash: '0xfc506204fe2a128b34afff363d26d7d5f9330e093809a2f18e3df8f07d139714',
    from: { address: '0x61ba2b3b0f2118a0b1242ef1f2011dc73a7dc09b', display: '0x61ba2b3B...73A7DC09b' },
    to: { address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', display: '0xA0b86991...E3606eB48' },
    amount: '0',
    timestamp: '11 secs ago',
  },
  {
    hash: '0x057e0aca4882fe2a93f1cf338fc0d60c75d339378b5adf05a3ad077563db84a2',
    from: { address: '0x5a69a9412c332cd4d6d8cf532447b88eaab0cddc', display: '0x5a69A941...EAAB0Cddc' },
    to: { address: '0x57308a9dbd7bfc95ae12349e85024710d5efbf89', display: '0x57308A9d...0D5EfbF89' },
    amount: '0.00016',
    timestamp: '11 secs ago',
  },
  {
    hash: '0x4e1783f79f7aee4d7f0ef4a952ccb787968308d733042e17b0a5a045af104722',
    from: { address: '0x959d73cb5a1c1ad7ebce3ec93fad3b2f9a25432e', display: '0x959d73CB...f9a25432E' },
    to: { address: '0x2371e134e3455e0593363cbf89d3b6cf53740618', display: '0x2371e134...f53740618' },
    amount: '0',
    timestamp: '11 secs ago',
  },
];

export default function LatestTransactions() {
  return (
    <div className="card bg-white dark:bg-dark-800 overflow-hidden">
      <div className="card-header flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Latest Transactions</h2>
        <a href="/txs" className="text-sm text-blue-500 hover:text-blue-600">
          View all transactions →
        </a>
      </div>

      <div className="card-body divide-y divide-gray-200 dark:divide-dark-700 max-h-96 overflow-y-auto">
        {mockTransactions.map((tx) => (
          <div key={tx.hash} className="py-4 first:pt-0 last:pb-0">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-dark-700 rounded text-xl">
                📝
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <a href={`/tx/${tx.hash}`} className="text-blue-500 hover:text-blue-600 font-medium truncate block">
                    {tx.hash.slice(0, 20)}...
                  </a>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {tx.timestamp}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      From{' '}
                      <a href={`/address/${tx.from.address}`} className="text-blue-500 hover:text-blue-600">
                        {tx.from.display}
                      </a>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      To{' '}
                      <a href={`/address/${tx.to.address}`} className="text-blue-500 hover:text-blue-600">
                        {tx.to.display}
                      </a>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-dark-700 rounded text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    {tx.amount} ETH
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-dark-700">
        <a href="/txs" className="block text-center py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-dark-700">
          View all transactions →
        </a>
      </div>
    </div>
  );
}
