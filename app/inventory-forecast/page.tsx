'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Product A", current: 4000, forecast: 2400 },
  { name: "Product B", current: 3000, forecast: 1398 },
  { name: "Product C", current: 2000, forecast: 9800 },
  { name: "Product D", current: 2780, forecast: 3908 },
  { name: "Product E", current: 1890, forecast: 4800 },
  { name: "Product F", current: 2390, forecast: 3800 },
  { name: "Product G", current: 3490, forecast: 4300 },
]

export default function InventoryForecast() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Inventory Forecast</h1>
      <Card>
        <CardHeader>
          <CardTitle>Current Inventory vs Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#8884d8" name="Current Inventory" />
              <Bar dataKey="forecast" fill="#82ca9d" name="Forecasted Demand" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Current Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">19,550 units</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Forecasted Demand</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">30,408 units</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recommended Restock</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">10,858 units</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

