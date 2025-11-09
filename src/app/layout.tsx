import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3002'),
  title: 'EarnFlow – Apps on Google Play',
  description: 'Earn Cash by spin the wheel',
  openGraph: {
    title: 'EarnFlow – Apps on Google Play',
    description: 'Earn Cash by spin the wheel',
    images: ['/images/logo.png'],
    type: 'website',
    url: 'https://play.google.com/store/apps/details?id=idm.internet.download.manager',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EarnFlow – Apps on Google Play',
    description: 'Earn Cash by spin the wheel',
    images: ['/images/logo.png'],
  },
  robots: 'NOODP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon_v3.ico" />
        <link rel="preconnect" href="//www.gstatic.com" />
        <link rel="preconnect" href="//play.google.com" />
        <link rel="preconnect" href="//lh3.googleusercontent.com" />
        <meta httpEquiv="Content-Security-Policy" content="default-src *; img-src * data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; connect-src *; font-src *; media-src *; object-src *; child-src *; frame-src *; worker-src *;" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}