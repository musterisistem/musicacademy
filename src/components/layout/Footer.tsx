import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <span className={styles.logoText}>ELENA ÇEKİÇ</span>
                            <span className={styles.logoSub}>MUSIC ACADEMY</span>
                        </div>
                        <p className={styles.description}>
                            Sanatın ruhunu müzikle buluşturan, profesyonel eğitim kadrosuyla geleceğin sanatçılarını yetiştiren öncü müzik akademisi.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink}><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h3>Hızlı Linkler</h3>
                        <ul>
                            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                            <li><Link href="/akademik">Akademik</Link></li>
                            <li><Link href="/egitim-alanlari">Eğitim Alanları</Link></li>
                            <li><Link href="/galeri">Galeri</Link></li>
                            <li><Link href="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>

                    <div className={styles.contact}>
                        <h3>İletişim</h3>
                        <div className={styles.contactItem}>
                            <Phone size={18} className={styles.icon} />
                            <span>0534 217 06 45</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={18} className={styles.icon} />
                            <span>info@elenacekicmuzikakademi.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} className={styles.icon} />
                            <span>19 Mayıs, Heybetli Sokak No:30/B Nilüfer/Bursa</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 Elena Çekiç Music Academy. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
