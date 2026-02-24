"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Music } from 'lucide-react';
import Link from 'next/link';
import styles from './Education.module.css';

const pianoProgram = {
    id: "01",
    title: "Piyano Eğitimi",
    category: "PIYANO EĞİTİMİ",
    description: "Elena Çekiç Music Academy'de piyano eğitimi, nota okumanın ötesine geçerek enstrümanla derin bir bağ kurmayı hedefler. Hem klasik temelleri hem de modern teknikleri birleştiren bu yolculukta, müziği hissederek öğrenmenin ayrıcalığını yaşayın.",
    features: [
        "Uluslararası standartlarda müfredat",
        "Kişiye özel gelişim takibi",
        "Sahne ve performans deneyimi"
    ],
    image: "/images/elena_cekic.jpg",
    href: "/egitim-alanlari/piyano"
};

const Education = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.tag}
                    >
                        ÖZEL EĞİTİMLERİMİZ
                    </motion.span>
                    <div className={styles.titleArea}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className={styles.title}
                        >
                            Yeteneklerinizi <span>Sanata</span> Dönüştürün
                        </motion.h2>
                        <div className={styles.titleLine} />
                    </div>
                </div>

                <div className={styles.creativeWrapper}>
                    <Link href={pianoProgram.href} className={styles.creativeCard}>
                        {/* Background Image Area */}
                        <div className={styles.imageSection}>
                            <img src={pianoProgram.image} alt={pianoProgram.title} className={styles.image} />
                            <div className={styles.imageOverlay} />
                            <div className={styles.floatingBadge}>
                                <Music size={24} className={styles.badgeIcon} />
                                <span>Masterclass</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className={styles.contentSection}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className={styles.contentHeader}
                            >
                                <span className={styles.category}>{pianoProgram.category}</span>
                                <span className={styles.index}>{pianoProgram.id}</span>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className={styles.cardTitle}
                            >
                                {pianoProgram.title}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className={styles.description}
                            >
                                {pianoProgram.description}
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className={styles.featureList}
                            >
                                {pianoProgram.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <div className={styles.bullet} />
                                        {feature}
                                    </li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className={styles.actionWrapper}
                            >
                                <span className={styles.exploreText}>Eğitimi Keşfet</span>
                                <div className={styles.iconCircle}>
                                    <ArrowUpRight size={24} className={styles.actionIcon} />
                                </div>
                            </motion.div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Education;
