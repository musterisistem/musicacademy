"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './FotoGaleri.module.css';

const altTexts = [
    "Elena Çekiç Müzik Akademi Müzik Okulu - Piyano Dersi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Öğrenci Performansı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Konser Anı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Eğitim Ortamı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Sahne Gösterisi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Ödül Töreni",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Festival Anı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Grup Dersi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Keman Eğitimi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Öğrenci Resitali",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Akademi Binası",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Mezuniyet Töreni",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Uluslararası Yarışma",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Özel Ders",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Sahne Hazırlığı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Konser Salonu",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Öğrenci Başarısı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Müzik Atölyesi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Genç Piyanist",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Yıl Sonu Konseri",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Bahar Konseri",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Bursa Müzik Etkinliği",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Senfoni Performansı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Öğrenci Topluluğu",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Piyano Resitali",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Eğitim Faaliyeti",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Sahnede Başarı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Müzik Festivali",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Oda Müziği",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Konser Hazırlığı",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Akademi Etkinliği",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Müzik Eğitimi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Öğrenci Gelişimi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Sahne Deneyimi",
    "Elena Çekiç Müzik Akademi Müzik Okulu - Uluslararası Başarı",
];

const photos = Array.from({ length: 35 }, (_, i) => ({
    src: `https://elenacekic.b-cdn.net/images/foto/galeri-${i + 1}.jpg`,
    alt: altTexts[i],
}));

export default function FotoGaleriSayfasi() {
    const [selected, setSelected] = useState<number | null>(null);

    const prev = () => setSelected((s) => (s !== null ? (s - 1 + photos.length) % photos.length : 0));
    const next = () => setSelected((s) => (s !== null ? (s + 1) % photos.length : 0));

    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="FOTO GALERİ"
                breadcrumb="Foto Galeri"
                description="Elena Çekiç Music Academy'nin konserlerinden, etkinliklerinden ve öğrenci başarılarından kareler."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}
                                viewport={{ once: true }}
                                className={styles.item}
                                onClick={() => setSelected(index)}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className={styles.photo}
                                    loading="lazy"
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.overlayIcon}>⊕</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightbox}
                        onClick={() => setSelected(null)}
                    >
                        <button className={styles.closeBtn} onClick={() => setSelected(null)}>
                            <X size={28} />
                        </button>
                        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); prev(); }}>
                            <ChevronLeft size={32} />
                        </button>
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25 }}
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={photos[selected].src}
                                alt={photos[selected].alt}
                                className={styles.lightboxImg}
                            />
                            <p className={styles.lightboxCaption}>
                                {selected + 1} / {photos.length}
                            </p>
                        </motion.div>
                        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); next(); }}>
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
