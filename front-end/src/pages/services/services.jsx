import "./services.css";
import Card from "../../components/card/card";
import { services } from "./servicesT";


import "./services.css";

function Services() {
  

  return (
    <section className="services">
      <h2 className="services__title">
        <span className="services__title-gradient">Services</span>
      </h2>
      <div className="services__cards">
        {services.map((service, idx) => (
          <Card key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
