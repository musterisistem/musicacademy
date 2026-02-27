import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_K4dAzWaw_GygWNySHTHhkhwRCikcp1asa');
const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@elenacekicmuzikakademi.com';
const adminEmail = process.env.CONTACT_RECEIVER_EMAIL || 'elena_cekic@hotmail.com';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        // Form alanlarını çekiyoruz
        const name = formData.get('name') as string;
        const birthDate = formData.get('birthDate') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const location = formData.get('location') as string;
        const institution = formData.get('institution') as string;
        const teacher = formData.get('teacher') as string;
        const piece1 = formData.get('piece1') as string;
        const piece2 = formData.get('piece2') as string;

        // Dosyaları çekiyoruz
        const photo = formData.get('photo') as File | null;
        const dekont = formData.get('dekont') as File | null;

        if (!name || !email || !phone) {
            return NextResponse.json({ error: 'Zorunlu alanlar eksik.' }, { status: 400 });
        }

        // 1. Yöneticiye Gidecek Başvuru Bilgilendirme Şablonu
        const adminHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #fcebd7; border-radius: 8px; overflow: hidden; border: 1px solid #d4af37;">
                <div style="background-color: #111; padding: 30px; text-align: center; border-bottom: 2px solid #d4af37;">
                    <h2 style="color: #d4af37; margin: 0; font-size: 24px; font-weight: normal; letter-spacing: 2px;">YENİ FESTİVAL BAŞVURUSU</h2>
                </div>
                <div style="padding: 30px; background-color: #fcebd7;">
                    <p style="color: #333; font-size: 16px; margin-bottom: 20px;">Sistem üzerinden yeni bir festival başvurusu alınmıştır. Aday bilgileri aşağıdadır:</p>
                    
                    <h3 style="color: #111; border-bottom: 1px solid #d4af37; padding-bottom: 8px; margin-top: 30px;">Kişisel Bilgiler</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background: #fff; border-radius: 8px; overflow: hidden;">
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; width: 40%; color: #666; font-weight: bold;">İsim Soyisim:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111;">${name}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Doğum Tarihi:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111;">${birthDate || '-'}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Telefon Numarası:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111;">${phone}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">E-Posta:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #769e16; font-weight: bold;">${email}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Ülke ve Şehir:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111;">${location || '-'}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Eğitim Aldığı Kurum:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111;">${institution || '-'}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Öğretmen Adı Soyadı:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111;">${teacher || '-'}</td></tr>
                    </table>

                    <h3 style="color: #111; border-bottom: 1px solid #d4af37; padding-bottom: 8px; margin-top: 30px;">Program Detayları</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background: #fff; border-radius: 8px; overflow: hidden;">
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; width: 40%; color: #666; font-weight: bold;">Eser 1:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111; font-style: italic;">${piece1 || '-'}</td></tr>
                        <tr><td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Eser 2:</td><td style="padding: 12px; border-bottom: 1px solid #eee; color: #111; font-style: italic;">${piece2 || '-'}</td></tr>
                    </table>

                    <h3 style="color: #111; border-bottom: 1px solid #d4af37; padding-bottom: 8px; margin-top: 30px;">Ekler Durumu</h3>
                    <p style="color: #555; font-size: 14px; margin-bottom: 5px;">• Artistik Fotoğraf: ${photo ? 'Ekte Mevcut' : 'Yüklenmedi'}</p>
                    <p style="color: #555; font-size: 14px; margin-bottom: 20px;">• Dekont: ${dekont ? 'Ekte Mevcut' : 'Yüklenmedi'}</p>

                </div>
                <div style="background-color: #111; padding: 20px; text-align: center;">
                    <p style="color: #888; font-size: 12px; margin: 0;">Bu e-posta Elena Çekiç Music Academy sisteminden otomatik gönderilmiştir.</p>
                </div>
            </div>
        `;

        // 2. Adaya Gidecek Otomatik Yanıt Şablonu
        const userHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #eee;">
                <div style="background-color: #111; padding: 40px 30px; text-align: center; border-bottom: 4px solid #d4af37;">
                    <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: normal; letter-spacing: 2px;">ELENA ÇEKİÇ MUSIC ACADEMY</h1>
                </div>
                <div style="padding: 40px 30px; text-align: center;">
                    <h2 style="color: #111; margin-bottom: 20px;">Festival Başvurunuz Alındı</h2>
                    <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                        Sayın <strong>${name}</strong>,<br><br>
                        Festivalimiz için yapmış olduğunuz başvuru formunuz tarafımıza başarıyla ulaşmıştır.
                    </p>
                    <div style="background-color: #fcebd7; padding: 20px; border-radius: 6px; margin-bottom: 30px; border-left: 4px solid #d4af37;">
                        <p style="color: #111; font-size: 15px; margin: 0;">
                            Başvurunuz ve ekteki evraklarınız yetkili kişiler tarafından incelenerek en kısa sürede tarafınıza dönüş yapılacaktır.
                        </p>
                    </div>
                    <p style="color: #777; font-size: 14px;">Sanat hayatınızda başarılar dileriz.</p>
                </div>
                <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                    <p style="color: #999; font-size: 12px; margin: 0;">Elena Çekiç Music Academy | Organizasyon Komitesi<br>Bu e-posta adresine yanıt vermeyiniz.</p>
                </div>
            </div>
        `;

        // Dosyaları Resend attachment formatına dönüştürme fonksiyonu
        const attachments = [];

        if (photo) {
            const arrayBuffer = await photo.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({ filename: photo.name, content: buffer });
        }

        if (dekont) {
            const arrayBuffer = await dekont.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({ filename: dekont.name, content: buffer });
        }

        // YÖNETİCİYE BAŞVURU MAİLİ GÖNDER (EKLER İLE)
        const adminEmailResponse = await resend.emails.send({
            from: `Festival Başvuru Sistemi <${fromEmail}>`,
            to: [adminEmail],
            subject: `YENİ BAŞVURU: ${name} - Festival Katılımı`,
            html: adminHtml,
            attachments: attachments.length > 0 ? attachments : undefined
        });

        if (adminEmailResponse.error) {
            console.error('Yönetici Başvuru Mail Hatası:', adminEmailResponse.error);
            return NextResponse.json({ error: 'Mail gönderilirken hata oluştu.' }, { status: 500 });
        }

        // ADAYA OTO-YANIT MAİLİ GÖNDER
        const userEmailResponse = await resend.emails.send({
            from: `Elena Çekiç Music Academy <${fromEmail}>`,
            to: [email],
            subject: 'Festival Başvurunuz Alındı | Elena Çekiç Music Academy',
            html: userHtml,
        });

        if (userEmailResponse.error) {
            console.error('Kullanıcı Başvuru Mail Hatası:', userEmailResponse.error);
        }

        return NextResponse.json({ success: true, message: 'Başvurunuz başarıyla gönderildi.' });

    } catch (error) {
        console.error('Başvuru API Error:', error);
        return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
    }
}
