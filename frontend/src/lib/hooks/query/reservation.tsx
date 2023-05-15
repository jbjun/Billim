// 외부모듈
import { useMutation, useQuery, useQueryClient } from "react-query";

// 내부모듈
import {
  IUpdateRentalStatusBody,
  fetchGetBorrowList,
  fetchGetLendList,
  fetchReservation,
  fetchUpdateRentalStatus,
} from "@lib/api/reservation";
import { useDispatch } from "react-redux";
import { hideSpinner, showSpinner } from "@store/modules/spinnerSlice";
import { showSnackbar } from "@store/modules/snackbarSlice";
import { ReservationState } from "@container/home/productDetail/ReservationDialogContainer";

export const useReservation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation((data: ReservationState) => fetchReservation(data), {
    onMutate: () => {
      dispatch(showSpinner());
    },
    onSuccess: () => {
      dispatch(
        showSnackbar({
          message: "예약이 완료되었습니다.",
        })
      );
    },
    onError: () => {
      dispatch(
        showSnackbar({
          message: "예약에 실패했습니다.",
          severity: "error",
        })
      );
    },
    onSettled: (_, _2, data) => {
      dispatch(hideSpinner());
      queryClient.invalidateQueries(["product", data.productId]);
    },
  });
};

export const useGetLendList = (lenderId: string) => {
  return useQuery(["lendList", lenderId], () => fetchGetLendList(lenderId));
};

export const useGetBorrowList = (borrowId: string) => {
  return useQuery(["borrowList", borrowId], () => fetchGetBorrowList(borrowId));
};

export const uesUpdateRentalStatus = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation(
    (body: IUpdateRentalStatusBody) => fetchUpdateRentalStatus(body),
    {
      onMutate: () => {
        dispatch(showSpinner());
      },
      onSettled: () => {
        dispatch(hideSpinner());
        queryClient.invalidateQueries();
      },
    }
  );
};
