"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Calendar, Phone, Mail, MapPin, Music, GraduationCap, UserCircle, Upload, Check, X, CheckCircle } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Basvurular.module.css';
import confetti from 'canvas-confetti';

export default function BasvurularSayfasi() {
    const [isAccepted, setIsAccepted] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const [formValues, setFormValues] = useState({
        name: '', birthDate: '', phone: '', email: '', location: '', institution: '', teacher: '', piece1: '', piece2: ''
    });

    const [files, setFiles] = useState<{ photo: File | null; dekont: File | null }>({
        photo: null,
        dekont: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, files: selectedFiles } = e.target;
        if (selectedFiles && selectedFiles.length > 0) {
            setFiles(prev => ({ ...prev, [id]: selectedFiles[0] }));
        }
    };

    const fireConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                particleCount,
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
                colors: ['#D4AF37', '#769e16', '#ffffff'] // Altın, Yeşil, Beyaz konsept renkleri
            });
        }, 250);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData();

            // Metin alanlarını ekle
            Object.entries(formValues).forEach(([key, value]) => {
                formData.append(key, value);
            });

            // Dosya alanlarını ekle
            if (files.photo) formData.append('photo', files.photo);
            if (files.dekont) formData.append('dekont', files.dekont);

            const response = await fetch('/api/application', {
                method: 'POST',
                body: formData, // JSON yerine FormData gönderiyoruz
            });

            if (response.ok) {
                setStatus('success');
                fireConfetti(); // Konfeti patlat
                // Formu temizle
                setFormValues({ name: '', birthDate: '', phone: '', email: '', location: '', institution: '', teacher: '', piece1: '', piece2: '' });
                setFiles({ photo: null, dekont: null });
                setIsAccepted(false);

                // Modal'ın açık kalması için timeout'u kaldırıyoruz veya çok uzatıyoruz. 
                // Kullanıcı X (kapat) butonuna tıklar.
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="FESTİVAL BAŞVURUSU"
                breadcrumb="Başvurular"
                description="2026 Elena Çekiç Müzik Festivali için başvurunuzu aşağıdaki form üzerinden gerçekleştirebilirsiniz."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    {/* Success Modal Popup */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={styles.modalOverlay}
                                onClick={() => setStatus('idle')}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className={styles.modalContent}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button className={styles.modalClose} onClick={() => setStatus('idle')}><X size={24} /></button>
                                    <div className={styles.modalIconBox}>
                                        <CheckCircle size={60} strokeWidth={1.5} />
                                    </div>
                                    <h2 className={styles.modalTitle}>BAŞVURUNUZ ALINDI</h2>
                                    <p className={styles.modalText}>
                                        Tebrikler! Festival başvurunuz tarafımıza başarıyla ulaşmıştır. Evraklarınız incelenecek ve size en kısa sürede dönüş sağlanacaktır.
                                    </p>
                                    <button className={styles.modalBtn} onClick={() => setStatus('idle')}>
                                        Tamam
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.formContainer}
                        onSubmit={handleSubmit}
                    >
                        {status === 'error' && (
                            <div style={{ background: 'rgba(255, 68, 68, 0.1)', color: '#ff4444', padding: '20px', borderRadius: '8px', marginBottom: '30px', border: '1px solid rgba(255, 68, 68, 0.3)', textAlign: 'center' }}>
                                Başvurunuz gönderilirken bir hata oluştu. Lütfen eksik bilgi girmeden tekrar deneyin veya bizimle iletişime geçin.
                            </div>
                        )}

                        {/* 1. Kişisel Bilgiler */}
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionNum}>1.</span> Kişisel Bilgiler
                            </h2>
                            <div className={styles.inputGrid}>
                                <div className={styles.inputGroup}>
                                    <label><User size={18} /> İsim Soyisim:</label>
                                    <input type="text" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Adınız ve Soyadınız" required disabled={status === 'loading'} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label><Calendar size={18} /> Doğum Tarihi:</label>
                                    <input type="date" name="birthDate" value={formValues.birthDate} onChange={handleInputChange} required disabled={status === 'loading'} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label><Phone size={18} /> Telefon Numarası:</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleInputChange}
                                        placeholder="05XX XXX XX XX"
                                        required
                                        disabled={status === 'loading'}
                                        maxLength={11}
                                        minLength={11}
                                        pattern="[0-9]{11}"
                                        title="Lütfen 11 haneli telefon numaranızı başında 0 olacak şekilde giriniz (Örn: 05321234567)"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label><Mail size={18} /> E-Posta:</label>
                                    <input type="email" name="email" value={formValues.email} onChange={handleInputChange} placeholder="ornek@mail.com" required disabled={status === 'loading'} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label><MapPin size={18} /> Ülke ve Şehir:</label>
                                    <input type="text" name="location" value={formValues.location} onChange={handleInputChange} placeholder="Türkiye, Bursa" required disabled={status === 'loading'} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label><GraduationCap size={18} /> Eğitim Aldığı Müzik Kurumu:</label>
                                    <input type="text" name="institution" value={formValues.institution} onChange={handleInputChange} placeholder="Konservatuvar, Okul veya Akademi" required disabled={status === 'loading'} />
                                </div>
                                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                    <label><UserCircle size={18} /> Öğretmen Adı Soyadı:</label>
                                    <input type="text" name="teacher" value={formValues.teacher} onChange={handleInputChange} placeholder="Eğitmeninizin İsmi" required disabled={status === 'loading'} />
                                </div>
                            </div>
                        </div>

                        {/* 3. Program Detayları */}
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionNum}>3.</span> Program Detayları
                            </h2>
                            <div className={styles.infoBox}>
                                <Music size={20} />
                                <p>Festival katılımında en fazla 2 eser girilmelidir.</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                    <label>Eser 1: Besteci Adı – Eser Başlığı:</label>
                                    <input type="text" name="piece1" value={formValues.piece1} onChange={handleInputChange} placeholder="Örn: Chopin - Nocturne Op. 9 No. 2" required disabled={status === 'loading'} />
                                </div>
                                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                    <label>Eser 2: Besteci Adı – Eser Başlığı:</label>
                                    <input type="text" name="piece2" value={formValues.piece2} onChange={handleInputChange} placeholder="Örn: Beethoven - Moonlight Sonata" required disabled={status === 'loading'} />
                                </div>
                            </div>
                        </div>

                        {/* 5. Ekler */}
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionNum}>5.</span> Ekler
                            </h2>
                            <div className={styles.fileGrid}>
                                <div className={styles.fileInputWrapper}>
                                    <label>Artistik Fotoğraf:</label>
                                    <div className={styles.customFileInput}>
                                        <div className={styles.fileDisplay} style={{ color: files.photo ? '#769e16' : '#666' }}>
                                            {files.photo ? files.photo.name : 'Dosya Yükleyiniz'}
                                        </div>
                                        <label htmlFor="photo" className={styles.fileBtn}>Seç</label>
                                        <input type="file" id="photo" onChange={handleFileChange} hidden required accept="image/*" disabled={status === 'loading'} />
                                    </div>
                                </div>
                                <div className={styles.fileInputWrapper}>
                                    <label>Dekont:</label>
                                    <div className={styles.customFileInput}>
                                        <div className={styles.fileDisplay} style={{ color: files.dekont ? '#769e16' : '#666' }}>
                                            {files.dekont ? files.dekont.name : 'Dosya Yükleyiniz'}
                                        </div>
                                        <label htmlFor="dekont" className={styles.fileBtn}>Seç</label>
                                        <input type="file" id="dekont" onChange={handleFileChange} hidden required accept="application/pdf,image/*" disabled={status === 'loading'} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Onay ve Gönder */}
                        <div className={styles.footerSection}>
                            <label className={styles.checkboxWrapper}>
                                <input
                                    type="checkbox"
                                    checked={isAccepted}
                                    onChange={() => setIsAccepted(!isAccepted)}
                                    disabled={status === 'loading'}
                                />
                                <span className={styles.checkmark}>
                                    {isAccepted && <Check size={14} strokeWidth={3} />}
                                </span>
                                <span className={styles.checkboxLabel}>
                                    <strong>"Şartlar ve koşulları okudum ve kabul ediyorum."</strong>
                                    <br />
                                    <small>(Katılımcının onay beyanı)</small>
                                </span>
                            </label>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={!isAccepted || status === 'loading'}
                            >
                                {status === 'loading' ? 'GÖNDERİLİYOR...' : 'BAŞVURU YAP'}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}

