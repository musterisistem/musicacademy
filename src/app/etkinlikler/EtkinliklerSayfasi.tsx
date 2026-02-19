"use client";
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Etkinlikler.module.css';

export default function EtkinliklerSayfasi() {
    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="FESTİVALLER"
                breadcrumb="Festivaller"
                description="Elena Çekiç Music Academy'nin düzenlediği uluslararası müzik festivalleri."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.emptyBox}
                    >
                        <div className={styles.iconWrap}>
                            <Calendar size={40} strokeWidth={1.2} />
                        </div>
                        <h2 className={styles.emptyTitle}>Yakında Yeni Etkinlikler</h2>
                        <p className={styles.emptyText}>
                            Şu an aktif bir festival etkinliği bulunmamaktadır.<br />
                            Yeni etkinlikler yakında duyurulacaktır — takipte kalın!
                        </p>
                        <div className={styles.badge}>Çok Yakında</div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
