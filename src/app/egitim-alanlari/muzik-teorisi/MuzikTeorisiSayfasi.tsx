"use client";
import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from '../../hakkimizda/AboutPage.module.css';

const MuzikTeorisiSayfasi = () => {
    return (
        <div className={styles.aboutPage}>
            <InnerPageHeader
                title="MÜZİK TEORİSİ"
                breadcrumb="Müzik Teorisi"
                description="Müzik sadece duyulan değil, anlaşılan bir dildir. Elena Çekiç Music Academy'de müziğin altyapısını profesyonel yöntemlerle keşfedin."
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
                            <img src="https://elenacekic.b-cdn.net/images/teori.jpg" alt="Müzik Teorisi Eğitimi" className={styles.creativeImg} />
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeLabel}>Zihinde Müzik</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.mainText}
                        >
                            <span className={styles.tag}>MÜZİK TEORİSİ</span>
                            <h2 className={styles.heading}>
                                Notaları Bir Dil Gibi <span className={styles.gold}>Konuşun.</span>
                            </h2>
                            <p className={styles.p}>
                                Müzik teorisi ve solfej, enstrüman çalımınızı ve müzikal algınızı bir üst seviyeye taşır. Akademimizde teorik eğitimler; armoniden kontrapuana, ritmik okumadan işitsel analize kadar kapsamlı bir içerikle sunulur.
                            </p>
                            <p className={styles.p}>
                                Sadece kağıt üzerinde kalan bir teori değil, pratikte duyabileceğiniz ve uygulayabileceğiniz canlı bir sistemi öğretiyoruz. Elena Çekiç Music Academy'de müziğin nasıl inşa edildiğini öğrenerek, kendi müzikal cümlelerinizi daha bilinçli kurabilirsiniz.
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
                                <h3 className={styles.quoteTitle}>Bilinçli Müzisyen</h3>
                                <p className={styles.quoteText}>
                                    "Neden bazı melodiler bizi ağlatır, bazı akorlar bizi heyecanlandırır? Teori, bu gizemin kapılarını aralar. Melodinin ardındaki zekayı birlikte keşfediyoruz."
                                </p>
                            </div>
                            <div className={styles.transitionText}>
                                <h3 className={styles.serifTitle}>Konservatuvara Hazırlık ve Ötesi</h3>
                                <p className={styles.p}>
                                    İster amatör bir tutkuyla, ister akademik bir hedefle olsun; teori eğitimimiz size sağlam bir temel sunar. Elena Çekiç rehberliğinde, müziğin karmaşık yapısını en yalın ve uygulanabilir haliyle kavrayacaksınız.
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
                            <img src="https://elenacekic.b-cdn.net/images/galeri/galeri9.jfif" alt="Teori Dersi" className={styles.creativeImg} />
                            <div className={styles.decorLine} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MuzikTeorisiSayfasi;
