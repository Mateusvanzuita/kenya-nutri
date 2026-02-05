import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kenya Curcio - Nutricionista Esportiva',
  description: 'Nutricionista especializada em nutrição esportiva, emagrecimento e estilo de vida saudável. Consultoria online e presencial em São José, SC.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
  icons: {
      icon: 'https://i.imgur.com/VFBP5qt.jpeg',
      shortcut: 'https://i.imgur.com/VFBP5qt.jpeg',
      apple: 'https://i.imgur.com/VFBP5qt.jpeg',
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
