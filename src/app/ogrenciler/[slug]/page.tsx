import { students } from '@/data/students';
import { notFound } from 'next/navigation';
import InnerPageHeader from '@/components/layout/InnerPageHeader';
import styles from './StudentPage.module.css';

export default async function StudentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const student = students.find((s) => s.slug === slug);
    if (!student) return notFound();

    return (
        <div className={styles.page}>
            <InnerPageHeader
                title={student.name.toUpperCase()}
                breadcrumb={student.name}
                description={student.tagline}
            />

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Sol: Fotoğraf */}
                        <div className={styles.photoCol}>
                            <div className={styles.photoFrame}>
                                <img
                                    src={student.photo}
                                    alt={student.name}
                                    className={styles.photo}
                                />
                            </div>
                        </div>

                        {/* Sağ: Metin */}
                        <div className={styles.textCol}>
                            <span className={styles.label}>Başarı Hikayesi</span>
                            <h1 className={styles.name}>{student.name}</h1>
                            <p className={styles.tagline}>{student.tagline}</p>

                            <div className={styles.story}>
                                {student.story.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            {student.highlights.length > 0 && (
                                <div className={styles.highlights}>
                                    <h3 className={styles.highlightsTitle}>Öne Çıkan Başarılar</h3>
                                    <ul className={styles.highlightsList}>
                                        {student.highlights.map((h, i) => (
                                            <li key={i}>
                                                <span className={styles.bullet}>◆</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
