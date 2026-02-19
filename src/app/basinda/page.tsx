import React from 'react';
import type { Metadata } from 'next';
import BasindaSayfasi from './BasindaSayfasi';

export const metadata: Metadata = {
    title: 'Basında Biz | Elena Çekiç Music Academy',
    description: 'Elena Çekiç Music Academy\'nin ulusal ve yerel basındaki yansımaları. NTV, gazeteler ve dergilerde yayınlanan haberlerimiz ve başarılarımız.',
    keywords: ['Elena Çekiç basında', 'Bursa müzik kursu haberleri', 'NTV Elena Çekiç', 'Genç yetenekler haberleri'],
};

export default function Page() {
    return <BasindaSayfasi />;
}
