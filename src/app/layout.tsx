import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const title = "Anarkan Sadyralieva — Web Developer & Designer";
const description =
  "Создаю современные сайты для бизнеса: дизайн, frontend-разработка, Next.js и Tilda. Помогаю привлекать клиентов и увеличивать продажи.";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
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
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
