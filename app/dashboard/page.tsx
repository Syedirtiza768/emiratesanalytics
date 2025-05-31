"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  Bell,
  Settings,
  Home,
  PieChart,
  FileText,
  Calendar,
  Menu,
  Moon,
  Sun,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ShoppingCart,
  Target,
} from "lucide-react"
import { useTheme } from "next-themes"
import {
  Line,
  Bar,
  BarChart,
  Pie,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

// Enhanced data sets
const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400, visitors: 8400, orders: 240 },
  { month: "Feb", sales: 3000, revenue: 1398, visitors: 7200, orders: 210 },
  { month: "Mar", sales: 2000, revenue: 9800, visitors: 9600, orders: 290 },
  { month: "Apr", sales: 2780, revenue: 3908, visitors: 8800, orders: 300 },
  { month: "May", sales: 1890, revenue: 4800, visitors: 7800, orders: 280 },
  { month: "Jun", sales: 2390, revenue: 3800, visitors: 8200, orders: 320 },
  { month: "Jul", sales: 3490, revenue: 4300, visitors: 9200, orders: 350 },
  { month: "Aug", sales: 4200, revenue: 5100, visitors: 10200, orders: 380 },
]

const revenueData = [
  { quarter: "Q1", retail: 45000, healthcare: 32000, construction: 28000, education: 18000 },
  { quarter: "Q2", retail: 52000, healthcare: 38000, construction: 35000, education: 22000 },
  { quarter: "Q3", retail: 48000, healthcare: 42000, construction: 31000, education: 25000 },
  { quarter: "Q4", retail: 61000, healthcare: 45000, construction: 38000, education: 28000 },
]

const customerData = [
  { age: "18-25", count: 1200, revenue: 18000, satisfaction: 85 },
  { age: "26-35", count: 2800, revenue: 42000, satisfaction: 88 },
  { age: "36-45", count: 2200, revenue: 55000, satisfaction: 92 },
  { age: "46-55", count: 1800, revenue: 45000, satisfaction: 89 },
  { age: "56+", count: 1000, revenue: 25000, satisfaction: 87 },
]

const trafficSources = [
  { name: "Organic Search", value: 35, color: "#1e3a8a", visitors: 14000 },
  { name: "Direct", value: 28, color: "#10b981", visitors: 11200 },
  { name: "Social Media", value: 20, color: "#fbbf24", visitors: 8000 },
  { name: "Email", value: 12, color: "#dc2626", visitors: 4800 },
  { name: "Paid Ads", value: 5, color: "#7c3aed", visitors: 2000 },
]

const deviceData = [
  { device: "Desktop", sessions: 4500, bounceRate: 32, avgDuration: 245 },
  { device: "Mobile", sessions: 6200, bounceRate: 45, avgDuration: 180 },
  { device: "Tablet", sessions: 1800, bounceRate: 38, avgDuration: 220 },
]

const topPages = [
  { page: "/home", views: 12500, uniqueViews: 8900, avgTime: "3:45", bounceRate: 28 },
  { page: "/products", views: 8900, uniqueViews: 6200, avgTime: "4:20", bounceRate: 35 },
  { page: "/about", views: 5600, uniqueViews: 4100, avgTime: "2:15", bounceRate: 42 },
  { page: "/contact", views: 3200, uniqueViews: 2800, avgTime: "1:30", bounceRate: 55 },
  { page: "/blog", views: 4800, uniqueViews: 3600, avgTime: "5:10", bounceRate: 25 },
]

