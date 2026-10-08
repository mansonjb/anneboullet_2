import Image from "next/image";
import Temoignages from "@/components/Temoignages";
import Pros from "@/components/Pros";
import ContactForm from "@/components/ContactForm";
import { contact, faqPages } from "@/data/site";
import { Arrow, Ph } from "@/components/ui";
import { FaqBlock } from "@/components/blocks";
import { getProjet, legende, projets, type Projet } from "@/data/projets";
import { missions, services } from "@/data/site";
import { JsonLd } from "@/components/blocks";

const oleron = getProjet("maison-de-famille-saint-denis-d-oleron") as Projet;


const matieres = [
  { nom: "Le bois", ligne: "Il porte la maison et la réchauffe.", img: "bois", lieu: "Charpente apparente, Saint-Denis-d'Oléron" },
  { nom: "Les fibres", ligne: "Rotin et jute laissent passer une lumière adoucie.", img: "rotin", lieu: "Suspensions, Saint-Denis-d'Oléron" },
  { nom: "Les textiles", ligne: "Lin et tissus imprimés invitent à s'installer.", img: "lin", lieu: "Coussins, Saint-Denis-d'Oléron" },
  { nom: "Le zellige", ligne: "Chaque carreau renvoie la lumière à sa façon.", img: "zellige", lieu: "Douche, Saint-Clément-des-Baleines" },
  { nom: "La pierre", ligne: "Elle garde la mémoire du lieu.", img: "pierre", lieu: "Mur en pierre, Saint-Clément-des-Baleines" },
  { nom: "Le laiton", ligne: "Il se patine avec le temps et réchauffe la lumière.", img: "laiton", lieu: "Pommeau de douche, Les Portes-en-Ré" },
];

const etapes = [
  { titre: "Premier contact", texte: "Un échange pour comprendre votre projet et vos envies." },
  { titre: "Visite et devis", texte: "Une rencontre sur place, puis un devis accompagné d'un débriefing écrit." },
  { titre: "Carnet de projet", texte: "Un questionnaire sur votre façon de vivre et le relevé des cotes." },
  { titre: "Esquisse puis projet", texte: "Avant-projet sommaire, puis détaillé : plans de principe, matières, 3D." },
  { titre: "Suivi et réception", texte: "Un suivi esthétique du chantier, jusqu'à la réception." },
];

