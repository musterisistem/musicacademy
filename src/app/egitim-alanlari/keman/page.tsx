import React from 'react';
import type { Metadata } from 'next';
import KemanSayfasi from './KemanSayfasi';

export const metadata: Metadata = {
    title: 'Keman ve Yaylılar | Elena Çekiç Music Academy',
    description: 'Profesyonel keman eğitimi. Yay teknikleri, beden duruşu ve müzikalite odaklı dersler. Bursa keman kursu.',
    keywords: ['Keman dersi Bursa', 'Yaylı çalgılar eğitimi', 'Viyolonsel kursu', 'Elena Çekiç keman'],
};

export default function Page() {
    return <KemanSayfasi />;
}
