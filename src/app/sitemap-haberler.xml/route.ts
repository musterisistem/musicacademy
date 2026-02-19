import { generateSitemapXml } from '@/lib/sitemap-helper';
import dbConnect from '@/lib/db';
import News from '@/models/News';

export async function GET(request: Request) {
    const baseUrl = new URL(request.url).origin;

    await dbConnect();
    const haberler = await News.find({}, 'slug updatedAt').lean();
    
    const newsRoutes = haberler.map((haber: any) => ({
        url: `${baseUrl}/haberler/${haber.slug}`,
        lastModified: haber.updatedAt || new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    const xml = generateSitemapXml(newsRoutes);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
