// 외부모듈
import { useEffect, useState } from "react";
import { throttle } from "lodash";

interface IUseScrollPosition {
  throttleMs?: number;
  ref: React.MutableRefObject<null | HTMLElement>;
}

const useScrollPosition = ({ throttleMs = 200 }: IUseScrollPosition) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  if (typeof window === "undefined") return 0;

  const handleScroll = throttle(() => {
    setScrollPosition(window.pageYOffset);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
};

export default useScrollPosition;
