"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts"

const performanceData = [
  { month: "Jan", performance: 85, target: 90, efficiency: 78 },
  { month: "Feb", performance: 88, target: 90, efficiency: 82 },
  { month: "Mar", performance: 92, target: 90, efficiency: 85 },
  { month: "Apr", performance: 89, target: 90, efficiency: 88 },
  { month: "May", performance: 94, target: 90, efficiency: 91 },
  { month: "Jun", performance: 96, target: 90, efficiency: 93 },
]

const kpiData = [
  { name: "Customer Satisfaction", value: 92, fill: "#10b981" },
  { name: "Employee Productivity", value: 87, fill: "#1e3a8a" },
  { name: "System Uptime", value: 99.5, fill: "#fbbf24" },
  { name: "Data Accuracy", value: 95, fill: "#dc2626" },
]

export function AdvancedCharts() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Performance vs Target */}
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
          <CardDescription>Monthly performance vs targets and efficiency metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar dataKey="performance" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="target" stroke="#dc2626" strokeWidth={2} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* KPI Radial Chart */}
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
          <CardDescription>Current KPI status across all departments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={kpiData}>
                <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {kpiData.map((kpi, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{kpi.name}</span>
                  <Badge variant="secondary">{kpi.value}%</Badge>
                </div>
                <Progress value={kpi.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
