import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://elenacekicmuzikakademi.com';

    // Ana rotalar
    const routes = [
        '',
        '/hakkimizda',
        '/basinda',
        '/egitim-alanlari/piyano',
        '/etkinlikler',
        '/basvurular',
        '/genc-yildizlar/galeri',
        '/genc-yildizlar/juri',
        '/genc-yildizlar/sanatcilar',
        '/video-galeri',
        '/foto-galeri',
        '/iletisim',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    return [...routes];
}
