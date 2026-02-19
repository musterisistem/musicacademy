"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import styles from './Gallery.module.css';

const galleryItems = [
    { id: 1, src: "https://elenacekic.b-cdn.net/images/galeri/galeri5.jfif" },
    { id: 2, src: "https://elenacekic.b-cdn.net/images/galeri/galeri7.jfif" },
    { id: 3, src: "https://elenacekic.b-cdn.net/images/galeri/galeri9.jfif" },
    { id: 4, src: "https://elenacekic.b-cdn.net/images/galeri/galeri10.jfif" },
    { id: 5, src: "https://elenacekic.b-cdn.net/images/galeri/galeri13.jfif" },
    { id: 6, src: "https://elenacekic.b-cdn.net/images/galeri/galeri15.jfif" },
    { id: 7, src: "https://elenacekic.b-cdn.net/images/galeri/galeri16.jfif" },
    { id: 8, src: "https://elenacekic.b-cdn.net/images/galeri/galeri31.jfif" },
    { id: 9, src: "https://elenacekic.b-cdn.net/images/galeri/galeri21.jfif" },
    { id: 10, src: "https://elenacekic.b-cdn.net/images/galeri/galeri24.jfif" },
    { id: 11, src: "https://elenacekic.b-cdn.net/images/galeri/galeri29.jfif" },
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    // Double the items for a seamless infinite loop
    const displayItems = [...galleryItems, ...galleryItems];

    return (
        <section className={styles.section}>
            {/* Artistic Staff Background */}
            <div className={styles.staffDecor} />

            <div className={styles.header}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.tag}
                >
                    AKADEMİ ATMOSFERİ
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    Sanatın <span>Görsel Yolculuğu</span>
                </motion.h2>
            </div>

            <div className={styles.sliderWrapper}>
                <div className={styles.pianoKeys} />
                <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        {displayItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className={styles.item}
                                onClick={() => setSelectedImg(item.src)}
                            >
                                <img src={item.src} alt={`Academy gallery item ${item.id}`} className={styles.image} />
                                <div className={styles.overlay}>
                                    <Maximize2 size={24} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.pianoKeys} ${styles.pianoKeysBottom}`} />
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightbox}
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}>
                                <X size={40} />
                            </button>
                            <img src={selectedImg} alt="Gallery view" className={styles.lightboxImg} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
