import '../styles/globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Content from '@/components/Content';
import FeatureSection from  '@/components/FeatureSection';
import ContactForm from '@/components/ContactForm';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My ecommerce FD',
  description: 'My ecommerce financial Director',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeroSection />
        <Content />
        <FeatureSection />
        {/* <ContactForm /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
