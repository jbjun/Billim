// 외부모듈
import {
  ILender,
  ReservationState,
} from "@container/home/productDetail/ReservationDialogContainer";
import { RentStatusType } from "@type/product";
import { IRentalHistory } from "@type/reservation";
import axios from "axios";

const BASE_URL = "https://asia-northeast3-billim-93f78.cloudfunctions.net";

export const fetchReservation = async (product: ReservationState) => {
  const data = await axios.post(`${BASE_URL}/reservation`, product);
  return data;
};

export const fetchGetLendList = async (
  lenderId: string
): Promise<IRentalHistory[]> => {
  const res = await axios.get(`${BASE_URL}/getLendList`, {
    params: { lenderId },
  });
  return res.data.lendList;
};

export const fetchGetBorrowList = async (
  borrowerId: string
): Promise<IRentalHistory[]> => {
  const res = await axios.get(`${BASE_URL}/getBorrowList`, {
    params: { borrowerId },
  });
  return res.data.borrowList;
};

export interface IUpdateRentalStatusBody {
  id: string;
  productId: string;
  status: RentStatusType;
}

export const fetchUpdateRentalStatus = async (
  body: IUpdateRentalStatusBody
) => {
  const data = await axios.patch(`${BASE_URL}/updateRentalStatus`, body);
  return data;
};
