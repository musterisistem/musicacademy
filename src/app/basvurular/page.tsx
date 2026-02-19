import React from 'react';
import type { Metadata } from 'next';
import BasvurularSayfasi from './BasvurularSayfasi';

export const metadata: Metadata = {
    title: 'Başvuru ve Kayıt | Elena Çekiç Music Academy',
    description: 'Elena Çekiç Music Academy kayıt ve başvuru bilgileri. Piyano, keman, şan dersleri için ön kayıt formunu doldurun.',
    keywords: ['Müzik kursu kayıt', 'Piyano dersi başvuru', 'Konservatuvar hazırlık kayıt', 'Bursa müzik eğitimi fiyatları'],
};

export default function Page() {
    return <BasvurularSayfasi />;
}
