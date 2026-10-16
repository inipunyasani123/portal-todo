import Link from 'next/link';
import { templates } from './components/templates-data';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main id="konten" className="ruled flex min-h-screen flex-col items-center justify-center bg-papertd px-6 text-center text-inktd">
      <p className="text-sm font-semibold uppercase tracking-widest text-ceklis">☐ 404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Tugas ini tidak ada di daftar</h1>
      <p className="mt-4 max-w-md text-mutedtd">Halaman yang kamu cari tidak ditemukan. {templates.length} aplikasi to-do menunggu di halaman utama.</p>
      <Link href="/" className="mt-8 rounded-full bg-ceklis px-6 py-3 text-sm font-semibold text-white transition hover:bg-inktd">Kembali ke daftar</Link>
    </main>
  );
}
