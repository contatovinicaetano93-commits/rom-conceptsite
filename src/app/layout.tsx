import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Fraunces, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-face',
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
      className={`${hanken.variable} ${cormorant.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background pb-24 md:pb-0">{children}</body>
    </html>
  )
}
