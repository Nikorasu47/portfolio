import React, { useState } from "react";
import "./modal.css";
import { projets } from "../projets/projet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
 
} from "@fortawesome/free-solid-svg-icons";

function Modal({ onClose, projet }) {
  // Gère l'id courant du projet affiché
  const [currentId, setCurrentId] = useState(projet?.id || projets[0].id);
  const currentProjet = projets.find((p) => p.id === currentId) || projets[0];

  // Pré-remplir les champs
  const titre = currentProjet.titre || "";
  const description = currentProjet.description || "";
  const categorie = currentProjet.categorie || "";
  const tags = currentProjet.tags || [];
  const lien = currentProjet.lien || "";
  const photo = currentProjet.photo || null;

  // Navigation gauche/droite
  const handlePrev = () => {
    let idx = projets.findIndex((p) => p.id === currentId);
    if (idx === 0) {
      setCurrentId(projets[projets.length - 1].id);
    } else {
      setCurrentId(projets[idx - 1].id);
    }
  };
  const handleNext = () => {
    let idx = projets.findIndex((p) => p.id === currentId);
    if (idx === projets.length - 1) {
      setCurrentId(projets[0].id);
    } else {
      setCurrentId(projets[idx + 1].id);
    }
  };

  // Fermer la modale si clic sur overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal__header">
          <h3 className="modal__input modal--title">{titre}</h3>
           
          <button className="modal__close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Body */}
        <div className="modal__body">
          <div
            className="left__arrow"
            onClick={handlePrev}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>

          <form className="modal__form">
            <textarea
              className="modal__textarea"
              placeholder="Description (max 260 caractères)"
              maxLength={260}
              value={description}
              readOnly
            />
            <div className="modal__label">
              <div className="modal__row">
                <label>Catégorie :</label>
                <span className="modal__category">{categorie}</span>
              </div>
              <div className="modal__row">
                <label>Tags :</label>
                <div className="modal__tags">
                  {tags.map((tag) => (
                    <span key={tag} className="modal__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a href={lien} className="modal__link" target="_blank" rel="noopener noreferrer">{lien}</a>
            
          </form>

          <div className="modal__photo">
            <div className="modal__photo-box">
              {photo ? (
                <img src={photo} alt={titre} className="modal__img" />
              ) : (
                <span>Photo</span>
              )}
            </div>
          </div>

          <div
            className="right__arrow"
            onClick={handleNext}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Modal;
