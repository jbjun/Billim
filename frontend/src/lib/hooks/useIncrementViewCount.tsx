// 외부모듈
import { useEffect } from "react";
import { useParams } from "react-router";

// 내부모듈
import { useUpdateViewCount } from "@lib/hooks/query/product";

const useIncrementViewCount = (id?: string) => {
  id = id || useParams().id;
  if (!id) return null;

  const { mutate: updateViewCount } = useUpdateViewCount(id);
  useEffect(() => {
    if (id) updateViewCount();
  }, []);
};

export default useIncrementViewCount;
