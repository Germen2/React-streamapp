export interface MovieDetailsInterface {
  id: string;
  title: string;
  description: string;
  genre: string[];
  date: string;
  year: string;
  length: string;
  buy: string;
  rent: string;
  active: boolean;
  trending: { status: boolean; number: number };
  // sinopsis: string[];
  // details: {
  //   cast: { actor: string }[];
  //   director: string;
  // };
}
