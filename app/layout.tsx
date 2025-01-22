import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supply Chain Dashboard",
  description: "Supply Chain Management and Analytics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-gray-100 p-6 space-y-4">
            <nav className="space-y-2">
              <Link 
                href="/inventory-forecast"
                className="block px-4 py-2 rounded hover:bg-gray-200"
              >
                Inventory Forecast
              </Link>
              <Link 
                href="/route-optimization"
                className="block px-4 py-2 rounded hover:bg-gray-200"
              >
                Route Optimization
              </Link>
              <Link 
                href="/sustainability"
                className="block px-4 py-2 rounded hover:bg-gray-200"
              >
                Sustainability
              </Link>
              <Link 
                href="/ai-insights"
                className="block px-4 py-2 rounded hover:bg-gray-200"
              >
                AI Insights
              </Link>
              <Link 
                href="/reports"
                className="block px-4 py-2 rounded hover:bg-gray-200"
              >
                Reports
              </Link>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
