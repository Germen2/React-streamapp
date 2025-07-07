import { MovieTrailerInterface } from "../interfaces";
import "../css/movieTrailer.css";
function MovieTrailer(props: MovieTrailerInterface) {
  const getEmbedLink = (url: string): string => {
    const regex = /(?:\?v=|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  const embedUrl = getEmbedLink(props.trailerLink);
  return (
    <div
      className={`trailer d-flex flex-column align-items-center justify-content-center ${
        props.active ? "active" : undefined
      }`}
    >
      <h4>Trailer</h4>
      <iframe src={embedUrl}></iframe>
    </div>
  );
}
export default MovieTrailer;
