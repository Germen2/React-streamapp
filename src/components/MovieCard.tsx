import { useNavigate } from "react-router-dom";
import { movieCardInterface } from "../interfaces";
import "../css/movieCard.css";
import { TrendingUpOutline } from "react-ionicons";

function MovieCard(props: movieCardInterface) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home?id=${props.id}`);
  };
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
      <div className="movieCard" onClick={handleClick}>
        <img src={props.img} alt={props.id.toString()} className="img-fluid" />
        <p className="length">{props.length}</p>
        {props.trending > 0 ? (
          <span className="badge-trending">
            <TrendingUpOutline cssClasses={"trending-up-outline"} />
            {` #${props.trending}`}
          </span>
        ) : (
          <></>
        )}
        <div className="content">
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
