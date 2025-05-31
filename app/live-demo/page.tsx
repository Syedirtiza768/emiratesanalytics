"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Target,
  Calendar,
  Languages,
  Heart,
  HardHat,
  ShoppingCart,
  HelpCircle,
  Globe,
  Briefcase,
  UserCheck,
  Shield,
  CalendarClock,
} from "lucide-react"
import {
  Line,
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
  ComposedChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

// Sample data for various charts
const retailData = [
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

const ramadanData = [
  { day: "Pre-Ramadan", sales: 3200, footfall: 12000, conversion: 3.8 },
  { day: "Ramadan Week 1", sales: 4500, footfall: 15000, conversion: 4.2 },
  { day: "Ramadan Week 2", sales: 5200, footfall: 16500, conversion: 4.5 },
  { day: "Ramadan Week 3", sales: 6800, footfall: 18000, conversion: 5.1 },
  { day: "Ramadan Week 4", sales: 8500, footfall: 22000, conversion: 5.8 },
  { day: "Eid al-Fitr", sales: 12000, footfall: 28000, conversion: 6.5 },
  { day: "Post-Eid Week", sales: 7200, footfall: 19000, conversion: 5.2 },
]

const emiratesData = [
  { emirate: "Dubai", revenue: 45000, customers: 1200, growth: 15.2 },
  { emirate: "Abu Dhabi", revenue: 38000, customers: 980, growth: 12.8 },
  { emirate: "Sharjah", revenue: 22000, customers: 650, growth: 18.5 },
  { emirate: "Ajman", revenue: 12000, customers: 320, growth: 14.2 },
  { emirate: "Ras Al Khaimah", revenue: 8500, customers: 240, growth: 16.7 },
  { emirate: "Fujairah", revenue: 6200, customers: 180, growth: 13.4 },
  { emirate: "Umm Al Quwain", revenue: 3800, customers: 110, growth: 11.9 },
]

const industryData = [
  { name: "Retail", value: 35, color: "#1e3a8a", growth: 12.5 },
  { name: "Healthcare", value: 25, color: "#10b981", growth: 8.2 },
  { name: "Construction", value: 20, color: "#fbbf24", growth: 15.7 },
  { name: "Education", value: 12, color: "#dc2626", growth: 6.3 },
  { name: "Finance", value: 8, color: "#7c3aed", growth: 22.1 },
]

const nationalityData = [
  { name: "UAE Nationals", value: 22, color: "#1e3a8a", target: 25 },
  { name: "GCC Nationals", value: 18, color: "#10b981", target: 15 },
  { name: "Arab Expats", value: 25, color: "#fbbf24", target: 25 },
  { name: "Asian Expats", value: 20, color: "#dc2626", target: 20 },
  { name: "Western Expats", value: 15, color: "#7c3aed", target: 15 },
]

const complianceData = [
  { category: "DIFC Data Protection", score: 98, benchmark: 85 },
  { category: "ADGM Regulations", score: 95, benchmark: 82 },
  { category: "UAE Labor Law", score: 100, benchmark: 90 },
  { category: "Emiratization", score: 92, benchmark: 80 },
  { category: "Corporate Tax", score: 97, benchmark: 85 },
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

const demoTours = [
  {
    id: "retail",
    name: "Dubai Retail Analytics",
    description: "Explore retail performance with Dubai Mall insights",
    icon: <ShoppingCart className="h-5 w-5" />,
    image: "/placeholder.svg?height=120&width=200&query=Dubai+Mall+shopping+retail",
  },
  {
    id: "healthcare",
    name: "Healthcare Dashboard",
    description: "Patient analytics for UAE healthcare providers",
    icon: <Heart className="h-5 w-5" />,
    image: "/placeholder.svg?height=120&width=200&query=UAE+healthcare+hospital+modern",
  },
  {
    id: "construction",
    name: "Construction Projects",
    description: "Track UAE mega-construction projects",
    icon: <HardHat className="h-5 w-5" />,
    image: "/placeholder.svg?height=120&width=200&query=Dubai+construction+skyscraper+project",
  },
  {
    id: "compliance",
    name: "UAE Compliance",
    description: "DIFC & ADGM regulatory compliance tools",
    icon: <Shield className="h-5 w-5" />,
    image: "/placeholder.svg?height=120&width=200&query=UAE+DIFC+financial+district+business",
  },
  {
    id: "emiratization",
    name: "Emiratization Tracker",
    description: "Monitor UAE nationalization requirements",
    icon: <UserCheck className="h-5 w-5" />,
    image: "/placeholder.svg?height=120&width=200&query=UAE+Emirati+business+professionals",
  },
]

export default function LiveDemo() {
  const { theme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [realtimeUsers, setRealtimeUsers] = useState(3247)
  const [currentDemo, setCurrentDemo] = useState("retail")
  const [isArabic, setIsArabic] = useState(false)
  const [isLiveMode, setIsLiveMode] = useState(true)
  const [showTour, setShowTour] = useState(true)
  const [tourStep, setTourStep] = useState(0)
  const [showDemoSelector, setShowDemoSelector] = useState(true)

  // Simulate real-time data updates
  useEffect(() => {
    if (!isLiveMode) return

    const interval = setInterval(() => {
      setRealtimeUsers((prev) => prev + Math.floor(Math.random() * 20) - 10)
    }, 3000)
    return () => clearInterval(interval)
  }, [isLiveMode])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const timeRanges = [
    { label: "Today", value: "1d" },
    { label: "7 Days", value: "7d" },
    { label: "30 Days", value: "30d" },
    { label: "90 Days", value: "90d" },
  ]

  const sidebarItems = [
    { icon: <Home className="h-5 w-5" />, label: "Dashboard", active: true },
    { icon: <BarChart3 className="h-5 w-5" />, label: "Analytics" },
    { icon: <PieChart className="h-5 w-5" />, label: "Reports" },
    { icon: <Users className="h-5 w-5" />, label: "Customers" },
    { icon: <Globe className="h-5 w-5" />, label: "Geographic" },
    { icon: <Shield className="h-5 w-5" />, label: "Compliance" },
    { icon: <UserCheck className="h-5 w-5" />, label: "Emiratization" },
    { icon: <FileText className="h-5 w-5" />, label: "Documents" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ]

  const tourSteps = [
    {
      title: "Welcome to EmiratesAnalytics",
      description: "This interactive demo showcases our UAE-specific analytics platform. Let's explore!",
      target: "header",
    },
    {
      title: "Real-time UAE Data",
      description: "Monitor live data from across all Emirates with instant updates and alerts.",
      target: "live-stats",
    },
    {
      title: "UAE Market Insights",
      description: "Explore deep analytics tailored specifically for UAE business environments.",
      target: "charts",
    },
    {
      title: "Emiratization Compliance",
      description: "Track your UAE nationalization requirements and stay compliant with labor laws.",
      target: "emiratization",
    },
    {
      title: "Arabic Support",
      description: "Switch to Arabic with full RTL support for your entire team.",
      target: "language",
    },
  ]

  const nextTourStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1)
    } else {
      setShowTour(false)
    }
  }

  const prevTourStep = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1)
    }
  }

  const closeTour = () => {
    setShowTour(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo Control Panel */}
      {showDemoSelector && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b shadow-md p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-48 h-8">
                    <img
                      src="/emirates-analytics-logo.svg"
                      alt="EmiratesAnalytics Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
                <Badge variant="secondary" className="bg-emirates-emerald/10 text-emirates-emerald">
                  Interactive Demo
                </Badge>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="demo-selector" className="text-sm font-medium">
                    Demo:
                  </Label>
                  <Select value={currentDemo} onValueChange={setCurrentDemo}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select demo" />
                    </SelectTrigger>
                    <SelectContent>
                      {demoTours.map((demo) => (
                        <SelectItem key={demo.id} value={demo.id}>
                          <div className="flex items-center space-x-2">
                            {demo.icon}
                            <span>{demo.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor="live-mode" className="text-sm font-medium">
                    Live Data:
                  </Label>
                  <Switch id="live-mode" checked={isLiveMode} onCheckedChange={setIsLiveMode} />
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor="arabic-mode" className="text-sm font-medium">
                    Arabic:
                  </Label>
                  <Switch id="arabic-mode" checked={isArabic} onCheckedChange={setIsArabic} />
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-emirates-navy text-emirates-navy"
                  onClick={() => setShowTour(true)}
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Tour
                </Button>

                <Button size="sm" className="bg-emirates-navy hover:bg-emirates-navy/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Full Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-foreground flex ${
          isArabic ? "flex-row-reverse" : ""
        }`}
        dir={isArabic ? "rtl" : "ltr"}
        style={{ paddingTop: showDemoSelector ? "72px" : "0" }}
      >
        {/* Sidebar */}
        <motion.aside
          initial={{ x: isArabic ? 300 : -300 }}
          animate={{ x: sidebarOpen ? 0 : isArabic ? 250 : -250 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-white dark:bg-gray-800 border-r dark:border-gray-700 transition-all duration-300 flex flex-col shadow-lg`}
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
                  <p className="text-xs text-muted-foreground">{isArabic ? "لوحة تحكم تفاعلية" : "Interactive Demo"}</p>
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
                    {sidebarOpen && (
                      <span className="ml-3 font-medium">
                        {isArabic
                          ? {
                              Dashboard: "لوحة القيادة",
                              Analytics: "التحليلات",
                              Reports: "التقارير",
                              Customers: "العملاء",
                              Geographic: "التحليل الجغرافي",
                              Compliance: "الامتثال",
                              Emiratization: "التوطين",
                              Documents: "المستندات",
                              Settings: "الإعدادات",
                            }[item.label]
                          : item.label}
                      </span>
                    )}
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
                  <p className="text-sm font-semibold">{isArabic ? "أحمد المنصوري" : "Ahmed Al Mansouri"}</p>
                  <p className="text-xs text-muted-foreground">admin@company.ae</p>
                </div>
              )}
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header
            id="header"
            className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <Menu className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold">
                    {isArabic
                      ? currentDemo === "retail"
                        ? "تحليلات التجزئة في دبي"
                        : currentDemo === "healthcare"
                          ? "لوحة معلومات الرعاية الصحية"
                          : currentDemo === "construction"
                            ? "مشاريع البناء"
                            : currentDemo === "compliance"
                              ? "الامتثال الإماراتي"
                              : "متتبع التوطين"
                      : demoTours.find((d) => d.id === currentDemo)?.name || "Dashboard"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "رؤى الأعمال الشاملة للشركات الإماراتية" : "Comprehensive business insights for UAE"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative" id="language">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={isArabic ? "البحث في التحليلات..." : "Search analytics..."}
                    className="pl-10 w-64 bg-gray-50 dark:bg-gray-700 border-0"
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
                      {isArabic
                        ? {
                            "1d": "اليوم",
                            "7d": "٧ أيام",
                            "30d": "٣٠ يوم",
                            "90d": "٩٠ يوم",
                          }[range.value]
                        : range.label}
                    </Button>
                  ))}
                </div>

                <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                  {isArabic ? "تحديث" : "Refresh"}
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

                <Button variant="ghost" size="icon" onClick={() => setIsArabic(!isArabic)}>
                  <Languages className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-6 space-y-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
            {/* Real-time Stats Bar */}
            <motion.div
              id="live-stats"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-emirates-navy to-emirates-emerald rounded-xl p-4 text-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{isArabic ? "مباشر الآن" : "Live Now"}</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">{realtimeUsers.toLocaleString()}</span>
                      <span className="text-sm ml-2 opacity-90">{isArabic ? "مستخدم نشط" : "active users"}</span>
                    </div>
                    <div>
                      <span className="text-lg font-semibold">AED 45,230</span>
                      <span className="text-sm ml-2 opacity-90">{isArabic ? "إيرادات اليوم" : "today's revenue"}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">{isArabic ? "آخر تحديث" : "Last updated"}</p>
                    <p className="text-xs opacity-75">{new Date().toLocaleTimeString()}</p>
                  </div>
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
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          {isArabic
                            ? {
                                "Total Revenue": "إجمالي الإيرادات",
                                "Active Users": "المستخدمين النشطين",
                                "Conversion Rate": "معدل التحويل",
                                "Page Views": "مشاهدات الصفحة",
                              }[metric.title]
                            : metric.title}
                        </h3>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Demo Content Based on Selection */}
            <div id="charts">
              {currentDemo === "retail" && (
                <div className="space-y-6">
                  {/* Retail Dashboard */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle>{isArabic ? "أداء المبيعات" : "Sales Performance"}</CardTitle>
                        <CardDescription>
                          {isArabic ? "مقارنة الإيرادات مقابل الهدف" : "Revenue vs Target comparison"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer
                          config={{
                            sales: { label: isArabic ? "المبيعات" : "Sales", color: "#1e3a8a" },
                            revenue: { label: isArabic ? "الإيرادات" : "Revenue", color: "#10b981" },
                            target: { label: isArabic ? "الهدف" : "Target", color: "#fbbf24" },
                          }}
                          className="h-[350px]"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={retailData}>
                              <defs>
                                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.3} />
                                  <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
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
                                stroke="#10b981"
                                fillOpacity={1}
                                fill="url(#revenueGradient)"
                                strokeWidth={2}
                              />
                              <Line
                                type="monotone"
                                dataKey="target"
                                stroke="#fbbf24"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle>{isArabic ? "تحليلات رمضان" : "Ramadan Analytics"}</CardTitle>
                        <CardDescription>
                          {isArabic ? "أنماط التسوق خلال شهر رمضان" : "Shopping patterns during Ramadan"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer
                          config={{
                            sales: { label: isArabic ? "المبيعات" : "Sales", color: "#1e3a8a" },
                            footfall: { label: isArabic ? "عدد الزوار" : "Footfall", color: "#10b981" },
                            conversion: { label: isArabic ? "معدل التحويل" : "Conversion", color: "#fbbf24" },
                          }}
                          className="h-[350px]"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={ramadanData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                              <XAxis dataKey="day" stroke="#6b7280" />
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
                              <Bar yAxisId="left" dataKey="sales" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                              <Bar yAxisId="left" dataKey="footfall" fill="#10b981" radius={[4, 4, 0, 0]} />
                              <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="conversion"
                                stroke="#fbbf24"
                                strokeWidth={2}
                              />
                            </ComposedChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{isArabic ? "تحليل سلوك العملاء" : "Customer Behavior Analysis"}</CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "رؤى مفصلة حول سلوك التسوق في دبي مول"
                          : "Detailed insights into Dubai Mall shopping behavior"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">{isArabic ? "أوقات الذروة" : "Peak Hours"}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الجمعة مساءً" : "Friday Evening"}</span>
                                <span className="text-sm font-medium">78%</span>
                              </div>
                              <Progress value={78} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "السبت مساءً" : "Saturday Evening"}</span>
                                <span className="text-sm font-medium">72%</span>
                              </div>
                              <Progress value={72} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الخميس مساءً" : "Thursday Evening"}</span>
                                <span className="text-sm font-medium">65%</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                          </div>
                          <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">
                              {isArabic ? "أكثر المناطق زيارة" : "Most Visited Areas"}
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "المطاعم" : "Food Court"}</span>
                                <span className="text-sm font-medium">85%</span>
                              </div>
                              <Progress value={85} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الترفيه" : "Entertainment"}</span>
                                <span className="text-sm font-medium">79%</span>
                              </div>
                              <Progress value={79} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الأزياء" : "Fashion"}</span>
                                <span className="text-sm font-medium">68%</span>
                              </div>
                              <Progress value={68} className="h-2" />
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <div className="bg-muted/30 p-4 rounded-lg h-full">
                            <h4 className="text-lg font-semibold mb-4">
                              {isArabic ? "تحليل المشتريات حسب الجنسية" : "Purchase Analysis by Nationality"}
                            </h4>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="h-[200px]">
                                <ResponsiveContainer width="100%" height="100%">
                                  <RechartsPieChart>
                                    <Pie
                                      data={nationalityData}
                                      cx="50%"
                                      cy="50%"
                                      innerRadius={40}
                                      outerRadius={80}
                                      paddingAngle={5}
                                      dataKey="value"
                                    >
                                      {nationalityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                      ))}
                                    </Pie>
                                    <Tooltip />
                                  </RechartsPieChart>
                                </ResponsiveContainer>
                              </div>
                              <div className="space-y-2">
                                {nationalityData.map((item, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                      ></div>
                                      <span className="text-sm">
                                        {isArabic
                                          ? {
                                              "UAE Nationals": "مواطنو الإمارات",
                                              "GCC Nationals": "مواطنو الخليج",
                                              "Arab Expats": "المغتربون العرب",
                                              "Asian Expats": "المغتربون الآسيويون",
                                              "Western Expats": "المغتربون الغربيون",
                                            }[item.name]
                                          : item.name}
                                      </span>
                                    </div>
                                    <span className="text-sm font-medium">{item.value}%</span>
                                  </div>
                                ))}
                                <div className="pt-4">
                                  <div className="text-sm font-medium">
                                    {isArabic ? "أعلى فئات الإنفاق" : "Top Spending Categories"}:
                                  </div>
                                  <div className="text-sm">
                                    {isArabic
                                      ? "المجوهرات، الأزياء الفاخرة، المطاعم الراقية"
                                      : "Jewelry, Luxury Fashion, Fine Dining"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentDemo === "healthcare" && (
                <div className="space-y-6">
                  {/* Healthcare Dashboard */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle>{isArabic ? "مؤشرات الأداء الرئيسية" : "Key Performance Indicators"}</CardTitle>
                        <CardDescription>
                          {isArabic
                            ? "مقاييس الأداء الرئيسية لمقدمي الرعاية الصحية في الإمارات"
                            : "Critical performance metrics for UAE healthcare providers"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-6">
                          {[
                            {
                              title: isArabic ? "رضا المرضى" : "Patient Satisfaction",
                              value: "94%",
                              target: "90%",
                              color: "#1e3a8a",
                            },
                            {
                              title: isArabic ? "متوسط مدة الإقامة" : "Average Length of Stay",
                              value: "2.4 days",
                              target: "3.0 days",
                              color: "#10b981",
                            },
                            {
                              title: isArabic ? "معدل إعادة القبول" : "Readmission Rate",
                              value: "4.2%",
                              target: "5.0%",
                              color: "#fbbf24",
                            },
                            {
                              title: isArabic ? "معدل العدوى" : "Infection Rate",
                              value: "0.8%",
                              target: "1.0%",
                              color: "#dc2626",
                            },
                          ].map((kpi, index) => (
                            <div key={index} className="text-center">
                              <div className="relative w-24 h-24 mx-auto mb-2">
                                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                  <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="transparent" />
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke={kpi.color}
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={`${
                                      (Number.parseFloat(kpi.value) / Number.parseFloat(kpi.target.replace("%", ""))) *
                                      251.2
                                    } 251.2`}
                                    strokeLinecap="round"
                                  />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-lg font-bold">{kpi.value}</span>
                                </div>
                              </div>
                              <h4 className="text-sm font-medium">{kpi.title}</h4>
                              <p className="text-xs text-muted-foreground">
                                {isArabic ? "الهدف" : "Target"}: {kpi.target}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle>
                          {isArabic ? "توزيع المرضى حسب الإمارة" : "Patient Distribution by Emirate"}
                        </CardTitle>
                        <CardDescription>
                          {isArabic
                            ? "التوزيع الجغرافي للمرضى عبر الإمارات"
                            : "Geographic distribution of patients across UAE"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer
                          config={{
                            customers: { label: isArabic ? "المرضى" : "Patients", color: "#1e3a8a" },
                          }}
                          className="h-[350px]"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={emiratesData} layout="horizontal">
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
                              <Bar dataKey="customers" fill="#1e3a8a" radius={[0, 4, 4, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>
                        {isArabic ? "تحليل الامتثال للوائح الصحية" : "Healthcare Regulatory Compliance"}
                      </CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "تحليل الامتثال للوائح الرعاية الصحية في الإمارات"
                          : "Analysis of compliance with UAE healthcare regulations"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {complianceData.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                {isArabic
                                  ? {
                                      "DIFC Data Protection": "حماية البيانات في مركز دبي المالي العالمي",
                                      "ADGM Regulations": "لوائح سوق أبوظبي العالمي",
                                      "UAE Labor Law": "قانون العمل الإماراتي",
                                      Emiratization: "التوطين",
                                      "Corporate Tax": "ضريبة الشركات",
                                    }[item.category]
                                  : item.category}
                              </span>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`text-sm font-medium ${
                                    item.score >= item.benchmark ? "text-emirates-emerald" : "text-emirates-red"
                                  }`}
                                >
                                  {item.score}%
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ({isArabic ? "المعيار" : "Benchmark"}: {item.benchmark}%)
                                </span>
                              </div>
                            </div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                                <div
                                  style={{ width: `${item.score}%` }}
                                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                                    item.score >= item.benchmark ? "bg-emirates-emerald" : "bg-emirates-red"
                                  }`}
                                ></div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: `${item.benchmark}%`,
                                    height: "8px",
                                    width: "2px",
                                    backgroundColor: "#6b7280",
                                    top: "4px",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentDemo === "construction" && (
                <div className="space-y-6">
                  {/* Construction Dashboard */}
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{isArabic ? "مشاريع البناء الرئيسية" : "Major Construction Projects"}</CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "تتبع مشاريع البناء الضخمة في الإمارات"
                          : "Tracking UAE's mega construction projects"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            name: "Dubai Creek Tower",
                            progress: 68,
                            budget: "AED 3.67B",
                            timeline: "2025",
                            status: "On Track",
                          },
                          {
                            name: "Museum of the Future",
                            progress: 92,
                            budget: "AED 500M",
                            timeline: "2023",
                            status: "Completed",
                          },
                          {
                            name: "Etihad Rail",
                            progress: 75,
                            budget: "AED 40B",
                            timeline: "2024",
                            status: "On Track",
                          },
                          {
                            name: "Sharjah Sustainable City",
                            progress: 45,
                            budget: "AED 2B",
                            timeline: "2025",
                            status: "Delayed",
                          },
                        ].map((project, index) => (
                          <div key={index} className="bg-muted/30 p-4 rounded-lg">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                              <div>
                                <h4 className="text-lg font-semibold">
                                  {isArabic
                                    ? {
                                        "Dubai Creek Tower": "برج خور دبي",
                                        "Museum of the Future": "متحف المستقبل",
                                        "Etihad Rail": "قطار الاتحاد",
                                        "Sharjah Sustainable City": "مدينة الشارقة المستدامة",
                                      }[project.name]
                                    : project.name}
                                </h4>
                                <div className="flex items-center space-x-4 mt-1">
                                  <div className="flex items-center space-x-1">
                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{project.budget}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <CalendarClock className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{project.timeline}</span>
                                  </div>
                                  <Badge
                                    variant={
                                      project.status === "On Track"
                                        ? "default"
                                        : project.status === "Completed"
                                          ? "secondary"
                                          : "destructive"
                                    }
                                    className={
                                      project.status === "On Track"
                                        ? "bg-emirates-emerald"
                                        : project.status === "Completed"
                                          ? "bg-emirates-navy"
                                          : ""
                                    }
                                  >
                                    {isArabic
                                      ? {
                                          "On Track": "في المسار الصحيح",
                                          Completed: "مكتمل",
                                          Delayed: "متأخر",
                                        }[project.status]
                                      : project.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right mt-2 md:mt-0">
                                <div className="text-2xl font-bold">{project.progress}%</div>
                                <div className="text-sm text-muted-foreground">
                                  {isArabic ? "نسبة الإنجاز" : "Completion"}
                                </div>
                              </div>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle>{isArabic ? "تحليل المخاطر" : "Risk Analysis"}</CardTitle>
                        <CardDescription>
                          {isArabic
                            ? "تقييم المخاطر لمشاريع البناء في الإمارات"
                            : "Risk assessment for UAE construction projects"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <RadarChart
                              data={[
                                { subject: isArabic ? "المالية" : "Financial", risk: 65, benchmark: 50 },
                                { subject: isArabic ? "الجدول الزمني" : "Schedule", risk: 80, benchmark: 60 },
                                { subject: isArabic ? "الموارد" : "Resources", risk: 45, benchmark: 40 },
                                { subject: isArabic ? "الصحة والسلامة" : "Health & Safety", risk: 30, benchmark: 35 },
                                { subject: isArabic ? "الامتثال" : "Compliance", risk: 25, benchmark: 30 },
                                { subject: isArabic ? "الجودة" : "Quality", risk: 40, benchmark: 45 },
                              ]}
                            >
                              <PolarGrid />
                              <PolarAngleAxis dataKey="subject" />
                              <PolarRadiusAxis angle={90} domain={[0, 100]} />
                              <Radar
                                name={isArabic ? "المخاطر الحالية" : "Current Risk"}
                                dataKey="risk"
                                stroke="#1e3a8a"
                                fill="#1e3a8a"
                                fillOpacity={0.3}
                                strokeWidth={2}
                              />
                              <Radar
                                name={isArabic ? "المعيار" : "Benchmark"}
                                dataKey="benchmark"
                                stroke="#10b981"
                                fill="#10b981"
                                fillOpacity={0.1}
                                strokeWidth={2}
                                strokeDasharray="5 "
                              />
                            </RadarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle>{isArabic ? "تحليل التأثير البيئي" : "Environmental Impact Analysis"}</CardTitle>
                        <CardDescription>
                          {isArabic
                            ? "تقييم الأثر البيئي لمشاريع البناء في الإمارات"
                            : "Assessing the environmental impact of UAE construction projects"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {isArabic ? "استهلاك الطاقة" : "Energy Consumption"}
                            </span>
                            <span className="text-sm font-medium">{isArabic ? "25٪ زيادة" : "25% Increase"}</span>
                          </div>
                          <Progress value={25} className="h-2" />
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {isArabic ? "انبعاثات الكربون" : "Carbon Emissions"}
                            </span>
                            <span className="text-sm font-medium">{isArabic ? "18٪ زيادة" : "18% Increase"}</span>
                          </div>
                          <Progress value={18} className="h-2" />
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {isArabic ? "إدارة النفايات" : "Waste Management"}
                            </span>
                            <span className="text-sm font-medium">{isArabic ? "32٪ تحسن" : "32% Improvement"}</span>
                          </div>
                          <Progress value={32} className="h-2 bg-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {currentDemo === "compliance" && (
                <div className="space-y-6">
                  {/* Compliance Dashboard */}
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{isArabic ? "مؤشرات الامتثال الرئيسية" : "Key Compliance Indicators"}</CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "مقاييس الأداء الرئيسية للامتثال التنظيمي في الإمارات"
                          : "Critical performance metrics for UAE regulatory compliance"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          {
                            title: isArabic ? "حماية البيانات" : "Data Protection",
                            value: "98%",
                            target: "95%",
                            color: "#1e3a8a",
                          },
                          {
                            title: isArabic ? "قانون العمل" : "Labor Law",
                            value: "95%",
                            target: "90%",
                            color: "#10b981",
                          },
                          {
                            title: isArabic ? "ضريبة الشركات" : "Corporate Tax",
                            value: "92%",
                            target: "85%",
                            color: "#fbbf24",
                          },
                          {
                            title: isArabic ? "مكافحة غسل الأموال" : "Anti-Money Laundering",
                            value: "88%",
                            target: "80%",
                            color: "#dc2626",
                          },
                        ].map((kpi, index) => (
                          <div key={index} className="text-center">
                            <div className="relative w-24 h-24 mx-auto mb-2">
                              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="transparent" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  stroke={kpi.color}
                                  strokeWidth="8"
                                  fill="transparent"
                                  strokeDasharray={`${
                                    (Number.parseFloat(kpi.value) / Number.parseFloat(kpi.target.replace("%", ""))) *
                                    251.2
                                  } 251.2`}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-bold">{kpi.value}</span>
                              </div>
                            </div>
                            <h4 className="text-sm font-medium">{kpi.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              {isArabic ? "الهدف" : "Target"}: {kpi.target}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{isArabic ? "تحليل المخاطر" : "Risk Analysis"}</CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "تقييم المخاطر لمشاريع البناء في الإمارات"
                          : "Risk assessment for UAE construction projects"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart
                            data={[
                              { subject: isArabic ? "المالية" : "Financial", risk: 65, benchmark: 50 },
                              { subject: isArabic ? "الجدول الزمني" : "Schedule", risk: 80, benchmark: 60 },
                              { subject: isArabic ? "الموارد" : "Resources", risk: 45, benchmark: 40 },
                              { subject: isArabic ? "الصحة والسلامة" : "Health & Safety", risk: 30, benchmark: 35 },
                              { subject: isArabic ? "الامتثال" : "Compliance", risk: 25, benchmark: 30 },
                              { subject: isArabic ? "الجودة" : "Quality", risk: 40, benchmark: 45 },
                            ]}
                          >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} />
                            <Radar
                              name={isArabic ? "المخاطر الحالية" : "Current Risk"}
                              dataKey="risk"
                              stroke="#1e3a8a"
                              fill="#1e3a8a"
                              fillOpacity={0.3}
                              strokeWidth={2}
                            />
                            <Radar
                              name={isArabic ? "المعيار" : "Benchmark"}
                              dataKey="benchmark"
                              stroke="#10b981"
                              fill="#10b981"
                              fillOpacity={0.1}
                              strokeWidth={2}
                              strokeDasharray="5 "
                            />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentDemo === "emiratization" && (
                <div id="emiratization" className="space-y-6">
                  {/* Emiratization Dashboard */}
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{isArabic ? "مؤشرات التوطين الرئيسية" : "Key Emiratization Indicators"}</CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "مقاييس الأداء الرئيسية للامتثال للتوطين في الإمارات"
                          : "Critical performance metrics for UAE Emiratization compliance"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          {
                            title: isArabic ? "نسبة التوطين" : "Emiratization Ratio",
                            value: "2.4%",
                            target: "4%",
                            color: "#1e3a8a",
                          },
                          {
                            title: isArabic ? "الاحتفاظ بالموظفين" : "Employee Retention",
                            value: "92%",
                            target: "95%",
                            color: "#10b981",
                          },
                          {
                            title: isArabic ? "التدريب والتطوير" : "Training & Development",
                            value: "85%",
                            target: "90%",
                            color: "#fbbf24",
                          },
                          {
                            title: isArabic ? "الرضا الوظيفي" : "Job Satisfaction",
                            value: "88%",
                            target: "90%",
                            color: "#dc2626",
                          },
                        ].map((kpi, index) => (
                          <div key={index} className="text-center">
                            <div className="relative w-24 h-24 mx-auto mb-2">
                              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="transparent" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  stroke={kpi.color}
                                  strokeWidth="8"
                                  fill="transparent"
                                  strokeDasharray={`${
                                    (Number.parseFloat(kpi.value) / Number.parseFloat(kpi.target.replace("%", ""))) *
                                    251.2
                                  } 251.2`}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-bold">{kpi.value}</span>
                              </div>
                            </div>
                            <h4 className="text-sm font-medium">{kpi.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              {isArabic ? "الهدف" : "Target"}: {kpi.target}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{isArabic ? "تحليل التوظيف حسب الجنسية" : "Hiring Analysis by Nationality"}</CardTitle>
                      <CardDescription>
                        {isArabic
                          ? "تحليل التوظيف حسب الجنسية في الإمارات"
                          : "Analysis of hiring by nationality in the UAE"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">{isArabic ? "المواطنون" : "Nationals"}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الذكور" : "Male"}</span>
                                <span className="text-sm font-medium">62%</span>
                              </div>
                              <Progress value={62} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الإناث" : "Female"}</span>
                                <span className="text-sm font-medium">38%</span>
                              </div>
                              <Progress value={38} className="h-2" />
                            </div>
                          </div>
                          <div className="bg-muted/30 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">
                              {isArabic ? "المغتربون العرب" : "Arab Expats"}
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الذكور" : "Male"}</span>
                                <span className="text-sm font-medium">75%</span>
                              </div>
                              <Progress value={75} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">{isArabic ? "الإناث" : "Female"}</span>
                                <span className="text-sm font-medium">25%</span>
                              </div>
                              <Progress value={25} className="h-2" />
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <div className="bg-muted/30 p-4 rounded-lg h-full">
                            <h4 className="text-lg font-semibold mb-4">
                              {isArabic ? "تحليل الوظائف حسب القطاع" : "Job Analysis by Sector"}
                            </h4>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="h-[200px]">
                                <ResponsiveContainer width="100%" height="100%">
                                  <RechartsPieChart>
                                    <Pie
                                      data={industryData}
                                      cx="50%"
                                      cy="50%"
                                      innerRadius={40}
                                      outerRadius={80}
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
                              <div className="space-y-2">
                                {industryData.map((item, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                      ></div>
                                      <span className="text-sm">
                                        {isArabic
                                          ? {
                                              Retail: "التجزئة",
                                              Healthcare: "الرعاية الصحية",
                                              Construction: "البناء",
                                              Education: "التعليم",
                                              Finance: "المالية",
                                            }[item.name]
                                          : item.name}
                                      </span>
                                    </div>
                                    <span className="text-sm font-medium">{item.value}%</span>
                                  </div>
                                ))}
                                <div className="pt-4">
                                  <div className="text-sm font-medium">
                                    {isArabic ? "أعلى القطاعات نموًا" : "Top Growing Sectors"}:
                                  </div>
                                  <div className="text-sm">
                                    {isArabic ? "المالية، البناء، التجزئة" : "Finance, Construction, Retail"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Tour Guide */}
      {showTour && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex items-center justify-center">
          <div
            className="bg-white dark:bg-gray-700 rounded-lg p-8 w-96 relative"
            style={{
              top: tourSteps[tourStep].target === "header" ? "10%" : "auto",
            }}
          >
            <h2 className="text-2xl font-bold mb-4">{tourSteps[tourStep].title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{tourSteps[tourStep].description}</p>
            <div className="flex justify-between">
              <Button variant="ghost" onClick={prevTourStep} disabled={tourStep === 0}>
                Previous
              </Button>
              <div>
                <Button variant="outline" onClick={closeTour}>
                  Close
                </Button>
                <Button onClick={nextTourStep}>{tourStep === tourSteps.length - 1 ? "Finish" : "Next"}</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
