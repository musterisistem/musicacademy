import React from 'react';
import type { Metadata } from 'next';
import MuzikTeorisiSayfasi from './MuzikTeorisiSayfasi';

export const metadata: Metadata = {
    title: 'Müzik Teorisi ve Solfej | Elena Çekiç Music Academy',
    description: 'Müzik teorisi eğitimi, solfej dersleri ve konservatuvar hazırlık. Müziğin dilini akademik yöntemlerle öğrenin.',
    keywords: ['Müzik teorisi dersi', 'Solfej eğitimi Bursa', 'Konservatuvar hazırlık kursu', 'Müzikal işitme eğitimi'],
};

export default function Page() {
    return <MuzikTeorisiSayfasi />;
}
