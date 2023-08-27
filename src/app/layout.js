import Footer from './Components/Shared/Footer'
import NavBar from './Components/Shared/NavBar'
import Topappbar from './Components/Shared/Topappbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className='relative' suppressHydrationWarning={true}>
        <Topappbar />
        <div className='sticky top-0 bg-white z-40'>
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
