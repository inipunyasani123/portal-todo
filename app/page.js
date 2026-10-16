import Image from 'next/image';
import { Check, ArrowDown, ArrowUpRight, ListChecks, MessageCircle, Moon, Zap, Save, Smartphone, PencilRuler, Package, ChevronDown } from 'lucide-react';
import { templates, slugOf } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB, PAKET, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya tertarik aplikasi to-do. Boleh minta info?');
const N = templates.length;

// Kartu hero: checkbox sungguhan (tanpa JS), yang terakhir sengaja belum dicentang.
const HERO_TODO = [
  { t: 'Bangun pagi', done: true },
  { t: 'Cari aplikasi to-do yang pas', done: true },
  { t: 'Mulai hari yang produktif', done: false },
];

const CATATAN = [
  { icon: Save, title: 'Tersimpan otomatis', desc: 'Tugas tersimpan di perangkatmu — tutup browser, semuanya masih ada.' },
  { icon: Moon, title: 'Mode gelap', desc: 'Ketiganya punya mode terang dan gelap, dan keduanya lolos uji kontras WCAG AA.' },
  { icon: Zap, title: 'Ringan & instan', desc: 'Tanpa loading berat; ketik, enter, beres. Fokusmu tidak terganggu.' },
  { icon: Smartphone, title: 'Di semua layar', desc: 'Tombol aksi tetap terlihat di layar sentuh; papan kanban bisa diseret dengan menahan kartu.' },
  { icon: PencilRuler, title: 'Data contoh yang hidup', desc: 'Kunjungan pertama diisi tugas contoh bertanggal relatif — tidak pernah basi, langsung terasa dipakai.' },
  { icon: Package, title: 'Milikmu penuh', desc: 'Setelah pelunasan, source code diserahkan dan bisa dipasang di domainmu. Hosting & database termasuk tahun pertama; perpanjangannya tertulis di penawaran.' },
];

const TANYA = [
  { q: 'Aplikasi ini untuk pribadi atau tim?', a: 'Ketiganya dirancang untuk produktivitas pribadi dan tim kecil. Untuk kolaborasi real-time multi-user, kami bisa kembangkan versi custom dengan backend — tanyakan saja.' },
  { q: 'Berapa biaya membuat aplikasi seperti ini?', a: `Paket ${PAKET.nama} PintuWeb mulai ${PAKET.mulai} (kisaran ${PAKET.kisaran}, bisa lebih untuk fitur besar), dikerjakan ${PAKET.waktu}: login & peran pengguna, kelola data, tampilan kanban/kalender/laporan, ekspor data, plus hosting & database tahun pertama.` },
  { q: 'Apakah data tugas saya aman?', a: 'Data tersimpan lokal di perangkatmu (localStorage) — tidak dikirim ke server mana pun. Privasimu utuh. Versi dengan sinkronisasi cloud tersedia sebagai pengembangan custom.' },
  { q: 'Bedanya ketiga aplikasi ini apa?', a: 'Paradigmanya: Hari Ini untuk daftar harian yang fokus; Lajur untuk alur kerja bertahap dengan batas kerja paralel; Tuntas untuk yang butuh prioritas, tenggat, label, dan kalender.' },
  { q: 'Bisakah dijadikan aplikasi internal perusahaan?', a: 'Bisa. Template ini bisa dikembangkan menjadi tools internal: menambah login, database, dan laporan. Mulai dari template berarti lebih cepat dan hemat.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function TitikJendela() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-3 w-3 rounded-full border-2 border-inktd bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full border-2 border-inktd bg-stabilo" />
      <span className="h-3 w-3 rounded-full border-2 border-inktd bg-ceklis" />
    </span>
  );
}

