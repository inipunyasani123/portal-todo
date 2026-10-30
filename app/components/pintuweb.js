import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /aplikasi-to-do) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => (n >= 1e6 ? `Rp${String(n / 1e6).replace('.', ',')} juta` : `Rp${n / 1e3} ribu`);

export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "aplikasi-web" dari PintuWeb/app/lib/packages.ts (harga, waktu; batas atas bisa lebih).
 * Satu-satunya tempat angka bisnis di portal ini: hero dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Aplikasi Web',
  mulai: rp(P('aplikasi-web').mulai),
  kisaran: `Rp${P('aplikasi-web').mulai / 1e6}–${P('aplikasi-web').sampai / 1e6} juta`,
  waktu: P('aplikasi-web').waktu,
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb), urutan menu "Galeri lain". */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'aplikasi-to-do');

/** Pesan WhatsApp "Pesan yang mirip" untuk satu demo. */
export const JENIS = 'aplikasi web';
export const waDemo = (nama, url) => wa(`Halo PintuWeb, saya mau ${JENIS} seperti contoh ${nama} (${url}). Boleh minta info?`);

/** Paket harga (lib/packages.ts: aplikasi-web), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#aplikasi-web`, label: 'Harga paket Aplikasi Web' },
  { href: `${PINTUWEB}/services/website-custom`, label: 'Jasa website custom & aplikasi web' },
  { href: `${PINTUWEB}/demo#todo`, label: 'Semua demo PintuWeb' },
];

/** Artikel terkait di www.pintuweb.id (grup "Baca juga"). */
export const BACA_JUGA = [
  { href: `${PINTUWEB}/artikel/harga-pembuatan-aplikasi`, label: 'Harga pembuatan aplikasi: Android, kasir, dan web' },
];
