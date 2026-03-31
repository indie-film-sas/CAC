import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Córdoba Audiovisual Cluster',
  description: 'Plataforma institucional, catálogo de miembros y dashboard editorial.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
