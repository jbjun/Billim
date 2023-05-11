import { getCookie } from "@lib/api/cookie";
import { LOGIN_PATH } from "@routes/login";
import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

// 사용자만 접근 가능한 페이지
interface IAuthorizedPageProps {
  children: React.ReactElement | React.ReactElement[];
}
function AuthorizedPage({ children }: IAuthorizedPageProps) {
  const id = getCookie("userId");
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!id) {
      navigate(`/${LOGIN_PATH}`);
    }
  }, [id]);
  return <>{children}</>;
}

export default AuthorizedPage;
