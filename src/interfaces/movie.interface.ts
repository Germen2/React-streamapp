export interface MovieInterface {
  id: number;
  title: string;
  description: string;
  genre: string[];
  img: string;
  banner: string;
  date: string;
  year: string;
  length: string;
  trailer: string;
  active: boolean;
  buy: string;
  rent: string;
  trending: {
    status: boolean;
    number: number;
  };
}
