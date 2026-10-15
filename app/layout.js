import './globals.css';
import { Lexend } from 'next/font/google';
import { templates } from './components/templates-data';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend', weight: ['300', '400', '600', '800'] });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah demo dihitung dari data, bukan ditulis tangan.
const URL_PORTAL = 'https://www.pintuweb.id/aplikasi-to-do';
const TITLE = `Contoh Aplikasi To-Do: ${templates.length} Demo Siap Coba | PintuWeb`;
const DESCRIPTION = "Tiga aplikasi daftar tugas dengan paradigma berbeda: Hari Ini untuk daftar harian, Lajur untuk papan kanban dengan batas WIP, dan Tuntas untuk tugas dengan kalender.";

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":TITLE,"description":DESCRIPTION,"url":URL_PORTAL,"inLanguage":"id-ID","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.id"},"publisher":{"@type":"Organization","name":"PintuWeb","url":"https://www.pintuweb.id"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.id"},{"@type":"ListItem","position":2,"name":"Aplikasi To-Do","item":URL_PORTAL}]}};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: "PintuWeb",
  keywords: ["aplikasi to-do", "template produktivitas", "kanban", "task manager"],
  authors: [{ name: "PintuWeb", url: "https://www.pintuweb.id" }],
  creator: "PintuWeb",
  publisher: "PintuWeb",
  alternates: { canonical: URL_PORTAL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: URL_PORTAL,
    siteName: "PintuWeb",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
