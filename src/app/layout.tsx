import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const title = "Разработка сайтов для бизнеса | Анаркан Садыралиева";
const description =
  "Создаю сайты для бизнеса: лендинги, многостраничные сайты и редизайн. Веб-дизайн, Tilda, Next.js и адаптивная frontend-разработка.";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anarkan.dev"),
  title,
  alternates: {
    canonical: "https://anarkan.dev/",
  },
  description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Anarkan Sadyralieva",
    title,
    description,
    url: "https://anarkan.dev/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  verification: {
    google: "OosqjLmccVCPxUtPXoCev0LPu31I5IwMKdKeBkIjn00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
