"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart2, TrendingUp, Truck, Leaf, Brain, FileText } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Inventory Forecast", href: "/inventory-forecast", icon: BarChart2 },
  { name: "Route Optimization", href: "/route-optimization", icon: TrendingUp },
  { name: "Sustainability Tracker", href: "/sustainability", icon: Leaf },
  { name: "AI Insights", href: "/ai-insights", icon: Brain },
  { name: "Reports", href: "/reports", icon: FileText },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Smart Inventory</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                  pathname === item.href ? "bg-gray-100" : ""
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

