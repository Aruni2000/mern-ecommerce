import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/footer'

const poppins = Poppins({ subsets: ['latin'], weight:['500','700'] })

export const metadata: Metadata = {
  title: 'SpicesCeylon',
  description: 'Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}
      text-yellow-500`}>
        <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <main className='flex-grow'> {children} </main>
        <Footer/>
        </div>
        </body>
    </html>
  )
}
