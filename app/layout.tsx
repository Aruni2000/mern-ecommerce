import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';




const poppins = Poppins({ subsets: ['latin'], weight:['500','700'] })

export const metadata: Metadata = {
  title: 'SpicesCeylon',
  description: 'Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {

  return (
    <html lang="en">
      <body className={`${poppins.className}
      text-yellow-500`}>
        <Toaster toastOptions={{
          style: {
            background: "rgb(51 65 85)",
            color: "#fff",
          },
        }}/>
        <CartProvider>
        <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <main className='flex-grow'> {children} </main>
        <Footer/>
        </div>
        </CartProvider>
       
        </body>
    </html>
  )
}
