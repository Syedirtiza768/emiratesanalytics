import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dubai Investment Opportunities 2025-2026: Gateway to $32 Trillion Economy | Emirates Analytics",
  description:
    "Discover Dubai's explosive investment opportunities with 23.54% CAGR in digital health, $100B+ government backing, and access to emerging markets. Interactive data visualization and comprehensive analysis of D33 Economic Agenda.",
  keywords:
    "Dubai investment opportunities 2025, Dubai D33 economic agenda, Dubai real estate investment, Dubai green economy, Dubai fintech sector, Dubai medical tourism, Dubai investment guide, UAE investment opportunities",
  openGraph: {
    title: "Dubai Investment Opportunities 2025-2026: Gateway to $32 Trillion Economy",
    description:
      "Discover Dubai's explosive investment opportunities with 23.54% CAGR in digital health, $100B+ government backing, and access to emerging markets.",
    type: "article",
    publishedTime: "2025-05-30T09:00:00+00:00",
    modifiedTime: "2025-05-30T09:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Investment Opportunities 2025-2026: Gateway to $32 Trillion Economy",
    description:
      "Discover Dubai's explosive investment opportunities with 23.54% CAGR in digital health, $100B+ government backing.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DubaiInvestmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
