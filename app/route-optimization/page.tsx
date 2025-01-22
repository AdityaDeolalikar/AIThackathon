'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Route A", distance: 100, time: 120, emissions: 50 },
  { name: "Route B", distance: 80, time: 100, emissions: 40 },
  { name: "Route C", distance: 120, time: 140, emissions: 60 },
  { name: "Route D", distance: 90, time: 110, emissions: 45 },
  { name: "Route E", distance: 110, time: 130, emissions: 55 },
]

export default function RouteOptimization() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Route Optimization</h1>
      <Card>
        <CardHeader>
          <CardTitle>Route Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="distance" stroke="#8884d8" name="Distance (km)" />
              <Line yAxisId="left" type="monotone" dataKey="time" stroke="#82ca9d" name="Time (min)" />
              <Line yAxisId="right" type="monotone" dataKey="emissions" stroke="#ffc658" name="Emissions (kg CO2)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Optimal Route</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Route B</p>
            <p className="text-sm text-muted-foreground">Shortest distance and time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Estimated Time Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">20 minutes</p>
            <p className="text-sm text-muted-foreground">Compared to average route</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Emissions Reduced</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">10 kg CO2</p>
            <p className="text-sm text-muted-foreground">Per delivery</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

