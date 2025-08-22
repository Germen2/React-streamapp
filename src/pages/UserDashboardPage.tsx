import { useNavigate } from "react-router-dom";
import { Header, MoviesCarousel, UserDashboardContent } from "../components";
import "../css/userDashboard.css";
import { useAuthStatus, useUserAndMovies } from "../hooks";

function UserDashboard() {
  const { user, userMovies, loading, operations } = useUserAndMovies();
  const authStatus = useAuthStatus();
  const navigate = useNavigate();

  const purchasedMovieIds = operations
    .filter((op) => op.operationType === "COMPRA")
    .map((op) => op.movieId);

  const rentedMovieIds = operations
    .filter((op) => op.operationType === "RENTA")
    .map((op) => op.movieId);

  // Obtener las películas completas
  const purchasedMovies = userMovies.filter((movie) =>
    purchasedMovieIds.includes(movie.id)
  );

  const rentedMovies = userMovies.filter((movie) =>
    rentedMovieIds.includes(movie.id)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    navigate("/home");
  }

  return (
    <>
      <Header isLoggedIn={authStatus.isLoggedIn} user={authStatus.authUser} />
      <MoviesCarousel />
      <UserDashboardContent
        user={user}
        purchasedMovies={purchasedMovies}
        rentedMovies={rentedMovies}
      />
    </>
  );
}

export default UserDashboard;
