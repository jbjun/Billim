import useQueryString from "@lib/hooks/useQueryString";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { HOME_PATH } from "@routes/index";
import { NAVER_CONNECTION_PATH } from "@routes/login";
import { setHeaderAuthorization } from "@lib/api";
import { setCookie } from "@lib/api/cookie";
function NaverRedirectPage() {
  const navigate = useNavigate();
  const { oauthId = "123", isRegistered = "true" } = useQueryString([
    "oauthId",
    "isRegistered",
  ]);

  useEffect(() => {
    // sessionKey 저장
    setHeaderAuthorization(oauthId);
    setCookie("sessionKey", oauthId);

    if (isRegistered === "true") {
      navigate(`/${HOME_PATH}`);
    } else {
      navigate(`/${NAVER_CONNECTION_PATH}`);
    }
  });
  return <div>NaverRedirectPage</div>;
}

export default NaverRedirectPage;
