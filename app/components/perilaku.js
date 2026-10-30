'use client';
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

/** Tautan langsung #slug: gulir ke kartu (scroll-margin memperhitungkan header lengket) lalu sorot ±2 detik. */
export function SorotKartu() {
  useEffect(() => {
    let timer;
    const sorot = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id && document.querySelector(`[data-demo="${CSS.escape(id)}"]`);
      if (!el) return;
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      el.classList.remove('sorot');
      void el.offsetWidth;
      el.classList.add('sorot');
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove('sorot'), 2200);
    };
    const onKlik = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (a && a.getAttribute('href') === window.location.hash) sorot(); // tautan yang sama diklik lagi
    };
    sorot();
    window.addEventListener('hashchange', sorot);
    document.addEventListener('click', onKlik);
    return () => { clearTimeout(timer); window.removeEventListener('hashchange', sorot); document.removeEventListener('click', onKlik); };
  }, []);
  return null;
}

/** Bilah aksi lengket di ponsel: muncul setelah hero lewat, hilang saat footer terlihat. */
export function BilahLengket({ waHref }) {
  const [heroLewat, setHeroLewat] = useState(false);
  const [footerTampil, setFooterTampil] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('hero');
    const footer = document.querySelector('footer');
    if (!hero || !footer) return;
    const a = new IntersectionObserver(([e]) => setHeroLewat(!e.isIntersecting && e.boundingClientRect.bottom < 0));
    const b = new IntersectionObserver(([e]) => setFooterTampil(e.isIntersecting));
    a.observe(hero); b.observe(footer);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);
  const tampil = heroLewat && !footerTampil;
  return (
    <div inert={!tampil} aria-hidden={!tampil} className={`fixed inset-x-0 bottom-0 z-30 border-t-[2.5px] border-inktd bg-papertd px-4 pt-3 shadow-[0_-4px_0_rgba(29,36,32,0.08)] transition duration-300 md:hidden ${tampil ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      <div className="mx-auto flex max-w-md gap-2.5">
        <a href="#koleksi" className="inline-flex min-h-11 flex-none items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-[2.5px] border-inktd bg-white px-4 font-display text-sm font-bold text-inktd">
          Lihat demo
        </a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-[2.5px] border-inktd bg-ceklis px-3 font-display text-sm font-bold text-white shadow-[3px_3px_0_var(--color-inktd)]">
          <MessageCircle size={16} aria-hidden="true" /> Pesan via WhatsApp<span className="sr-only"> (tab baru)</span>
        </a>
      </div>
    </div>
  );
}
