import React from 'react';
import type { Metadata } from 'next';
import HaberlerSayfasi from './HaberlerSayfasi';
import dbConnect from '@/lib/db';
import News, { INews } from '@/models/News';

export const metadata: Metadata = {
    title: 'Haberler ve Duyurular | Elena Çekiç Music Academy',
    description: 'Akademimizden son haberler, etkinlik duyuruları, öğrenci başarıları ve müzik dünyasından gelişmeler.',
    keywords: ['Müzik okulu haberleri', 'Elena Çekiç duyurular', 'Bursa müzik etkinlikleri', 'Akademi başarıları'],
};

// Veriyi her saniye yeniden doğrula (ISR) veya 'force-dynamic' kullan
export const revalidate = 60; // 60 saniyede bir güncelle

async function getNews() {
    await dbConnect();
    // Stringified JSON sorununu çözmek için lean() ve JSON parsing
    const news = await News.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(news));
}

export default async function Page() {
    const haberler = await getNews();
    return <HaberlerSayfasi haberler={haberler} />;
}
