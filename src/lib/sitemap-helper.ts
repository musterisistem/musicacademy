export function generateSitemapXml(urls: { url: string; lastModified?: string | Date; changeFrequency?: string; priority?: number }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
      .map((url) => {
        return `
    <url>
      <loc>${url.url}</loc>
      ${url.lastModified ? `<lastmod>${new Date(url.lastModified).toISOString()}</lastmod>` : ''}
      ${url.changeFrequency ? `<changefreq>${url.changeFrequency}</changefreq>` : ''}
      ${url.priority ? `<priority>${url.priority}</priority>` : ''}
    </url>
  `;
      })
      .join('')}
</urlset>`;
}
