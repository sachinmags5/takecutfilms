// import nodemailer from "nodemailer";

// export const sendMail = async ({ name, email, message }) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//     family: 4,
//   });

//   const mailOptions = {
//     from: email,
//     to: "sachinmags5@gmail.com",
//     subject: `New Contact Message from ${name}`,
//     html: `
//       <h2>New Contact Message</h2>

//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>

//       <p><b>Message:</b></p>
//       <p>${message}</p>
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// };

import nodemailer from "nodemailer";

export const sendMail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // important
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    family: 4, // force IPv4
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
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
