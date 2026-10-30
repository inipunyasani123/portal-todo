'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/** Tombol "Galeri lain" di bilah jejak: daftar galeri PintuWeb lain (tautan absolut, bukan next/link). */
export default function GaleriMenu({ daftar, base }) {
  const [buka, setBuka] = useState(false);
  const kotak = useRef(null);
  const tombol = useRef(null);

  useEffect(() => {
    if (!buka) return;
    const tutup = (kembali) => { setBuka(false); if (kembali) tombol.current?.focus(); };
    const onKey = (e) => { if (e.key === 'Escape') tutup(true); };
    const onKlik = (e) => { if (kotak.current && !kotak.current.contains(e.target)) tutup(false); };
    const onFokus = (e) => { if (kotak.current && !kotak.current.contains(e.target)) tutup(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onKlik);
    document.addEventListener('focusin', onFokus);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onKlik); document.removeEventListener('focusin', onFokus); };
  }, [buka]);

  return (
    <div ref={kotak} className="relative ms-auto">
      <button ref={tombol} type="button" aria-expanded={buka} aria-controls="menu-galeri" onClick={() => setBuka((b) => !b)}
        className="inline-flex min-h-8 items-center gap-1 rounded-full border-2 border-papertd/40 px-3 py-0.5 text-xs font-bold transition hover:bg-stabilo hover:text-inktd">
        Galeri lain <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${buka ? 'rotate-180' : ''}`} />
      </button>
      {buka && (
        <ul id="menu-galeri" aria-label="Galeri lain di PintuWeb" className="absolute end-0 top-full z-50 mt-1.5 w-60 max-w-[calc(100vw-2rem)] rounded-2xl border-[2.5px] border-inktd bg-papertd p-1.5 text-sm text-inktd shadow-[5px_5px_0_rgba(22,163,74,0.5)]">
          {daftar.map((g) => (
            <li key={g.path}>
              <a href={`${base}/${g.path}`} className="flex min-h-10 items-center rounded-xl px-3 font-semibold transition hover:bg-stabilo">{g.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
