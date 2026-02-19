"use client";
import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from '../../hakkimizda/AboutPage.module.css';

const PiyanoSayfasi = () => {
    return (
        <div className={styles.aboutPage}>
            <InnerPageHeader
                title="PİYANO EĞİTİMİ"
                breadcrumb="Piyano Eğitimi"
                description="Elena Çekiç Music Academy'de piyano eğitimi, sadece tuşlara basmak değil; her notada kendinizi ifade etmeyi öğrenmektir."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.creativeGrid}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.mainText}
                        >
                            <span className={styles.tag}>PİYANO EĞİTİMİ</span>
                            <h2 className={styles.heading}>
                                Tuşların Arasındaki Büyülü <span className={styles.gold}>Dünyaya Hoş Geldiniz.</span>
                            </h2>
                            <p className={styles.p}>
                                Piyano, tüm enstrümanların temelidir. Elena Çekiç Music Academy olarak, her yaştan ve her seviyeden öğrencimiz için piyano derslerini bir keşif yolculuğuna dönüştürüyoruz. Klasik repertuardan modern eserlere uzanan geniş bir yelpazede, tekniği duyguyla harmanlıyoruz.
                            </p>
                            <p className={styles.p}>
                                Bizim için piyano eğitimi sadece akademik bir süreç değil; sabrın, odaklanmanın ve estetiğin hayat bulduğu bir disiplindir. Uzman eğitmenlerimizle, parmak uçlarınızdan kalbinize uzanan o yolu birlikte inşa ediyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.imageLayer1}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/piano.jpg" alt="Piyano Eğitimi" className={styles.creativeImg} />
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeLabel}>Ustalıkla Piyano</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.creativeGridReverse}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.imageLayer2}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/galeri/galeri13.jfif" alt="Piyano Pratiği" className={styles.creativeImg} />
                            <div className={styles.decorLine} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.sideContent}
                        >
                            <div className={styles.quoteBox}>
                                <h3 className={styles.quoteTitle}>Neden Bizimle Piyano?</h3>
                                <p className={styles.quoteText}>
                                    "Piyano başına geçtiğinizde geçen her dakika, ruhsal bir gelişimdir. Biz, tekniği sıkı bir disiplinle ama müziğin neşesini hiç kaybetmeden öğretiyoruz."
                                </p>
                            </div>
                            <div className={styles.transitionText}>
                                <h3 className={styles.serifTitle}>Akademik Metotlar</h3>
                                <p className={styles.p}>
                                    Elena Çekiç'in 15 yılı aşkın tecrübesiyle şekillenen eğitim programımızda, her öğrencinin hızı ve karakteri bizim için özeldir. Amacımız sadece parmakları hızlandırmak değil, müziği anlayan ve yaşayan bireyler yetiştirmektir.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PiyanoSayfasi;
