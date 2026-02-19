"use client";
import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from '../../hakkimizda/AboutPage.module.css';

const SanVokalSayfasi = () => {
    return (
        <div className={styles.aboutPage}>
            <InnerPageHeader
                title="ŞAN & VOKAL"
                breadcrumb="Şan & Vokal"
                description="Sesiniz, en kıymetli enstrümanınızdır. Elena Çekiç Music Academy'de, sesinizi doğru tekniklerle terbiye ederek sanata dönüştürüyoruz."
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
                            <span className={styles.tag}>ŞAN & VOKAL</span>
                            <h2 className={styles.heading}>
                                Sahne Sizin, Sesiniz <span className={styles.gold}>Sizin Gücünüz.</span>
                            </h2>
                            <p className={styles.p}>
                                Şan eğitimi sadece şarkı söylemek değil, nefesi ve bedeni bir bütün olarak kullanma sanatıdır. Akademimizde vokallere; diyafram kontrolünden ses rezonansına, artikülasyondan sahne hakimiyetine kadar geniş bir teknik temel sunuyoruz.
                            </p>
                            <p className={styles.p}>
                                Operadan popüler müziğe, her tarzda kendinizi daha iyi ifade etmeniz için yanınızdayız. Elena Çekiç Music Academy'de profesyonel şan dersleriyle, sesinizi yormadan en yüksek potansiyele ulaşmanızı sağlıyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.imageLayer1}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/vokal.jpg" alt="Şan Eğitimi" className={styles.creativeImg} />
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeLabel}>Sesin Ustalığı</span>
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
                            <img src="https://elenacekic.b-cdn.net/images/galeri/galeri15.jfif" alt="Vokal Pratiği" className={styles.creativeImg} />
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
                                <h3 className={styles.quoteTitle}>Ses Estetiği</h3>
                                <p className={styles.quoteText}>
                                    "Her ses benzersizdir. Biz bu benzersizliği koruyarak, onu teknik disiplinle parlatıyoruz. Sesinizin sınırlarını birlikte keşfediyoruz."
                                </p>
                            </div>
                            <div className={styles.transitionText}>
                                <h3 className={styles.serifTitle}>Doğru Teknik, Sağlıklı Ses</h3>
                                <p className={styles.p}>
                                    Kronik ses yorgunluklarını önlemek ve uzun yıllar sağlıklı bir ses ile şarkı söylemek için bilimsel yöntemlerle çalışıyoruz. Elena Çekiç'in uzmanlığıyla, duygularınızı en saf haliyle dinleyicilere ulaştırabileceksiniz.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SanVokalSayfasi;
