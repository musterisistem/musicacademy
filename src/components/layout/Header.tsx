"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, Facebook, Youtube, Phone, MapPin, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const menuItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Basında', href: '/basinda' },
  {
    name: 'Eğitim Alanları',
    href: '/egitim-alanlari',
    subItems: [
      { name: 'Piyano Eğitimi', href: '/egitim-alanlari/piyano' },
      { name: 'Keman & Yaylılar', href: '/egitim-alanlari/keman' },
      { name: 'Şan & Vokal', href: '/egitim-alanlari/san-vokal' },
      { name: 'Müzik Teorisi', href: '/egitim-alanlari/muzik-teorisi' }
    ]
  },
  {
    name: 'Etkinlikler',
    href: '/etkinlikler',
    subItems: [
      { name: 'Festivaller', href: '/etkinlikler' },
      { name: 'Başvurular', href: '/basvurular' },
    ]
  },
  {
    name: 'Galeri',
    href: '/galeri',
    subItems: [
      { name: 'Video Galeri', href: '/video-galeri' },
      { name: 'Foto Galeri', href: '/foto-galeri' }
    ]
  },
  { name: 'Haberler', href: '/haberler' },
  { name: 'İletişim', href: '/iletisim' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topInfo}>
            <div className={styles.topItem}>
              <MapPin size={14} className={styles.topIcon} />
              <span>19 Mayıs, Heybetli Sokak No:30/B 16120 Nilüfer/Bursa</span>
            </div>
            <div className={styles.topItem}>
              <Phone size={14} className={styles.topIcon} />
              <span>0534 217 06 45</span>
            </div>
          </div>
          <div className={styles.topSocials}>
            <Link href="/basvurular" className={styles.topApplyBtn}>
              BAŞVURU FORMU
            </Link>
            <div className={styles.topIconGroup}>
              <a href="#"><Instagram size={14} /></a>
              <a href="#"><Facebook size={14} /></a>
              <a href="#"><Youtube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="https://elenacekic.b-cdn.net/images/logoelena.png" alt="Elena Çekiç Music Academy" className={styles.logoImg} />
            </Link>
          </div>

          <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
            {menuItems.map((item) => (
              <div key={item.href} className={styles.navItem}>
                {item.subItems ? (
                  <span className={styles.navLink} style={{ cursor: 'default' }}>
                    <span className={styles.navLinkContent}>
                      {item.name}
                      <ChevronDown size={14} className={styles.chevron} />
                    </span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.navLinkContent}>
                      {item.name}
                    </span>
                  </Link>
                )}
                {item.subItems && (
                  <div className={styles.dropdown}>
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.dropdownItem}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
