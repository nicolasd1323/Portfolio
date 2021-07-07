import React from "react";
import Nav from "../../components/navagation/Nav";
import Footer from "../../components/footer/Footer";
function Home(props) {
  return (
    <div>
      <Nav />
      <div>
        <h1>Hello, I am Nicolas,</h1>
        <h1>Hola, yo soy Nicolas</h1>
        <h1>salut, je suis Nicolas</h1>
      </div>
      <div>
        <h4>About Me</h4>
        <p>I was born and raised in a small neighborhood in Bogota, Colombia;  I consider myself a hard worker and passionate person. I am bilingual, Spanish being my first language. My background in overcoming difficult situations and learning new cultures combined with my passion for technology and Software Engineering make me unique to accomplish anything I set my mind to. My experience as group leader and team player are a big part of who I am  as a Junior Software Engineer. 
        </p>
        <p>Want to know more about my work? Check my projects... </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
