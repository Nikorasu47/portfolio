import "./home.css";
import Computer from "../../assets/boy-with-computer.svg";

function Home() {
  return (
    <section className="home">
        <div className="home__text">
            <h1 className="home__title">
                FRONTEND<br />DEVELOPEUR<br />JUNIOR
            </h1>
            <p className="home__desc">
                Je suis Nicolas Fort, développeur web junior <br/> avec une passion pour la création de sites web.
            </p>
        </div>
        <div >
            <img className="home__img" src={Computer} alt="Un garçon avec un ordinateur" />
        </div>
    </section>
  );
}

export default Home;

