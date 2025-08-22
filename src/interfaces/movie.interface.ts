export interface MovieInterface {
  id: number;
  title: string;
  description: string;
  categories: MovieCategory[];
  img: string;
  banner: string;
  releaseDate: string;
  year: string;
  length: string;
  trailer: string;
  active: boolean;
  buy: number;
  rent: number;
  trending: number;
}

interface MovieCategory {
  id: number;
  name: string;
  active: boolean;
  sortOrder: number;
}
