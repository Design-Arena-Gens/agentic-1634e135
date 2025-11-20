import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viajes a Marte - Ficción vs Realidad',
  description: 'Explorando las misiones tripuladas a Marte: entre la ficción y la realidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
