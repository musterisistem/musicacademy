export interface SeoTag {
    slug: string;
    keyword: string;
    targetUrl: string;
    description?: string;
}

export const seoTags: SeoTag[] = [
    // İletişim
    { slug: 'elena-cekic-iletisim', keyword: 'Elena Çekiç İletişim', targetUrl: '/iletisim' },
    { slug: 'bursa-muzik-kursu-telefon', keyword: 'Bursa Müzik Kursu Telefon', targetUrl: '/iletisim' },
    { slug: 'nilufer-muzik-kursu-nerede', keyword: 'Nilüfer Müzik Kursu Nerede', targetUrl: '/iletisim' },
    { slug: 'muzik-dersi-kayit', keyword: 'Müzik Dersi Kayıt', targetUrl: '/iletisim' },

    // Hakkımızda
    { slug: 'elena-cekic-kimdir', keyword: 'Elena Çekiç Kimdir', targetUrl: '/hakkimizda' },
    { slug: 'bursa-muzik-okulu-hakkinda', keyword: 'Bursa Müzik Okulu Hakkında', targetUrl: '/hakkimizda' },
    { slug: 'muzik-egitimi-vizyonu', keyword: 'Müzik Eğitimi Vizyonu', targetUrl: '/hakkimizda' },
    { slug: 'piyano-egitmeni-elena-cekic', keyword: 'Piyano Eğitmeni Elena Çekiç', targetUrl: '/hakkimizda' },

    // Etkinlikler
    { slug: 'bursa-muzik-festivali', keyword: 'Bursa Müzik Festivali', targetUrl: '/etkinlikler' },
    { slug: 'elena-cekic-konserleri', keyword: 'Elena Çekiç Konserleri', targetUrl: '/etkinlikler' },
    { slug: 'muzik-etkinlikleri-bursa', keyword: 'Müzik Etkinlikleri Bursa', targetUrl: '/etkinlikler' },
    { slug: 'piyano-resitali', keyword: 'Piyano Resitali', targetUrl: '/etkinlikler' },

    // Haberler
    { slug: 'muzik-okulu-haberleri', keyword: 'Müzik Okulu Haberleri', targetUrl: '/haberler' },
    { slug: 'elena-cekic-duyurular', keyword: 'Elena Çekiç Duyurular', targetUrl: '/haberler' },
    { slug: 'bursa-muzik-etkinlik-haberleri', keyword: 'Bursa Müzik Etkinlik Haberleri', targetUrl: '/haberler' },
    { slug: 'akademi-basarilari', keyword: 'Akademi Başarıları', targetUrl: '/haberler' },

    // Piyano
    { slug: 'piyano-dersi-bursa', keyword: 'Piyano Dersi Bursa', targetUrl: '/egitim-alanlari/piyano' },
    { slug: 'nilufer-piyano-kursu', keyword: 'Nilüfer Piyano Kursu', targetUrl: '/egitim-alanlari/piyano' },
    { slug: 'elena-cekic-piyano', keyword: 'Elena Çekiç Piyano', targetUrl: '/egitim-alanlari/piyano' },
    { slug: 'cocuklar-icin-piyano', keyword: 'Çocuklar İçin Piyano', targetUrl: '/egitim-alanlari/piyano' },

    // Keman
    { slug: 'keman-dersi-bursa', keyword: 'Keman Dersi Bursa', targetUrl: '/egitim-alanlari/keman' },
    { slug: 'yayli-calgilar-egitimi', keyword: 'Yaylı Çalgılar Eğitimi', targetUrl: '/egitim-alanlari/keman' },
    { slug: 'viyolonsel-kursu', keyword: 'Viyolonsel Kursu', targetUrl: '/egitim-alanlari/keman' },
    { slug: 'elena-cekic-keman', keyword: 'Elena Çekiç Keman', targetUrl: '/egitim-alanlari/keman' },

    // Şan
    { slug: 'san-dersi-bursa', keyword: 'Şan Dersi Bursa', targetUrl: '/egitim-alanlari/san-vokal' },
    { slug: 'vokal-koclugu', keyword: 'Vokal Koçluğu', targetUrl: '/egitim-alanlari/san-vokal' },
    { slug: 'ses-egitimi', keyword: 'Ses Eğitimi', targetUrl: '/egitim-alanlari/san-vokal' },
    { slug: 'konservatuvar-san-hazirlik', keyword: 'Konservatuvar Şan Hazırlık', targetUrl: '/egitim-alanlari/san-vokal' },

    // Müzik Teorisi
    { slug: 'muzik-teorisi-dersi', keyword: 'Müzik Teorisi Dersi', targetUrl: '/egitim-alanlari/muzik-teorisi' },
    { slug: 'solfej-egitimi-bursa', keyword: 'Solfej Eğitimi Bursa', targetUrl: '/egitim-alanlari/muzik-teorisi' },
    { slug: 'konservatuvar-hazirlik-kursu', keyword: 'Konservatuvar Hazırlık Kursu', targetUrl: '/egitim-alanlari/muzik-teorisi' },
    { slug: 'muzikal-isitme-egitimi', keyword: 'Müzikal İşitme Eğitimi', targetUrl: '/egitim-alanlari/muzik-teorisi' },

    // Başvurular
    { slug: 'muzik-kursu-kayit', keyword: 'Müzik Kursu Kayıt', targetUrl: '/basvurular' },
    { slug: 'piyano-dersi-basvuru', keyword: 'Piyano Dersi Başvuru', targetUrl: '/basvurular' },
    { slug: 'konservatuvar-hazirlik-kayit', keyword: 'Konservatuvar Hazırlık Kayıt', targetUrl: '/basvurular' },
    { slug: 'bursa-muzik-egitimi-fiyatlari', keyword: 'Bursa Müzik Eğitimi Fiyatları', targetUrl: '/basvurular' },

    // Basında
    { slug: 'elena-cekic-basinda', keyword: 'Elena Çekiç Basında', targetUrl: '/basinda' },
    { slug: 'bursa-muzik-kursu-haberleri', keyword: 'Bursa Müzik Kursu Haberleri', targetUrl: '/basinda' },
    { slug: 'ntv-elena-cekic', keyword: 'NTV Elena Çekiç', targetUrl: '/basinda' },
    { slug: 'genc-yetenekler-haberleri', keyword: 'Genç Yetenekler Haberleri', targetUrl: '/basinda' },

    // Galeri
    { slug: 'muzik-okulu-fotograflari', keyword: 'Müzik Okulu Fotoğrafları', targetUrl: '/foto-galeri' },
    { slug: 'konser-galeri', keyword: 'Konser Galeri', targetUrl: '/foto-galeri' },
    { slug: 'ogrenci-resitali-foto', keyword: 'Öğrenci Resitali Foto', targetUrl: '/foto-galeri' },
    { slug: 'elena-cekic-galeri', keyword: 'Elena Çekiç Galeri', targetUrl: '/foto-galeri' },
];
