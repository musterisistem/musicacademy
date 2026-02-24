"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './ContactPage.module.css';

const IletisimSayfasi = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000); // 5 saniye sonra uyarıyı gizle
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

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
                                    <p>elenacekic_@hotmail.com</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconCircle}>
                                    <Instagram size={24} />
                                </div>
                                <div className={styles.infoDetails}>
                                    <h3>Sosyal Medya</h3>
                                    <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                        <a href="https://www.instagram.com/elena_cekic/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#d4af37'} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
                                            <Instagram size={24} />
                                        </a>
                                        <a href="https://www.facebook.com/p/Elena-%C3%87eki%C3%A7-Music-Academy-100063678993638/?locale=tr_TR" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#d4af37'} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
                                            <Facebook size={24} />
                                        </a>
                                        <a href="https://yandex.com.tr/maps/org/elena_cekic_music_academy/235907720790/?ll=28.906492%2C40.234583&z=17.02" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#d4af37'} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
                                            <MapPin size={24} />
                                        </a>
                                    </div>
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
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formHeader}>
                                    <h2>Bize Mesaj Gönderin</h2>
                                    <p>Akademimiz hakkında daha fazla bilgi almak veya kayıt olmak için formu doldurun.</p>
                                </div>

                                {status === 'success' && (
                                    <div style={{ background: 'rgba(118, 158, 22, 0.1)', color: '#769e16', padding: '15px', borderRadius: '6px', marginBottom: '20px', border: '1px solid rgba(118, 158, 22, 0.3)' }}>
                                        Mesajınız başarıyla gönderildi. Size en kısa sürede dönüş yapacağız.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div style={{ background: 'rgba(255, 68, 68, 0.1)', color: '#ff4444', padding: '15px', borderRadius: '6px', marginBottom: '20px', border: '1px solid rgba(255, 68, 68, 0.3)' }}>
                                        Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                                    </div>
                                )}

                                <div className={styles.inputGroup}>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız Soyadınız" required disabled={status === 'loading'} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-posta Adresiniz" required disabled={status === 'loading'} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon Numaranız" disabled={status === 'loading'} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Konu (İsteğe Bağlı)" disabled={status === 'loading'} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mesajınız" rows={5} required disabled={status === 'loading'}></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                    {status === 'loading' ? 'GÖNDERİLİYOR...' : 'MESAJ GÖNDER'} <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Google Maps Placeholder/Integration Container */}
                    <div className={styles.mapSection}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.0!2d28.903818676420844!3d40.234387266716546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca115e128c5933%3A0xa6829df9f111a949!2sElena%20%C3%87eki%C3%A7%20Music%20Academy!5e1!3m2!1str!2str!4v1771897606811!5m2!1str!2str" width="100%" height="450" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div >
            </section >
        </div >
    );
};

export default IletisimSayfasi;
