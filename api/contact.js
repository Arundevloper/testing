const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: `${name} <${email}>`,
            to: `${process.env.SMTP_EMAIL}`,
            subject: `Production lead: ${subject}`,
            html: `<h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>`
        });
        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (err) {
        console.error('Email send error:', err);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
};
