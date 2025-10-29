import { useState } from "react";
import Modal from "../../components/modal/modal";
import Projet from "../../components/projets/projet.jsx";
import { projets } from "../../components/projets/projet";

import "./portfolio.css";


function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjet, setSelectedProjet] = useState(null);

  const handleProjetClick = (id) => {
    const projet = projets.find((p) => p.id === id);
    setSelectedProjet(projet);
    setShowModal(true);
  };

  return (
    <div>
      <div className="portfolio__list">
        {projets.map((projet) => (
          <div
            key={projet.id}
            onClick={() => handleProjetClick(projet.id)}
            
          >
            <Projet id={projet.id} />
          </div>
        ))}
      </div>
      {showModal && selectedProjet && (
        <Modal onClose={() => setShowModal(false)} projet={selectedProjet} />
      )}
    </div>
  );
}

export default Portfolio;
/**import Modal from "../../components/modal/modal";
import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Découvrez mes projets</h2>
      <button className="portfolio__button" onClick={() => Modal({ onClose: () => {} })}>
        Ouvrir le modal
      </button>
    </section>
  );
}
export default Portfolio;**/