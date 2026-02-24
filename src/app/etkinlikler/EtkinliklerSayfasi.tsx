"use client";
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, FileText, Info, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './Etkinlikler.module.css';

export default function EtkinliklerSayfasi() {
    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="FESTİVALLER"
                breadcrumb="Festivaller"
                description="Elena Çekiç Music Academy'nin düzenlediği uluslararası müzik festivalleri."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    {/* Hero / Action Area */}
                    <div className={styles.actionHeader}>
                        <div className={styles.actionContent}>
                            <h2>2026 Elena Çekiç Müzik Festivali</h2>
                            <p>Büyük sahne heyecanını yaşamak ve uluslararası standartlarda bir performans sergilemek için hemen başvurun.</p>
                        </div>
                        <Link href="/basvurular" className={styles.applyBtn}>
                            BAŞVURU YAP <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className={styles.grid}>
                        {/* Sol Kolon - Detaylar */}
                        <div className={styles.mainContent}>
                            {/* 1. Kategoriler */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={styles.infoCard}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}><Users size={24} /></div>
                                    <h3>1. Festival Kategorileri</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <p>Festivalimiz, katılımcıların yetkinliklerini en iyi şekilde sergileyebilmesi için iki farklı yaş kategorisinde düzenlenmektedir:</p>
                                    <div className={styles.categoryTags}>
                                        <span className={styles.tag}>6-13 Yaş Kategorisi</span>
                                        <span className={styles.tag}>14-20 Yaş Kategorisi</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. Süre ve Eser */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={styles.infoCard}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}><Clock size={24} /></div>
                                    <h3>2. Performans Süresi ve Eser Sayısı</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span><strong>6-13 yaş kategorisindeki</strong> her katılımcı, en fazla <strong>4 dakika</strong> süreyle 2 eser çalma hakkına sahiptir.</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span><strong>14-20 yaş kategorisindeki</strong> her katılımcı, en fazla <strong>6 dakika</strong> süreyle 2 eser çalma hakkına sahiptir.</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span>Katılımcılar, kendilerine ayrılan süreyi aşmamak kaydıyla en fazla 2 eser icra edebilirler.</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* 5. Organizasyon Koşulları */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={styles.infoCard}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}><Info size={24} /></div>
                                    <h3>3. Festival Katılım ve Organizasyon Koşulları</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span>Festivalin tüm aşamaları <strong>halka açıktır ve ücretsiz olarak izlenebilir.</strong></span>
                                        </li>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span>Katılımcıların yol, konaklama ve yemek masrafları kendilerine aittir.</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span><strong>Ezberden çalma zorunludur</strong> ve eserlerde belirtilen röprizler (tekrarlar) çalınmayacaktır.</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 size={18} className={styles.listIcon} />
                                            <span>Katılımcılar, kendilerine bildirilen program saatinden en az <strong>30 dk önce</strong> konser salonunda hazır bulunmalıdır.</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                        </div>

                        {/* Sağ Kolon - Başvuru ve Ödeme */}
                        <div className={styles.sideContent}>
                            {/* Başvuru Koşulları */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={styles.sideCard}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}><FileText size={24} /></div>
                                    <h3>Başvuru Koşulları</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.alertBox}>
                                        <strong>Son Başvuru:</strong> 27 Mart 2026
                                    </div>
                                    <p className={styles.sideText}>
                                        Festivale katılmak isteyen adayların başvuru formunu en geç belirtilen tarihe kadar eksiksiz olarak doldurup tarafımıza ulaştırması gerekmektedir.
                                    </p>
                                    <p className={styles.sideText}>
                                        *Başvuru sahibi veya velisi, verdiği bilgilerin doğruluğunu kabul ve beyan eder.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Ödeme Bilgileri */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`${styles.sideCard} ${styles.highlightCard}`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}><CreditCard size={24} /></div>
                                    <h3>Başvuru Ücreti</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.priceTag}>₺6.000</div>
                                    <p className={styles.sideText}>Festival başvurusu ücretlidir.</p>

                                    <div className={styles.ibanBox}>
                                        <span className={styles.ibanLabel}>Hesap Sahibi</span>
                                        <strong className={styles.ibanName}>Elena Çekiç</strong>
                                        <span className={styles.ibanLabel}>IBAN Kodu</span>
                                        <div className={styles.ibanNumber}>
                                            TR46 0006 7010 0000 0047 2398 22
                                        </div>
                                    </div>

                                    <div className={styles.warningText}>
                                        Herhangi bir sebeple katılımdan vazgeçilmesi durumunda başvuru ücreti iade edilmez.
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
