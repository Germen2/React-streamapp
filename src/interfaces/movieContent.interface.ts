export interface MovieContentInterface {
  id: number;
  title: string;
  year: string;
  date: string;
  length: string;
  category: string[];
  description: string;
  buy: string;
  rent: string;
  active: boolean;
  trending: {
    status: boolean;
    number: number;
  };
}
