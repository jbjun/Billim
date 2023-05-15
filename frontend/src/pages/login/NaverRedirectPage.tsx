import useQueryString from "@lib/hooks/useQueryString";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { HOME_PATH } from "@routes/index";
import { NAVER_CONNECTION_PATH } from "@routes/login";
import { setHeaderAuthorization } from "@lib/api";
import { setCookie } from "@lib/api/cookie";

interface INaverRedirectPageProps {
  needRegister?: boolean;
}
function NaverRedirectPage({ needRegister }: INaverRedirectPageProps) {
  const navigate = useNavigate();
  const { id } = useQueryString(["id"]);

  useEffect(() => {
    // sessionKey 저장
    // setHeaderAuthorization(id);
    // setCookie("sessionKey", id);
    setCookie("userId", id);

    if (needRegister) {
      navigate(`/${NAVER_CONNECTION_PATH}`);
    } else {
      navigate(`${HOME_PATH}`);
    }
  });
  return <div>NaverRedirectPage</div>;
}

export default NaverRedirectPage;