export default function Dashboard() {
  const { theme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  const timeRanges = [
    { label: "Today", value: "1d" },
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
    { label: "Last 90 Days", value: "90d" },
  ]

  const metrics = [
    {
      title: "Total Sales",
      value: "AED 2.4M",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="h-4 w-4" />,
      color: "text-emirates-emerald",
      bgColor: "bg-emirates-emerald/10",
    },
    {
      title: "Active Users",
      value: "12,847",
      change: "+8.2%",
      trend: "up",
      icon: <Users className="h-4 w-4" />,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      title: "Revenue Growth",
      value: "18.3%",
      change: "+2.1%",
      trend: "up",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.4%",
      trend: "down",
      icon: <Target className="h-4 w-4" />,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
    {
      title: "Page Views",
      value: "847K",
      change: "+15.7%",
      trend: "up",
      icon: <Eye className="h-4 w-4" />,
      color: "text-pink-600",
      bgColor: "bg-pink-600/10",
    },
    {
      title: "Orders",
      value: "2,340",
      change: "+9.8%",
      trend: "up",
      icon: <ShoppingCart className="h-4 w-4" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-600/10",
    },
  ]

  const sidebarItems = [
    { icon: <Home className="h-5 w-5" />, label: "Dashboard", active: true },
    { icon: <BarChart3 className="h-5 w-5" />, label: "Analytics" },
    { icon: <PieChart className="h-5 w-5" />, label: "Reports" },
    { icon: <Users className="h-5 w-5" />, label: "Customers" },
    { icon: <FileText className="h-5 w-5" />, label: "Documents" },
    { icon: <Calendar className="h-5 w-5" />, label: "Calendar" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex" dir="ltr">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className={`${sidebarOpen ? "w-64" : "w-16"} bg-card border-r transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className={`${sidebarOpen ? "w-48 h-8" : "w-8 h-8"} transition-all duration-300 -m-2`}>
              <img
                src="/emirates-analytics-logo.svg"
                alt="EmiratesAnalytics Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && "px-2"}`}
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-2">{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emirates-beige rounded-full"></div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium">Ahmed Al Mansouri</p>
                <p className="text-xs text-muted-foreground">admin@company.ae</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-background border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                <p className="text-sm text-muted-foreground">Comprehensive business insights for UAE enterprises</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search analytics..." className="pl-10 w-64" />
              </div>

              {/* Time Range Filter */}
              <div className="flex items-center space-x-2">
                {timeRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={selectedTimeRange === range.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeRange(range.value)}
                    className="text-xs"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse">
                  3
                </Badge>
              </Button>

              {/* Theme Toggle */}
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                        <div className={metric.color}>{metric.icon}</div>
                      </div>
                      <div
                        className={`flex items-center space-x-1 text-sm ${
                          metric.trend === "up" ? "text-emirates-emerald" : "text-emirates-red"
                        }`}
                      >
                        {metric.trend === "up" ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span className="font-medium">{metric.change}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">{metric.title}</h3>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Sales Trend Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Sales & Revenue Trend</CardTitle>
                  <CardDescription>Monthly performance with visitor correlation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      sales: { label: "Sales", color: "#1e3a8a" },
                      revenue: { label: "Revenue", color: "#10b981" },
                      visitors: { label: "Visitors", color: "#fbbf24" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="sales" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                        <Bar yAxisId="left" dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                        <Line yAxisId="right" type="monotone" dataKey="visitors" stroke="#fbbf24" strokeWidth={2} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Traffic Sources Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Website visitor acquisition channels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie data={trafficSources} cx="50%" cy="50%" outerRadius={80} paddingAngle={5} dataKey="value">
                          {trafficSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {trafficSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                          <span className="text-sm font-medium">{source.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{source.visitors.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Industry Revenue & Customer Demographics */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Industry Revenue Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Industry</CardTitle>
                  <CardDescription>Quarterly performance across sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      retail: { label: "Retail", color: "#1e3a8a" },
                      healthcare: { label: "Healthcare", color: "#10b981" },
                      construction: { label: "Construction", color: "#fbbf24" },
                      education: { label: "Education", color: "#dc2626" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="retail" stackId="a" fill="#1e3a8a" />
                        <Bar dataKey="healthcare" stackId="a" fill="#10b981" />
                        <Bar dataKey="construction" stackId="a" fill="#fbbf24" />
                        <Bar dataKey="education" stackId="a" fill="#dc2626" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Customer Demographics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Customer Demographics</CardTitle>
                  <CardDescription>Age distribution with revenue and satisfaction</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      count: { label: "Customers", color: "#1e3a8a" },
                      revenue: { label: "Revenue", color: "#10b981" },
                      satisfaction: { label: "Satisfaction", color: "#fbbf24" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={customerData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="count" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                        <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#fbbf24" strokeWidth={2} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Device Analytics & Top Pages */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Device Analytics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Device Analytics</CardTitle>
                  <CardDescription>Sessions and engagement by device type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceData.map((device, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{device.device}</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold">{device.sessions.toLocaleString()}</span>
                            <span className="text-xs text-muted-foreground ml-2">sessions</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-xs">
                          <div>
                            <span className="text-muted-foreground">Bounce Rate</span>
                            <div className="font-medium">{device.bounceRate}%</div>
                            <Progress value={device.bounceRate} className="h-1 mt-1" />
                          </div>
                          <div>
                            <span className="text-muted-foreground">Avg Duration</span>
                            <div className="font-medium">
                              {Math.floor(device.avgDuration / 60)}:
                              {(device.avgDuration % 60).toString().padStart(2, "0")}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Sessions</span>
                            <div className="font-medium">{device.sessions.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Pages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                  <CardDescription>Most visited pages with engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topPages.map((page, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{page.page}</div>
                          <div className="text-xs text-muted-foreground">
                            {page.views.toLocaleString()} views • {page.avgTime} avg time
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">{page.uniqueViews.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">{page.bounceRate}% bounce</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and alerts from your analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "alert",
                      message: "Sales target exceeded by 15% this month in Dubai region",
                      time: "2 hours ago",
                      status: "success",
                    },
                    {
                      type: "warning",
                      message: "Customer churn rate increased by 3.2% in healthcare sector",
                      time: "4 hours ago",
                      status: "warning",
                    },
                    {
                      type: "info",
                      message: "New data source connected: Shopify POS System",
                      time: "1 day ago",
                      status: "info",
                    },
                    {
                      type: "alert",
                      message: "Weekly performance report generated successfully",
                      time: "2 days ago",
                      status: "success",
                    },
                    {
                      type: "info",
                      message: "Mobile traffic increased by 22% compared to last week",
                      time: "3 days ago",
                      status: "info",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.status === "success"
                            ? "bg-emirates-emerald"
                            : activity.status === "warning"
                              ? "bg-emirates-gold"
                              : "bg-emirates-navy"
                        } animate-pulse`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <Badge variant={activity.status === "success" ? "default" : "secondary"}>{activity.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
