"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function DubaiInvestmentPage() {
  const chartRefs = {
    sectorGrowth: useRef<HTMLCanvasElement>(null),
    investment: useRef<HTMLCanvasElement>(null),
    populationGdp: useRef<HTMLCanvasElement>(null),
    realEstate: useRef<HTMLCanvasElement>(null),
    tourism: useRef<HTMLCanvasElement>(null),
    greenInvestment: useRef<HTMLCanvasElement>(null),
  };

  const sunburstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize charts after Chart.js loads
    const initializeCharts = () => {
      if (typeof window !== "undefined" && window.Chart && window.d3) {
        // Chart.js configuration
        window.Chart.defaults.color = "#ffffff";
        window.Chart.defaults.borderColor = "rgba(255, 255, 255, 0.1)";
        window.Chart.defaults.font.family =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

        const colors = {
          primary: [
            "#00d4ff",
            "#00ff88",
            "#ff006e",
            "#ffb700",
            "#8b5cf6",
            "#ec4899",
            "#10b981",
            "#f59e0b",
          ],
        };

        // 1. Sector Growth Chart
        if (chartRefs.sectorGrowth.current) {
          new window.Chart(chartRefs.sectorGrowth.current, {
            type: "bar",
            data: {
              labels: [
                "Digital Health",
                "Islamic FinTech",
                "Medical Tourism",
                "FinTech",
                "Water Tech",
                "E-Waste",
                "Cold Chain",
                "PropTech",
              ],
              datasets: [
                {
                  label: "CAGR %",
                  data: [23.54, 18.06, 14.29, 12.56, 11.2, 9.8, 8.2, 15.1],
                  backgroundColor: colors.primary.map((color) => `${color}40`),
                  borderColor: colors.primary,
                  borderWidth: 2,
                  borderRadius: 8,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  borderColor: "#00d4ff",
                  borderWidth: 1,
                  callbacks: {
                    label: (context: any) =>
                      `Growth Rate: ${context.parsed.y}% CAGR`,
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: { color: "rgba(255, 255, 255, 0.05)" },
                  ticks: {
                    callback: (value: any) => value + "%",
                  },
                },
                x: { grid: { display: false } },
              },
            },
          });
        }

        // 2. Investment Opportunities Chart
        if (chartRefs.investment.current) {
          new window.Chart(chartRefs.investment.current, {
            type: "doughnut",
            data: {
              labels: [
                "Green Fund",
                "Solar Energy",
                "Education",
                "Real Estate",
                "FinTech",
                "Healthcare",
                "Manufacturing",
                "Tourism",
              ],
              datasets: [
                {
                  data: [27.4, 13.7, 10, 8.5, 6.43, 5.11, 4.5, 3.5],
                  backgroundColor: colors.primary.map((color) => `${color}80`),
                  borderColor: colors.primary,
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "right",
                  labels: { padding: 15, font: { size: 12 } },
                },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  borderColor: "#00d4ff",
                  borderWidth: 1,
                  callbacks: {
                    label: (context: any) =>
                      context.label + ": $" + context.parsed + "B",
                  },
                },
              },
            },
          });
        }

        // 3. Population and GDP Chart
        if (chartRefs.populationGdp.current) {
          new window.Chart(chartRefs.populationGdp.current, {
            type: "line",
            data: {
              labels: [
                "2023",
                "2024",
                "2025",
                "2026",
                "2027",
                "2028",
                "2029",
                "2030",
                "2031",
                "2032",
                "2033",
              ],
              datasets: [
                {
                  label: "Population (Millions)",
                  data: [
                    3.6, 3.77, 3.94, 4.2, 4.4, 4.6, 4.8, 5.0, 5.2, 5.5, 5.8,
                  ],
                  borderColor: "#00d4ff",
                  backgroundColor: "#00d4ff20",
                  tension: 0.4,
                  yAxisID: "y",
                },
                {
                  label: "GDP (AED Trillion)",
                  data: [
                    0.429, 0.443, 0.457, 0.472, 0.487, 0.502, 0.518, 0.534,
                    0.551, 0.568, 0.586,
                  ],
                  borderColor: "#00ff88",
                  backgroundColor: "#00ff8820",
                  tension: 0.4,
                  yAxisID: "y1",
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: "index", intersect: false },
              plugins: {
                legend: { position: "top" },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  borderColor: "#00d4ff",
                  borderWidth: 1,
                },
              },
              scales: {
                y: {
                  type: "linear",
                  display: true,
                  position: "left",
                  grid: { color: "rgba(255, 255, 255, 0.05)" },
                  title: { display: true, text: "Population (Millions)" },
                },
                y1: {
                  type: "linear",
                  display: true,
                  position: "right",
                  grid: { drawOnChartArea: false },
                  title: { display: true, text: "GDP (AED Trillion)" },
                },
                x: { grid: { color: "rgba(255, 255, 255, 0.05)" } },
              },
            },
          });
        }

        // 4. Real Estate Chart
        if (chartRefs.realEstate.current) {
          new window.Chart(chartRefs.realEstate.current, {
            type: "radar",
            data: {
              labels: [
                "Price Growth",
                "Rental Yield",
                "Luxury Sales",
                "Supply Gap",
                "Foreign Investment",
                "Market Liquidity",
              ],
              datasets: [
                {
                  label: "Dubai",
                  data: [20, 6.7, 85, 50, 75, 90],
                  borderColor: "#00d4ff",
                  backgroundColor: "#00d4ff30",
                  pointBackgroundColor: "#00d4ff",
                },
                {
                  label: "Global Average",
                  data: [5, 3.5, 30, 15, 40, 60],
                  borderColor: "#ff006e",
                  backgroundColor: "#ff006e30",
                  pointBackgroundColor: "#ff006e",
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" } },
              scales: {
                r: {
                  beginAtZero: true,
                  max: 100,
                  grid: { color: "rgba(255, 255, 255, 0.1)" },
                  pointLabels: { color: "#ffffff", font: { size: 12 } },
                  ticks: { color: "#888", backdropColor: "transparent" },
                },
              },
            },
          });
        }

        // 5. Tourism Chart
        if (chartRefs.tourism.current) {
          new window.Chart(chartRefs.tourism.current, {
            type: "bar",
            data: {
              labels: ["2021", "2022", "2023", "2024", "2025E", "2026E"],
              datasets: [
                {
                  label: "Visitors (Millions)",
                  data: [7.28, 14.36, 17.15, 18.72, 22, 25],
                  backgroundColor: "#00d4ff40",
                  borderColor: "#00d4ff",
                  borderWidth: 2,
                  borderRadius: 8,
                  yAxisID: "y",
                },
                {
                  label: "Revenue (AED Billions)",
                  data: [45, 110, 150, 186, 224, 255],
                  type: "line",
                  borderColor: "#00ff88",
                  backgroundColor: "#00ff8820",
                  tension: 0.4,
                  yAxisID: "y1",
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" } },
              scales: {
                y: {
                  type: "linear",
                  display: true,
                  position: "left",
                  grid: { color: "rgba(255, 255, 255, 0.05)" },
                  title: { display: true, text: "Visitors (Millions)" },
                },
                y1: {
                  type: "linear",
                  display: true,
                  position: "right",
                  grid: { drawOnChartArea: false },
                  title: { display: true, text: "Revenue (AED Billions)" },
                },
                x: { grid: { display: false } },
              },
            },
          });
        }

        // 6. Green Investment Chart
        if (chartRefs.greenInvestment.current) {
          new window.Chart(chartRefs.greenInvestment.current, {
            type: "polarArea",
            data: {
              labels: [
                "Solar Energy",
                "Hydrogen",
                "Water Tech",
                "Waste-to-Energy",
                "Green Buildings",
                "Carbon Capture",
              ],
              datasets: [
                {
                  data: [50, 10, 8, 7, 15, 10],
                  backgroundColor: [
                    "#00d4ff60",
                    "#00ff8860",
                    "#ff006e60",
                    "#ffb70060",
                    "#8b5cf660",
                    "#ec489960",
                  ],
                  borderColor: [
                    "#00d4ff",
                    "#00ff88",
                    "#ff006e",
                    "#ffb700",
                    "#8b5cf6",
                    "#ec4899",
                  ],
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "right" },
                tooltip: {
                  callbacks: {
                    label: (context: any) =>
                      context.label + ": " + context.parsed + "% of Green Fund",
                  },
                },
              },
              scales: {
                r: {
                  grid: { color: "rgba(255, 255, 255, 0.1)" },
                  ticks: { display: false },
                },
              },
            },
          });
        }

        // D3.js Sunburst Chart
        if (sunburstRef.current && window.d3) {
          const width = 900;
          const height = 600;
          const radius = Math.min(width, height) / 2;

          const svg = window.d3
            .select(sunburstRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

          const color = window.d3
            .scaleOrdinal()
            .range([
              "#00d4ff",
              "#00ff88",
              "#ff006e",
              "#ffb700",
              "#8b5cf6",
              "#ec4899",
              "#10b981",
              "#f59e0b",
            ]);

          const partition = window.d3.partition().size([2 * Math.PI, radius]);

          const arc = window.d3
            .arc()
            .startAngle((d: any) => d.x0)
            .endAngle((d: any) => d.x1)
            .innerRadius((d: any) => d.y0)
            .outerRadius((d: any) => d.y1);

          const ecosystemData = {
            name: "Dubai Investment",
            children: [
              {
                name: "Technology",
                value: 15000,
                children: [
                  { name: "FinTech", value: 3560 },
                  { name: "Islamic FinTech", value: 2500 },
                  { name: "AI & Smart City", value: 1900 },
                  { name: "PropTech", value: 1500 },
                  { name: "Digital Health", value: 5110 },
                ],
              },
              {
                name: "Sustainability",
                value: 35000,
                children: [
                  { name: "Solar Energy", value: 13700 },
                  { name: "Hydrogen", value: 10000 },
                  { name: "Water Tech", value: 3000 },
                  { name: "Waste Management", value: 2000 },
                  { name: "Green Buildings", value: 4000 },
                  { name: "Carbon Capture", value: 2300 },
                ],
              },
              {
                name: "Real Estate",
                value: 20000,
                children: [
                  { name: "Luxury Residential", value: 8000 },
                  { name: "Commercial", value: 5000 },
                  { name: "Hospitality", value: 4000 },
                  { name: "Industrial", value: 3000 },
                ],
              },
              {
                name: "Healthcare",
                value: 12000,
                children: [
                  { name: "Medical Tourism", value: 3000 },
                  { name: "Digital Health", value: 5110 },
                  { name: "Pharmaceuticals", value: 2600 },
                  { name: "Medical Devices", value: 1290 },
                ],
              },
              {
                name: "Tourism & Retail",
                value: 18000,
                children: [
                  { name: "Luxury Tourism", value: 6000 },
                  { name: "Cultural Tourism", value: 3000 },
                  { name: "E-commerce", value: 5000 },
                  { name: "Experiential Retail", value: 4000 },
                ],
              },
            ],
          };

          const root = window.d3
            .hierarchy(ecosystemData)
            .sum((d: any) => d.value)
            .sort((a: any, b: any) => b.value - a.value);

          const partitionData = partition(root);

          svg
            .selectAll("path")
            .data(partitionData.descendants())
            .enter()
            .append("path")
            .attr("d", arc)
            .style("fill", (d: any) => color(d.data.name))
            .style("opacity", 0.8)
            .style("stroke", "#000")
            .style("stroke-width", 2)
            .style("cursor", "pointer");

          svg
            .append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .style("font-size", "20px")
            .style("font-weight", "bold")
            .style("fill", "#fff")
            .text("$100B+");

          svg
            .append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "1.5em")
            .style("font-size", "14px")
            .style("fill", "#888")
            .text("Total Investment");
        }
      }
    };

    // Wait for scripts to load
    const timer = setTimeout(initializeCharts, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"
        strategy="beforeInteractive"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <header className="relative overflow-hidden py-12 md:py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Dubai Investment Opportunities 2025-2026
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Gateway to a $32 Trillion Economy
            </p>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-4 z-50 mx-6 mb-12">
          <Card className="bg-black/20 backdrop-blur-lg border-white/10">
            <CardContent className="p-4">
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                <a
                  href="#overview"
                  className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Overview
                </a>
                <a
                  href="#d33-agenda"
                  className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  D33 Agenda
                </a>
                <a
                  href="#sectors"
                  className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Key Sectors
                </a>
                <a
                  href="#data-insights"
                  className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Data Insights
                </a>
                <a
                  href="#investment-guide"
                  className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Investment Guide
                </a>
              </div>
            </CardContent>
          </Card>
        </nav>

        <main className="container mx-auto px-6">
          {/* Key Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "$32T", label: "D33 Target Economy" },
              { value: "9.9%", label: "Population Growth Rate" },
              { value: "6,700", label: "HNW Immigrants 2024" },
              { value: "$100B+", label: "Gov Investment" },
            ].map((metric, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Article Sections */}
          <article className="space-y-12">
            <section id="overview">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Dubai's Investment Revolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Dubai is entering a new era of explosive growth. With GDP
                    climbing steadily at{" "}
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      3.2% annually
                    </span>{" "}
                    and the ambitious D33 Economic Agenda targeting a{" "}
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      AED 32 trillion economy by 2033
                    </span>
                    , the emirate is quickly transforming into one of the
                    world's most attractive destinations for investors.
                  </p>

                  <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                        Why Dubai is the Investment Capital of the Future
                      </h4>
                      <p className="text-gray-300">
                        As of May 2025, Dubai welcomed 3.94 million residents
                        and attracted 6,700 high-net-worth individuals in
                        2024—more than any other global city. This population
                        boom, combined with double-digit expansion across tech,
                        healthcare, sustainability, and manufacturing, is no
                        accident.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </section>

            <section id="d33-agenda">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Trillion-Dirham Vision: The D33 Economic Agenda
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base md:text-lg text-gray-300 text-lg">
                    Dubai's D33 Agenda is rewriting the rules of urban
                    development. By 2033, the plan aims to:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      Double foreign direct investment (FDI) from AED 32B to AED
                      60B annually
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      Add AED 58B in manufacturing value
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      Generate AED 100B annually from digital transformation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="sectors">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    High-Growth Investment Sectors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
                      Green Energy and Net Zero 2050: A $27 Billion Opportunity
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Dubai's climate leadership is creating a booming green
                      economy:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        AED 100B Dubai Green Fund for sustainable projects
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        Mohammed bin Rashid Solar Park: 3,660 MW live, 1,000 MW
                        under construction
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        World's lowest solar tariff: $1.62/MWh
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
                      Real Estate & Education Boom
                    </h3>
                    <p className="text-gray-300 mb-4">
                      With 1,000 new residents arriving daily, Dubai is
                      projected to exceed 4.3 million people by 2026:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        20% sales price increase in 2024
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        6.7% average rental yields
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        435 transactions over $10M in 2024
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
                      FinTech & Smart City Infrastructure
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Dubai's digital economy is thriving:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        FinTech sector: $3.56B in 2025, growing at 12.56% CAGR
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        Islamic FinTech: $9.3B → $35.1B by 2031 (+18.06% CAGR)
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        SaaS, PropTech, and travel tech are expanding rapidly
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </article>

          {/* Interactive Charts Section */}
          <section id="data-insights" className="mt-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Data Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Sector Growth Projections 2025-2030
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-96">
                    <canvas ref={chartRefs.sectorGrowth}></canvas>
                  </div>
                  <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                    <p className="text-sm text-gray-300">
                      <strong className="text-cyan-400">Key Insight:</strong>{" "}
                      Digital Health leads with 23.54% CAGR, followed by Islamic
                      FinTech at 18.06%.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Investment Opportunities by Sector
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-96">
                    <canvas ref={chartRefs.investment}></canvas>
                  </div>
                  <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                    <p className="text-sm text-gray-300">
                      <strong className="text-cyan-400">Key Insight:</strong>{" "}
                      Green Economy leads with $27.4B allocation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Dubai Population & GDP Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-96">
                    <canvas ref={chartRefs.populationGdp}></canvas>
                  </div>
                  <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                    <p className="text-sm text-gray-300">
                      <strong className="text-cyan-400">Key Insight:</strong>{" "}
                      Population expected to reach 5.8M by 2033.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Real Estate Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-96">
                    <canvas ref={chartRefs.realEstate}></canvas>
                  </div>
                  <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                    <p className="text-sm text-gray-300">
                      <strong className="text-cyan-400">Key Insight:</strong>{" "}
                      Prime locations show 20% annual appreciation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/20 backdrop-blur-lg border-white/10 mb-12">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Dubai Investment Ecosystem Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  ref={sunburstRef}
                  className="w-full h-[600px] flex justify-center items-center"
                ></div>
                <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                  <p className="text-sm text-gray-300">
                    <strong className="text-cyan-400">Interactive:</strong>{" "}
                    Explore sectors and investment opportunities. Size
                    represents market value.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Tourism Growth & Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-96">
                    <canvas ref={chartRefs.tourism}></canvas>
                  </div>
                  <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                    <p className="text-sm text-gray-300">
                      <strong className="text-cyan-400">Key Insight:</strong>{" "}
                      Tourism contributes AED 186B to economy.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-lg border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Green Investment Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-96">
                    <canvas ref={chartRefs.greenInvestment}></canvas>
                  </div>
                  <div className="mt-4 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded">
                    <p className="text-sm text-gray-300">
                      <strong className="text-cyan-400">Key Insight:</strong>{" "}
                      Solar energy dominates with 50% of green investments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Investment Guide */}
          <section id="investment-guide" className="mt-16">
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Investment Guide: Your Path to Dubai's Future
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                      Final Takeaway: Dubai is the World's Investment Launchpad
                    </h4>
                    <p className="text-gray-300">
                      Every sector of Dubai's economy is firing on all
                      cylinders. With a pro-growth government, robust regulatory
                      frameworks, and visionary infrastructure, 2025-2026 is the
                      time to invest.
                    </p>
                  </CardContent>
                </Card>

                <div>
                  <p className="text-gray-300 mb-4">
                    Early movers will benefit from:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      <strong>First-mover advantage</strong> in emerging sectors
                      like hydrogen economy and vertical farming
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      <strong>High ROI</strong> ranging from 15-30% across real
                      estate and tech sectors
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      <strong>Strategic government alignment</strong> via D33
                      and Net Zero 2050 initiatives
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      <strong>Tax advantages</strong> with competitive 9%
                      corporate tax and free zone benefits
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="mt-16 mb-16">
            <Card className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30">
              <CardContent className="p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Make Data-Driven Investment Decisions in Dubai
                </h2>
                <p className="text-base md:text-lg text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                  Partner with our expert data analytics team to unlock
                  insights, identify opportunities, and maximize ROI in Dubai's
                  booming economy. We transform complex market data into
                  actionable investment strategies.
                </p>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg">
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>
          </section>
          {/* Mobile Sticky CTA */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 text-lg font-semibold shadow-2xl">
              Get Free Investment Analysis
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
