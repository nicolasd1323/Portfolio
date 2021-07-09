import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/navagation/Nav";
import Footer from "../../components/footer/Footer";
import "./Home.css";
function Home(props) {
  return (
    <div>
      <Nav />
      <div className="home-all">
        <div className="intro">
          <h1 className="nico">Hello, I am Nicolas,</h1>
          <h1 className="nico">Hola, yo soy Nicolas,</h1>
          <h1 className="nico">Salut, je suis Nicolas.</h1>
        </div>
        <div className="resume">
          <h2>Junior Software Engineer</h2>
          <h5>RESUME</h5>
      <a href="https://drive.google.com/file/d/1ko9SIeW_QT48jBGpXCwg64SxA1FK_iTT/view"><img className="image-PORTFOLIO"src="https://i.ibb.co/BB4Zzm3/Screen-Shot-2021-07-09-at-3-08-39-PM.png"></img></a>

        </div>
        <div className="about-me">
          <h4>About Me</h4>
          <p>
            I was born and raised in a small neighborhood in Bogota, Colombia; I
            consider myself a hard worker and passionate person. I am bilingual,
            Spanish being my first language. My background in overcoming
            difficult situations and learning new cultures combined with my
            passion for technology and Software Engineering make me unique to
            accomplish anything I set my mind to. My experience as group leader
            and team player are a big part of who I am as a Junior Software
            Engineer.
          </p>
        </div>
        <div className="link-to-portfolio">
          <h3>WANT TO SEE MY WORK!? TAKE A LOOK AT MY PROJECTS</h3>
          <Link className="portfolio-link-b" to="/portfolio-products">
            <p>PORTFOLIO</p>
          </Link>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Home;
