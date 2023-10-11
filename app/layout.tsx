import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Navbar from '@/components/navbar';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
   title: 'Glass Maestros',
   description: 'Next13 app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className={`w-[100%] h-full mx-auto  ${roboto.className}`}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
