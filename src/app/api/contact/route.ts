import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        const data = await resend.emails.send({
            from: 'Portofolio <onboarding@resend.dev>', // Gunakan domain bawaan Resend sementara
            to: ['mirfan1537@gmail.com'], // Ganti dengan email Anda yang asli
            subject: `[EMAIL PORTOFOLIO] Pesan Baru dari ${name}`,
            html: `
       <div style="font-family: monospace; border: 1px solid #000; padding: 20px;">
          <h3>// INCOMING_MESSAGE</h3>
          <p><strong>SENDER:</strong> ${name}</p>
          <p><strong>REPLY_TO:</strong> ${email}</p>
          <hr/>
          <p><strong>PAYLOAD:</strong><br/> ${message}</p>
        </div>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}