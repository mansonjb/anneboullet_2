"use client";

import { useEffect, useState } from "react";

export const PISTES = {
  vert: "#56634F",
  sauge: "#62735D",
  terracotta: "#A5502F",
  brique: "#7A3B24",
  beige: "#8A6D4C",
  ocre: "#8C6A2F",
  ardoise: "#4A5A66",
  encre: "#2F2B27",
} as const;

type Piste = keyof typeof PISTES;

export const FONDS = { creme: "#F5F2EC", blanc: "#FFFFFF" } as const;
type Fond = keyof typeof FONDS;

function save(k: string, v: string) {
  try {
    localStorage.setItem(k, v);
  } catch {}
}

export default function Switcher() {
  const [piste, setPiste] = useState<Piste>("vert");
  const [fond, setFond] = useState<Fond>("creme");

  useEffect(() => {
    const d = document.documentElement.dataset;
    if (d.piste && d.piste in PISTES) setPiste(d.piste as Piste);
    if (d.fond && d.fond in FONDS) setFond(d.fond as Fond);
  }, []);

  // Mémorise le choix et le reporte dans l'URL, pour partager une combinaison
  const apply = (cle: "piste" | "fond", v: string) => {
    document.documentElement.dataset[cle] = v;
    save(`ab-${cle}`, v);
    const u = new URL(location.href);
    u.searchParams.set(cle, v);
    history.replaceState(null, "", u);
  };
  const choose = (p: Piste) => {
    setPiste(p);
    apply("piste", p);
  };
  const chooseFond = (f: Fond) => {
    setFond(f);
    apply("fond", f);
  };

  return (
    <div className="switch" role="group" aria-label="Choisir les couleurs du site">
      <span className="lbl">
        Couleur <b>{piste}</b>
      </span>
      <div className="dots">
        {(Object.keys(PISTES) as Piste[]).map((p) => (
          <button
            key={p}
            type="button"
            className="sw"
            style={{ background: PISTES[p] }}
            aria-pressed={piste === p}
            aria-label={`Piste ${p}`}
            title={p}
            onClick={() => choose(p)}
          />
        ))}
      </div>
      <span className="lbl lbl-fond">Fond</span>
      <div className="fonds">
        {(Object.keys(FONDS) as Fond[]).map((f) => (
          <button key={f} type="button" className="fd" aria-pressed={fond === f} onClick={() => chooseFond(f)}>
            <i style={{ background: FONDS[f] }} />
            {f === "creme" ? "Crème" : "Blanc"}
          </button>
        ))}
      </div>
    </div>
  );
}
