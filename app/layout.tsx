import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethereum (ETH) Blockchain Explorer",
  description: "Etherscan allows you to explore and search the Ethereum blockchain for transactions, addresses, tokens, prices and other activities taking place on Ethereum (ETH)",
  keywords: "ethereum, explorer, ether, search, blockchain, crypto, currency",
  openGraph: {
    title: "Ethereum (ETH) Blockchain Explorer",
    description: "Etherscan allows you to explore and search the Ethereum blockchain for transactions, addresses, tokens, prices and other activities taking place on Ethereum (ETH)",
    type: "website",
    siteName: "Ethereum (ETH) Blockchain Explorer",
    url: "https://etherscan.io/",
    images: [{
      url: "images/og-preview.jpg",
      alt: "Visit Etherscan.io",
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="images/favicon3.ico" />
      </head>
      <body className="bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
