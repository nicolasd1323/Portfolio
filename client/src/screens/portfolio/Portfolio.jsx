import { React } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/navagation/Nav"
import Footer from "../../components/footer/Footer"
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <div>
      <Nav />
      <div className='div'>
        <h1>Personal Projects</h1>
        {props.pieces && (
          <div className="portfolio-pieces">
            {props.pieces.map((item) => (
              <Link to={`/portfolio-products/${item.fields.name}`}>
                <div className="name-piece">
                  <p>{item.fields.name}</p>
                </div>
                <div className="image-piece">
                  <img className="image-pieces" src={item.fields.image} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
