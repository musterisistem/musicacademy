import { notFound } from 'next/navigation';
import Link from 'next/link';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './HaberDetay.module.css';
import { Metadata } from 'next';
import dbConnect from '@/lib/db';
import News from '@/models/News';

async function getNewsItem(slug: string) {
    await dbConnect();
    const news = await News.findOne({ slug }).lean();
    if (!news) return null;
    return JSON.parse(JSON.stringify(news));
}

async function getRecentNews(excludeSlug: string) {
    await dbConnect();
    const news = await News.find({ slug: { $ne: excludeSlug } })
        .sort({ createdAt: -1 })
        .limit(3)
        .lean();
    return JSON.parse(JSON.stringify(news));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const haber = await getNewsItem(slug);

    if (!haber) {
        return {
            title: 'Haber Bulunamadı | Elena Çekiç Music Academy'
        };
    }

    return {
        title: `${haber.title} | Elena Çekiç Music Academy`,
        description: haber.excerpt,
        openGraph: {
            title: haber.title,
            description: haber.excerpt,
            images: [haber.image],
            type: 'article',
            publishedTime: haber.createdAt || new Date().toISOString(),
        },
        twitter: {
            card: 'summary_large_image',
            title: haber.title,
            description: haber.excerpt,
            images: [haber.image],
        }
    };
}

export default async function HaberDetayPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const haber = await getNewsItem(slug);

    if (!haber) return notFound();

    const digerHaberler = await getRecentNews(slug);

    return (
        <div className={styles.page}>
            <InnerPageHeader
                title={haber.category.toUpperCase()}
                breadcrumb={haber.title}
                description={haber.date}
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.layout}>
                        {/* Ana İçerik */}
                        <article className={styles.article}>
                            <div className={styles.heroImage}>
                                <img src={haber.image} alt={haber.title} className={styles.image} />
                                <span className={styles.category}>{haber.category}</span>
                            </div>

                            <div className={styles.articleBody}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{haber.date}</span>
                                </div>
                                <h1 className={styles.title}>{haber.title}</h1>
                                <p className={styles.lead}>{haber.excerpt}</p>
                                <div className={styles.divider} />
                                {haber.content.map((para: string, i: number) => (
                                    <p key={i} className={styles.paragraph}>{para}</p>
                                ))}
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarBlock}>
                                <h3 className={styles.sidebarTitle}>Diğer Haberler</h3>
                                <div className={styles.sidebarList}>
                                    {digerHaberler.map((h: any) => (
                                        <Link key={h.slug} href={`/haberler/${h.slug}`} className={styles.sidebarItem}>
                                            <img src={h.image} alt={h.title} className={styles.sidebarImg} />
                                            <div className={styles.sidebarInfo}>
                                                <span className={styles.sidebarCat}>{h.category}</span>
                                                <p className={styles.sidebarItemTitle}>{h.title}</p>
                                                <span className={styles.sidebarDate}>{h.date}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/haberler" className={styles.allNewsBtn}>
                                Tüm Haberleri Gör →
                            </Link>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
