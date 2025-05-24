"use server";

import nodemailer from "nodemailer";

async function sendEmail(fullname: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: parseInt(process.env.NODEMAILER_PORT!),
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.USER_MAILER,
      to: process.env.USER_TO,
      subject: `${fullname} te enviou uma mensagem`,
      html: `
        <h1>Mensagem de ${fullname}</h1>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: "Mensagem enviada com sucesso, entrarei em contato em breve. 🤖",
    };
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      error:
        "Parece que o serviço de e-mail está enfrentando problemas, por favor, tente novamente mais tarde. 🤖",
    };
  }
}

export async function sendMessageServerAction(formData: FormData) {
  try {
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!fullname || !email || !message) {
      return {
        error: "Todos os campos são obrigatórios. Por favor, preencha o formulário corretamente. 🤖",
      };
    }

    const response = await sendEmail(fullname, email, message);

    if (response.success) {
      return {
        success: "Mensagem enviada com sucesso, entrarei em contato em breve. 🤖",
      };
    }

    return {
      error: "Algo deu errado ao enviar a mensagem. Por favor, tente novamente mais tarde. 🤖",
    };
  } catch (error: any) {
    console.error("Erro no processamento do formulário:", error);
    return {
      error: "Algo deu errado ao processar sua solicitação. Por favor, tente novamente mais tarde. 🤖",
    };
  }
}