import "../css/movieContent.css";
import { BuyButton } from "./";
import { MovieContentInterface } from "../interfaces";

function MovieContent(props: MovieContentInterface) {
  return (
    <div className={`content ${props.active ? "active" : undefined}`}>
      <h1 className="movie-title">{props.title}</h1>
      {props.trending.status ? (
        <span className="badge-trending">{`🔥 #${props.trending.number} en tendencia`}</span>
      ) : (
        <></>
      )}
      <h4>
        <span>{props.year}</span>
        <span>{props.date}</span>
        <span>{props.length}</span>
      </h4>
      <h5>
        {props.category.map((category) => (
          <span>{category}</span>
        ))}
      </h5>
      <p>{props.description}</p>

      {/* <div className="button">
        <DetailsButton text={`Detalles`} id={props.id} />
      </div> */}
      <div className="button">
        <BuyButton text={`Comprar por: ${props.buy}`} />
      </div>
      <div className="button">
        <BuyButton text={`Alquilar por: ${props.rent}`} />
      </div>
    </div>
  );
}
export default MovieContent;
