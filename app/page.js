import Image, { getImageProps } from 'next/image';
import GaleriMenu from './components/galeri-menu';
import { SorotKartu, BilahLengket } from './components/perilaku';
import { Check, ArrowDown, ArrowUpRight, MessageCircle, Moon, Zap, Save, Smartphone, PencilRuler, Package, ChevronDown } from 'lucide-react';
import { templates, slugOf } from './components/templates-data';
import { LANJUT, BACA_JUGA, GALERI_LAIN, PINTUWEB, PAKET, WA_DISPLAY, JENIS, wa, waDemo } from './components/pintuweb';

const WA = wa(`Halo PintuWeb, saya tertarik ${JENIS}. Boleh minta info?`);
const N = templates.length;

// Kartu hero: checkbox sungguhan (tanpa JS), yang terakhir sengaja belum dicentang.
const HERO_TODO = [
  { t: 'Bangun pagi', done: true },
  { t: 'Cari aplikasi to-do yang pas', done: true },
  { t: 'Mulai hari yang produktif', done: false },
];

const CATATAN = [
  { icon: Save, title: 'Tersimpan otomatis', desc: 'Tugas tersimpan di perangkatmu. Tutup browser, tugas tetap ada.' },
  { icon: Moon, title: 'Mode terang dan gelap', desc: 'Pilih yang nyaman di mata.' },
  { icon: Zap, title: 'Ringan dan cepat', desc: 'Ketik, enter, beres.' },
  { icon: Smartphone, title: 'Enak dibuka di HP', desc: 'Tombol mudah dijangkau dan kartu bisa digeser dengan jari.' },
  { icon: PencilRuler, title: 'Sudah ada contoh tugas', desc: 'Langsung terisi contoh supaya kamu bisa mencoba.' },
  { icon: Package, title: 'Jadi milikmu', desc: 'Setelah lunas, aplikasinya milikmu. Hosting tahun pertama sudah termasuk.' },
];

