import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get('name') || '');
  const email = String(form.get('email') || '');
  const message = String(form.get('message') || '');

  if (!name || !email || !message) return NextResponse.json({ ok: false }, { status: 400 });

  await prisma.contactMessage.create({ data: { name, email, message } });
  return NextResponse.redirect(new URL('/#Contact', req.url));
}
