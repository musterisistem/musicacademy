"use client";
import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from '../../hakkimizda/AboutPage.module.css';

const KemanSayfasi = () => {
    return (
        <div className={styles.aboutPage}>
            <InnerPageHeader
                title="KEMAN & YAYLILAR"
                breadcrumb="Keman & Yaylılar"
                description="Keman, duyguların en saf halini notalara döken bir enstrümandır. Elena Çekiç Music Academy'de bu zarif enstrümanı disiplin ve tutkuyla tanıyın."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.creativeGrid}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.imageLayer1}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/keman.jpg" alt="Keman Eğitimi" className={styles.creativeImg} />
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeLabel}>Estetik ve Teknik</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.mainText}
                        >
                            <span className={styles.tag}>KEMAN & YAYLILAR</span>
                            <h2 className={styles.heading}>
                                Müziğin En İnce Ruhuna <span className={styles.gold}>Dokunun.</span>
                            </h2>
                            <p className={styles.p}>
                                Keman çalmak, bedensel bir koordinasyonun ötesinde, enstrümanla bir bütün olma halidir. Akademimizde keman eğitimi, doğru duruş ve tutuş tekniklerinden başlayarak, her seviyede derinleşen bir müzikaliteyi hedefler.
                            </p>
                            <p className={styles.p}>
                                Yaylı çalgıların büyüleyici dünyasında, her yaş grubuna özel hazırladığımız müfredat ile başarının kapılarını aralıyoruz. Elena Çekiç Music Academy'nin uzman kadrosu, her notada sizin yanınızda.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <div className={styles.creativeGridReverse}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.sideContent}
                        >
                            <div className={styles.quoteBox}>
                                <h3 className={styles.quoteTitle}>Kemanla Kendini İfade</h3>
                                <p className={styles.quoteText}>
                                    "Keman, ruhun dili gibidir. Biz bu dili en doğru tekniklerle konuşmayı öğretiyoruz. Disiplin ve sevgiyle, zor olanı estetiğe dönüştürüyoruz."
                                </p>
                            </div>
                            <div className={styles.transitionText}>
                                <h3 className={styles.serifTitle}>Disiplinli Gelişim</h3>
                                <p className={styles.p}>
                                    Yaylılarda ilerlemek sabır ister. Biz bu sabrı, müziğin büyüleyici sonuçlarıyla ödüllendiriyoruz. Her öğrencinin bireysel yeteneklerini ön plana çıkaran yaklaşımımızla, sağlam bir teknik altyapı oluşturuyoruz.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.imageLayer2}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/galeri/galeri7.jfif" alt="Keman Dersi" className={styles.creativeImg} />
                            <div className={styles.decorLine} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KemanSayfasi;
