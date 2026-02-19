import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';
import { haberler } from '@/data/haberler';

export async function GET() {
    try {
        await dbConnect();

        // Mevcut haberleri temizle
        await News.deleteMany({});

        // Statik veriyi DB formatına uygun hale getir ve ekle
        // Tarih formatı '01 Mart 2026' string olarak geliyor, bunu Date objesine çevirmiyoruz
        // çünkü modelde string olarak tuttuk. İlerde Date'e çevrilebilir.

        // Haberlerin category alanını kontrol et
        const newsData = haberler.map(h => ({
            ...h,
            // Modelde required olan alanlar zaten datada var.
        }));

        await News.insertMany(newsData);

        return NextResponse.json({
            success: true,
            message: 'Veritabanı başarıyla tohumlandı (seeded).',
            count: newsData.length
        });

    } catch (error: any) {
        console.error('Seed Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
