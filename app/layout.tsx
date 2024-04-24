import type { Metadata } from 'next';
import './globals.css';
import HtmlBody from '@/component/htmlBody';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

export const metadata: Metadata = {
  title: 'Интеллектуальный анализатор обратной связи студентов',
  description: 'Интеллектуальный анализатор обратной связи студентов от команды RealityFirst',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <HtmlBody>{children}</HtmlBody>
      </body>
    </html>
  );
}
