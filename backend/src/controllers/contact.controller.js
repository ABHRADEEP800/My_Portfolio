import nodemailer from "nodemailer";
import ApiResponse from "../utility/ApiResponse.js";
import ApiError from "../utility/ApiError.js";
import requestHandler from "../utility/requestHandeller.js";

// ─── Transporter (lazy-initialised once) ─────────────────────────────────────
let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

// ─── POST /api/v1/contact ─────────────────────────────────────────────────────
export const sendContactEmail = requestHandler(async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;
  // reCAPTCHA v3 verification
  if (!recaptchaToken) throw new ApiError(400, "reCAPTCHA token missing.");
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (secret) {
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const verifyData = await verifyRes.json();
    // if (!verifyData.success || verifyData.score < 0.5) {
    //   throw new ApiError(403, "reCAPTCHA verification failed. Please try again.");
    // }
  }

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    throw new ApiError(400, "name, email, and message are required.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ApiError(400, "Invalid email address.");
  }
  if (message.trim().length < 10) {
    throw new ApiError(400, "Message is too short.");
  }

  const owner = process.env.OWNER_EMAIL;
  if (!owner) throw new ApiError(500, "Server email not configured.");

  const mailToOwner = {
    from: `"Portfolio Contact" <${process.env.SMTP_FORM_EMAIL }>`,
    to: owner,
    replyTo: email,
    subject: `📬 Portfolio contact from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#f8f9ff;border-radius:12px;">
        <h2 style="color:#7c3aed;margin-bottom:4px">New Contact Message</h2>
        <p style="color:#6b7280;font-size:13px;margin-top:0">From your portfolio contact form</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <blockquote style="background:#fff;border-left:4px solid #7c3aed;padding:12px 16px;border-radius:0 8px 8px 0;color:#374151;margin:0">
          ${message.replace(/\n/g, "<br/>")}
        </blockquote>
        <p style="font-size:12px;color:#9ca3af;margin-top:24px">Sent via abhradeep.com contact form</p>
      </div>
    `,
  };

  const mailToSender = {
    from: `"Abhradeep Biswas" <${process.env.SMTP_FORM_EMAIL }>`,
    to: email,
    subject: "Thanks for reaching out! 🚀",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#f8f9ff;border-radius:12px;">
        <h2 style="color:#7c3aed">Hey ${name}! 👋</h2>
        <p style="color:#374151">Thanks for getting in touch. I received your message and will get back to you within 24 hours.</p>
        <div style="background:#fff;border-left:4px solid #f97316;padding:12px 16px;border-radius:0 8px 8px 0;color:#6b7280;margin:16px 0">
          <em>"${message.trim().slice(0, 120)}${message.length > 120 ? "…" : ""}"</em>
        </div>
        <p style="color:#374151">In the meantime, feel free to check out my work on <a href="https://github.com/ABHRADEEP800" style="color:#7c3aed">GitHub</a>.</p>
        <p style="color:#374151">Best,<br/><strong>Abhradeep Biswas</strong></p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin-top:24px"/>
        <p style="font-size:11px;color:#9ca3af">You're receiving this because you submitted the contact form at abhradeep.com</p>
      </div>
    `,
  };
  await getTransporter().sendMail(mailToOwner);
  await getTransporter().sendMail(mailToSender);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Message sent successfully!"));
});
