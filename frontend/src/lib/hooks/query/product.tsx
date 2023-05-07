// 외부모듈
import { IProductApiReturn } from "@type/product";
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// 내부모듈
import {
  IfetchProductsOption,
  fetchGetProduct,
  fetchGetProducts,
  fetchRegistrationProduct,
  fetchUpdateViewCount,
} from "@lib/api/product";
import { hideSpinner, showSpinner } from "@store/modules/spinnerSlice";
import { showSnackbar } from "@store/modules/snackbarSlice";
import { useEffect } from "react";

export type ErrorType = {
  error: {
    message: string;
  };
};

export const useRegistrationProduct = () => {
  const dispath = useDispatch();
  const navigator = useNavigate();

  return useMutation((data: FormData) => fetchRegistrationProduct(data), {
    onMutate: () => {
      dispath(showSpinner());
    },
    onSuccess: () => {
      dispath(
        showSnackbar({
          message: "등록이 완료되었습니다.",
        })
      );
    },
    onError: () => {
      dispath(
        showSnackbar({
          message: "등록에 실패했습니다.",
          severity: "error",
        })
      );
    },
    onSettled: () => {
      dispath(hideSpinner());
      navigator("/home");
    },
  });
};

export const useInfiniteProducts = (
  props: IfetchProductsOption,
  option?: UseInfiniteQueryOptions<
    IProductApiReturn[],
    ErrorType,
    IProductApiReturn[],
    IProductApiReturn[],
    any
  >
) => {
  // const queryClient = useQueryClient();

  return useInfiniteQuery(["products", props], () => fetchGetProducts(props), {
    // getNextPageParam: (lastPage, page) => {},
    ...option,
  });
};

export const useGetProduct = (id: string) => {
  return useQuery(["product"], () => fetchGetProduct(id));
};

export const useUpdateViewCount = (id: string) =>
  useMutation(() => fetchUpdateViewCount(id));
