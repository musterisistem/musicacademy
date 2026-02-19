
export async function GET(request: Request) {
    const baseUrl = new URL(request.url).origin;

    const sitemaps = [
        `${baseUrl}/sitemap-pages.xml`,
        `${baseUrl}/sitemap-haberler.xml`,
        `${baseUrl}/sitemap-etiketler.xml`,
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
            .map((url) => {
                return `
    <sitemap>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  `;
            })
            .join('')}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
