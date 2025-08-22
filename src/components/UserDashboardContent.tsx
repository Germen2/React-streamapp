import { UserDashboardContentInterface } from "../interfaces";
import DashboardMovieCard from "./DashboardMovieCard";

function UserDashboardContent(props: UserDashboardContentInterface) {
  if (!props.user) {
    return null;
  }

  const totalMovies = props.purchasedMovies.length + props.rentedMovies.length;

  return (
    <div className="dashboard-container mt-5">
      <div className="user-info">
        <h2>
          {props.user.firstName} {props.user.lastName}
        </h2>
        <p>{props.user.email}</p>
        <div className="moviesqty">
          <span>Cantidad de películas </span>
          <span className="badge-moviesqty">{totalMovies}</span>
        </div>
      </div>

      <div className="movies-section mt-5">
        <h3>Mis películas</h3>
        <div className="movies-columns">
          {/* Columna de películas compradas */}
          <div className="movies-column">
            <h4>Compradas</h4>
            {props.purchasedMovies && props.purchasedMovies.length > 0 ? (
              <div className="movies-grid">
                {props.purchasedMovies.map((movie) => (
                  <DashboardMovieCard
                    key={movie.id}
                    id={movie.id}
                    img={movie.img}
                    categories={movie.categories.map((c) => c.name)}
                    length={movie.length}
                    title={movie.title}
                    trending={movie.trending}
                  />
                ))}
              </div>
            ) : (
              <p className="no-movies">Aún no tienes películas compradas.</p>
            )}
          </div>

          {/* Columna de películas rentadas */}
          <div className="movies-column">
            <h4>Rentadas</h4>
            {props.rentedMovies && props.rentedMovies.length > 0 ? (
              <div className="movies-grid">
                {props.rentedMovies.map((movie) => (
                  <DashboardMovieCard
                    key={movie.id}
                    id={movie.id}
                    img={movie.img}
                    categories={movie.categories.map((c) => c.name)}
                    length={movie.length}
                    title={movie.title}
                    trending={movie.trending}
                  />
                ))}
              </div>
            ) : (
              <p className="no-movies">Aún no tienes películas rentadas.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardContent;
