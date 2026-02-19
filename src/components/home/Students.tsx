"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { students } from '@/data/students';
import styles from './Students.module.css';

const Students = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className={styles.headerAccent}>
                            <span className={styles.headerLine} />
                            <span className={styles.label}>Öğrencilerimizin Unutulmaz Başarıları</span>
                        </div>
                        <h2 className={styles.title}>
                            Başarılı<br />
                            <em>Öğrencilerimiz</em>
                        </h2>
                    </div>
                    <div className={styles.headerRight}>
                        <p className={styles.subtitle}>
                            Avrupa'dan Amerika'ya, Orta Doğu'dan Asya'ya uzanan sahnelerde Türkiye'yi, Bursa'yı ve Türk gençliğinin sanatsal gücünü temsil eden genç yetenekler.
                        </p>
                        <div className={styles.headerStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNum}>5</span>
                                <span className={styles.statLabel}>Başarılı Öğrenci</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statItem}>
                                <span className={styles.statNum}>4</span>
                                <span className={styles.statLabel}>Kıta</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statItem}>
                                <span className={styles.statNum}>∞</span>
                                <span className={styles.statLabel}>İlham</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {students.map((student, index) => (
                        <motion.div
                            key={student.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.card}
                        >
                            <Link href={`/ogrenciler/${student.slug}`} className={styles.cardLink}>
                                <div className={styles.photoWrapper}>
                                    <img
                                        src={student.photo}
                                        alt={student.name}
                                        className={styles.photo}
                                    />
                                    <div className={styles.colorOverlay} />
                                    <div className={styles.hoverContent}>
                                        <span className={styles.btnLabel}>Detaylı Oku</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{student.name}</h3>
                                    <p className={styles.tagline}>{student.tagline}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Students;
