import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__left">
        <div className="contact__info">
          <h2>
            <FontAwesomeIcon icon={faEnvelope} />
            <strong>Mail :</strong>
          </h2>
          <a href="mailto:nicolas.fort@email.com">nicolas.fort@email.com</a>
        </div>
        <div className="contact__Cv">
          <h2>
            <FontAwesomeIcon icon={faLocationDot} />
            <strong>Curriculum Vitae</strong>
          </h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pas encore disponible
          </a>
        </div>
      </div>

      <div className="contact__center">
        <h2>Contactez-moi</h2>
      </div>
      <div className="contact__right">
        <div className="contact__info">
          <h2>
            <FontAwesomeIcon icon={faPhone} />
            <strong>Téléphone :</strong>
          </h2>
          <a href="tel:+33685990819">06 85 99 08 19</a>
        </div>
        <div className="contact__address">
          <h2>
            <FontAwesomeIcon icon={faLocationDot} />
            <strong>Adresse :</strong>
          </h2>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sos%2C+47170+Lot-et-Garonne%2C+Nouvelle-Aquitaine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sos, 47170 Lot-et-Garonne, Nouvelle-Aquitaine
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
