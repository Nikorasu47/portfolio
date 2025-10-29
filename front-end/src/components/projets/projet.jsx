import { projets } from "./projet";


import "./projet.css";

function Projet({ id }) {
  const projet = projets.find(p => p.id === id);
  if (!projet) return <div>Projet introuvable</div>;

  return (
    <div className="projet-card">
      <div className="projet-card__img">
        <img src={projet.photo} alt={projet.titre} />
      </div>
      <div className="projet-card__content">
        <h3 className="projet-card__title">{projet.titre}</h3>
        
        <div className="projet-card__meta">
          <span className="projet-card__cat">{projet.categorie}</span>
          <span className="projet-card__tags">
            {projet.tags.map(tag => (
              <span key={tag} className="projet-card__tag">{tag}</span>
            ))}
          </span>
        </div>
        
      </div>
    </div>
  );
}

export default Projet;
