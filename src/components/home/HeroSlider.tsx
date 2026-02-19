"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import styles from './HeroSlider.module.css';

const slides = [
    {
        id: 1,
        title: "Sanatın Kalbine Yolculuk",
        category: "ELENA ÇEKİÇ MUSIC ACADEMY",
        description: "Müziğin ruhuna dokunan, akademik disiplinle harmanlanmış profesyonel eğitim süreci.",
        image: "https://elenacekic.b-cdn.net/images/slider1.jfif",
        year: "2026"
    },
    {
        id: 2,
        title: "Yeteneklerinizi Keşfedin",
        category: "AKADEMİK EĞİTİM",
        description: "Piyano, keman ve şan eğitimlerimizde her öğrencinin benzersiz yeteneğini parlatıyoruz.",
        image: "https://elenacekic.b-cdn.net/images/slider2.jfif",
        year: "PRO"
    },
    {
        id: 3,
        title: "Geleceğin Sanatçıları",
        category: "MÜZİK ATÖLYELERİ",
        description: "Modern teknikler ve klasik temel ile geleceğin virtüözlerini yetiştiriyoruz.",
        image: "https://elenacekic.b-cdn.net/images/slider3.jfif",
        year: "NEW"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            {/* Static Sidebar with Piano Keys */}
            <div className={styles.sidebar}>
                <div className={styles.pianoKeys}>
                    {[...Array(40)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                                x: [0, 4, 0],
                                opacity: 0.4
                            }}
                            transition={{
                                delay: i * 0.02,
                                duration: 0.5,
                                x: {
                                    delay: 2 + Math.random() * 5,
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    repeatDelay: Math.random() * 5
                                }
                            }}
                            className={styles.whiteKey}
                        >
                            {[0, 1, 3, 4, 5].includes(i % 7) && <div className={styles.blackKey} />}
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <div className={styles.slideWrapper} key={current}>
                    {/* Main Visual - Asymmetrical Layer */}
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.imageLayer}
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />

                    {/* Decorative Elements */}
                    <div className={styles.decorativeText}>
                        MUSIC ACADEMY
                    </div>

                    <div className={styles.contentContainer}>
                        <div className={styles.mainContent}>
                            <motion.span
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className={styles.category}
                            >
                                {slides[current].category}
                            </motion.span>

                            <div className={styles.titleWrapper}>
                                <motion.h1
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                                    className={styles.title}
                                >
                                    {slides[current].title}
                                </motion.h1>
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className={styles.description}
                            >
                                {slides[current].description}
                            </motion.p>

                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className={styles.actions}
                            >
                                <button className={styles.mainBtn}>Hemen Başla</button>
                                <button className={styles.playBtn}>
                                    <Play size={20} fill="currentColor" />
                                    <span>Dinle</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Progress */}
                    <div className={styles.progressSection}>
                        <div className={styles.numbers}>
                            <span>0{current + 1}</span>
                            <div className={styles.progressBar}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 8, ease: "linear" }}
                                    className={styles.progressFill}
                                />
                            </div>
                            <span>0{slides.length}</span>
                        </div>
                    </div>
                </div>
            </AnimatePresence>

            <div className={styles.vignette} />
        </section>
    );
};

export default HeroSlider;
