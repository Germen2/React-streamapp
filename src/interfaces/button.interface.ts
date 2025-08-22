import { OperationEnum } from "./models/operation.dto";

export interface ButtonInterface {
  text: string;
  movieId: number;
  operationType: OperationEnum;
}
