"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './InnerPageHeader.module.css';

interface InnerPageHeaderProps {
    title: string;
    breadcrumb: string;
    description?: string;
}

const InnerPageHeader: React.FC<InnerPageHeaderProps> = ({ title, breadcrumb, description }) => {
    return (
        <section className={styles.pageHeader}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h1 className={styles.title}>{title}</h1>
                    {description && <p className={styles.description}>{description}</p>}
                    <div className={styles.breadcrumb}>
                        <Link href="/">ANA SAYFA</Link>
                        <span className={styles.separator}>/</span>
                        <span className={styles.current}>{breadcrumb}</span>
                    </div>
                </motion.div>
            </div>

            {/* Video Background */}
            <div className={styles.videoBg}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.video}
                >
                    <source src="https://elenacekic.b-cdn.net/videos/header-bg.mp4" type="video/mp4" />
                </video>
                <div className={styles.overlay}></div>
            </div>

            {/* Background Decorative Element */}
            <div className={styles.bgDecor}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>
        </section>
    );
};

export default InnerPageHeader;
