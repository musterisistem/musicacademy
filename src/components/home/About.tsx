"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    return (
        <section className="section-padding">
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.tag}>Hikayemiz</span>
                        <h2 className={styles.title} style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Elena Çekiç Müzik Akademisi</h2>
                        <p className={styles.description}>
                            Müzik okulumuz, yeteneğin gerçek ustalıkla buluştuğu seçkin bir eğitim alanıdır.
                            Biz mucize vaat etmiyoruz — sonuç üretiyoruz. Okulumuzda yalnızca alanında eğitimli ve deneyimli uzman eğitmenler çalışır.
                        </p>
                        <p className={styles.description}>
                            Eğer çalışmaya hazırsanız, biz de sizinle sonuna kadar yürümeye hazırız. Potansiyelinizi nasıl ortaya çıkaracağınızı, nasıl yönlendireceğinizi ve başarıya nasıl ulaştıracağımızı biliyoruz.
                        </p>
                        <Link href="/hakkimizda">
                            <button className={styles.btn}>Devamını Oku</button>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.visual}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.imageWrapper}
                    >
                        <img
                            src="https://elenacekic.b-cdn.net/images/haber1.jfif"
                            alt="Elena Çekiç Music Academy"
                            className={styles.image}
                        />
                        <div className={styles.experienceBadge}>
                            <span className={styles.expYear}>15+</span>
                            <span className={styles.expText}>Yıllık Deneyim</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
