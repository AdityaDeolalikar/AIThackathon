import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const reports = [
  { name: "Monthly Inventory Summary", date: "2023-07-01", type: "Inventory" },
  { name: "Q2 Sustainability Report", date: "2023-07-15", type: "Sustainability" },
  { name: "Route Optimization Analysis", date: "2023-07-22", type: "Logistics" },
  { name: "AI Prediction Accuracy Review", date: "2023-07-30", type: "AI Insights" },
  { name: "Annual Financial Projection", date: "2023-08-05", type: "Financial" },
]

export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.name}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>
                    <a href="#" className="text-blue-500 hover:underline">
                      View
                    </a>
                    {" | "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Download
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Reports Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">127</p>
            <p className="text-sm text-muted-foreground">This year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Most Viewed Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">Monthly Inventory Summary</p>
            <p className="text-sm text-muted-foreground">Viewed 89 times</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Report Generation Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2.3 seconds</p>
            <p className="text-sm text-muted-foreground">Average time</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

