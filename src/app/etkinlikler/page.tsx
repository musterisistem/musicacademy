import React from 'react';
import type { Metadata } from 'next';
import EtkinliklerSayfasi from './EtkinliklerSayfasi';

export const metadata: Metadata = {
    title: 'Etkinlikler ve Festivaller | Elena Çekiç Music Academy',
    description: 'Elena Çekiç Music Academy tarafından düzenlenen uluslararası müzik festivalleri, konserler ve öğrenci etkinlikleri.',
    keywords: ['Bursa müzik festivali', 'Elena Çekiç konserleri', 'Müzik etkinlikleri Bursa', 'Piyano resitali'],
};

export default function Page() {
    return <EtkinliklerSayfasi />;
}
