import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, whatsapp, message } = await req.json();

    // Prepara el payload para Kommo (puedes cambiar whatsapp por phone si Kommo lo requiere)
    const payload = {
      name,
      email,
      whatsapp,
      message,
    };

    const response = await fetch('https://data.widgets.wearekwid.com/api/webhook/34841255/23c08f89a170268c3dd3ef332a143bcc8119ad002ec5ebf7c5f0c43194a8bd6d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ ok: true });
    } else {
      return NextResponse.json({ error: 'Error enviando a Kommo' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
} 