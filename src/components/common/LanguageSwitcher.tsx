"use client";
import React, { useEffect } from 'react';
import { Globe } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

export default function LanguageSwitcher() {

    useEffect(() => {
        // Google Translate script'inin site yüklendiğinde bir kez yüklenmesini sağla
        if (typeof window !== "undefined" && !document.getElementById('google-translate-script')) {
            const addScript = document.createElement("script");
            addScript.id = "google-translate-script";
            addScript.setAttribute(
                "src",
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            );
            document.body.appendChild(addScript);

            // CallBack Fonksiyonu tanımlaması
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "tr",
                        includedLanguages: "tr,en,ru",
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            };
        }
    }, []);

    // Failsafe: Google'ın CSS'i ezip inline style olarak eklediği "top: 40px" boşluğunu ve banner'ı zorla sil.
    useEffect(() => {
        if (typeof window === "undefined") return;

        const cleanupGoogleStyles = setInterval(() => {
            // Body'nin aşağı kaymasını engelle
            if (document.body.style.top && document.body.style.top !== '0px') {
                document.body.style.top = '0px';
                document.body.style.position = 'static';
            }

            // Çirkin Banner iframe'ini DOM'dan gizle
            const banner = document.querySelector('.goog-te-banner-frame') as HTMLElement | null;
            if (banner && banner.style.display !== 'none') {
                banner.style.display = 'none';
            }
        }, 500);

        return () => clearInterval(cleanupGoogleStyles);
    }, []);

    // Kullanıcının dillerini elle tetiklemesi için
    const changeLanguage = (langCode: string) => {
        // En istikrarlı yöntem: Çerezi (cookie) manuel ayarlamak ve sayfayı yenilemek
        const domain = window.location.hostname;

        // Türkçe seçilirse (Orijinal dil) çeviriyi temizle
        if (langCode === 'tr') {
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        } else {
            // İstenen dile çeviri için cookie tanımla
            document.cookie = `googtrans=/tr/${langCode}; path=/; domain=${domain}`;
            document.cookie = `googtrans=/tr/${langCode}; path=/;`;
        }

        // Değişikliğin anında yansıması için ufak bir reload
        window.location.reload();
    };

    return (
        <div className={styles.langWrapper}>
            <div className={styles.langGroup}>
                <button onClick={() => changeLanguage('tr')} className={styles.langBtn} title="Türkçe">
                    <img src="https://flagcdn.com/w40/tr.png" alt="TR" className={styles.flagIcon} />
                </button>
                <button onClick={() => changeLanguage('en')} className={styles.langBtn} title="English">
                    <img src="https://flagcdn.com/w40/gb.png" alt="EN" className={styles.flagIcon} />
                </button>
                <button onClick={() => changeLanguage('ru')} className={styles.langBtn} title="Русский">
                    <img src="https://flagcdn.com/w40/ru.png" alt="RU" className={styles.flagIcon} />
                </button>
            </div>

            {/* Google'ın kendi eklentisini DOM'da yüklemesi için gizli tutacağımız div */}
            <div id="google_translate_element" style={{ display: "none" }}></div>
        </div>
    );
}
