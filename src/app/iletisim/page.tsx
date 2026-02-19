import React from 'react';
import type { Metadata } from 'next';
import IletisimSayfasi from './IletisimSayfasi';

export const metadata: Metadata = {
    title: 'İletişim | Elena Çekiç Music Academy',
    description: 'Bursa Nilüfer\'deki müzik akademimizle iletişime geçin. Adres, telefon ve yol tarifi. Ücretsiz deneme dersi için randevu oluşturun.',
    keywords: ['Elena Çekiç iletişim', 'Bursa müzik kursu telefon', 'Nilüfer müzik kursu nerede', 'Müzik dersi kayıt'],
};

export default function Page() {
    return <IletisimSayfasi />;
}
