import { MovieInterface } from "./movie.interface";

export interface MovieBannerInterface {
  movie: MovieInterface;
  movieList: MovieInterface[];
  isPurchased: boolean;
  isRented: boolean;
}
