import { useNavigate } from "react-router";

export default function useGoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return handleGoBack;
}
