"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { haberler } from '@/data/haberler';
import styles from './Blog.module.css';

const Blog = () => {
    const sonHaberler = haberler.slice(0, 3);

    return (
        <section className="section-padding" style={{ background: 'var(--secondary)' }}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>Blog & Haberler</span>
                    <h2 className={styles.title} style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Güncel Paylaşımlar</h2>
                </div>

                <div className={styles.grid}>
                    {sonHaberler.map((haber, index) => (
                        <motion.div
                            key={haber.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.post}
                        >
                            <Link href={`/haberler/${haber.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className={styles.imageWrapper}>
                                    <img src={haber.image} alt={haber.title} className={styles.postImage} />
                                    <div className={styles.categoryBadge}>{haber.category}</div>
                                </div>
                                <div className={styles.postContent}>
                                    <div className={styles.postMeta}>
                                        <span className={styles.date}>{haber.date}</span>
                                    </div>
                                    <h3 className={styles.postTitle}>{haber.title}</h3>
                                    <p className={styles.postExcerpt}>{haber.excerpt}</p>
                                    <span className={styles.postLink}>Devamını Oku →</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Link href="/haberler" className={styles.allBtn}>
                        Tüm Haberleri Gör
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
