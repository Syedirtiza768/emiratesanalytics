"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Shield,
  Zap,
  Globe,
  Building2,
  Heart,
  HardHat,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Languages,
  Target,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  PieChart,
  LineChart,
} from "lucide-react"
import { useTheme } from "next-themes"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentInsight, setCurrentInsight] = useState(0)

  const valueProps = [
    {
      icon: <Globe className="h-8 w-8 text-emirates-emerald" />,
      title: "UAE Market Mastery",
      description: "Deep insights into UAE's Vision 2071, DIFC regulations, and Emiratization strategies",
      stat: "500+ UAE Companies",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emirates-navy" />,
      title: "AI-Powered Analytics",
      description: "Advanced algorithms trained on GCC market patterns and Arabic consumer behavior",
      stat: "99.7% Accuracy",
    },
    {
      icon: <Shield className="h-8 w-8 text-emirates-gold" />,
      title: "UAE Compliance Ready",
      description: "DIFC, ADGM, and UAE Central Bank compliant with Arabic language support",
      stat: "100% Compliant",
    },
    {
      icon: <Zap className="h-8 w-8 text-emirates-red" />,
      title: "Real-Time Insights",
      description: "Live data from Dubai Mall, ADNOC, Emirates, and major UAE enterprises",
      stat: "<2s Response",
    },
  ]

  const uaeStats = [
    {
      title: "UAE Market Penetration",
      value: "78%",
      description: "Of Fortune 500 companies in UAE use our analytics",
      icon: <Target className="h-6 w-6 text-emirates-navy" />,
    },
    {
      title: "Arabic Language Support",
      value: "100%",
      description: "Fully bilingual platform with RTL support",
      icon: <Languages className="h-6 w-6 text-emirates-emerald" />,
    },
    {
      title: "UAE Compliance Score",
      value: "99.9%",
      description: "DIFC, ADGM, and Central Bank compliant",
      icon: <Shield className="h-6 w-6 text-emirates-gold" />,
    },
    {
      title: "Local Data Centers",
      value: "3",
      description: "Dubai, Abu Dhabi, and Sharjah for data sovereignty",
      icon: <MapPin className="h-6 w-6 text-emirates-red" />,
    },
  ]

  const uaeInsights = [
    {
      title: "Dubai's Retail Revolution",
      description:
        "Dubai Mall generates AED 4.2B annually. Our analytics helped 50+ retailers increase footfall by 35%",
      image: "/placeholder.svg?height=300&width=400",
      stats: [
        { label: "Retail Growth", value: "+35%" },
        { label: "Customer Insights", value: "2.5M+" },
        { label: "Revenue Impact", value: "AED 890M" },
      ],
    },
    {
      title: "Abu Dhabi's Healthcare Analytics",
      description: "Supporting UAE's healthcare transformation with predictive analytics for patient outcomes",
      image: "/placeholder.svg?height=300&width=400",
      stats: [
        { label: "Patient Satisfaction", value: "94%" },
        { label: "Efficiency Gain", value: "+28%" },
        { label: "Cost Reduction", value: "AED 45M" },
      ],
    },
    {
      title: "Sharjah's Education Excellence",
      description: "Empowering American University of Sharjah and other institutions with student success analytics",
      image: "/placeholder.svg?height=300&width=400",
      stats: [
        { label: "Student Success", value: "+22%" },
        { label: "Retention Rate", value: "89%" },
        { label: "Career Placement", value: "96%" },
      ],
    },
  ]

  const useCases = [
    {
      icon: <Building2 className="h-12 w-12 text-emirates-navy" />,
      title: "Dubai Financial District",
      description: "DIFC compliance with real-time trading analytics and risk management for 500+ financial firms",
      clients: "Emirates NBD, ADCB, FAB",
      growth: "+45% efficiency",
    },
    {
      icon: <Heart className="h-12 w-12 text-emirates-red" />,
      title: "Healthcare Excellence",
      description: "Supporting UAE's world-class healthcare with patient analytics and operational optimization",
      clients: "Cleveland Clinic, Mediclinic",
      growth: "+32% patient satisfaction",
    },
    {
      icon: <HardHat className="h-12 w-12 text-emirates-gold" />,
      title: "Mega Construction",
      description: "Analytics for Dubai Creek Tower, NEOM projects, and UAE's infrastructure development",
      clients: "Emaar, ALEC, Arabtec",
      growth: "+28% project efficiency",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-emirates-emerald" />,
      title: "Education Innovation",
      description: "Supporting UAE's knowledge economy with student performance and institutional analytics",
      clients: "AUS, UAEU, Zayed University",
      growth: "+25% graduation rates",
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "CEO, Dubai Retail Consortium",
      company: "Dubai Mall Group",
      quote:
        "EmiratesAnalytics understands our market like no other. They helped us increase Ramadan sales by 40% through precise customer behavior insights.",
      image: "/placeholder.svg?height=80&width=80",
      results: "40% Ramadan sales increase",
      location: "Dubai Mall, Downtown Dubai",
    },
    {
      name: "Dr. Fatima Al Zahra",
      role: "Director of Operations",
      company: "Abu Dhabi Healthcare",
      quote:
        "Their deep understanding of UAE healthcare regulations and patient privacy laws made our digital transformation seamless and compliant.",
      image: "/placeholder.svg?height=80&width=80",
      results: "30% operational efficiency",
      location: "Abu Dhabi Health Services",
    },
    {
      name: "Omar Hassan Al Maktoum",
      role: "COO, Emirates Construction",
      company: "Dubai Creek Development",
      quote:
        "From understanding UAE labor laws to optimizing for extreme weather conditions, they know our construction challenges inside out.",
      image: "/placeholder.svg?height=80&width=80",
      results: "25% cost reduction",
      location: "Dubai Creek Harbour",
    },
    {
      name: "Khalid Al Qasimi",
      role: "CFO, Sharjah Investment",
      company: "Sharjah Economic Development",
      quote:
        "Their analytics helped us navigate the new UAE corporate tax regulations while optimizing our investment portfolio for maximum returns.",
      image: "/placeholder.svg?height=80&width=80",
      results: "18% ROI improvement",
      location: "Sharjah Investment Authority",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % uaeInsights.length)
  }

  const prevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + uaeInsights.length) % uaeInsights.length)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-64 h-12 -m-2">
              <img
                src="/emirates-analytics-logo.svg"
                alt="EmiratesAnalytics Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <Badge variant="secondary" className="ml-2 text-xs">
              🇦🇪 UAE Certified
            </Badge>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#insights" className="text-sm font-medium hover:text-emirates-navy transition-colors">
              UAE Insights
            </a>
            <a href="#expertise" className="text-sm font-medium hover:text-emirates-navy transition-colors">
              Our Expertise
            </a>
            <a href="#success-stories" className="text-sm font-medium hover:text-emirates-navy transition-colors">
              Success Stories
            </a>
            <a href="/dubai-investment" className="text-sm font-medium hover:text-emirates-navy transition-colors">
              Dubai Investment
            </a>
            <a href="#compliance" className="text-sm font-medium hover:text-emirates-navy transition-colors">
              Compliance
            </a>
            <a href="/dashboard" className="text-sm font-medium hover:text-emirates-navy transition-colors">
              Live Demo
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon">
              <Languages className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button size="sm" className="bg-emirates-navy hover:bg-emirates-navy/90">
              احجز عرضاً تجريبياً
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1600 800" className="w-full h-full object-cover opacity-10">
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#87CEEB" />
                <stop offset="100%" stopColor="#E0F6FF" />
              </linearGradient>
            </defs>
            <rect width="1600" height="800" fill="url(#skyGradient)" />

            {/* Burj Khalifa */}
            <rect x="700" y="200" width="20" height="400" fill="#2563eb" />
            <rect x="705" y="150" width="10" height="50" fill="#2563eb" />
            <rect x="707" y="120" width="6" height="30" fill="#2563eb" />

            {/* Other buildings */}
            <rect x="600" y="350" width="40" height="250" fill="#1e40af" />
            <rect x="650" y="300" width="35" height="300" fill="#1e40af" />
            <rect x="750" y="320" width="45" height="280" fill="#1e40af" />
            <rect x="800" y="280" width="50" height="320" fill="#1e40af" />
            <rect x="860" y="340" width="40" height="260" fill="#1e40af" />
            <rect x="910" y="360" width="35" height="240" fill="#1e40af" />

            {/* Palm trees */}
            <ellipse cx="500" cy="580" rx="15" ry="40" fill="#16a34a" />
            <rect x="495" y="580" width="10" height="20" fill="#92400e" />
            <ellipse cx="1100" cy="580" rx="15" ry="40" fill="#16a34a" />
            <rect x="1095" y="580" width="10" height="20" fill="#92400e" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-emirates-navy/20 via-emirates-emerald/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-emirates-emerald/10 text-emirates-emerald border-emirates-emerald/20"
                >
                  🇦🇪 رؤية الإمارات 2071
                </Badge>
                <Badge variant="secondary" className="bg-emirates-gold/10 text-emirates-gold border-emirates-gold/20">
                  DIFC Certified
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                The Only Analytics Platform That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emirates-navy to-emirates-emerald">
                  Truly Understands UAE
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                From Dubai's retail revolution to Abu Dhabi's healthcare transformation - we've powered 500+ UAE
                enterprises with insights that drive real business growth.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emirates-emerald" />
                  <span className="text-sm">DIFC & ADGM Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emirates-emerald" />
                  <span className="text-sm">Arabic Language Native</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emirates-emerald" />
                  <span className="text-sm">UAE Data Sovereignty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emirates-emerald" />
                  <span className="text-sm">Emiratization Ready</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emirates-navy hover:bg-emirates-navy/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book UAE Expert Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emirates-emerald text-emirates-emerald hover:bg-emirates-emerald hover:text-white"
                >
                  <PieChart className="h-4 w-4 mr-2" />
                  View Live Dashboard
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="relative">
                  <div className="w-full h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg shadow-2xl p-8 border">
                    <svg viewBox="0 0 700 400" className="w-full h-full">
                      {/* Modern gradient definitions */}
                      <defs>
                        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1e40af" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <linearGradient id="chartGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
                        </linearGradient>
                        <linearGradient id="chartGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
                        </linearGradient>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
                        </filter>
                      </defs>

                      {/* Modern Dashboard Header */}
                      <rect
                        x="0"
                        y="0"
                        width="700"
                        height="60"
                        fill="url(#headerGradient)"
                        rx="12"
                        filter="url(#shadow)"
                      />
                      <text x="20" y="35" fill="white" fontSize="18" fontWeight="bold">
                        Emirates Analytics Dashboard
                      </text>
                      <circle cx="620" cy="30" r="8" fill="#10b981" />
                      <text x="640" y="35" fill="white" fontSize="14" fontWeight="500">
                        Live
                      </text>

                      {/* Main Chart Container */}
                      <rect
                        x="20"
                        y="80"
                        width="450"
                        height="280"
                        fill="white"
                        stroke="#f1f5f9"
                        strokeWidth="2"
                        rx="12"
                        filter="url(#shadow)"
                      />

                      {/* Modern Area Chart */}
                      <g clipPath="url(#chartClip)">
                        <clipPath id="chartClip">
                          <rect x="25" y="85" width="440" height="270" />
                        </clipPath>

                        {/* Area fill */}
                        <path
                          d="M 40 320 L 80 280 L 120 260 L 160 240 L 200 220 L 240 200 L 280 180 L 320 160 L 360 140 L 400 120 L 440 100 L 440 340 L 40 340 Z"
                          fill="url(#areaGradient)"
                        />

                        {/* Main trend line */}
                        <path
                          d="M 40 320 L 80 280 L 120 260 L 160 240 L 200 220 L 240 200 L 280 180 L 320 160 L 360 140 L 400 120 L 440 100"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          filter="url(#glow)"
                        />

                        {/* Data points with modern design */}
                        <circle
                          cx="40"
                          cy="320"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="80"
                          cy="280"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="120"
                          cy="260"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="160"
                          cy="240"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="200"
                          cy="220"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="240"
                          cy="200"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="280"
                          cy="180"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="320"
                          cy="160"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="360"
                          cy="140"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="400"
                          cy="120"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                        <circle
                          cx="440"
                          cy="100"
                          r="6"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          filter="url(#shadow)"
                        />
                      </g>

                      {/* Modern Metric Cards */}
                      <g>
                        {/* Revenue Card */}
                        <rect
                          x="490"
                          y="80"
                          width="180"
                          height="85"
                          fill="white"
                          stroke="#f1f5f9"
                          strokeWidth="1"
                          rx="12"
                          filter="url(#shadow)"
                        />
                        <rect x="500" y="90" width="40" height="4" fill="url(#chartGradient1)" rx="2" />
                        <text x="500" y="110" fontSize="12" fill="#64748b" fontWeight="500">
                          Revenue (AED)
                        </text>
                        <text x="500" y="135" fontSize="24" fontWeight="bold" fill="#1e293b">
                          2.4M
                        </text>
                        <text x="500" y="155" fontSize="12" fill="#10b981" fontWeight="600">
                          ↗ +35%
                        </text>

                        {/* Mini chart in card */}
                        <path
                          d="M 580 140 L 590 135 L 600 130 L 610 125 L 620 120 L 630 115 L 640 110 L 650 105"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>

                      <g>
                        {/* Users Card */}
                        <rect
                          x="490"
                          y="180"
                          width="180"
                          height="85"
                          fill="white"
                          stroke="#f1f5f9"
                          strokeWidth="1"
                          rx="12"
                          filter="url(#shadow)"
                        />
                        <rect x="500" y="190" width="40" height="4" fill="url(#chartGradient2)" rx="2" />
                        <text x="500" y="210" fontSize="12" fill="#64748b" fontWeight="500">
                          Active Users
                        </text>
                        <text x="500" y="235" fontSize="24" fontWeight="bold" fill="#1e293b">
                          125K
                        </text>
                        <text x="500" y="255" fontSize="12" fill="#f59e0b" fontWeight="600">
                          ↗ +22%
                        </text>

                        {/* Circular progress */}
                        <circle cx="620" cy="225" r="20" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                        <circle
                          cx="620"
                          cy="225"
                          r="20"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="4"
                          strokeDasharray="88"
                          strokeDashoffset="22"
                          strokeLinecap="round"
                          transform="rotate(-90 620 225)"
                        />
                        <text x="620" y="230" fontSize="10" fill="#1e293b" textAnchor="middle" fontWeight="bold">
                          82%
                        </text>
                      </g>

                      <g>
                        {/* Conversion Card */}
                        <rect
                          x="490"
                          y="280"
                          width="180"
                          height="85"
                          fill="white"
                          stroke="#f1f5f9"
                          strokeWidth="1"
                          rx="12"
                          filter="url(#shadow)"
                        />
                        <rect x="500" y="290" width="40" height="4" fill="#8b5cf6" rx="2" />
                        <text x="500" y="310" fontSize="12" fill="#64748b" fontWeight="500">
                          Conversion Rate
                        </text>
                        <text x="500" y="335" fontSize="24" fontWeight="bold" fill="#1e293b">
                          4.8%
                        </text>
                        <text x="500" y="355" fontSize="12" fill="#8b5cf6" fontWeight="600">
                          ↗ +12%
                        </text>

                        {/* Modern bar chart */}
                        <rect x="580" y="320" width="8" height="25" fill="#e5e7eb" rx="4" />
                        <rect x="580" y="335" width="8" height="10" fill="#8b5cf6" rx="4" />
                        <rect x="595" y="315" width="8" height="30" fill="#e5e7eb" rx="4" />
                        <rect x="595" y="330" width="8" height="15" fill="#8b5cf6" rx="4" />
                        <rect x="610" y="310" width="8" height="35" fill="#e5e7eb" rx="4" />
                        <rect x="610" y="325" width="8" height="20" fill="#8b5cf6" rx="4" />
                        <rect x="625" y="305" width="8" height="40" fill="#e5e7eb" rx="4" />
                        <rect x="625" y="320" width="8" height="25" fill="#8b5cf6" rx="4" />
                      </g>

                      {/* Modern Grid Lines */}
                      <g stroke="#f1f5f9" strokeWidth="1" opacity="0.5">
                        <line x1="40" y1="120" x2="440" y2="120" />
                        <line x1="40" y1="160" x2="440" y2="160" />
                        <line x1="40" y1="200" x2="440" y2="200" />
                        <line x1="40" y1="240" x2="440" y2="240" />
                        <line x1="40" y1="280" x2="440" y2="280" />
                        <line x1="40" y1="320" x2="440" y2="320" />
                      </g>

                      {/* Time Labels */}
                      <text x="40" y="375" fontSize="10" fill="#64748b" textAnchor="middle">
                        Jan
                      </text>
                      <text x="120" y="375" fontSize="10" fill="#64748b" textAnchor="middle">
                        Mar
                      </text>
                      <text x="200" y="375" fontSize="10" fill="#64748b" textAnchor="middle">
                        May
                      </text>
                      <text x="280" y="375" fontSize="10" fill="#64748b" textAnchor="middle">
                        Jul
                      </text>
                      <text x="360" y="375" fontSize="10" fill="#64748b" textAnchor="middle">
                        Sep
                      </text>
                      <text x="440" y="375" fontSize="10" fill="#64748b" textAnchor="middle">
                        Nov
                      </text>
                    </svg>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-white dark:bg-card rounded-lg shadow-2xl p-4 border">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-emirates-emerald rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Dubai Mall Live</span>
                    </div>
                    <div className="text-2xl font-bold text-emirates-navy">AED 2.4M</div>
                    <div className="text-xs text-muted-foreground">+35% vs Ramadan 2023</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-card rounded-lg shadow-2xl p-4 border">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-3 w-3 text-emirates-gold" />
                      <span className="text-xs font-medium">UAE Coverage</span>
                    </div>
                    <div className="text-2xl font-bold text-emirates-gold">7/7</div>
                    <div className="text-xs text-muted-foreground">All Emirates Connected</div>
                  </div>

                  <div className="absolute top-1/2 -right-8 bg-white dark:bg-card rounded-lg shadow-2xl p-3 border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-emirates-red">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UAE Market Stats */}
      <section className="py-16 bg-gradient-to-r from-emirates-navy to-emirates-emerald text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {uaeStats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-full">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.title}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UAE Insights Showcase */}
      <section id="insights" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Deep UAE Market Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just analyze data - we understand the UAE market's unique dynamics, from Ramadan shopping
              patterns to Emiratization requirements
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card className="relative overflow-hidden bg-white dark:bg-card shadow-2xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-emirates-emerald/10 text-emirates-emerald">
                      UAE Market Insight #{currentInsight + 1}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Updated 2 hours ago</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={prevInsight} className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={nextInsight} className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <motion.div
                  key={currentInsight}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-0"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{uaeInsights[currentInsight].title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{uaeInsights[currentInsight].description}</p>

                    <div className="grid grid-cols-3 gap-4">
                      {uaeInsights[currentInsight].stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-emirates-navy">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button className="bg-emirates-navy hover:bg-emirates-navy/90">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Get Similar Results
                      </Button>
                    </div>
                  </div>

                  {currentInsight === 0 && (
                    <div className="relative">
                      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
                        {/* Mall interior */}
                        <rect width="600" height="400" fill="#f8fafc" />

                        {/* Stores */}
                        <rect x="50" y="100" width="100" height="150" fill="#e2e8f0" stroke="#cbd5e1" />
                        <rect x="200" y="100" width="100" height="150" fill="#e2e8f0" stroke="#cbd5e1" />
                        <rect x="350" y="100" width="100" height="150" fill="#e2e8f0" stroke="#cbd5e1" />
                        <rect x="500" y="100" width="80" height="150" fill="#e2e8f0" stroke="#cbd5e1" />

                        {/* Shopping analytics overlay */}
                        <circle cx="100" cy="175" r="30" fill="#16a34a" opacity="0.7" />
                        <text x="100" y="180" textAnchor="middle" fill="white" fontSize="12">
                          +35%
                        </text>

                        <circle cx="250" cy="175" r="25" fill="#dc2626" opacity="0.7" />
                        <text x="250" y="180" textAnchor="middle" fill="white" fontSize="10">
                          -5%
                        </text>

                        <circle cx="400" cy="175" r="35" fill="#16a34a" opacity="0.7" />
                        <text x="400" y="180" textAnchor="middle" fill="white" fontSize="12">
                          +42%
                        </text>

                        {/* Shoppers */}
                        <circle cx="150" cy="320" r="8" fill="#3b82f6" />
                        <rect x="146" y="328" width="8" height="20" fill="#3b82f6" />

                        <circle cx="300" cy="320" r="8" fill="#ec4899" />
                        <rect x="296" y="328" width="8" height="20" fill="#ec4899" />

                        <circle cx="450" cy="320" r="8" fill="#10b981" />
                        <rect x="446" y="328" width="8" height="20" fill="#10b981" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}

                  {currentInsight === 1 && (
                    <div className="relative">
                      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
                        {/* Hospital building */}
                        <rect width="600" height="400" fill="#f1f5f9" />
                        <rect x="100" y="150" width="400" height="200" fill="white" stroke="#e2e8f0" />

                        {/* Red cross */}
                        <rect x="280" y="50" width="40" height="10" fill="#dc2626" />
                        <rect x="295" y="35" width="10" height="40" fill="#dc2626" />

                        {/* Windows */}
                        <rect x="120" y="170" width="30" height="30" fill="#dbeafe" />
                        <rect x="170" y="170" width="30" height="30" fill="#dbeafe" />
                        <rect x="220" y="170" width="30" height="30" fill="#dbeafe" />
                        <rect x="270" y="170" width="30" height="30" fill="#dbeafe" />
                        <rect x="320" y="170" width="30" height="30" fill="#dbeafe" />
                        <rect x="370" y="170" width="30" height="30" fill="#dbeafe" />
                        <rect x="420" y="170" width="30" height="30" fill="#dbeafe" />

                        {/* Health metrics */}
                        <rect
                          x="50"
                          y="50"
                          width="120"
                          height="80"
                          fill="white"
                          stroke="#16a34a"
                          strokeWidth="2"
                          rx="4"
                        />
                        <text x="110" y="75" textAnchor="middle" fontSize="12" fill="#16a34a">
                          Patient Satisfaction
                        </text>
                        <text x="110" y="95" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#16a34a">
                          94%
                        </text>
                        <text x="110" y="115" textAnchor="middle" fontSize="10" fill="#16a34a">
                          +8% this month
                        </text>

                        <rect
                          x="430"
                          y="50"
                          width="120"
                          height="80"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          rx="4"
                        />
                        <text x="490" y="75" textAnchor="middle" fontSize="12" fill="#3b82f6">
                          Efficiency
                        </text>
                        <text x="490" y="95" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#3b82f6">
                          +28%
                        </text>
                        <text x="490" y="115" textAnchor="middle" fontSize="10" fill="#3b82f6">
                          vs last year
                        </text>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}

                  {currentInsight === 2 && (
                    <div className="relative">
                      <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
                        {/* University campus */}
                        <rect width="600" height="400" fill="#f0fdf4" />

                        {/* Main building */}
                        <rect x="150" y="100" width="300" height="200" fill="#fbbf24" stroke="#f59e0b" />

                        {/* Dome */}
                        <ellipse cx="300" cy="100" rx="50" ry="25" fill="#f59e0b" />

                        {/* Columns */}
                        <rect x="180" y="200" width="15" height="100" fill="#f59e0b" />
                        <rect x="220" y="200" width="15" height="100" fill="#f59e0b" />
                        <rect x="260" y="200" width="15" height="100" fill="#f59e0b" />
                        <rect x="300" y="200" width="15" height="100" fill="#f59e0b" />
                        <rect x="340" y="200" width="15" height="100" fill="#f59e0b" />
                        <rect x="380" y="200" width="15" height="100" fill="#f59e0b" />
                        <rect x="420" y="200" width="15" height="100" fill="#f59e0b" />

                        {/* Students */}
                        <circle cx="100" cy="350" r="8" fill="#3b82f6" />
                        <rect x="96" y="358" width="8" height="20" fill="#3b82f6" />

                        <circle cx="130" cy="350" r="8" fill="#ec4899" />
                        <rect x="126" y="358" width="8" height="20" fill="#ec4899" />

                        <circle cx="470" cy="350" r="8" fill="#10b981" />
                        <rect x="466" y="358" width="8" height="20" fill="#10b981" />

                        <circle cx="500" cy="350" r="8" fill="#f59e0b" />
                        <rect x="496" y="358" width="8" height="20" fill="#f59e0b" />

                        {/* Education metrics */}
                        <rect
                          x="50"
                          y="50"
                          width="100"
                          height="60"
                          fill="white"
                          stroke="#16a34a"
                          strokeWidth="2"
                          rx="4"
                        />
                        <text x="100" y="70" textAnchor="middle" fontSize="10" fill="#16a34a">
                          Success Rate
                        </text>
                        <text x="100" y="90" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#16a34a">
                          +22%
                        </text>

                        <rect
                          x="450"
                          y="50"
                          width="100"
                          height="60"
                          fill="white"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          rx="4"
                        />
                        <text x="500" y="70" textAnchor="middle" fontSize="10" fill="#3b82f6">
                          Retention
                        </text>
                        <text x="500" y="90" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3b82f6">
                          89%
                        </text>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                </motion.div>

                <div className="flex justify-center space-x-2 p-4">
                  {uaeInsights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentInsight(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentInsight ? "bg-emirates-navy" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UAE Expertise */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why UAE Enterprises Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We speak your language, understand your regulations, and know your market better than anyone else
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {valueProps.map((prop, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{prop.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                    <p className="text-muted-foreground mb-4">{prop.description}</p>
                    <Badge variant="secondary" className="bg-emirates-emerald/10 text-emirates-emerald">
                      {prop.stat}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted Across UAE's Key Industries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From DIFC's financial powerhouses to Dubai's retail giants - we power the UAE's most successful
              enterprises
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{useCase.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-muted-foreground mb-4">{useCase.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Key Clients:</span>
                            <span className="text-sm text-emirates-navy font-semibold">{useCase.clients}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Average Growth:</span>
                            <Badge variant="secondary" className="bg-emirates-emerald/10 text-emirates-emerald">
                              {useCase.growth}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Results from Real UAE Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from UAE business leaders who've transformed their operations with our deep market insights
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="relative overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-emirates-navy/5 to-emirates-emerald/5">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-emirates-gold/10 text-emirates-gold">
                      ⭐ UAE Success Story
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-emirates-gold text-emirates-gold" />
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={prevTestimonial} className="rounded-full">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={nextTestimonial} className="rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <blockquote className="text-xl italic mb-6 leading-relaxed">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>

                      <div className="flex items-center space-x-4 mb-4">
                        <svg width="60" height="60" viewBox="0 0 60 60" className="rounded-full">
                          <rect width="60" height="60" fill="#3b82f6" rx="30" />
                          <circle cx="30" cy="25" r="8" fill="white" />
                          <ellipse cx="30" cy="45" rx="12" ry="8" fill="white" />
                        </svg>
                        <div>
                          <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                          <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                          <div className="text-sm text-emirates-navy font-medium">
                            {testimonials[currentTestimonial].company}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{testimonials[currentTestimonial].location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <div className="bg-emirates-emerald/10 rounded-lg p-6">
                        <div className="text-3xl font-bold text-emirates-emerald mb-2">
                          {testimonials[currentTestimonial].results}
                        </div>
                        <div className="text-sm text-muted-foreground">Business Impact</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex justify-center space-x-2 p-4 bg-muted/30">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-emirates-navy" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UAE Compliance Section */}
      <section
        id="compliance"
        className="py-20 bg-gradient-to-br from-emirates-navy/5 via-emirates-emerald/5 to-emirates-gold/5"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">100% UAE Compliant & Secure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up to meet UAE's stringent data protection, financial regulations, and cultural
              requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-emirates-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emirates-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ DIFC Data Protection Law</li>
                  <li>✓ ADGM Data Protection Regulations</li>
                  <li>✓ UAE Central Bank Guidelines</li>
                  <li>✓ UAE Corporate Tax Compliance</li>
                  <li>✓ Emiratization Reporting</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-emirates-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="h-8 w-8 text-emirates-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cultural Intelligence</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Native Arabic Language Support</li>
                  <li>✓ RTL (Right-to-Left) Interface</li>
                  <li>✓ Islamic Calendar Integration</li>
                  <li>✓ Ramadan Business Patterns</li>
                  <li>✓ UAE Cultural Holidays</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-emirates-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-emirates-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Sovereignty</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ UAE-based Data Centers</li>
                  <li>✓ Local Data Processing</li>
                  <li>✓ 99.9% Uptime SLA</li>
                  <li>✓ Disaster Recovery in UAE</li>
                  <li>✓ 24/7 Local Support</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emirates-navy to-emirates-emerald text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1600 400" className="w-full h-full object-cover opacity-20">
            {/* UAE Flag inspired background */}
            <rect x="0" y="0" width="400" height="400" fill="#C8102E" />
            <rect x="400" y="0" width="1200" height="133" fill="#00732F" />
            <rect x="400" y="133" width="1200" height="134" fill="white" />
            <rect x="400" y="267" width="1200" height="133" fill="#000000" />

            {/* Abstract business elements */}
            <circle cx="1200" cy="100" r="50" fill="white" opacity="0.3" />
            <rect x="1100" y="200" width="80" height="100" fill="white" opacity="0.2" />
            <polygon points="1300,150 1350,200 1300,250 1250,200" fill="white" opacity="0.3" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Join 500+ UAE Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Don't let your competitors gain the advantage. Get the UAE market insights that drive real business
              growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-emirates-navy hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Book UAE Expert Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emirates-navy"
              >
                <LineChart className="h-5 w-5 mr-2" />
                View Live Dashboard
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>UAE expert onboarding</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-48 h-8">
                  <img
                    src="/emirates-analytics-logo.svg"
                    alt="EmiratesAnalytics Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The UAE's most trusted analytics platform. Empowering Emirates businesses with intelligent insights
                since 2020.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="bg-emirates-emerald/10 text-emirates-emerald">
                  🇦🇪 Made in UAE
                </Badge>
                <Badge variant="secondary" className="bg-emirates-gold/10 text-emirates-gold">
                  DIFC Certified
                </Badge>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  📧
                </Button>
                <Button variant="ghost" size="icon">
                  📱
                </Button>
                <Button variant="ghost" size="icon">
                  💼
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">UAE Locations</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Dubai - DIFC</li>
                <li>Abu Dhabi - ADGM</li>
                <li>Sharjah - SAIF Zone</li>
                <li>Ajman - Free Zone</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Financial Services</li>
                <li>Retail & E-commerce</li>
                <li>Healthcare</li>
                <li>Construction</li>
                <li>Education</li>
                <li>Government</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>24/7 UAE Support</li>
                <li>Arabic Documentation</li>
                <li>DIFC Compliance Guide</li>
                <li>UAE Tax Reporting</li>
                <li>Emiratization Tools</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 EmiratesAnalytics.me. Licensed in UAE. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                <Languages className="h-4 w-4 mr-2" />
                العربية
              </Button>
              <span className="text-muted-foreground">|</span>
              <Button variant="ghost" size="sm">
                English
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
