import { seoTags } from '@/data/seo-tags';
import { generateSitemapXml } from '@/lib/sitemap-helper';

export async function GET(request: Request) {
  const baseUrl = new URL(request.url).origin;

  const tagRoutes = seoTags.map((tag) => ({
    url: `${baseUrl}/etiket/${tag.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const xml = generateSitemapXml(tagRoutes);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
