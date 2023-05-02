// TODO API 명세서가 정해지면 그에 맞게 작업해야 함 또한 네이밍도 논의
export type RentStatusType = "renting" | "rentable" | "returned";
export type PerType = "day" | "month" | "year";

export type ProductType = {
  id: number;
  address: string;
  title: string;
  price: string | number;
  per: PerType;
  status: RentStatusType;
};

export type ProductsType = ProductType[];
