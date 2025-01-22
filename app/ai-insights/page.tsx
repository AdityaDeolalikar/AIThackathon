'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Product A", actual: 4000, predicted: 4200 },
  { name: "Product B", actual: 3000, predicted: 3100 },
  { name: "Product C", actual: 2000, predicted: 1900 },
  { name: "Product D", actual: 2780, predicted: 2750 },
  { name: "Product E", actual: 1890, predicted: 2000 },
  { name: "Product F", actual: 2390, predicted: 2300 },
]

export default function AIInsights() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Insights</h1>
      <Card>
        <CardHeader>
          <CardTitle>Demand Prediction Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" fill="#8884d8" name="Actual Demand" />
              <Bar dataKey="predicted" fill="#82ca9d" name="AI Predicted Demand" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Prediction Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">97.8%</p>
            <p className="text-sm text-muted-foreground">Across all products</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Potential Cost Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$125,000</p>
            <p className="text-sm text-muted-foreground">Estimated annual savings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI-Optimized Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18% Reduction</p>
            <p className="text-sm text-muted-foreground">In excess inventory</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

