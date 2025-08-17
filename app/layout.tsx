import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// Load Poppins (adjust weights as needed)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // you can add/remove weights
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Hunehar',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head />
      <body className="font-sans">{children}</body>
    </html>
  )
}
