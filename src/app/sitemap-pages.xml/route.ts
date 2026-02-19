import { generateSitemapXml } from '@/lib/sitemap-helper';

export async function GET(request: Request) {
    const baseUrl = new URL(request.url).origin;

    const staticRoutes = [
        '',
        '/hakkimizda',
        '/basinda',
        '/iletisim',
        '/etkinlikler',
        '/basvurular',
        '/foto-galeri',
        '/video-galeri',
        '/haberler',
        '/egitim-alanlari/piyano',
        '/egitim-alanlari/keman',
        '/egitim-alanlari/san-vokal',
        '/egitim-alanlari/muzik-teorisi',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    const xml = generateSitemapXml(staticRoutes);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
