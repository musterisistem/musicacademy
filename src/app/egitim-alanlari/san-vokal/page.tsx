import React from 'react';
import type { Metadata } from 'next';
import SanVokalSayfasi from './SanVokalSayfasi';

export const metadata: Metadata = {
    title: 'Şan ve Vokal Eğitimi | Elena Çekiç Music Academy',
    description: 'Ses eğitimi, nefes teknikleri ve sahne performansı. Profesyonel şan dersleri ile sesinizi keşfedin. Bursa şan kursu.',
    keywords: ['Şan dersi Bursa', 'Vokal koçluğu', 'Ses eğitimi', 'Konservatuvar şan hazırlık'],
};

export default function Page() {
    return <SanVokalSayfasi />;
}
