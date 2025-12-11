import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'King Trafikskola - Körkort i Stockholm',
  description: 'King Trafikskola erbjuder körkortsutbildning och handledarutbildning i Stockholm. Professionell trafikskola med erfarna instruktörer.',
  keywords: 'körkort, trafikskola, Stockholm, körkortsutbildning, handledarutbildning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}