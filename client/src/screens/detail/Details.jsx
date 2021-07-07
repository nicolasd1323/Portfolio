import { useParams } from "react-router-dom"

function Details(props) {

  const params = useParams();
  const detailProject = props.pieces.find((piece) => piece.fields.name === params.name)

  return (
    <div>
       <div className="image-piece">
                  <img src={detailProject && detailProject.fields.image} />
                </div>  
      <h2>{detailProject && detailProject.fields.name}</h2>
        <p>{detailProject && detailProject.fields.description}</p>
    </div>
  );
}

export default Details;