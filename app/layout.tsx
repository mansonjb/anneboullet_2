import type { Metadata } from "next";
import { Geist, Hedvig_Letters_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Switcher from "@/components/Switcher";
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

// Applique couleur et fond avant le premier rendu (URL ?piste=&fond= puis mémoire locale), sans flash.
const init = `try{var d=document.documentElement,q=new URLSearchParams(location.search);function g(c,k,def){var v=q.get(c),s=null;try{s=localStorage.getItem('ab-'+c)}catch(e){}return k.indexOf(v)>-1?v:(k.indexOf(s)>-1?s:def)}d.dataset.piste=g('piste',['vert','sauge','terracotta','brique','beige','ocre','ardoise','encre'],'vert');d.dataset.fond=g('fond',['creme','blanc'],'creme')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" data-piste="vert" data-fond="creme" className={`${geist.variable} ${hedvig.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: init }} />
      </head>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <div className="page">
          <div className="wrap v2">
            <Header />
            <main id="contenu">{children}</main>
            <Footer />
          </div>
        </div>
        <Switcher />
      </body>
    </html>
  );
}
