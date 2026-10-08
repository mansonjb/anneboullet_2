import type { Metadata } from "next";
import { Geist, Hedvig_Letters_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500"] });
const hedvig = Hedvig_Letters_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://anneboullet-2.vercel.app"),
  title: { default: "Anne Boullet Studio · Décoratrice d'intérieur à La Rochelle", template: "%s · Anne Boullet Studio" },
  description:
    "Conseil, conception et décoration pour les particuliers et les professionnels, à une heure autour de La Rochelle, sur l'Île de Ré et Oléron.",
  robots: { index: false, follow: false },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" data-piste="vert" className={`${geist.variable} ${hedvig.variable}`} suppressHydrationWarning>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <div className="page">
          <div className="wrap v2">
            <Header />
            <main id="contenu">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
