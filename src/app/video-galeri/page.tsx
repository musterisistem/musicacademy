"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './VideoGaleri.module.css';

const videos = [
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-1.mp4', title: 'Konser Performansı 1' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-2.mp4', title: 'Konser Performansı 2' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-3.mp4', title: 'Öğrenci Resitali 1' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-4.mp4', title: 'Öğrenci Resitali 2' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-5.mp4', title: 'Festival Anı 1' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-6.mp4', title: 'Festival Anı 2' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-7.mp4', title: 'Akademi Etkinliği 1' },
    { src: 'https://elenacekic.b-cdn.net/videos/galeri/video-8.mp4', title: 'Akademi Etkinliği 2' },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
    const [playing, setPlaying] = useState(false);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hiddenVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const hv = hiddenVideoRef.current;
        const canvas = canvasRef.current;
        if (!hv || !canvas) return;

        hv.src = video.src;
        hv.crossOrigin = 'anonymous';
        hv.muted = true;
        hv.preload = 'metadata';

        const capture = () => {
            hv.currentTime = 1.5;
        };
        const draw = () => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = hv.videoWidth || 640;
            canvas.height = hv.videoHeight || 360;
            ctx.drawImage(hv, 0, 0, canvas.width, canvas.height);
            setThumbnail(canvas.toDataURL('image/jpeg', 0.8));
        };

        hv.addEventListener('loadedmetadata', capture);
        hv.addEventListener('seeked', draw);
        hv.load();

        return () => {
            hv.removeEventListener('loadedmetadata', capture);
            hv.removeEventListener('seeked', draw);
        };
    }, [video.src]);

    const handlePlay = () => {
        setPlaying(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 50);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            viewport={{ once: true }}
            className={styles.card}
        >
            {/* Gizli canvas ve video thumbnail için */}
            <video ref={hiddenVideoRef} style={{ display: 'none' }} />
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <div className={styles.playerWrapper}>
                {!playing ? (
                    <div className={styles.thumbnailBox} onClick={handlePlay}>
                        {thumbnail ? (
                            <img src={thumbnail} alt={video.title} className={styles.thumbnail} />
                        ) : (
                            <div className={styles.thumbnailPlaceholder} />
                        )}
                        <div className={styles.playOverlay}>
                            <div className={styles.playBtn}>
                                <Play size={28} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <video
                        ref={videoRef}
                        src={video.src}
                        controls
                        className={styles.videoPlayer}
                        autoPlay
                    />
                )}
            </div>
            <div className={styles.cardInfo}>
                <span className={styles.cardIndex}>#{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.cardTitle}>{video.title}</h3>
            </div>
        </motion.div>
    );
}

export default function VideoGaleriPage() {
    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="VİDEO GALERİ"
                breadcrumb="Video Galeri"
                description="Elena Çekiç Music Academy'nin konserlerinden, etkinliklerinden ve öğrenci performanslarından video kareler."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {videos.map((video, index) => (
                            <VideoCard key={index} video={video} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
