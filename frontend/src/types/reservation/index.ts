import { IFirestoreTimestamp } from "@type/firebase";
import { RentStatusType } from "@type/product";

export interface IRentalHistory {
  id: string;
  product: {
    img: string;
    location: string;
    title: string;
  };
  lender: {
    name: string;
    id: string;
  };
  borrower: {
    name: string;
    id: string;
  };
  productId: string;
  totalPrice: number;
  createTime: IFirestoreTimestamp;
  reservationDate: {
    startDate: IFirestoreTimestamp;
    endDate: IFirestoreTimestamp;
    key: string;
  };
  status: RentStatusType;
}
