import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises';

const locales = ['en', 'es'] as const;

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale');

  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  const filePath = path.resolve(process.cwd(), `./messages/${locale}.json`);
  const file = await fs.readFile(filePath, 'utf8');
  const messages = JSON.parse(file);

  return {
    locale, // ✅ esta línea es necesaria para evitar el warning
    messages
  };
});
