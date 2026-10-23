// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /aplikasi-to-do) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = '6285190931399';
export const WA_DISPLAY = '+62 851 9093 1399';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "aplikasi-web" dari PintuWeb/app/lib/packages.ts (harga, waktu; batas atas bisa lebih).
 * Satu-satunya tempat angka bisnis di portal ini: hero dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Aplikasi Web',
  mulai: 'Rp2 juta',
  kisaran: 'Rp2–10 juta',
  waktu: '1–2 minggu',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'aplikasi-to-do');

/** Paket harga (lib/packages.ts: aplikasi-web), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#aplikasi-web`, label: 'Harga paket Aplikasi Web' },
  { href: `${PINTUWEB}/services/website-custom`, label: 'Jasa website custom & aplikasi web' },
  { href: `${PINTUWEB}/demo#todo`, label: 'Semua demo PintuWeb' },
];
