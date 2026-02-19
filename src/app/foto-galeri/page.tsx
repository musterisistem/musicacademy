import React from 'react';
import type { Metadata } from 'next';
import FotoGaleriSayfasi from './FotoGaleriSayfasi';

export const metadata: Metadata = {
    title: 'Foto Galeri | Elena Çekiç Music Academy',
    description: 'Müzik akademimizden kareler, konser fotoğrafları, öğrenci performansları ve etkinliklerimizden görüntüler.',
    keywords: ['Müzik okulu fotoğrafları', 'Konser galeri', 'Öğrenci resitali foto', 'Elena Çekiç galeri'],
};

export default function Page() {
    return <FotoGaleriSayfasi />;
}
