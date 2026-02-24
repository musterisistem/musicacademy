"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Basinda.module.css';

const images = [
    { id: 4, src: 'https://elenacekic.b-cdn.net/images/basinda/basinda (4).jfif', alt: 'Elena Çekiç Müzik Akademi Basın Haberi 4' },
    { id: 6, src: '/images/basinda/habermer.png', alt: 'Elena Çekiç Müzik Akademi Basın Habermer' },
    { id: 1, src: 'https://elenacekic.b-cdn.net/images/basinda/basinda (1).jfif', alt: 'Elena Çekiç Müzik Akademi Basın Haberi 1' },
    { id: 2, src: 'https://elenacekic.b-cdn.net/images/basinda/basinda (2).jfif', alt: 'Elena Çekiç Müzik Akademi Basın Haberi 2' },
    { id: 3, src: 'https://elenacekic.b-cdn.net/images/basinda/basinda (3).jfif', alt: 'Elena Çekiç Müzik Akademi Basın Haberi 3' },
    { id: 5, src: 'https://elenacekic.b-cdn.net/images/basinda/basinda (5).jfif', alt: 'Elena Çekiç Müzik Akademi Basın Haberi 5' },
];

const BasindaSayfasi = () => {
    const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
    const [videoStarted, setVideoStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoPlay = () => {
        setVideoStarted(true);
        setTimeout(() => videoRef.current?.play(), 100);
    };

    return (
        <div className={styles.basindaPage}>
            <InnerPageHeader
                title="BASINDA"
                breadcrumb="Basında"
                description="Elena Çekiç Music Academy'nin sanat yolculuğu ve başarıları, ulusal ve yerel basında geniş yer bulmaya devam ediyor."
            />

            {/* Elena Çekiç Kimdir Bölümü */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.introGrid}
                    >
                        {/* Sol: Metin */}
                        <div className={styles.introText}>
                            <span className={styles.introLabel}>NTV'de Yayınlandı</span>
                            <h2 className={styles.introTitle}>Elena Çekiç Kimdir?</h2>
                            <p className={styles.introDesc}>
                                Elena Çekiç, müzik eğitimi alanında Türkiye'nin önde gelen isimlerinden biridir.
                                Uluslararası arenada elde ettiği başarılar ve yetiştirdiği öğrencilerle müzik dünyasına
                                önemli katkılar sağlamaktadır.
                            </p>
                            <p className={styles.introDesc}>
                                Bursa'da kurduğu Elena Çekiç Music Academy ile yüzlerce öğrenciye piyano, keman,
                                şan ve müzik teorisi eğitimi vermekte; her yıl düzenlediği uluslararası festivaller
                                ile genç yeteneklere sahne imkânı sunmaktadır.
                            </p>
                            <div className={styles.introMeta}>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaNumber}>15+</span>
                                    <span className={styles.metaLabel}>Yıllık Deneyim</span>
                                </div>
                                <div className={styles.metaDivider} />
                                <div className={styles.metaItem}>
                                    <span className={styles.metaNumber}>500+</span>
                                    <span className={styles.metaLabel}>Mezun Öğrenci</span>
                                </div>
                                <div className={styles.metaDivider} />
                                <div className={styles.metaItem}>
                                    <span className={styles.metaNumber}>6</span>
                                    <span className={styles.metaLabel}>Uluslararası Festival</span>
                                </div>
                            </div>
                        </div>

                        {/* Sağ: Video */}
                        <div className={styles.introVideo}>
                            <div className={styles.videoWrapper}>
                                {videoStarted ? (
                                    <video
                                        ref={videoRef}
                                        src="https://elenacekic.b-cdn.net/videos/ntv.mp4"
                                        className={styles.video}
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                ) : (
                                    <div className={styles.videoThumb} onClick={handleVideoPlay}>
                                        <img
                                            src="/images/onizleme.png"
                                            alt="NTV Haberi Kapak"
                                            className={styles.videoCover}
                                        />
                                        <div className={styles.videoPlayBtn}>
                                            <Play size={36} fill="currentColor" />
                                        </div>
                                        <div className={styles.videoLabel}>
                                            <span>NTV Haberi — Oynatmak için tıklayın</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Basın Görselleri */}
            <section className={styles.gallerySection}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={styles.sectionHeader}
                    >
                        <span className={styles.sectionLabel}>Basın Haberleri</span>
                        <h2 className={styles.sectionTitle}>Medyada Yer Alan Haberler</h2>
                    </motion.div>

                    <div className={styles.pressGrid}>
                        {images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className={styles.pressItem}
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className={styles.pressImg}
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewText}>GÖRSELİ İNCELE</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightboxOverlay}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={32} />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className={styles.lightboxImg}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BasindaSayfasi;
