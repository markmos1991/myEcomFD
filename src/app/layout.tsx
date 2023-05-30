import '../styles/globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Content from '@/components/Content';
import FeatureSection from  '@/components/FeatureSection';
import ContactForm from '@/components/ContactForm';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <ContactForm />
        {children}
        <Footer />
      </body>
    </html>
  )
}