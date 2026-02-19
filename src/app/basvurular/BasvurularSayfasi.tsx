"use client";
import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Basvurular.module.css';

export default function BasvurularSayfasi() {
    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="BAŞVURULAR"
                breadcrumb="Başvurular"
                description="Elena Çekiç Music Academy'ye kayıt ve başvuru bilgileri."
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
                            <ClipboardList size={40} strokeWidth={1.2} />
                        </div>
                        <h2 className={styles.emptyTitle}>Başvuru Formu Yakında Aktif</h2>
                        <p className={styles.emptyText}>
                            Şu an aktif bir başvuru dönemi bulunmamaktadır.<br />
                            Yeni kayıt dönemi bilgileri yakında paylaşılacaktır.
                        </p>
                        <div className={styles.badge}>Çok Yakında</div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
