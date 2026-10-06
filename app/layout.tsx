import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khalil Etana — Industrial Engineer & Full-Stack Developer',
  description: 'Portfolio of Khalil Etana, Industrial Engineer and Full-Stack Web Developer.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
