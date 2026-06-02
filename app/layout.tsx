import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1A0B',
}

export const metadata: Metadata = {
  title: {
    default: 'PNW Simulators — Mobile Golf Simulator Events in Seattle',
    template: '%s | PNW Simulators',
  },
  description:
    'PNW Simulators brings a professional mobile golf simulator to your event in Seattle and the Pacific Northwest. Perfect for corporate events, weddings, birthdays, and more.',
  keywords: [
    'golf simulator rental',
    'mobile golf simulator Seattle',
    'golf simulator event',
    'Pacific Northwest golf event',
    'corporate event entertainment Seattle',
    'wedding entertainment Seattle',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pnwsimulators.com',
    siteName: 'PNW Simulators',
    title: 'PNW Simulators — Mobile Golf Simulator Events',
    description: 'Mobile golf simulator experiences for events across the Pacific Northwest.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNW Simulators — Mobile Golf Simulator Events',
    description: 'Mobile golf simulator experiences for events across the Pacific Northwest.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
