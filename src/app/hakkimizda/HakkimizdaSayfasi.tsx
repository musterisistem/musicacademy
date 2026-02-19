"use client";
import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './AboutPage.module.css';

const HakkimizdaSayfasi = () => {
    return (
        <div className={styles.aboutPage}>
            <InnerPageHeader
                title="HAKKIMIZDA"
                breadcrumb="Hakkımızda"
                description="Elena Çekiç Müzik Akademisi olarak, müziği sadece öğretmiyoruz; onu bir yaşam biçimi olarak aşılıyoruz."
            />

            {/* Section 1: Intro & Focus */}
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
                            <span className={styles.tag}>VİZYONUMUZ</span>
                            <h2 className={styles.heading}>
                                Müzik okulumuz, yeteneğin gerçek ustalıkla buluştuğu seçkin bir eğitim alanıdır.
                                <span className={styles.gold}> Biz mucize vaat etmiyoruz — sonuç üretiyoruz.</span>
                            </h2>
                            <p className={styles.p}>
                                Okulumuzda yalnızca alanında eğitimli ve 15 yılı aşkın deneyime sahip uzman eğitmenler çalışır.
                                Her biri, öğrencinin potansiyelini nasıl ortaya çıkaracağını, nasıl yönlendireceğini ve başarıya nasıl ulaştıracağını bilen gerçek profesyonellerdir.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.imageLayer1}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/hakkimizda1.jfif" alt="Akademi Atmosferi" className={styles.creativeImg} />
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeNum}>15+</span>
                                <span className={styles.badgeLabel}>Yıllık Tecrübe</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Philosophy & Reality */}
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
                            <img src="https://elenacekic.b-cdn.net/images/hakkimizda2.jfif" alt="Disiplinli Çalışma" className={styles.creativeImg} />
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
                                <h3 className={styles.quoteTitle}>Gerçekçi Yaklaşım</h3>
                                <p className={styles.quoteText}>
                                    "Açık konuşuyoruz: Sihirli bir değnek yok. Düzenli çalışma, disiplin ve evde yapılan pratik olmadan büyük başarılara ulaşmak mümkün değildir."
                                </p>
                            </div>
                            <div className={styles.transitionText}>
                                <h3 className={styles.serifTitle}>Ama…</h3>
                                <p className={styles.p}>
                                    Eğer çalışmaya hazırsanız, biz de sizinle sonuna kadar yürümeye hazırız.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Methodology & Expertise */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.methodologyGrid}>
                        <div className={styles.methodText}>
                            <h2 className={styles.heading}>Neden Biz?</h2>
                            <ul className={styles.creativeList}>
                                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ once: true }}>
                                    Etkili öğretmeyi biliyoruz.
                                </motion.li>
                                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}>
                                    Öğrenciyi ilk notalardan sahne öz güvenine kadar nasıl getireceğimizi biliyoruz.
                                </motion.li>
                                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}>
                                    Her öğrenciyi bir birey olarak görüyor ve ona göre yönlendiriyoruz.
                                </motion.li>
                                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }}>
                                    Okulumuzda sadece ders almıyorsunuz — gerçek bir rehberlik, destek ve müzikte ustalığa giden yolu elde ediyorsunuz.
                                </motion.li>
                            </ul>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={styles.singleImageContainer}
                        >
                            <img src="https://elenacekic.b-cdn.net/images/hakkimizda3.jfif" alt="Metodoloji" className={styles.creativeImg} />
                            <div className={styles.decorFrame} />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={styles.finalAward}
                    >
                        <p className={styles.finalText}>
                            Biz, gerçekten "çalan" ve gerçekten "başaran" müzisyenler yetiştiriyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HakkimizdaSayfasi;
