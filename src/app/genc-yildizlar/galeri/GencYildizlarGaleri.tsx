"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './GencYildizlarGaleri.module.css';

// Medya verileri
const galleryMedia = [
    { id: 1, type: 'video', src: '/images/festivalgaleri/galeri (1).mp4', thumbnail: '/images/festivalgaleri/galeri (1).jpg' },
    { id: 2, type: 'video', src: '/images/festivalgaleri/galeri (2).mp4', thumbnail: '/images/festivalgaleri/galeri (2).jpg' },
    { id: 3, type: 'video', src: '/images/festivalgaleri/galeri (3).mp4', thumbnail: '/images/festivalgaleri/galeri (3).jpg' },
    { id: 4, type: 'video', src: '/images/festivalgaleri/galeri (4).mp4', thumbnail: '/images/festivalgaleri/galeri (4).jpg' },
    { id: 5, type: 'image', src: '/images/festivalgaleri/galeri (5).jpg' },
    { id: 6, type: 'image', src: '/images/festivalgaleri/galeri (6).jpg' },
    { id: 7, type: 'image', src: '/images/festivalgaleri/galeri (7).jpg' },
    { id: 8, type: 'image', src: '/images/festivalgaleri/galeri (8).jpg' },
    { id: 9, type: 'image', src: '/images/festivalgaleri/galeri (9).jpg' },
    { id: 10, type: 'image', src: '/images/festivalgaleri/galeri (10).jpg' },
    { id: 11, type: 'image', src: '/images/festivalgaleri/galeri (11).jpg' },
    { id: 12, type: 'image', src: '/images/festivalgaleri/galeri (12).jpg' },
    { id: 13, type: 'image', src: '/images/festivalgaleri/galeri (13).jpg' },
    { id: 14, type: 'image', src: '/images/festivalgaleri/galeri (14).jpg' },
    { id: 15, type: 'image', src: '/images/festivalgaleri/galeri (15).jpg' }
];

const GencYildizlarGaleri = () => {
    const [selectedMedia, setSelectedMedia] = useState<typeof galleryMedia[0] | null>(null);
    const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

    const filteredMedia = galleryMedia.filter(media => filter === 'all' || media.type === filter);

    useEffect(() => {
        if (selectedMedia) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedMedia]);

    const closeModal = () => setSelectedMedia(null);

    const handlePrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (!selectedMedia) return;
        const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia.id);
        const prevIndex = currentIndex === 0 ? filteredMedia.length - 1 : currentIndex - 1;
        setSelectedMedia(filteredMedia[prevIndex]);
    };

    const handleNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (!selectedMedia) return;
        const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia.id);
        const nextIndex = currentIndex === filteredMedia.length - 1 ? 0 : currentIndex + 1;
        setSelectedMedia(filteredMedia[nextIndex]);
    };

    // ESC ve Yön Tuşları ile klavye kontrolü
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedMedia, filteredMedia]);

    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="GALERİ"
                breadcrumb="Genç Yıldızlar / Galeri"
                description="Uluslararası Genç Yıldızlar Müzik Festivali'nden unutulmaz kareler ve performanslar."
            />

            <section className={styles.gallerySection}>
                <div className={styles.container}>

                    {/* Filtreleme */}
                    <div className={styles.filterContainer}>
                        <button
                            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            Tümü
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'image' ? styles.active : ''}`}
                            onClick={() => setFilter('image')}
                        >
                            Fotoğraflar
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'video' ? styles.active : ''}`}
                            onClick={() => setFilter('video')}
                        >
                            Videolar
                        </button>
                    </div>

                    {/* Masonry/Grid Layout */}
                    <motion.div
                        className={styles.galleryGrid}
                        layout
                    >
                        <AnimatePresence>
                            {filteredMedia.map((media) => (
                                <motion.div
                                    key={media.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.mediaCard}
                                    onClick={() => setSelectedMedia(media)}
                                >
                                    {media.type === 'video' ? (
                                        <>
                                            <video
                                                src={`${media.src}#t=0.1`}
                                                className={styles.thumbnailImg}
                                                preload="metadata"
                                                muted
                                                playsInline
                                            />
                                            <div className={styles.overlay}>
                                                <PlayCircle size={48} className={styles.playIcon} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <img src={media.src} alt="Galeri Fotoğrafı" className={styles.galleryImg} loading="lazy" />
                                            <div className={styles.overlay}>
                                                <ZoomIn size={48} className={styles.zoomIcon} />
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.modalBackdrop}
                        onClick={closeModal}
                    >
                        <button className={styles.closeBtn} onClick={closeModal} title="Kapat (ESC)">
                            <X size={32} />
                        </button>

                        {/* Önceki Butonu */}
                        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} title="Önceki">
                            <ChevronLeft size={40} />
                        </button>

                        {/* Sonraki Butonu */}
                        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} title="Sonraki">
                            <ChevronRight size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === 'video' ? (
                                <video
                                    src={selectedMedia.src}
                                    controls
                                    autoPlay
                                    className={styles.modalVideo}
                                    poster={selectedMedia.thumbnail}
                                />
                            ) : (
                                <img src={selectedMedia.src} alt="Büyük Galeri Görseli" className={styles.modalImage} />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GencYildizlarGaleri;