const TANYA = [
  { q: 'Apa itu aplikasi to-do dan kanban?', a: 'Aplikasi to-do adalah daftar tugas yang bisa dicentang. Kanban adalah papan kartu Antre, Dikerjakan, Selesai. Cocok untuk tim kecil: catat, bagi, centang.' },
  { q: 'Untuk pribadi atau tim?', a: 'Bisa dua-duanya. Kalau tim perlu berbagi tugas dalam satu akun, kami bisa buatkan versi khusus.' },
  { q: 'Berapa biayanya?', a: `Paket ${PAKET.nama} mulai ${PAKET.mulai} (kisaran ${PAKET.kisaran}). Dikerjakan ${PAKET.waktu}.` },
  { q: 'Apakah data tugas saya aman?', a: 'Di contoh ini, data hanya tersimpan di perangkatmu dan tidak dikirim ke mana pun. Untuk simpan di server, kami bisa buatkan.' },
  { q: 'Apa bedanya ketiga aplikasi ini?', a: 'Hari Ini untuk daftar harian. Lajur untuk papan kartu tugas. Tuntas untuk tugas dengan tenggat dan kalender.' },
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
      {/* Logo pintu asli PintuWeb (367×512, tidak diubah); di latar gelap diberi alas putih membulat */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/aplikasi-to-do/logo-pintuweb.png" alt="" width={22} height={30} className={kecil ? 'h-[30px] w-auto rounded-md bg-white p-[3px]' : 'h-[30px] w-auto'} />
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${kecil ? 'text-ceklis-terang' : 'text-ceklis'}`}>Aplikasi To-Do</span>
      </span>
    </>
  );
}

/** Gambar kartu: potret ponsel di < 768 px, gambar desktop di layar lebar. */
function GambarDemo({ t }) {
  const potret = t.image.replace(/\.webp$/, '-m.webp');
  const d = getImageProps({ src: t.image, alt: '', fill: true, sizes: '540px', className: 'object-cover object-top transition duration-500 group-hover:scale-[1.02]' }).props;
  const m = getImageProps({ src: potret, alt: '', fill: true, sizes: 'calc(100vw - 37px)', className: 'object-cover object-top' }).props;
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={m.srcSet} sizes={m.sizes} />
      <img {...d} alt="" />
    </picture>
  );
}

export default function PortalTodo() {
  return (
    <div id="top" className="ruled min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-inktd text-xs text-papertd">
        <ol className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-1 sm:px-6">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">To-Do &amp; Produktivitas</li>
          <li className="ms-auto list-none"><GaleriMenu daftar={GALERI_LAIN} base={PINTUWEB} /></li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b-[2.5px] border-inktd bg-papertd/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-bold text-mutedtd md:flex">
            <a href="#koleksi" className="transition hover:text-ceklis">Contoh</a>
            <a href="#catatan" className="transition hover:text-ceklis">Fitur</a>
            <a href="#tanya" className="transition hover:text-ceklis">Tanya Jawab</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border-[2.5px] border-inktd bg-ceklis px-3.5 py-2 text-[13px] sm:text-sm font-bold text-white shadow-[3px_3px_0_var(--color-inktd)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--color-inktd)] sm:px-5">
            Pesan aplikasi web
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section id="hero" className="px-4 pb-8 pt-6 sm:px-6 sm:pb-14 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
            <div>
              <span className="naik inline-block rounded-full border-[2.5px] border-inktd bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-inktd)]">
                {N} contoh · bisa dicoba
              </span>
              <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.08] sm:mt-6 sm:text-6xl">
                Selesaikan tugasmu, <span className="stabilo">apapun gayamu</span>.
              </h1>
              <p className="mt-5 hidden max-w-md text-lg font-light text-mutedtd sm:block">
                Daftar tugas untuk tim kecil: catat, bagi, centang. Pilih gaya kerjamu.
              </p>
              <div className="naik naik-2 mt-5 flex flex-wrap sm:mt-8 items-center gap-x-5 gap-y-4">
                <a href="#koleksi" className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-inktd bg-inktd px-7 py-3.5 font-display text-sm font-bold text-papertd shadow-[4px_4px_0_rgba(22,163,74,0.5)] transition hover:translate-y-0.5">
                  Lihat Contoh <ArrowDown size={16} aria-hidden="true" />
                </a>
                {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
                <p className="text-sm font-semibold text-inktd/80">Mulai <span className="stabilo px-1 font-extrabold">{PAKET.mulai}</span> <span className="whitespace-nowrap"><span aria-hidden="true" className="mx-1 text-ceklis">·</span>{PAKET.waktu}</span></p>
              </div>
            </div>

            {/* Strip demo ponsel: demo terlihat di layar pertama */}
            <nav aria-label="Loncat ke demo" className="-mx-4 md:hidden">
              <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 pt-1 [scroll-padding-inline:1rem]">
                {templates.map((t) => (
                  <li key={t.name} className="shrink-0 snap-start">
                    <a href={`#${slugOf(t)}`} className="block w-[104px]">
                      <span className="relative block h-[190px] w-[104px] overflow-hidden rounded-xl border-[2.5px] border-inktd bg-white shadow-[3px_3px_0_var(--color-inktd)]">
                        <Image src={t.image.replace(/\.webp$/, '-m.webp')} alt="" fill sizes="104px" loading="eager" className="object-cover object-top" />
                      </span>
                      <span className="mt-2 block font-display text-sm font-extrabold">{t.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Kartu to-do sungguhan: centang sendiri yang terakhir */}
            <div className="naik naik-2 window hidden w-full max-w-sm rotate-1 justify-self-center md:block md:max-w-md md:justify-self-end">
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
                  <span>Coba centang yang terakhir.</span>
                  {/* Dihitung CSS dari centangan sungguhan (tanpa JS) */}
                  <span className="hitung-selesai shrink-0 font-bold text-ceklis" aria-hidden="true">/{HERO_TODO.length}</span>
                </p>
              </fieldset>
            </div>
          </div>
        </section>

        {/* Showcase rows */}
        <section id="koleksi" aria-label="Contoh aplikasi to-do" className="scroll-mt-[64px] px-4 pb-16 sm:px-6 sm:pb-20">
          <ul className="mx-auto max-w-6xl space-y-14 sm:space-y-16">
            {templates.map((t, i) => (
              <li key={t.name} id={slugOf(t)} data-demo={slugOf(t)} className={`grid items-center gap-6 md:grid-cols-2 md:gap-8 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Jendela aplikasi: pratinjau (tautan untuk tetikus; papan ketik memakai tombol "Buka demo") */}
                <div className="window group">
                  <div className="window-bar">
                    <TitikJendela />
                    <span className="ml-2 text-xs font-semibold text-mutedtd" aria-hidden="true">{t.berkas}.app</span>
                  </div>
                  <a href={t.url} target="_blank" rel="noopener noreferrer" className="block" tabIndex={-1} aria-hidden="true">
                    <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/10]">
                      <GambarDemo t={t} />
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
                    <a href={waDemo(t.name, t.url)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-[2.5px] border-inktd bg-white px-5 font-display text-sm font-bold text-inktd transition hover:bg-stabilo">
                      Pesan yang mirip<span className="sr-only"> dengan {t.name} lewat WhatsApp</span>
                    </a>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-mutedtd">Mulai <span className="stabilo px-1 font-extrabold text-inktd">{PAKET.mulai}</span> <span aria-hidden="true" className="mx-0.5 text-ceklis">·</span> {PAKET.waktu}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Catatan kaki — fitur bersama */}
        <section id="catatan" aria-labelledby="judul-catatan" className="scroll-mt-[64px] border-t-[2.5px] border-inktd bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ceklis">Fitur</p>
              <h2 id="judul-catatan" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Fitur di <span className="stabilo">semua contoh</span></h2>
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
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ceklis">Tanya Jawab</p>
              <h2 id="judul-tanya" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Yang sering <span className="stabilo">ditanya</span></h2>
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
              <span className="text-ceklis-terang" aria-hidden="true">✓</span> Pilih contoh &nbsp; <span className="text-ceklis-terang" aria-hidden="true">✓</span> Chat kami &nbsp; <span className="text-stabilo" aria-hidden="true">☐</span> Mulai produktif
            </p>
            <p className="mt-4 text-papertd/80">Ceritakan kebutuhanmu, kami bantu buatkan.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ceklis px-8 py-4 font-display text-sm font-bold text-white transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={17} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-papertd/10 bg-inktd px-4 pb-24 pt-10 md:pb-6 text-papertd/75 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-papertd"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">Tiga contoh aplikasi to-do: Hari Ini, Lajur, dan Tuntas.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="font-display text-xs font-bold uppercase tracking-widest text-ceklis-terang">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-papertd">Semua Contoh</a></li>
              <li><a href="#catatan" className="inline-block py-1 transition hover:text-papertd">Fitur</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-papertd">Tanya Jawab</a></li>
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
          <p id="baca-juga" className="mt-6 font-display text-xs font-bold uppercase tracking-widest text-papertd/70">Baca juga</p>
          <ul aria-labelledby="baca-juga" className="mt-2 flex flex-wrap gap-2.5">
            {BACA_JUGA.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border-[2px] border-papertd/30 px-4 text-xs font-bold text-papertd transition hover:border-stabilo hover:bg-stabilo hover:text-inktd">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-xs font-bold uppercase tracking-widest text-papertd/70">Galeri lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-papertd/25 underline-offset-4 transition hover:text-papertd hover:decoration-ceklis-terang">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-papertd/10 pt-5 text-xs text-papertd/75 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Aplikasi To-Do
        </p>
      </footer>
      <SorotKartu />
      <BilahLengket waHref={WA} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
