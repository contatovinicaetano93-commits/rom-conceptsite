import type { Metadata, Viewport } from 'next'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display-face',
  display: 'swap',
})

const generalSans = localFont({
  src: [
    {
      path: '../fonts/general-sans/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sans-face',
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
      className={`${generalSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className={`${generalSans.className} min-h-full bg-background pb-24 md:pb-0`}>
        {children}
      </body>
    </html>
  )
}
