import { useNavigate } from "react-router-dom";
import { movieCardInterface } from "../interfaces";
import "../css/dashboardMovieCard.css";
import { TrendingUpOutline } from "react-ionicons";

function DashboardMovieCard(props: movieCardInterface) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home?id=${props.id}`);
  };

  return (
    <div className="dashboardMovieCard" onClick={handleClick}>
      <div className="dmc-image-container">
        <img src={props.img} alt={props.title} className="dmc-movie-img" />
        {props.trending > 0 && (
          <span className="dmc-badge-trending">
            <TrendingUpOutline cssClasses="dmc-trending-icon" />
            {` #${props.trending}`}
          </span>
        )}
      </div>
      <div className="dmc-movie-info">
        <h4 className="dmc-movie-title">{props.title}</h4>
        <p className="dmc-movie-length">{props.length}</p>
      </div>
    </div>
  );
}

export default DashboardMovieCard;
