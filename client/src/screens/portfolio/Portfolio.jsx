import { React } from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {
  return (
    <div>
      <div>
        {props.pieces && (
          <div className="portfolio-pieces">
            {props.pieces.map((item) => (
              <Link to={`/portfolio-product/${item.fields.name}`}>
                <div className="name-piece">
                  <p>{item.fields.name}</p>
                </div>
                <div className="image-piece">
                  <img src={item.fields.image} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
