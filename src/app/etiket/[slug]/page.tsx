import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { seoTags } from '@/data/seo-tags';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Etiket.module.css';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const tag = seoTags.find((t) => t.slug === slug);

    if (!tag) {
        return {
            title: 'Etiket Bulunamadı | Elena Çekiç Music Academy',
        };
    }

    return {
        title: `${tag.keyword} | Elena Çekiç Music Academy`,
        description: `Elena Çekiç Music Academy'de ${tag.keyword} hakkında detaylı bilgi. Bursa'nın önde gelen müzik okulu.`,
        keywords: [tag.keyword, 'Bursa müzik kursu', 'Elena Çekiç', 'Müzik eğitimi'],
        alternates: {
            canonical: `/etiket/${slug}`,
        },
        openGraph: {
            title: `${tag.keyword} | Elena Çekiç Music Academy`,
            description: `Elena Çekiç Music Academy'de ${tag.keyword} hakkında detaylı bilgi.`,
        }
    };
}

export default async function EtiketPage({ params }: Props) {
    const { slug } = await params;
    const tag = seoTags.find((t) => t.slug === slug);

    if (!tag) return notFound();

    return (
        <div className={styles.container}>
            <InnerPageHeader
                title={tag.keyword.toUpperCase()}
                breadcrumb="Etiketler"
                description={`"${tag.keyword}" ile ilgili içeriklerimizi aşağıda bulabilirsiniz.`}
            />

            <section className={styles.contentSection}>
                <div className={styles.card}>
                    <h2>{tag.keyword}</h2>
                    <p>
                        Elena Çekiç Music Academy olarak, <strong>{tag.keyword}</strong> alanında profesyonel eğitim ve hizmet sunmaktayız.
                        Siz de müziğin büyülü dünyasına adım atmak, yeteneğinizi keşfetmek veya geliştirmek istiyorsanız doğru yerdesiniz.
                    </p>
                    <p>
                        Aşağıdaki bağlantıyı kullanarak ilgili sayfamıza gidebilir ve detaylı bilgi alabilirsiniz.
                    </p>

                    <Link href={tag.targetUrl} className={styles.button}>
                        İlgili Sayfaya Git
                    </Link>
                </div>
            </section>
        </div>
    );
}
