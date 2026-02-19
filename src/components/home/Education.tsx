"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Education.module.css';

const programs = [
    {
        id: "01",
        title: "Piyano Eğitimi",
        category: "PIYANO",
        description: "Klasik ve modern tekniklerle profesyonel eğitim.",
        image: "https://elenacekic.b-cdn.net/images/piano.jpg",
        href: "/egitim-alanlari/piyano"
    },
    {
        id: "02",
        title: "Keman & Yaylılar",
        category: "KEMAN",
        description: "Estetik tınılar ve teknik disiplin bir arada.",
        image: "https://elenacekic.b-cdn.net/images/keman.jpg",
        href: "/egitim-alanlari/keman"
    },
    {
        id: "03",
        title: "Şan & Vokal",
        category: "SES",
        description: "Sesinizi doğru tekniklerle özgür hissettirin.",
        image: "https://elenacekic.b-cdn.net/images/vokal.jpg",
        href: "/egitim-alanlari/san-vokal"
    },
    {
        id: "04",
        title: "Müzik Teorisi",
        category: "TEORİ",
        description: "Müziğin temellerini ve tasarımını öğrenin.",
        image: "https://elenacekic.b-cdn.net/images/teori.jpg",
        href: "/egitim-alanlari/muzik-teorisi"
    }
];

const Education = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.tag}
                    >
                        ÖZEL EĞİTİMLERİMİZ
                    </motion.span>
                    <div className={styles.titleArea}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className={styles.title}
                        >
                            Yeteneklerinizi <span>Sanata</span> Dönüştürün
                        </motion.h2>
                        <div className={styles.titleLine} />
                    </div>
                </div>

                <div className={styles.grid}>
                    {programs.map((program, index) => (
                        <Link href={program.href} key={program.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className={styles.card}
                            >
                                <div className={styles.imageBox}>
                                    <img src={program.image} alt={program.title} className={styles.cardImage} />
                                    <div className={styles.overlay} />
                                    <div className={styles.index}>{program.id}</div>
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.contentHeader}>
                                        <span className={styles.category}>{program.category}</span>
                                        <ArrowUpRight size={20} className={styles.icon} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{program.title}</h3>
                                    <p className={styles.description}>{program.description}</p>
                                    <div className={styles.hoverLine} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
