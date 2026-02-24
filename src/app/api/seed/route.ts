import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';

export async function GET() {
    try {
        await dbConnect();

        // Önceki haberleri temizle (isteğe bağlı)
        await News.deleteMany({});

        // Mock veri veya boş dizi eklenebilir. Şimdilik başarılı mesajı döndürülsün.
        const haberler: any[] = [];

        if (haberler.length > 0) {
            const formattedHaberler = haberler.map((h: any) => ({
                title: h.title,
                content: h.content,
                date: h.date,
                category: h.category,
                image: h.image,
                slug: h.slug
            }));

            await News.insertMany(formattedHaberler);
        }

        return NextResponse.json({ message: 'Eski veriler temizlendi, yeni veri eklenmedi.' });
    } catch (error) {
        console.error('Seed hatası:', error);
        return NextResponse.json({ error: 'Veritabanı dondurulurken hata oluştu' }, { status: 500 });
    }
}
