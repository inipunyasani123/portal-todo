# PortalTodo — Tiga Cara Menaklukkan Harimu

PortalTodo: koleksi 3 aplikasi to-do dengan paradigma berbeda — checklist klasik, papan kanban, dan task manager lengkap.

**Demo live:** https://www.pintuweb.id/aplikasi-to-do

![Tangkapan layar PortalTodo](public/og.jpg)

> Katalog demo milik PintuWeb. Setiap kartu menautkan ke demo live yang bisa dicoba.

## Konsep

Katalog aplikasi to-do. Gaya buku catatan: kertas bergaris, kartu to-do hidup di hero, dan pratinjau berbingkai jendela aplikasi.

## Varian yang dipamerkan (3)

- [Hari Ini](https://todo-classic.pintuweb.id)
- [Lajur](https://todo-kanban.pintuweb.id)
- [Tuntas](https://todo-manager.pintuweb.id)

## Halaman

`/`

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon)
- Font: Lexend (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.

## Tautan langsung per demo

Kartu demo memakai `id` = slug demo di PintuWeb (`app/lib/demos.ts`). Membuka `/aplikasi-to-do#<slug>` menggulir ke kartu dan menyorotnya ±2 detik.

- `classic-todo` — Hari Ini
- `kanban-board` — Lajur
- `task-manager` — Tuntas

Gambar demo: `public/images/todo/<nama>.webp` (desktop) dan `<nama>-m.webp` (potret ponsel 390×844 @2x); setelah mengganti, jalankan `node scripts/gambar-varian.mjs`. Sumbernya dicatat di `public/images/SUMBER.md`.
