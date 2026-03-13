import nodemailer from "nodemailer";

export const sendMail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    family: 4,
  });

  const mailOptions = {
    from: email,
    to: "sachinmags5@gmail.com",
    subject: `New Contact Message from ${name}`,
    html: `
      <h2>New Contact Message</h2>

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>

      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
