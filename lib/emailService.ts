import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const emailService = {
    sendConfirmationEmail: async (email: string) => {
        try {
            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                to: email,
                subject: "Welcome to Preet Tech 🚀",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                        <h2 style="color: #0f172a;">Welcome to the Inner Circle!</h2>
                        <p style="color: #475569; font-size: 16px;">
                            Thank you for joining our newsletter. You're now on the VIP list to receive our best actionable growth frameworks directly to your inbox. Zero fluff. Pure signal.
                        </p>
                        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog" style="display: inline-block; padding: 12px 24px; background-color: #0ed3e6; color: #0f172a; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px;">
                            Read Latest Blogs
                        </a>
                        <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                            Need help? <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/contact" style="color: #0ed3e6;">Contact Support</a><br>
                            To unsubscribe, <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/unsubscribe?email=${email}" style="color: #94a3b8; text-decoration: underline;">click here</a>.
                        </p>
                    </div>
                `
            };
            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error("Nodemailer confirmation email error:", error);
            return false;
        }
    },

    sendBlogNotification: async (emails: string[], blogData: { title: string, excerpt: string, slug: string }) => {
        try {
            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                bcc: emails.join(','),
                subject: `New Blog: ${blogData.title} ✨`,
                html: `
                     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                        <h2 style="color: #0f172a;">New Intelligence Dropped!</h2>
                        <h3 style="color: #0ed3e6;">${blogData.title}</h3>
                        <p style="color: #475569; font-size: 16px;">
                            ${blogData.excerpt}
                        </p>
                        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/blog/${blogData.slug}" style="display: inline-block; padding: 12px 24px; background-color: #0f172a; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px;">
                            Read Full Article
                        </a>
                        <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                            To stop receiving these notifications, click to <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/unsubscribe" style="color: #94a3b8; text-decoration: underline;">unsubscribe</a>.
                        </p>
                    </div>
                `
            };
            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error("Nodemailer blog notification error:", error);
            return false;
        }
    },

    // ─── ECO Lead Admin Notification ───────────────────────────────────────────
    sendEcoLeadNotification: async (lead: {
        name: string;
        businessName: string;
        email: string;
        phone: string;
        budget: string;
        submittedAt: string;
    }) => {
        try {
            const adminEmail = process.env.SMTP_USER || '';
            const whatsappPhone = lead.phone.replace(/[^0-9]/g, '');

            const mailOptions = {
                from: process.env.EMAIL_FROM || '"Preet Tech" <hello@preettech.com>',
                to: adminEmail,
                subject: `🔥 New ECO Lead: ${lead.name} — ${lead.budget}`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
                    <body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
                            <tr><td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                                    <!-- Header -->
                                    <tr><td style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
                                        <p style="margin:0 0 8px;color:#3994fa;font-size:11px;font-weight:800;letter-spacing:4px;text-transform:uppercase;">Preet Tech</p>
                                        <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">🔥 New Consultation Request</h1>
                                        <p style="margin:12px 0 0;color:#94a3b8;font-size:13px;">A new lead just arrived from the ECO Website page</p>
                                    </td></tr>

                                    <!-- Body -->
                                    <tr><td style="background:#ffffff;padding:36px;">

                                        <!-- Lead Card -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:24px;overflow:hidden;">
                                            <tr><td style="background:#3994fa;padding:12px 20px;">
                                                <p style="margin:0;color:#ffffff;font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;">Lead Details</p>
                                            </td></tr>
                                            <tr><td style="padding:20px;">
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
                                                        <p style="margin:0;color:#94a3b8;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">👤 Full Name</p>
                                                        <p style="margin:4px 0 0;color:#0f172a;font-size:16px;font-weight:700;">${lead.name}</p>
                                                    </td></tr>
                                                    <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
                                                        <p style="margin:0;color:#94a3b8;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">🏢 Business Name</p>
                                                        <p style="margin:4px 0 0;color:#0f172a;font-size:16px;font-weight:700;">${lead.businessName || '—'}</p>
                                                    </td></tr>
                                                    <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
                                                        <p style="margin:0;color:#94a3b8;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">📧 Email Address</p>
                                                        <p style="margin:4px 0 0;"><a href="mailto:${lead.email}" style="color:#3994fa;font-size:15px;font-weight:600;text-decoration:none;">${lead.email}</a></p>
                                                    </td></tr>
                                                    <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
                                                        <p style="margin:0;color:#94a3b8;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">📱 Phone Number</p>
                                                        <p style="margin:4px 0 0;"><a href="tel:${lead.phone}" style="color:#3994fa;font-size:15px;font-weight:600;text-decoration:none;">${lead.phone}</a></p>
                                                    </td></tr>
                                                    <tr><td style="padding:10px 0;">
                                                        <p style="margin:0;color:#94a3b8;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">💰 Budget Range</p>
                                                        <p style="margin:4px 0 0;display:inline-block;background:#dcfce7;color:#166534;padding:4px 14px;border-radius:999px;font-size:14px;font-weight:800;">${lead.budget}</p>
                                                    </td></tr>
                                                </table>
                                            </td></tr>
                                        </table>

                                        <!-- Timestamp -->
                                        <p style="color:#94a3b8;font-size:12px;text-align:center;margin:0 0 24px;">⏰ Submitted on <strong style="color:#475569;">${lead.submittedAt}</strong> (IST)</p>

                                        <!-- Action Buttons -->
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding-right:8px;">
                                                    <a href="https://wa.me/${whatsappPhone}" target="_blank"
                                                        style="display:block;text-align:center;padding:14px;background:#25D366;color:#ffffff;text-decoration:none;border-radius:10px;font-size:13px;font-weight:800;letter-spacing:1px;">
                                                        💬 WhatsApp Them
                                                    </a>
                                                </td>
                                                <td style="padding-left:8px;">
                                                    <a href="mailto:${lead.email}?subject=Re: Your Website Consultation Request&body=Hi ${lead.name},%0A%0AThank you for reaching out to Preet Tech!"
                                                        style="display:block;text-align:center;padding:14px;background:#3994fa;color:#ffffff;text-decoration:none;border-radius:10px;font-size:13px;font-weight:800;letter-spacing:1px;">
                                                        📧 Reply via Email
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                    </td></tr>

                                    <!-- Footer -->
                                    <tr><td style="background:#0f172a;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
                                        <p style="margin:0;color:#475569;font-size:11px;">Preet Tech &bull; ECO Website Lead Notification</p>
                                        <p style="margin:6px 0 0;color:#334155;font-size:10px;">This is an automated notification. Do not reply to this email.</p>
                                    </td></tr>

                                </table>
                            </td></tr>
                        </table>
                    </body>
                    </html>
                `
            };

            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error('Nodemailer ECO lead notification error:', error);
            return false; // Don't throw — email failure shouldn't block the sheet write
        }
    },
};
