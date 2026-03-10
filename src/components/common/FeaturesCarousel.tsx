"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MapPin, Award, Users } from 'lucide-react';
import styles from './FeaturesCarousel.module.css';

const featuresData = [
    {
        id: 1,
        icon: <MapPin className={styles.icon} />,
        title: "Kolay Ulaşım",
        description: "Şehrin kalbinde; metro, otobüs ve dolmuş gibi tüm toplu taşıma noktalarına sadece yürüme mesafesinde."
    },
    {
        id: 2,
        icon: <Award className={styles.icon} />,
        title: "MEB Onaylı Sertifika",
        description: "Geleceğe yön veren resmi onaylı profesyonel sertifika programları."
    },
    {
        id: 3,
        icon: <Users className={styles.icon} />,
        title: "Uzman Öğretmen Kadrosu",
        description: "Pedagojik formasyona sahip, iletişim becerileri yüksek ve alanında deneyimli öğretmenler."
    }
];

const FeaturesCarousel = ({ isHomeSection = false }: { isHomeSection?: boolean }) => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || (pathname === '/' && !isHomeSection)) return null;

    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.featuresGrid}>
                    {featuresData.map((item) => (
                        <div key={item.id} className={styles.featureBox}>
                            <div className={styles.iconCol}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                            </div>
                            <div className={styles.textCol}>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.desc}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesCarousel;
