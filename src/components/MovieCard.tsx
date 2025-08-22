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
    <div className="movieCard" onClick={handleClick}>
      <div className="moviecard-image-container">
        <img src={props.img} alt={props.title} className="moviecard-img" />
        {props.trending > 0 && (
          <span className="moviecard-badge-trending">
            <TrendingUpOutline cssClasses="trending-card-icon" />
            {` #${props.trending}`}
          </span>
        )}
      </div>
      <div className="moviecard-info">
        <h4 className="moviecard-title">{props.title}</h4>
        <p className="moviecard-length">{props.length}</p>
      </div>
    </div>
  );
}

export default MovieCard;
