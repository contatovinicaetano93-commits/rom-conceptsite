import type { Metadata, Viewport } from 'next'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const generalSans = localFont({
  src: [
    {
      path: '../fonts/general-sans-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ROM Concept · Maior salão de beleza do mundo · São Paulo',
  description:
    'Beleza, saúde e bem-estar em um oásis de sofisticação — mais de 300 cadeiras entre Av. Brasil e Shopping Iguatemi.',
  applicationName: 'ROM Concept',
}

export const viewport: Viewport = {
  themeColor: '#0a0908',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${generalSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans pb-24 md:pb-0">{children}</body>
    </html>
  )
}
