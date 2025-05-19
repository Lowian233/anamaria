import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import BackgroundOrbs from '../components/BackgroundOrbs';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  
  try {
    const messages = await getMessages({ locale });

    return (
      <html lang={locale}>
        <body className={`${inter.className} relative overflow-x-hidden`}>
          <div className="fixed inset-0 -z-10">
            <BackgroundOrbs />
          </div>
          <NextIntlClientProvider 
            locale={locale}
            messages={messages}
            timeZone="Europe/Madrid"
          >         
            <div className="min-h-screen">
              <Navbar />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    notFound();
  }
}
