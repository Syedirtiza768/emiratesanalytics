"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  Users,
  DollarSign,
  Search,
  Bell,
  Settings,
  Home,
  PieChart,
  FileText,
  Menu,
  Moon,
  Sun,
  Filter,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Target,
  Zap,
} from "lucide-react"
import { useTheme } from "next-themes"
import {
  Line,
  LineChart,
  Area,
  AreaChart,
  Pie,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400, target: 3500 },
  { month: "Feb", sales: 3000, revenue: 1398, target: 3200 },
  { month: "Mar", sales: 2000, revenue: 9800, target: 2800 },
  { month: "Apr", sales: 2780, revenue: 3908, target: 3100 },
  { month: "May", sales: 1890, revenue: 4800, target: 2900 },
  { month: "Jun", sales: 2390, revenue: 3800, target: 3300 },
  { month: "Jul", sales: 3490, revenue: 4300, target: 3600 },
]

const realtimeData = [
  { time: "00:00", users: 1200, sessions: 890 },
  { time: "04:00", users: 800, sessions: 650 },
  { time: "08:00", users: 2100, sessions: 1800 },
  { time: "12:00", users: 3200, sessions: 2900 },
  { time: "16:00", users: 2800, sessions: 2400 },
  { time: "20:00", users: 1900, sessions: 1600 },
]

const industryData = [
  { name: "Retail", value: 35, color: "#1e3a8a" },
  { name: "Healthcare", value: 25, color: "#10b981" },
  { name: "Construction", value: 20, color: "#fbbf24" },
  { name: "Education", value: 12, color: "#dc2626" },
  { name: "Others", value: 8, color: "#6b7280" },
]

const topMetrics = [
  {
    title: "Total Revenue",
    value: "AED 2.4M",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="h-5 w-5" />,
    color: "text-emirates-emerald",
    bgColor: "bg-emirates-emerald/10",
  },
  {
    title: "Active Users",
    value: "12,847",
    change: "+8.2%",
    trend: "up",
    icon: <Users className="h-5 w-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+2.1%",
    trend: "up",
    icon: <Target className="h-5 w-5" />,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
  },
  {
    title: "Page Views",
    value: "847K",
    change: "-0.4%",
    trend: "down",
    icon: <Eye className="h-5 w-5" />,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
]

export default function EnhancedDashboard() {
  const { theme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [realtimeUsers, setRealtimeUsers] = useState(3247)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeUsers((prev) => prev + Math.floor(Math.random() * 20) - 10)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const timeRanges = [
    { label: "Today", value: "1d" },
    { label: "7 Days", value: "7d" },
    { label: "30 Days", value: "30d" },
    { label: "90 Days", value: "90d" },
  ]

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const sidebarItems = [
    { icon: <Home className="h-5 w-5" />, label: "Overview", active: true },
    { icon: <BarChart3 className="h-5 w-5" />, label: "Analytics" },
    { icon: <PieChart className="h-5 w-5" />, label: "Reports" },
    { icon: <Users className="h-5 w-5" />, label: "Audience" },
    { icon: <Zap className="h-5 w-5" />, label: "Real-time" },
    { icon: <FileText className="h-5 w-5" />, label: "Documents" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-foreground flex">
      {/* Enhanced Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col shadow-lg`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emirates-navy to-emirates-emerald rounded-xl flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-lg font-bold">EmiratesAnalytics</h1>
                <p className="text-xs text-muted-foreground">Business Intelligence</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start h-11 ${!sidebarOpen && "px-3"} ${
                    item.active ? "bg-emirates-navy/10 text-emirates-navy border-r-2 border-emirates-navy" : ""
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-3 font-medium">{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emirates-gold to-emirates-emerald rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AM</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-semibold">Ahmed Al Mansouri</p>
                <p className="text-xs text-muted-foreground">admin@company.ae</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Enhanced Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Analytics Overview</h1>
                <p className="text-sm text-muted-foreground">Real-time insights for your UAE business</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Enhanced Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search metrics, reports..."
                  className="pl-10 w-80 bg-gray-50 dark:bg-gray-700 border-0"
                />
              </div>

              {/* Time Range Filter */}
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                {timeRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={selectedTimeRange === range.value ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTimeRange(range.value)}
                    className={`text-xs h-8 ${
                      selectedTimeRange === range.value ? "bg-white dark:bg-gray-600 shadow-sm" : ""
                    }`}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>

              {/* Action Buttons */}
              <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>

              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-emirates-red animate-pulse">
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
        <main className="flex-1 p-6 space-y-6 bg-gray-50 dark:bg-gray-900">
          {/* Real-time Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-emirates-navy to-emirates-emerald rounded-xl p-4 text-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Now</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">{realtimeUsers.toLocaleString()}</span>
                  <span className="text-sm ml-2 opacity-90">active users</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Last updated</p>
                <p className="text-xs opacity-75">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {topMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
                      <p className="text-3xl font-bold">{metric.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Charts Section */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Sales Performance Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Sales Performance</CardTitle>
                      <CardDescription>Revenue vs Target comparison</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      sales: { label: "Sales", color: "#1e3a8a" },
                      target: { label: "Target", color: "#10b981" },
                      revenue: { label: "Revenue", color: "#fbbf24" },
                    }}
                    className="h-[350px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={salesData}>
                        <defs>
                          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
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
                        <Area
                          type="monotone"
                          dataKey="sales"
                          stroke="#1e3a8a"
                          fillOpacity={1}
                          fill="url(#salesGradient)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="target"
                          stroke="#10b981"
                          fillOpacity={1}
                          fill="url(#targetGradient)"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Industry Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Industry Distribution</CardTitle>
                  <CardDescription>Revenue by sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={industryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {industryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {industryData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Real-time Activity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Real-time Activity</CardTitle>
                    <CardDescription>User sessions throughout the day</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emirates-emerald rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    users: { label: "Users", color: "#1e3a8a" },
                    sessions: { label: "Sessions", color: "#10b981" },
                  }}
                  className="h-[250px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={realtimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="time" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="users"
                        stroke="#1e3a8a"
                        strokeWidth={3}
                        dot={{ fill: "#1e3a8a", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
