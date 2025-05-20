import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import BackgroundOrbs from '../components/BackgroundOrbs';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

// ✅ Aquí usamos tipo explícito con tipo genérico compatible
type LayoutProps = {
  children: React.ReactNode;
  params: any; // Forzamos para que Next no aplique el tipo roto del plugin
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const locale = params.locale;

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch {
    notFound();
  }

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
}
