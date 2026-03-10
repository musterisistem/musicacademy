"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './JuriSayfasi.module.css';

// Jüri Data
const juriList = [
    {
        id: 1,
        name: "Elena Çekiç",
        role: "Jüri Başkanı & Piyanist",
        image: "/images/juri/elenacekic.jpg",
        bio: `Elena Cekic, seçkin bir piyanist, uluslararası saygınlığa sahip bir piyano pedagojisi ve kültür lideridir.
Elena Cekic Müzik Akademisi ve Uluslararası Müzik Festivali "Genc Yildizlar"ın kurucusudur. Her ikisi de genç müzisyenlerin sanatsal gelişimine ve piyano performansında mükemmelliğin teşvik edilmesine adanmıştır.

Novosibirsk Devlet Konservatuarı'ndan (Rusya) mezun olan Cekic, yüksek düzeyde pedagoji, sanatsal liderlik ve jüri üyeliğini birleştiren kapsamlı bir uluslararası kariyer oluşturmuştur.

Elena Cekic, Amerika Birleşik Devletleri, İspanya, İtalya, Malta, Rusya, Türkiye ve diğer ülkelerde düzenlenen uluslararası müzik yarışmalarında jüri üyesi olarak düzenli olarak davet edilmektedir. Ayrıca, Bilkent Üniversitesi ve İstanbul'daki Bahçeşehir Üniversitesi Konservatuarı'ndaki etkinlikler de dahil olmak üzere, Steinway Festivali kapsamında ustalık sınıfları düzenlemek üzere davet edilmiştir ve prestijli akademik ve sanatsal ortamlarda yetenekli genç piyanistlerle çalışmaktadır.

Öğrencileri, önemli uluslararası yarışma ve festivallerin ödülleri olup, Avusturya, Rusya, Amerika Birleşik Devletleri ve diğer önde gelen uluslararası merkezlerde profesyonel müzik eğitimlerine devam etmektedirler. Güçlü teknik temelleri sanatsal bireysellik ve uzun vadeli profesyonel rehberlikle birleştiren rafine pedagojik yaklaşımıyla geniş çapta tanınmaktadır.`
    },
    {
        id: 2,
        name: "Ahmet Levent Atlier",
        role: "Piyano Öğretmeni & Jüri Üyesi",
        image: "/images/juri/ali1.jpeg",
        bio: `1971 doğumlu olan Ahmet Levent Atlier, piyano eğitimine Sibel Kurtbey ile başladı. İlerleyen yıllarda Dilek Yonat ve Ali Darman ile piyano çalışmalarını sürdüren Atlier, 1999 yılından beri müzik öğretmenliği ve piyano öğretmenliği yapmaktadır.

Bu yıl 8.'si düzenlenecek IPC Piyano Yarışması'nın kurucusu ve yarışma direktörüdür.`
    },
    {
        id: 4,
        name: "İnna Tosun",
        role: "Piyano Eğitmeni & Jüri Üyesi",
        image: "/images/juri/innatosun.jpeg",
        bio: `Sanatçı, 1972’de Belarus’ta dünyaya geldi. 1996’da Belarus Devlet Pedagoji Üniversitesi Müzik Fakültesi’nden mezun oldu. 2002’de Türkiye’ye taşındı. Turabi Değerli Müzik Akademisi’nde (2009-2018), Trio Müzik Akademisi’nde (2018-2019) ve Elena Çekiç Müzik Akademisi’nde (2019-2020) piyano öğretmeni olarak çalıştı.

Mozart Akademisi Uluslararası Piyano Festivali’nde jüri üyeliği yaptı. Ayrıca Elena Çekiç Müzik Akademisi Uluslararası Genç Yıldızlar Müzik Festivali’nde jüri üyesi olarak görev aldı. Kendisi sanatçı arkadaşlarıyla oluşturduğu trio ile çeşitli festivallerde klasik müzik konserleri verdi, çeşitli korolarla aktivitelere katıldı ve festival korolarına piyanist olarak eşlik etti. 

Yılların pedagojik piyano eğitimi deneyimiyle yetiştirdiği piyano öğrencileri, katıldıkları konserlerde, festivallerde ve sınavlarda başarılı sonuçlar elde ettiler. Şu anda Mozart Akademisi’nde piyano öğretmeni olarak çalışmalarına devam etmektedir.`
    },
    {
        id: 5,
        name: "Mihail Pyankov",
        role: "Sanat Yönetmeni & Öğretim Görevlisi",
        image: "/images/juri/mihailpyankov.jpeg",
        bio: `Gnesin Rusya Müzik Akademisi mezunu; Rus Halk Çalgıları Ansambli sanat yönetmeni; Gnesin Rusya Müzik Akademisi öğretim görevlisi ve “Moskova” Uluslararası Rus ve Sovyet Müziği Yarışması’nın organizatörüdür.`
    }
];

const JuriSayfasi = () => {
    const [selectedJuri, setSelectedJuri] = useState<typeof juriList[0] | null>(null);

    // Modal açıkken arkadaki kaydırmayı engelle
    useEffect(() => {
        if (selectedJuri) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedJuri]);

    return (
        <div className={styles.page}>
            <InnerPageHeader
                title="JÜRİ"
                breadcrumb="Genç Yıldızlar / Jüri"
                description="Uluslararası Genç Yıldızlar Müzik Festivali'nin değerli jüri üyeleri."
            />

            <section className={styles.juriSection}>
                <div className={styles.container}>

                    <div className={styles.juriGrid}>
                        {juriList.map((juri, index) => (
                            <motion.div
                                key={juri.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={styles.juriCard}
                                onClick={() => setSelectedJuri(juri)}
                            >
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imageOverlay}>
                                        <span className={styles.readMoreBtn}>Biyografiyi Oku</span>
                                    </div>
                                    <img src={juri.image} alt={juri.name} className={styles.juriImage} />
                                </div>
                                <div className={styles.juriInfo}>
                                    <h3 className={styles.juriName}>{juri.name}</h3>
                                    <p className={styles.juriRole}>{juri.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedJuri && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.modalBackdrop}
                        onClick={() => setSelectedJuri(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedJuri(null)}>
                                <X size={24} />
                            </button>

                            <div className={styles.modalLayout}>
                                <div className={styles.modalImageCol}>
                                    <img src={selectedJuri.image} alt={selectedJuri.name} className={styles.modalImage} />
                                    <div className={styles.modalAward}>
                                        <Award className={styles.awardIcon} />
                                    </div>
                                </div>
                                <div className={styles.modalTextCol}>
                                    <h2 className={styles.modalName}>{selectedJuri.name}</h2>
                                    <h4 className={styles.modalRole}>{selectedJuri.role}</h4>
                                    <div className={styles.divider}></div>
                                    <div className={styles.modalBio}>
                                        {selectedJuri.bio.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JuriSayfasi;
