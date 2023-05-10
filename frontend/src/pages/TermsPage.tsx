// 외부모듈
import { Box } from "@mui/material";
import { useParams } from "react-router";

// 내부모듈
import { ServiceDescriptionType } from "@container/login/NaverConnectionContainer";
import BillimServiceDescription from "@components/common/BillimServiceDescription";
import Header from "@components/layout/Header";
import useScrollToTop from "@lib/hooks/useScrollToTop";

const getKoTile = (enTitle: ServiceDescriptionType) => {
  switch (enTitle) {
    case "service":
      return "서비스 이용약관";
    case "use_personal_information":
      return "개인정보 처리 방침";
    case "location":
      return "위치정보 이용 약관";
    case "marketing":
      return "마케팅 약관";
    case "personal_information_processing_policy":
      return "개인정보 처리 방침";
    default:
      return "";
  }
};

const TermsPage = () => {
  useScrollToTop();
  const { term } = useParams();
  if (!term) null;

  return (
    <Box>
      <Header
        title={getKoTile(term as ServiceDescriptionType)}
        needBackHistory
      />
      <BillimServiceDescription
        descriptionType={term as ServiceDescriptionType}
      />
    </Box>
  );
};

export default TermsPage;
