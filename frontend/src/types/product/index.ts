import { IFirestoreTimestamp } from "@type/firebase";

// TODO API 명세서가 정해지면 그에 맞게 작업해야 함 또한 네이밍도 논의
export type RentStatusType =
  | "renting"
  | "rentable"
  | "returned"
  | "returnDelay"
  | "reservationInProgress"
  | "reservationCancelled";

export interface IProductApiReturn {
  id: number;
  location: string;
  title: string;
  price: number;
  createTime: Date;
  category: string;
  publisherId: string;
  text: string;
  borrowedDays: IFirestoreTimestamp[];
  images: string[];
  status: RentStatusType;
  nickName: string;
  profileImg: string;
  visibility: boolean;
  viewCount: number;
}

export interface IProduct {}
