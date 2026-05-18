import type { Metadata } from "next";
import { Quicksand, Manrope, Lora } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-lien.fr"),
  title: {
    default: "Nova Lien — Éducatrice canine comportementaliste à Dijon",
    template: "%s | Nova Lien",
  },
  description:
    "Amandine Pinto, éducatrice canine comportementaliste à Dijon. Méthodes positives, accompagnement personnalisé. Éducation chiot, rééducation comportementale, renforcement du lien humain-chien. Zone Dijon 30 km.",
  keywords: [
    "éducateur canin Dijon",
    "comportementaliste canin Dijon",
    "éducation chiot Dijon",
    "rééducation comportementale chien Dijon",
    "méthodes positives chien",
    "Nova Lien",
    "Amandine Pinto",
  ],
  authors: [{ name: "Amandine Pinto" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Nova Lien",
    title: "Nova Lien — Éducatrice canine comportementaliste à Dijon",
    description:
      "Comprendre votre chien, renforcer votre lien. Amandine Pinto, éducatrice canine comportementaliste à Dijon. Méthodes positives, sans coercition.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${quicksand.variable} ${manrope.variable} ${lora.variable}`}
    >
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
