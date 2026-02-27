"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Construction, Clock } from 'lucide-react';
import Link from 'next/link';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './GencYildizlarPlaceholder.module.css';

interface Props {
    title: string;
    breadcrumb: string;
}

const GencYildizlarPlaceholder: React.FC<Props> = ({ title, breadcrumb }) => {
    return (
        <div className={styles.page}>
            <InnerPageHeader
                title={title}
                breadcrumb={breadcrumb}
                description="Genç Yıldızlar Festivali kapsamındaki bu bölüm hazırlanıyor."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.card}
                    >
                        <div className={styles.iconWrap}>
                            <Construction size={56} className={styles.icon} />
                        </div>

                        <h2 className={styles.heading}>Yapım Aşamasında</h2>

                        <p className={styles.text}>
                            Bu sayfa şu an hazırlanmaktadır. Genç Yıldızlar Festivali ile ilgili
                            içerikler çok yakında bu bölümde yayınlanacaktır.
                        </p>

                        <div className={styles.badge}>
                            <Clock size={16} />
                            <span>Yakında Aktif Olacak</span>
                        </div>

                        <Link href="/etkinlikler" className={styles.btn}>
                            Festival Sayfasına Dön
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GencYildizlarPlaceholder;
