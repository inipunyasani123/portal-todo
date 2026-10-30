// Data 3 aplikasi daftar tugas. `halaman` = halaman dalam yang bisa dicoba langsung.
export const templates = [
  {
    name: 'Hari Ini',
    berkas: 'hari-ini',
    terjual: 1,
    tagline: 'Daftar tugas harian',
    description: 'Catat tugas hari ini lalu centang. Yang belum selesai ikut terbawa ke besok.',
    image: '/aplikasi-to-do/images/todo/hari-ini.webp',
    url: 'https://todo-classic.pintuweb.id',
    fitur: ['Ketik jam dan tanda penting langsung terbaca', 'Tugas belum selesai terbawa ke besok', 'Rekap 7 hari terakhir'],
    cocok: 'tugas harian',
    halaman: [['/rekap', 'Rekap 7 hari'], ['/panduan', 'Panduan']],
  },
  {
    name: 'Lajur',
    berkas: 'lajur',
    terjual: 0,
    tagline: 'Kanban: papan kartu tugas',
    description: 'Geser kartu tugas dari Antre, Dikerjakan, sampai Selesai. Cocok untuk tim kecil.',
    image: '/aplikasi-to-do/images/todo/lajur.webp',
    url: 'https://todo-kanban.pintuweb.id',
    fitur: ['Geser kartu dengan mouse atau jari', 'Daftar centang, tenggat, dan label di tiap kartu', 'Statistik lama pengerjaan'],
    cocok: 'proyek tim kecil',
    halaman: [['/statistik', 'Statistik'], ['/arsip', 'Arsip']],
  },
  {
    name: 'Tuntas',
    berkas: 'tuntas',
    terjual: 0,
    tagline: 'Daftar tugas plus kalender',
    description: 'Atur tugas dengan prioritas, tenggat, dan label. Lihat semuanya di kalender bulanan.',
    image: '/aplikasi-to-do/images/todo/tuntas.webp',
    url: 'https://todo-manager.pintuweb.id',
    fitur: ['Ringkasan tugas yang bisa diklik untuk menyaring', 'Kalender bulanan per tenggat', 'Label bisa diganti namanya'],
    cocok: 'kerja dan rumah',
    halaman: [['/kalender', 'Kalender'], ['/label', 'Label']],
  },
];

/** "https://todo-classic.pintuweb.id" -> "classic-todo" (slug demo di PintuWeb/app/lib/demos.ts). */
const SLUG = { 'todo-classic': 'classic-todo', 'todo-kanban': 'kanban-board', 'todo-manager': 'task-manager' };
export const slugOf = (t) => SLUG[new URL(t.url).hostname.split('.')[0]];
