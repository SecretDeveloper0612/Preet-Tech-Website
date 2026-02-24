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
    }
};
