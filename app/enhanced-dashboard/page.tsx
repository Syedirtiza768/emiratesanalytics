"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  TrendingUp,
  Activity,
  Globe,
  ShoppingCart,
} from "lucide-react"
import { useTheme } from "next-themes"
import {
  Line,
  LineChart,
  Area,
  AreaChart,
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
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  ComposedChart,
  Treemap,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

// Sample data for various charts
const salesTrendData = [
  { month: "Jan", sales: 4000, revenue: 2400, target: 3500, customers: 240 },
  { month: "Feb", sales: 3000, revenue: 1398, target: 3200, customers: 210 },
  { month: "Mar", sales: 2000, revenue: 9800, target: 2800, customers: 290 },
  { month: "Apr", sales: 2780, revenue: 3908, target: 3100, customers: 300 },
  { month: "May", sales: 1890, revenue: 4800, target: 2900, customers: 280 },
  { month: "Jun", sales: 2390, revenue: 3800, target: 3300, customers: 320 },
  { month: "Jul", sales: 3490, revenue: 4300, target: 3600, customers: 350 },
  { month: "Aug", sales: 4200, revenue: 5100, target: 3800, customers: 380 },
  { month: "Sep", sales: 3800, revenue: 4600, target: 3700, customers: 360 },
  { month: "Oct", sales: 4500, revenue: 5400, target: 4000, customers: 400 },
  { month: "Nov", sales: 5200, revenue: 6200, target: 4200, customers: 420 },
  { month: "Dec", sales: 6100, revenue: 7300, target: 4500, customers: 450 },
]

const industryData = [
  { name: "Retail", value: 35, color: "#1e3a8a", growth: 12.5 },
  { name: "Healthcare", value: 25, color: "#10b981", growth: 8.2 },
  { name: "Construction", value: 20, color: "#fbbf24", growth: 15.7 },
  { name: "Education", value: 12, color: "#dc2626", growth: 6.3 },
  { name: "Finance", value: 8, color: "#7c3aed", growth: 22.1 },
]

const geographicData = [
  { emirate: "Dubai", revenue: 45000, customers: 1200, growth: 15.2 },
  { emirate: "Abu Dhabi", revenue: 38000, customers: 980, growth: 12.8 },
  { emirate: "Sharjah", revenue: 22000, customers: 650, growth: 18.5 },
  { emirate: "Ajman", revenue: 12000, customers: 320, growth: 14.2 },
  { emirate: "Ras Al Khaimah", revenue: 8500, customers: 240, growth: 16.7 },
  { emirate: "Fujairah", revenue: 6200, customers: 180, growth: 13.4 },
  { emirate: "Umm Al Quwain", revenue: 3800, customers: 110, growth: 11.9 },
]

const conversionFunnelData = [
  { name: "Website Visitors", value: 10000, fill: "#1e3a8a" },
  { name: "Product Views", value: 7500, fill: "#2563eb" },
  { name: "Add to Cart", value: 3200, fill: "#3b82f6" },
  { name: "Checkout Started", value: 1800, fill: "#60a5fa" },
  { name: "Payment Completed", value: 1200, fill: "#93c5fd" },
]

const customerSegmentData = [
  { segment: "Premium", customers: 1200, revenue: 45000, avgOrder: 375 },
  { segment: "Standard", customers: 3500, revenue: 52500, avgOrder: 150 },
  { segment: "Basic", customers: 5800, revenue: 34800, avgOrder: 60 },
  { segment: "Enterprise", customers: 150, revenue: 22500, avgOrder: 1500 },
]

const timeSeriesData = [
  { time: "00:00", users: 1200, sessions: 890, pageViews: 3400 },
  { time: "02:00", users: 900, sessions: 650, pageViews: 2800 },
  { time: "04:00", users: 600, sessions: 420, pageViews: 1900 },
  { time: "06:00", users: 800, sessions: 580, pageViews: 2200 },
  { time: "08:00", users: 2100, sessions: 1800, pageViews: 6500 },
  { time: "10:00", users: 2800, sessions: 2400, pageViews: 8200 },
  { time: "12:00", users: 3200, sessions: 2900, pageViews: 9800 },
  { time: "14:00", users: 3500, sessions: 3100, pageViews: 10500 },
  { time: "16:00", users: 2800, sessions: 2400, pageViews: 8800 },
  { time: "18:00", users: 2200, sessions: 1900, pageViews: 7200 },
  { time: "20:00", users: 1900, sessions: 1600, pageViews: 6100 },
  { time: "22:00", users: 1400, sessions: 1100, pageViews: 4200 },
]

const performanceMetrics = [
  { metric: "Sales", current: 92, target: 90, max: 100 },
  { metric: "Customer Satisfaction", current: 88, target: 85, max: 100 },
  { metric: "Efficiency", current: 76, target: 80, max: 100 },
  { metric: "Quality", current: 94, target: 90, max: 100 },
  { metric: "Innovation", current: 82, target: 75, max: 100 },
  { metric: "Sustainability", current: 78, target: 70, max: 100 },
]

const correlationData = [
  { marketing: 1000, sales: 2400, satisfaction: 85 },
  { marketing: 1500, sales: 3200, satisfaction: 88 },
  { marketing: 800, sales: 1800, satisfaction: 82 },
  { marketing: 2000, sales: 4100, satisfaction: 92 },
  { marketing: 1200, sales: 2800, satisfaction: 86 },
  { marketing: 1800, sales: 3800, satisfaction: 90 },
  { marketing: 900, sales: 2100, satisfaction: 84 },
  { marketing: 2200, sales: 4500, satisfaction: 94 },
]

const heatmapData = [
  { day: "Mon", hour: "9AM", value: 45 },
  { day: "Mon", hour: "12PM", value: 78 },
  { day: "Mon", hour: "3PM", value: 65 },
  { day: "Mon", hour: "6PM", value: 32 },
  { day: "Tue", hour: "9AM", value: 52 },
  { day: "Tue", hour: "12PM", value: 85 },
  { day: "Tue", hour: "3PM", value: 72 },
  { day: "Tue", hour: "6PM", value: 38 },
  { day: "Wed", hour: "9AM", value: 48 },
  { day: "Wed", hour: "12PM", value: 82 },
  { day: "Wed", hour: "3PM", value: 68 },
  { day: "Wed", hour: "6PM", value: 35 },
]

const treemapData = [
  { name: "Dubai Mall", size: 45000, category: "Retail" },
  { name: "Emirates Hospital", size: 32000, category: "Healthcare" },
  { name: "ADNOC Tower", size: 28000, category: "Energy" },
  { name: "American University", size: 22000, category: "Education" },
  { name: "Burj Khalifa", size: 18000, category: "Real Estate" },
  { name: "Dubai Airport", size: 35000, category: "Transportation" },
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
    { icon: <Globe className="h-5 w-5" />, label: "Geographic" },
    { icon: <ShoppingCart className="h-5 w-5" />, label: "E-commerce" },
    { icon: <FileText className="h-5 w-5" />, label: "Documents" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
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
    {
      title: "Avg Session",
      value: "4m 32s",
      change: "+5.7%",
      trend: "up",
      icon: <Activity className="h-5 w-5" />,
      color: "text-pink-600",
      bgColor: "bg-pink-600/10",
    },
    {
      title: "Bounce Rate",
      value: "32.1%",
      change: "-3.2%",
      trend: "up",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-600/10",
    },
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
          <div className="flex items-center">
            <div className={`${sidebarOpen ? "w-48 h-8" : "w-8 h-8"} transition-all duration-300`}>
              <img
                src="/emirates-analytics-logo.svg"
                alt="EmiratesAnalytics Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {sidebarOpen && (
              <div className="ml-2">
                <p className="text-xs text-muted-foreground">Enhanced Dashboard</p>
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
                <h1 className="text-2xl font-bold">Enhanced Analytics Dashboard</h1>
                <p className="text-sm text-muted-foreground">Comprehensive business intelligence for UAE enterprises</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search metrics, reports..."
                  className="pl-10 w-80 bg-gray-50 dark:bg-gray-700 border-0"
                />
              </div>

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

              <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>

              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-emirates-red animate-pulse">
                  3
                </Badge>
              </Button>

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
                <div>
                  <span className="text-lg font-semibold">AED 45,230</span>
                  <span className="text-sm ml-2 opacity-90">today's revenue</span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
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
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="geographic">Geographic</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Sales Performance Area Chart */}
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
                          <CardDescription>Revenue vs Target comparison over time</CardDescription>
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
                          <AreaChart data={salesTrendData}>
                            <defs>
                              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
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
                            <Legend />
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
                              dataKey="revenue"
                              stroke="#fbbf24"
                              fillOpacity={1}
                              fill="url(#revenueGradient)"
                              strokeWidth={2}
                            />
                            <Line
                              type="monotone"
                              dataKey="target"
                              stroke="#10b981"
                              strokeWidth={2}
                              strokeDasharray="5 5"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Industry Distribution Pie Chart */}
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
                            <div className="text-right">
                              <span className="text-sm font-semibold">{item.value}%</span>
                              <span className="text-xs text-emirates-emerald ml-2">+{item.growth}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Customer Segments Bar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Customer Segments Analysis</CardTitle>
                    <CardDescription>Revenue and customer distribution across segments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        customers: { label: "Customers", color: "#1e3a8a" },
                        revenue: { label: "Revenue", color: "#10b981" },
                        avgOrder: { label: "Avg Order", color: "#fbbf24" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={customerSegmentData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="segment" stroke="#6b7280" />
                          <YAxis yAxisId="left" stroke="#6b7280" />
                          <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Legend />
                          <Bar yAxisId="left" dataKey="customers" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                          <Bar yAxisId="left" dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                          <Line yAxisId="right" type="monotone" dataKey="avgOrder" stroke="#fbbf24" strokeWidth={3} />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Real-time Activity Line Chart */}
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
                        pageViews: { label: "Page Views", color: "#fbbf24" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={timeSeriesData}>
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
                          <Legend />
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
                          <Line
                            type="monotone"
                            dataKey="pageViews"
                            stroke="#fbbf24"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Performance Radar Chart */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Performance Metrics</CardTitle>
                    <CardDescription>Multi-dimensional performance analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={performanceMetrics}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="metric" />
                          <PolarRadiusAxis angle={90} domain={[0, 100]} />
                          <Radar
                            name="Current"
                            dataKey="current"
                            stroke="#1e3a8a"
                            fill="#1e3a8a"
                            fillOpacity={0.3}
                            strokeWidth={2}
                          />
                          <Radar
                            name="Target"
                            dataKey="target"
                            stroke="#10b981"
                            fill="#10b981"
                            fillOpacity={0.1}
                            strokeWidth={2}
                            strokeDasharray="5 5"
                          />
                          <Legend />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Geographic Tab */}
            <TabsContent value="geographic" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Emirates Revenue Bar Chart */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Revenue by Emirates</CardTitle>
                    <CardDescription>Geographic distribution across UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        revenue: { label: "Revenue", color: "#1e3a8a" },
                        customers: { label: "Customers", color: "#10b981" },
                      }}
                      className="h-[350px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={geographicData} layout="horizontal">
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis type="number" stroke="#6b7280" />
                          <YAxis dataKey="emirate" type="category" stroke="#6b7280" width={100} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Bar dataKey="revenue" fill="#1e3a8a" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Growth Rate Scatter Plot */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Revenue vs Growth Rate</CardTitle>
                    <CardDescription>Correlation between revenue and growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        growth: { label: "Growth Rate", color: "#10b981" },
                      }}
                      className="h-[350px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart data={geographicData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="revenue" stroke="#6b7280" name="Revenue" />
                          <YAxis dataKey="growth" stroke="#6b7280" name="Growth %" />
                          <Tooltip
                            cursor={{ strokeDasharray: "3 3" }}
                            contentStyle={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Scatter dataKey="growth" fill="#10b981" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* KPI Gauges */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Key Performance Indicators</CardTitle>
                    <CardDescription>Current KPI status with targets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      {performanceMetrics.slice(0, 4).map((kpi, index) => (
                        <div key={index} className="text-center">
                          <div className="relative w-24 h-24 mx-auto mb-2">
                            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="transparent" />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="#1e3a8a"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={`${(kpi.current / kpi.max) * 251.2} 251.2`}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold">{kpi.current}%</span>
                            </div>
                          </div>
                          <h4 className="text-sm font-medium">{kpi.metric}</h4>
                          <p className="text-xs text-muted-foreground">Target: {kpi.target}%</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Marketing vs Sales Correlation */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Marketing ROI Analysis</CardTitle>
                    <CardDescription>Marketing spend vs sales correlation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        sales: { label: "Sales", color: "#1e3a8a" },
                        satisfaction: { label: "Satisfaction", color: "#10b981" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart data={correlationData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="marketing" stroke="#6b7280" name="Marketing Spend" />
                          <YAxis dataKey="sales" stroke="#6b7280" name="Sales" />
                          <Tooltip
                            cursor={{ strokeDasharray: "3 3" }}
                            contentStyle={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Scatter dataKey="sales" fill="#1e3a8a" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Conversion Tab */}
            <TabsContent value="conversion" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Conversion Funnel */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Conversion Funnel</CardTitle>
                    <CardDescription>User journey from visitor to customer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {conversionFunnelData.map((step, index) => {
                        const percentage = index === 0 ? 100 : (step.value / conversionFunnelData[0].value) * 100
                        const conversionRate =
                          index === 0 ? 100 : (step.value / conversionFunnelData[index - 1].value) * 100
                        return (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{step.name}</span>
                              <div className="text-right">
                                <span className="text-sm font-semibold">{step.value.toLocaleString()}</span>
                                {index > 0 && (
                                  <span className="text-xs text-muted-foreground ml-2">
                                    ({conversionRate.toFixed(1)}%)
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="relative">
                              <div className="w-full bg-gray-200 rounded-full h-8 flex items-center">
                                <div
                                  className="h-8 rounded-full flex items-center justify-center text-white text-xs font-medium transition-all duration-500"
                                  style={{
                                    width: `${percentage}%`,
                                    backgroundColor: step.fill,
                                  }}
                                >
                                  {percentage.toFixed(1)}%
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Radial Progress Chart */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Department Performance</CardTitle>
                    <CardDescription>Radial performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                          cx="50%"
                          cy="50%"
                          innerRadius="20%"
                          outerRadius="80%"
                          data={performanceMetrics.slice(0, 4)}
                        >
                          <RadialBar dataKey="current" cornerRadius={10} fill="#1e3a8a" />
                          <Tooltip />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Treemap Chart */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Revenue Treemap</CardTitle>
                    <CardDescription>Hierarchical view of revenue sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <Treemap data={treemapData} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#1e3a8a">
                          <Tooltip />
                        </Treemap>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Activity Heatmap */}
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Activity Heatmap</CardTitle>
                    <CardDescription>User activity patterns by day and time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-2">
                      {["Mon", "Tue", "Wed", "Thu"].map((day) => (
                        <div key={day} className="space-y-2">
                          <div className="text-xs font-medium text-center">{day}</div>
                          {["9AM", "12PM", "3PM", "6PM"].map((hour) => {
                            const dataPoint = heatmapData.find((d) => d.day === day && d.hour === hour)
                            const intensity = dataPoint ? dataPoint.value / 100 : 0
                            return (
                              <div
                                key={hour}
                                className="h-8 rounded flex items-center justify-center text-xs font-medium"
                                style={{
                                  backgroundColor: `rgba(30, 58, 138, ${intensity})`,
                                  color: intensity > 0.5 ? "white" : "black",
                                }}
                              >
                                {hour}
                              </div>
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
