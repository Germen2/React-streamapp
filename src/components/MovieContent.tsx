import "../css/movieContent.css";
import { BuyButton } from "./";
import { MovieContentInterface, OperationEnum } from "../interfaces";

function MovieContent(props: MovieContentInterface) {
  return (
    <div className={`content ${props.active ? "active" : undefined}`}>
      <h1 className="movie-title">{props.title}</h1>
      {props.trending ? (
        <span className="badge-trending">{`🔥 #${props.trending} en tendencia`}</span>
      ) : (
        <></>
      )}
      <h4>
        <span>{props.year}</span>
        <span>{props.releaseDate}</span>
        <span>{props.length}</span>
      </h4>
      <h5>
        {props.categories.map((category) => (
          <span key={category.id}>{category.name}</span>
        ))}
      </h5>
      <p>{props.description}</p>

      {!props.isPurchased && (
        <div className="button">
          <BuyButton
            text={`Comprar por: $${props.buy}`}
            movieId={props.id}
            operationType={OperationEnum.COMPRA}
          />
        </div>
      )}
      {!props.isPurchased && !props.isRented && (
        <div className="button">
          <BuyButton
            text={`Alquilar por: $${props.rent}`}
            movieId={props.id}
            operationType={OperationEnum.RENTA}
          />
        </div>
      )}
      {!props.isPurchased && props.isRented && (
        <div className="mt-2">
          <span className="movie-content-rented-badge">{`Ya rentaste esta película`}</span>
        </div>
      )}
      {props.isPurchased && !props.isRented && (
        <div className="mt-2">
          <span className="movie-content-purchased-badge">{`Ya tienes esta película`}</span>
        </div>
      )}
    </div>
  );
}
export default MovieContent;
