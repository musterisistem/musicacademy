import React from 'react';
import type { Metadata } from 'next';
import HakkimizdaSayfasi from './HakkimizdaSayfasi';

export const metadata: Metadata = {
    title: 'Hakkımızda | Elena Çekiç Music Academy',
    description: 'Elena Çekiç Music Academy, Bursa\'da 15 yılı aşkın deneyimiyle profesyonel müzik eğitimi veren, ulusal ve uluslararası başarılara sahip bir sanat okuludur.',
    keywords: ['Elena Çekiç kimdir', 'Bursa müzik okulu hakkında', 'Müzik eğitimi vizyonu', 'Piyano eğitmeni Elena Çekiç'],
};

export default function Page() {
    return <HakkimizdaSayfasi />;
}
