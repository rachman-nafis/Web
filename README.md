# Portofolio Rachman (Full-stack)

## Setup
1. `cp .env.example .env` dan sesuaikan.
2. `npm install`
3. `npx prisma migrate dev`
4. `npm run seed` (opsional contoh data)
5. `npm run dev` lalu buka http://localhost:3000

## Ganti ke PostgreSQL/MySQL
- Ubah `DATABASE_URL` pada `.env`.
- (Opsional) set `DATABASE_PROVIDER` di `schema.prisma` ke `postgresql` atau `mysql`.
- Jalankan ulang migrasi: `npx prisma migrate dev`.

## Deploy
- Vercel untuk frontend+API cocok.
- Pastikan set `DATABASE_URL` di environment project.
