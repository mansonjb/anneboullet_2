import { partenaires } from "@/data/site";
import { Arrow } from "./ui";

export default function Partenaires({ cles, compact = false }: { cles: string[]; compact?: boolean }) {
  const liste = cles.map((k) => partenaires[k]).filter(Boolean);
  return (
    <ul className={`partners${compact ? " compact" : ""}`}>
      {liste.map((p) => (
        <li key={p.nom}>
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener">
              <span className="serif">{p.nom}</span>
              <span>{p.metier}</span>
              <Arrow size={12} />
            </a>
          ) : (
            <div>
              <span className="serif">{p.nom}</span>
              <span>{p.metier}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
