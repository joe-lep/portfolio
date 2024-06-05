import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer/Footer';
import { DarkModeProvider } from '@/components/dark-mode';
import SectionNavigationProvider from '@/components/section-navigation/SectionNavigationProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <SectionNavigationProvider>
            <TopBar />
            <div className="shadow-4xl mx-auto flex-1 md:container">
              {children}
            </div>
            <Footer />
          </SectionNavigationProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
