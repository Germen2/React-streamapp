export interface OperationDto {
  id: number;
  userId: number;
  movieId: number;
  operationType: OperationEnum;
  operationDate: string;
  expirationDate: string;
}

export enum OperationEnum {
  COMPRA = "COMPRA",
  RENTA = "RENTA",
}
