import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend', weight: ['300', '400', '600', '800'] });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalTodo","description":"Koleksi 3 aplikasi to-do","url":"https://www.pintuweb.id/aplikasi-to-do","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.id"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.id"},{"@type":"ListItem","position":2,"name":"Aplikasi To-Do","item":"https://www.pintuweb.id/aplikasi-to-do"}]}};

export const metadata = {
  metadataBase: new URL("https://www.pintuweb.id/aplikasi-to-do"),
  title: "PortalTodo — Tiga Cara Menaklukkan Harimu",
  description: "Tiga aplikasi daftar tugas dengan paradigma berbeda: Hari Ini untuk daftar harian, Lajur untuk papan kanban dengan batas WIP, dan Tuntas untuk tugas dengan kalender.",
  applicationName: "PortalTodo",
  keywords: ["aplikasi to-do", "template produktivitas", "kanban", "task manager"],
  authors: [{ name: "PortalTodo" }],
  creator: "PortalTodo",
  publisher: "PortalTodo",
  alternates: { canonical: "https://www.pintuweb.id/aplikasi-to-do" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.pintuweb.id/aplikasi-to-do",
    siteName: "PortalTodo",
    title: "PortalTodo — Tiga Cara Menaklukkan Harimu",
    description: "Tiga aplikasi daftar tugas dengan paradigma berbeda: Hari Ini untuk daftar harian, Lajur untuk papan kanban dengan batas WIP, dan Tuntas untuk tugas dengan kalender.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalTodo — Tiga Cara Menaklukkan Harimu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalTodo — Tiga Cara Menaklukkan Harimu",
    description: "Tiga aplikasi daftar tugas dengan paradigma berbeda: Hari Ini untuk daftar harian, Lajur untuk papan kanban dengan batas WIP, dan Tuntas untuk tugas dengan kalender.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={lexend.variable}>
      <body className="antialiased">
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
