import type { Metadata } from 'next';
import VideoGaleriClient from './VideoGaleriClient';

export const metadata: Metadata = {
    title: 'Video Galeri | Elena Çekiç Music Academy',
    description: 'Elena Çekiç Music Academy öğrenci resitalleri, festival anları, konser performansları ve akademi etkinliklerinden video kayıtlar.',
    keywords: ['Müzik okulu video', 'Piyano resitali video', 'Konser Bursa', 'Öğrenci performansı videoları', 'Elena Çekiç galeri'],
    alternates: {
        canonical: 'https://elenacekicmuzikakademi.com/video-galeri',
    },
};

export default function VideoGaleriPage() {
    return <VideoGaleriClient />;
}
