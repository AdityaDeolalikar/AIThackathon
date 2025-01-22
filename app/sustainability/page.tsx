'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", emissions: 4000, waste: 2400, water: 2400 },
  { name: "Feb", emissions: 3000, waste: 1398, water: 2210 },
  { name: "Mar", emissions: 2000, waste: 9800, water: 2290 },
  { name: "Apr", emissions: 2780, waste: 3908, water: 2000 },
  { name: "May", emissions: 1890, waste: 4800, water: 2181 },
  { name: "Jun", emissions: 2390, waste: 3800, water: 2500 },
  { name: "Jul", emissions: 3490, waste: 4300, water: 2100 },
]

export default function SustainabilityTracker() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sustainability Tracker</h1>
      <Card>
        <CardHeader>
          <CardTitle>Environmental Impact Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="emissions"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
                name="CO2 Emissions (kg)"
              />
              <Area type="monotone" dataKey="waste" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Waste (kg)" />
              <Area
                type="monotone"
                dataKey="water"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
                name="Water Usage (L)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total CO2 Emissions Reduced</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15,230 kg</p>
            <p className="text-sm text-muted-foreground">This year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Waste Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8,750 kg</p>
            <p className="text-sm text-muted-foreground">Compared to last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Water Conservation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,500 L</p>
            <p className="text-sm text-muted-foreground">Saved this quarter</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

