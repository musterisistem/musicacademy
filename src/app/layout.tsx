import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://elenacekic.com'),
  title: {
    default: 'Elena Çekiç Music Academy | Bursa Müzik Kursu - Piyano, Keman, Şan',
    template: '%s | Elena Çekiç Music Academy'
  },
  description: 'Bursa\'nın önde gelen müzik akademisi Elena Çekiç Music Academy ile piyano, keman, şan ve müzik teorisi eğitimi alın. Uluslararası sertifika programları ve konservatuvar hazırlık kursları.',
  keywords: [
    'Bursa müzik kursu', 'Piyano dersi Bursa', 'Keman kursu Bursa', 'Şan dersi',
    'Müzik akademisi', 'Elena Çekiç', 'Konservatuvar hazırlık', 'LCM sınavları',
    'Nilüfer müzik kursu', 'Çocuklar için müzik eğitimi', 'Yetişkin piyano dersi'
  ],
  authors: [{ name: 'Elena Çekiç' }],
  creator: 'Elena Çekiç Music Academy',
  publisher: 'Elena Çekiç Music Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Elena Çekiç Music Academy | Profesyonel Müzik Eğitimi',
    description: 'Bursa\'da uluslararası standartlarda müzik eğitimi. Piyano, keman ve şan dersleriyle yeteneğinizi keşfedin.',
    url: 'https://elenacekic.com',
    siteName: 'Elena Çekiç Music Academy',
    images: [
      {
        url: 'https://elenacekic.b-cdn.net/images/og-image.jpg', // Varsayılan OG image
        width: 1200,
        height: 630,
        alt: 'Elena Çekiç Music Academy',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elena Çekiç Music Academy',
    description: 'Bursa\'da profesyonel müzik eğitimi. Piyano, keman, şan dersleri.',
    images: ['https://elenacekic.b-cdn.net/images/og-image.jpg'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
