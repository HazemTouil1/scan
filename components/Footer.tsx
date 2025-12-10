export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-200 dark:border-dark-700">
          <div className="flex gap-4">
            <a href="https://twitter.com/etherscan" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition">
              𝕏
            </a>
            <a href="https://medium.com/etherscan-blog" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition">
              M
            </a>
            <a href="https://www.facebook.com/etherscan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition">
              f
            </a>
            <a href="https://www.reddit.com/r/etherscan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white transition">
              r
            </a>
          </div>

          <a href="#" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500">
            ↑ Back to Top
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li><a href="/aboutus" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="/brandassets" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Brand Assets</a></li>
              <li><a href="/contactus" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Contact Us</a></li>
              <li><a href="/careers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Careers</a></li>
              <li><a href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Terms & Privacy</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.etherscan.io/etherscan-v2" target="_blank" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">API Documentation</a></li>
              <li><a href="https://info.etherscan.com/" target="_blank" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Knowledge Base</a></li>
              <li><a href="https://etherscan.freshstatus.io/" target="_blank" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Network Status</a></li>
              <li><a href="https://info.etherscan.com/newsletters/" target="_blank" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Newsletters</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/charts" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Charts & Stats</a></li>
              <li><a href="/leaderboard" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Leaderboard</a></li>
              <li><a href="/apis" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">API Plans</a></li>
              <li><a href="https://blockscan.com" target="_blank" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Blockscan</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm">Developers</h4>
            <ul className="space-y-2">
              <li><a href="/verifyContract" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Verify Contract</a></li>
              <li><a href="/pushTx" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Broadcast Transaction</a></li>
              <li><a href="/gastracker" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">Gas Tracker</a></li>
              <li><a href="/dex" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">DEX Tracker</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 dark:border-dark-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 dark:text-gray-400">
          <p>Etherscan © 2025</p>
          <p>Donations: <a href="/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f" className="text-blue-500 hover:text-blue-600">0x71c765...d8976f</a> ❤️</p>
        </div>
      </div>
    </footer>
  );
}
