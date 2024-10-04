import { NextRequest, NextResponse } from 'next/server';
import contactSchema from '@/data/zod/contactSchema';
import { Resend } from 'resend';
import Contactform from '@/components/email/Contactform';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.NEXT_RESEND);

  try {
    const body = await req.json();
    const validate = contactSchema.safeParse(body);

    if (!validate.success) {
      return NextResponse.json({ success: false, message: 'Invalid values' });
    }

    const { fullname, email, subject, phone, message } = validate?.data;

    await resend.emails.send({
      from: 'contactform@kinihrealty.com',
      to: 'info@kinihrealty.com',
      subject: 'Contact Form',
      react: Contactform({
        fullname,
        email,
        subject,
        phone,
        message,
      }),
    });

    return NextResponse.json({ success: true, message: body });
  } catch (err) {
    console.log(err);
  }
}

//LOCATIONPUB
