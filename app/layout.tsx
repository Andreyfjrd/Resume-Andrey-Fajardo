import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CV Andrey Fajardo',
  description: 'Un poco sobre mi!'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