export default function Home() {
  return (
    <>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Anne Boullet Studio",
              description: "Décoratrice d'intérieur à La Rochelle : conseil, conception et décoration pour les particuliers et les professionnels.",
              url: "https://anneboullet-2.vercel.app",
              address: { "@type": "PostalAddress", addressLocality: "La Rochelle", postalCode: "17000", addressCountry: "FR" },
              areaServed: ["La Rochelle", "Île de Ré", "Oléron", "Châtelaillon-Plage", "Rochefort", "Royan", "Saintes"],
              knowsAbout: ["Décoration d'intérieur", "Agencement intérieur", "Signalétique", "Rénovation"],
            }}
          />
          <section className="v2-hero">
            <Ph
              photo={oleron.photos[0]}
              className="v2-hero-ph"
              sizes="100vw"
              preload
              alt="Séjour de la maison de famille à Saint-Denis-d'Oléron : charpente apparente, bois blond, lin et rotin"
            />
            <h1 className="v2-hero-t serif">
              <span>Décoratrice</span>
              <span>d&apos;intérieur</span>
              <span>à La Rochelle</span>
            </h1>
            <p className="v2-hero-geo">La Rochelle · 46,16° N, 1,15° O</p>
          </section>

          <section className="v2-intro">
            <p className="v2-statement serif">
              Des maisons lumineuses et chaleureuses, pensées pour durer, qui semblent avoir toujours vécu.
            </p>
            <div className="v2-split">
              <p className="v2-label serif">
                De la première visite
                <br />à la réception
              </p>
              <div>
                <p className="v2-para serif">
                  Conseil, conception et décoration pour les particuliers et les professionnels, à une heure autour de La Rochelle.
                  Chaque projet part de la lumière, de la maison telle qu&apos;elle est et de la façon dont vous y vivez. Le bois, le
                  lin, la terre cuite et la pierre sont choisis pour bien vieillir, loin des tendances qui passent.
                </p>
                <p className="v2-links">
                  <a href="/contact">Prendre rendez-vous</a>
                  <a href="/studio">Découvrir le studio</a>
                </p>
              </div>
            </div>
            <ul className="v2-zones" aria-label="Zone d'intervention">
              <li><a href="/zones/la-rochelle">La Rochelle</a></li>
              <li><a href="/zones/ile-de-re">Île de Ré</a></li>
              <li><a href="/zones/oleron">Oléron</a></li>
              <li>Châtelaillon-Plage</li>
              <li>Rochefort</li>
              <li>Royan</li>
            </ul>
          </section>

          <section className="v2-sec" id="realisations">
            <h2 className="v2-big serif">
              Réalisations <sup>({projets.length})</sup>
            </h2>
            <p className="v2-sub serif">Maisons de famille, résidences secondaires et lieux professionnels, choisis parmi les projets récents du studio.</p>
            <div className="v2-work">
              {projets.map((p) => (
                <a key={p.slug} className="v2-w" href={`/realisations/${p.slug}`}>
                  <Ph photo={p.photos[0]} className="" ratio={undefined} sizes="(max-width: 960px) 100vw, 50vw" alt={p.alt} />
                  <span className="v2-w-cap">
                    <span className="serif">{p.titre}</span>
                    <span>{legende(p)}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="v2-sec" id="missions">
            <h2 className="v2-big serif">Missions</h2>
            <p className="v2-sub serif">Du simple regard extérieur au projet complet : vous choisissez le niveau d&apos;accompagnement.</p>
            <ol className="v2-steps">
              {missions.map((m) => (
                <li key={m.slug}>
                  <span className="v2-n">{m.n}</span>
                  <h3 className="serif">{m.titre}</h3>
                  <p>{m.lede}</p>
                  <p className="v2-pour">Idéal pour {m.pour}</p>
                  <a href={`/missions/${m.slug}`}>Découvrir la mission</a>
                </li>
              ))}
            </ol>
            <h3 className="v2-mid serif">Un projet, en cinq temps</h3>
            <ol className="v2-steps v2-steps-5">
              {etapes.map((s, k) => (
                <li key={s.titre}>
                  <span className="v2-n">0{k + 1}</span>
                  <h4 className="serif">{s.titre}</h4>
                  <p>{s.texte}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="v2-sec" id="matieres">
            <h2 className="v2-big serif">Matières</h2>
            <p className="v2-sub serif">
              Avant les couleurs et les meubles, je pense à ce que vous toucherez chaque jour : des matières naturelles, travaillées par des
              artisans d&apos;ici, qui vieillissent avec la maison.
            </p>
            <div className="v2-mat">
              {matieres.map((m) => (
                <figure key={m.nom}>
                  <div className="ph" style={{ aspectRatio: "4 / 5" }}>
                    <Image src={`/matieres/${m.img}.jpg`} alt={`${m.nom.replace(/^L[ea]s? |^L'/, "")} : ${m.lieu}`} fill sizes="(max-width: 960px) 50vw, 33vw" />
                  </div>
                  <figcaption>
                    <span className="serif">{m.nom}</span> {m.ligne} <span className="v2-lieu">{m.lieu}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="sec">
            <div className="sec-top">
              <h2 className="h2 serif">
                D&apos;une maison vide <span className="mute">à une maison habitée</span>
              </h2>
            </div>
            <div className="temo">
              <Temoignages />
            </div>
          </section>

          <section className="sec" id="professionnels">
            <Pros />
          </section>

          <section className="sec sf" id="savoir-faire">
            <div className="sf-head">
              <h2 className="h2 serif">
                Huit savoir-faire, <span className="mute">un même regard</span>
              </h2>
              <a className="m-link" href="/services">
                Tous les savoir-faire
                <Arrow size={14} />
              </a>
            </div>
            <ol className="sf-list">
              {services.map((s, k) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`}>
                    <span className="sf-n">{String(k + 1).padStart(2, "0")}</span>
                    <span className="sf-name serif">{s.nom}</span>
                    <Arrow size={16} />
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <FaqBlock items={faqPages.accueil} />

          <section className="sec" id="contact">
            <div className="contact">
              <div>
                <h2 className="h2 serif">
                  Parlons de <span className="mute">votre projet</span>
                </h2>
                <p style={{ color: "#4F4840", margin: "20px 0 0" }}>
                  Quelques lignes suffisent. Anne vous rappelle sous [délai] pour un premier échange, puis un rendez-vous
                  sur place.
                </p>
                <ul className="ct-lines">
                  <li>
                    <span>Téléphone</span>
                    <a href="#">{contact.tel}</a>
                  </li>
                  <li>
                    <span>WhatsApp</span>
                    <a href="#">{contact.whatsapp}</a>
                  </li>
                  <li>
                    <span>E-mail</span>
                    <a href="#">{contact.mail}</a>
                  </li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </section>
    </>
  );
}