function Logo({ kecil = false }) {
  return (
    <>
      <span className={`cek ${kecil ? '!bg-ceklis' : ''}`} aria-hidden="true"><ListChecks size={kecil ? 13 : 14} /></span>
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${kecil ? 'text-ceklis-terang' : 'text-ceklis'}`}>Aplikasi To-Do</span>
      </span>
    </>
  );
}

export default function PortalTodo() {
  return (
    <div id="top" className="ruled min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-inktd text-xs text-papertd">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-1.5 sm:px-6">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Aplikasi To-Do</li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b-[2.5px] border-inktd bg-papertd/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-bold text-mutedtd md:flex">
            <a href="#koleksi" className="transition hover:text-ceklis">Aplikasi</a>
            <a href="#catatan" className="transition hover:text-ceklis">Fitur</a>
            <a href="#tanya" className="transition hover:text-ceklis">FAQ</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border-[2.5px] border-inktd bg-ceklis px-4 py-2 text-sm font-bold text-white shadow-[3px_3px_0_var(--color-inktd)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--color-inktd)] sm:px-5">
            Pesan Aplikasi
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section className="px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
            <div>
              <span className="naik inline-block rounded-full border-[2.5px] border-inktd bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-inktd)]">
                {N} aplikasi · {N} paradigma
              </span>
              <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.06] sm:text-6xl">
                Selesaikan tugasmu, <span className="stabilo">apapun gayamu</span>.
              </h1>
              <p className="mt-5 max-w-md text-lg font-light text-mutedtd">
                Daftar harian, papan kanban, atau pengelola tugas dengan kalender — pilih cara kerjamu, kami siapkan aplikasinya.
              </p>
              <div className="naik naik-2 mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
                <a href="#koleksi" className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-inktd bg-inktd px-7 py-3.5 font-display text-sm font-bold text-papertd shadow-[4px_4px_0_rgba(22,163,74,0.5)] transition hover:translate-y-0.5">
                  Lihat Ketiganya <ArrowDown size={16} aria-hidden="true" />
                </a>
                {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
                <p className="text-sm font-semibold text-inktd/80">Mulai <span className="stabilo px-1 font-extrabold">{PAKET.mulai}</span> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1 text-ceklis">·</span>{PAKET.waktu}</span></p>
              </div>
            </div>

            {/* Kartu to-do sungguhan: centang sendiri yang terakhir */}
            <div className="naik naik-2 window w-full max-w-sm rotate-1 justify-self-center md:max-w-md md:justify-self-end">
              <div className="window-bar">
                <TitikJendela />
                <span className="ml-2 text-xs font-semibold text-mutedtd">hari-ini.app</span>
              </div>
              <fieldset className="daftar-hari p-5 md:p-6">
                <legend className="sr-only">Contoh daftar tugas hari ini</legend>
                <ul className="space-y-3">
                  {HERO_TODO.map((t, i) => (
                    <li key={t.t}>
                      <label className="group/cek flex cursor-pointer items-center gap-3">
                        <input type="checkbox" defaultChecked={t.done} className="peer sr-only" />
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border-[2.5px] border-inktd bg-white text-transparent transition peer-checked:bg-ceklis peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ceklis" aria-hidden="true">
                          <Check size={14} strokeWidth={3.5} />
                        </span>
                        <span className={`font-semibold decoration-2 md:text-lg peer-checked:text-mutedtd peer-checked:line-through ${i === HERO_TODO.length - 1 ? 'group-hover/cek:text-ceklis' : ''}`}>{t.t}</span>
                      </label>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center justify-between gap-3 border-t-2 border-dashed border-inktd/15 pt-3 text-xs text-mutedtd">
                  <span>Coba centang yang terakhir — begitulah rasanya.</span>
                  {/* Dihitung CSS dari centangan sungguhan (tanpa JS) */}
                  <span className="hitung-selesai shrink-0 font-bold text-ceklis" aria-hidden="true">/{HERO_TODO.length}</span>
                </p>
              </fieldset>
            </div>
          </div>
        </section>

        {/* Showcase rows */}
        <section id="koleksi" aria-label="Tiga aplikasi to-do" className="scroll-mt-[64px] px-4 pb-16 sm:px-6 sm:pb-20">
          <ul className="mx-auto max-w-6xl space-y-14 sm:space-y-16">
            {templates.map((t, i) => (
              <li key={t.name} id={slugOf(t)} className={`grid items-center gap-6 md:grid-cols-2 md:gap-8 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Jendela aplikasi: pratinjau (tautan untuk tetikus; papan ketik memakai tombol "Buka demo") */}
                <div className="window group">
                  <div className="window-bar">
                    <TitikJendela />
                    <span className="ml-2 text-xs font-semibold text-mutedtd" aria-hidden="true">{t.berkas}.app</span>
                  </div>
                  <a href={t.url} target="_blank" rel="noopener noreferrer" className="block" tabIndex={-1} aria-hidden="true">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={t.image} alt="" fill sizes="(max-width: 767px) calc(100vw - 37px), 540px" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
                    </div>
                  </a>
                </div>
                {/* Info */}
                <div className={i % 2 ? 'md:pr-6' : 'md:pl-6'}>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ceklis">0{i + 1} — {t.cocok}</p>
                  <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{t.name}</h2>
                  <p className="mt-1 text-lg font-semibold text-mutedtd">{t.tagline}</p>
                  {t.terjual > 0 && <p className="mt-2 font-display text-sm font-bold"><span className="stabilo px-1">✓ {t.terjual} terjual</span></p>}
                  <p className="mt-3 font-light leading-relaxed text-inktd/85">{t.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {t.fitur.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-semibold">
                        <span className="cek mt-0.5 !h-5 !w-5 shrink-0" aria-hidden="true"><Check size={11} strokeWidth={4} /></span> {f}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Halaman dalam ${t.name}`}>
                    {t.halaman.map(([href, label]) => (
                      <li key={href}><a href={t.url + href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1 rounded-full border-[2px] border-inktd bg-white px-3 text-xs font-bold transition hover:bg-stabilo">{label} <ArrowUpRight size={12} aria-hidden="true" /></a></li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-[2.5px] border-inktd bg-inktd px-5 font-display text-sm font-bold text-papertd shadow-[3px_3px_0_rgba(22,163,74,0.5)] transition hover:translate-y-0.5">
                      Buka demo<span className="sr-only"> {t.name} (tab baru)</span> <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    <a href={wa(`Halo PintuWeb, saya tertarik aplikasi ${t.name} (${t.tagline.toLowerCase()}). Boleh minta info?`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-[2.5px] border-inktd bg-white px-5 font-display text-sm font-bold text-inktd transition hover:bg-stabilo">
                      Pesan versi ini<span className="sr-only"> lewat WhatsApp</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Catatan kaki — fitur bersama */}
        <section id="catatan" aria-labelledby="judul-catatan" className="scroll-mt-[64px] border-t-[2.5px] border-inktd bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ceklis">Sudah termasuk</p>
              <h2 id="judul-catatan" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Di ketiga aplikasi, <span className="stabilo">tanpa terkecuali</span></h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {CATATAN.map((c) => (
                <li key={c.title} className="flex items-start gap-4 rounded-2xl border-[2.5px] border-inktd bg-papertd p-4 shadow-[4px_4px_0_var(--color-inktd)] transition sm:block sm:p-6 sm:hover:-translate-y-1 sm:hover:shadow-[6px_6px_0_rgba(22,163,74,0.5)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-[2.5px] border-inktd bg-ceklis text-white"><c.icon size={20} aria-hidden="true" /></span>
                  <div className="sm:mt-4">
                    <h3 className="font-display text-base font-extrabold sm:text-lg">{c.title}</h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-mutedtd sm:mt-1.5">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ: <details> bawaan, satu terbuka sekaligus */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-[64px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ceklis">FAQ</p>
              <h2 id="judul-tanya" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Masih ada di <span className="stabilo">daftar tanya?</span></h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-todo" open={i === 0} className="tanya group rounded-2xl border-[2.5px] border-inktd bg-white shadow-[3px_3px_0_var(--color-inktd)] open:shadow-[5px_5px_0_rgba(22,163,74,0.5)]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3 font-display text-base font-extrabold leading-snug">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border-[2.5px] border-inktd bg-white text-transparent group-open:bg-ceklis group-open:text-white" aria-hidden="true">
                        <Check size={13} strokeWidth={3.5} />
                      </span>
                      {t.q}
                    </span>
                    <ChevronDown size={16} className="shrink-0 text-mutedtd transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="border-t-[2.5px] border-inktd/10 px-5 py-4 pl-[3.25rem] sm:pl-[3.75rem]">
                    <p className="text-sm font-light leading-relaxed text-mutedtd">{t.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-[2.5px] border-inktd bg-inktd px-4 py-16 text-center text-papertd sm:px-6">
          <div className="mx-auto max-w-xl">
            <p className="font-display text-2xl font-extrabold leading-snug md:text-4xl">
              <span className="text-ceklis-terang" aria-hidden="true">✓</span> Pilih gaya &nbsp; <span className="text-ceklis-terang" aria-hidden="true">✓</span> Chat kami &nbsp; <span className="text-stabilo" aria-hidden="true">☐</span> Mulai produktif
            </p>
            <p className="mt-4 text-papertd/80">Satu langkah lagi. Centang sendiri yang terakhir.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ceklis px-8 py-4 font-display text-sm font-bold text-white transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={17} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-papertd/10 bg-inktd px-4 pb-6 pt-10 text-papertd/75 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-papertd"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">Tiga cara menaklukkan harimu — Hari Ini, Lajur, dan Tuntas.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="font-display text-xs font-bold uppercase tracking-widest text-ceklis-terang">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-papertd">Tiga Aplikasi</a></li>
              <li><a href="#catatan" className="inline-block py-1 transition hover:text-papertd">Fitur Bersama</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-papertd">FAQ</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-ceklis-terang">Hubungi</p>
            <ul className="mt-3 space-y-1">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-papertd">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
              <li><a href={PINTUWEB} className="inline-block py-1 transition hover:text-papertd">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-6xl border-t border-papertd/10 pt-8 text-sm">
          <p id="lanjut-pintuweb" className="font-display text-xs font-bold uppercase tracking-widest text-ceklis-terang">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border-[2px] border-papertd/30 px-4 text-xs font-bold text-papertd transition hover:border-stabilo hover:bg-stabilo hover:text-inktd">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-xs font-bold uppercase tracking-widest text-papertd/70">Daftar lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-papertd/25 underline-offset-4 transition hover:text-papertd hover:decoration-ceklis-terang">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-papertd/10 pt-5 text-xs text-papertd/75 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Aplikasi To-Do — centang terakhir milikmu.
        </p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
