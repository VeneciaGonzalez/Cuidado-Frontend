import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/shared/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cuidado Seniors',
  description: 'Cuidado Seniors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white text-indigo-950`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
//aquie en layout con el -->  <body className={'${inter.className} bg-white'}>  
//se indica que la siguiente seccion se muestra en blanco
