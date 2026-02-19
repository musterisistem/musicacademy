import HeroSlider from "@/components/home/HeroSlider";
import About from "@/components/home/About";
import Students from "@/components/home/Students";
import Education from "@/components/home/Education";
import Gallery from "@/components/home/Gallery";
import Blog from "@/components/home/Blog";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elena Çekiç Music Academy | Bursa Müzik ve Sanat Okulu',
  description: 'Bursa Nilüfer\'de piyano, keman, şan ve müzik teorisi eğitimi veren Elena Çekiç Music Academy. Uluslararası festivaller ve sertifika programları.',
  alternates: {
    canonical: 'https://elenacekic.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: 'Elena Çekiç Music Academy',
    image: 'https://elenacekic.b-cdn.net/images/logoelena.png',
    description: 'Bursa\'da profesyonel müzik eğitimi veren akademi.',
    url: 'https://elenacekic.com',
    telephone: '0534 217 06 45',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '19 Mayıs, Heybetli Sokak No:30/B',
      addressLocality: 'Nilüfer',
      addressRegion: 'Bursa',
      postalCode: '16120',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.222384, // Örnek koordinat, gerçek değerle güncellenebilir
      longitude: 28.966746
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '20:00'
      }
    ],
    sameAs: [
      'https://www.instagram.com/elenacekicmusicacademy',
      'https://www.facebook.com/elenacekicmusicacademy',
      'https://www.youtube.com/@elenacekicmusicacademy'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />
      <About />
      <Students />
      <Education />
      <Gallery />
      <Blog />
    </>
  );
}
