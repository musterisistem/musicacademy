import React from 'react';
import type { Metadata } from 'next';
import PiyanoSayfasi from './PiyanoSayfasi';

export const metadata: Metadata = {
    title: 'Piyano Eğitimi | Elena Çekiç Music Academy',
    description: 'Bursa piyano kursu. Her yaş için profesyonel piyano eğitimi. Teknik, estetik ve duyguyu harmanlayan özel dersler.',
    keywords: ['Piyano dersi Bursa', 'Nilüfer piyano kursu', 'Elena Çekiç piyano', 'Çocuklar için piyano'],
};

export default function Page() {
    return <PiyanoSayfasi />;
}
