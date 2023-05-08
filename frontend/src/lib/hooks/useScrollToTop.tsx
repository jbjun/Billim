// hooks/useScrollToTop.js
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { useSessionStorage } from "usehooks-ts";

const useScrollToTop = (scrollTopRemember = false) => {
  const { pathname } = useLocation();
  const [top, setTop] = useSessionStorage(pathname, 0);

  useLayoutEffect(() => {
    const $body = document.querySelector("body");
    if ($body) $body.scrollTo(0, scrollTopRemember ? top : 0);

    return () => {
      if ($body && scrollTopRemember) setTop($body.scrollTop);
    };
  }, []);

  return null;
};

export default useScrollToTop;
