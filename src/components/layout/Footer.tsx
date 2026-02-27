import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <Image
                                src="/images/logoelena.png"
                                alt="Elena Çekiç Müzik Akademi Logo"
                                width={180}
                                height={60}
                                className={styles.logoImage}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className={styles.description}>
                            Sanatın ruhunu müzikle buluşturan, profesyonel eğitim kadrosuyla geleceğin sanatçılarını yetiştiren öncü müzik akademisi.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/elena_cekic/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.facebook.com/p/Elena-%C3%87eki%C3%A7-Music-Academy-100063678993638/?locale=tr_TR" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Facebook"><Facebook size={20} /></a>
                            <a href="https://yandex.com.tr/maps/org/elena_cekic_music_academy/235907720790/?ll=28.906492%2C40.234583&z=17.02" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Haritada Gör"><MapPin size={20} /></a>
                            <a href="#" className={styles.socialLink} title="Youtube"><Youtube size={20} /></a>
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
                            <span>elena_cekic@hotmail.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} className={styles.icon} />
                            <span>19 Mayıs mahallesi Aziz Nesin Cd No:30/B Nilüfer Bursa</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <p className={styles.aboutText}>
                            Elena Çekiç Müzik Akademi, her yaştan müziksevere dünya standartlarında eğitim sunarak, sanatı yaşamın bir parçası haline getirmeyi hedefler.
                        </p>
                        <p className={styles.copyright}>© 2026 Elena Çekiç Music Academy. Tüm Hakları Saklıdır.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
