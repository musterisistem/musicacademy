import React from 'react';
import type { Metadata } from 'next';
import EtkinliklerSayfasi from './EtkinliklerSayfasi';

export const metadata: Metadata = {
    title: 'Genç Yıldızlar Müzik Festivali | Elena Çekiç Music Academy',
    description: 'Elena Çekiç Music Academy tarafından düzenlenen uluslararası Genç Yıldızlar Müzik Festivali detayları.',
    keywords: ['Bursa müzik festivali', 'Genç Yıldızlar', 'Elena Çekiç konserleri', 'Müzik etkinlikleri Bursa', 'Piyano resitali'],
};

export default function Page() {
    return <EtkinliklerSayfasi />;
}
