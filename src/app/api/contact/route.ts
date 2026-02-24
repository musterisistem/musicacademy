import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend istemcisini başlat
// Vercel / üretim ortamında process.env.RESEND_API_KEY kullanılır
const resend = new Resend(process.env.RESEND_API_KEY || 're_K4dAzWaw_GygWNySHTHhkhwRCikcp1asa');
const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@elenacekicmuzikakademi.com';
const adminEmail = process.env.CONTACT_RECEIVER_EMAIL || 'elenacekic_@hotmail.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Gerekli alanlar eksik.' }, { status: 400 });
        }

        // 1. Yöneticiye Gidecek Mail Şablonu (Siyah - Altın / Yeşil Konsept)
        const adminHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fcebd7; border-radius: 8px; overflow: hidden; border: 1px solid #d4af37;">
                <div style="background-color: #111; padding: 30px; text-align: center; border-bottom: 2px solid #d4af37;">
                    <h2 style="color: #d4af37; margin: 0; font-size: 24px; font-weight: normal; letter-spacing: 2px;">YENİ İLETİŞİM MESAJI</h2>
                </div>
                <div style="padding: 30px; background-color: #fcebd7;">
                    <p style="color: #333; font-size: 16px; margin-bottom: 20px;">Web siteniz üzerinden yeni bir iletişim formu dolduruldu. Detaylar aşağıdadır:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <tr>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; width: 35%; color: #666; font-weight: bold;">Ad Soyad:</td>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #111;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">E-Posta:</td>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #769e16; font-weight: bold;">
                                <a href="mailto:${email}" style="color: #769e16; text-decoration: none;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Telefon:</td>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #111;">${phone || 'Belirtilmedi'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Konu:</td>
                            <td style="padding: 15px; border-bottom: 1px solid #eee; color: #111;">${subject || 'Genel Bilgi Talebi'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 15px; color: #666; font-weight: bold; vertical-align: top;">Mesaj:</td>
                            <td style="padding: 15px; color: #333; line-height: 1.6;">${message}</td>
                        </tr>
                    </table>
                </div>
                <div style="background-color: #111; padding: 20px; text-align: center;">
                    <p style="color: #888; font-size: 12px; margin: 0;">Bu e-posta Elena Çekiç Music Academy sisteminden otomatik gönderilmiştir.</p>
                </div>
            </div>
        `;

        // 2. Müşteriye/Ziyaretçiye Gidecek Otomatik Yanıt Şablonu
        const userHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #eee;">
                <div style="background-color: #111; padding: 40px 30px; text-align: center; border-bottom: 4px solid #d4af37;">
                    <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: normal; letter-spacing: 2px;">ELENA ÇEKİÇ MUSIC ACADEMY</h1>
                </div>
                <div style="padding: 40px 30px; text-align: center;">
                    <h2 style="color: #111; margin-bottom: 20px;">Mesajınız Tarafımıza Ulaştı</h2>
                    <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        Sayın <strong>${name}</strong>,<br><br>
                        Bizimle iletişime geçtiğiniz için teşekkür ederiz. Mesajınız ekibimize başarıyla iletilmiştir.<br>
                        En kısa sürede konuyu inceleyerek sizinle <strong>${phone ? 'telefon veya ' : ''}e-posta</strong> yoluyla iletişime geçeceğiz.
                    </p>
                    <a href="https://elenacekicmuzikakademi.com" style="display: inline-block; background-color: #d4af37; color: #111; padding: 14px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; text-transform: uppercase; font-size: 14px;">Web Sitemize Dön</a>
                </div>
                <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                    <p style="color: #999; font-size: 12px; margin: 0;">Elena Çekiç Music Academy | İletişim Birimi<br>Bu e-posta adresine yanıt vermeyiniz.</p>
                </div>
            </div>
        `;

        // YÖNETİCİYE BİLDİRİM MAİLİ GÖNDER
        const adminEmailResponse = await resend.emails.send({
            from: `Elena Academy İletişim <${fromEmail}>`,
            to: [adminEmail],
            subject: `Yeni Mesaj: ${subject || 'Siteden İletişim Formu'} - ${name}`,
            html: adminHtml,
        });

        if (adminEmailResponse.error) {
            console.error('Yönetici Mail Hatası:', adminEmailResponse.error);
            return NextResponse.json({ error: 'Mail gönderilirken hata oluştu.' }, { status: 500 });
        }

        // ZİYARETÇİYE OTO-YANIT MAİLİ GÖNDER
        const userEmailResponse = await resend.emails.send({
            from: `Elena Çekiç Music Academy <${fromEmail}>`,
            to: [email],
            subject: 'İletişim Talebiniz Alındı | Elena Çekiç Music Academy',
            html: userHtml,
        });

        if (userEmailResponse.error) {
            console.error('Kullanıcı Mail Hatası:', userEmailResponse.error);
            // Yöneticiye gittiği için sadece uyarı olarak geçilebilir, ancak hata döndürmek iyidir.
        }

        return NextResponse.json({ success: true, message: 'Mesaj başarıyla gönderildi.' });

    } catch (error) {
        console.error('İletişim API Error:', error);
        return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
    }
}
