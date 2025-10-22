import { Highlighter } from "../components/ui/highlighter";

export default function Description() {
  return (
    <div>
      Bonjour, je m'appelle Steeve. Je développe des applications web et mobiles
      avec les frameworks
      <Highlighter action="highlight" color="#FF9800">
        <b className="mx-2">JavaScript</b>
      </Highlighter>
      <span className="mx-2">et</span>
      <Highlighter action="highlight" color="#FF9800">
        <b className="mx-2">PHP</b>
      </Highlighter>. Je crée des solutions qui apportent une réelle valeur aux utilisateurs
      et mettre l’accent sur la satisfaction client dans chaque projet.
    </div>
  );
}
