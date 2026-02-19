"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './ContactPage.module.css';

const IletisimSayfasi = () => {
    return (
        <div className={styles.contactPage}>
            <InnerPageHeader
                title="İLETİŞİM"
                breadcrumb="İletişim"
                description="Sorularınız, kayıt işlemleri veya akademik bilgi almak için bize ulaşın. Sanat elçilerimiz size en kısa sürede dönüş yapacaktır."
            />

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={styles.infoCol}
                        >
                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}>
                                    <MapPin size={24} />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h3>Adres</h3>
                                    <p>19 Mayıs, Heybetli Sokak No:30/B 16120 Nilüfer/Bursa</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h3>Telefon</h3>
                                    <p>0534 217 06 45</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}>
                                    <Mail size={24} />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h3>E-posta</h3>
                                    <p>info@elenacekicmuzikakademi.com</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}>
                                    <Clock size={24} />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h3>Çalışma Saatleri</h3>
                                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                                    <p>Cumartesi: 10:00 - 16:00</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={styles.formCol}
                        >
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formHeader}>
                                    <h2>Bize Mesaj Gönderin</h2>
                                    <p>Akademimiz hakkında daha fazla bilgi almak veya kayıt olmak için formu doldurun.</p>
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="text" placeholder="Adınız Soyadınız" required />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="email" placeholder="E-posta Adresiniz" required />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="tel" placeholder="Telefon Numaranız" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <textarea placeholder="Mesajınız" rows={5} required></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    MESAJ GÖNDER <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Google Maps Placeholder/Integration Container */}
                    <div className={styles.mapSection}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97467.57256714466!2d28.753967285156246!3d40.234378391334126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca115e128c5933%3A0xa6829df9f111a949!2sElena%20%C3%87eki%C3%A7%20Music%20Academy!5e0!3m2!1str!2str!4v1771372586207!5m2!1str!2str"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IletisimSayfasi;
