"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Haberler.module.css';

interface Haber {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
}

interface Props {
    haberler: Haber[];
}

export default function HaberlerSayfasi({ haberler }: Props) {
    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="HABERLER"
                breadcrumb="Haberler"
                description="Elena Çekiç Music Academy'den en güncel haberler, etkinlikler ve başarı hikayeleri."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {haberler.map((haber, index) => (
                            <motion.article
                                key={haber.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className={styles.card}
                            >
                                <Link href={`/haberler/${haber.slug}`} className={styles.cardLink}>
                                    <div className={styles.imageWrapper}>
                                        <img src={haber.image} alt={haber.title} className={styles.image} />
                                        <span className={styles.category}>{haber.category}</span>
                                    </div>
                                    <div className={styles.content}>
                                        <span className={styles.date}>{haber.date}</span>
                                        <h2 className={styles.title}>{haber.title}</h2>
                                        <p className={styles.excerpt}>{haber.excerpt}</p>
                                        <span className={styles.readMore}>Devamını Oku →</span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
