import { UserDto } from "./models/user.dto";
import { MovieInterface } from "./movie.interface";

export interface UserDashboardContentInterface {
  user: UserDto | null;
  rentedMovies: MovieInterface[];
  purchasedMovies: MovieInterface[];
}
