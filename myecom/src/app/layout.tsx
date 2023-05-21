

import './globals.css'
import Navbar from '../../components/Navbar'
import { ThemeProvider } from "next-themes" 



export const metadata = {
  title: 'My ecommerce FD',
  description: 'Eccommerce finnancial director',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      
        <Navbar />
        {children}
   
      </body>
    </html>
  )
}
