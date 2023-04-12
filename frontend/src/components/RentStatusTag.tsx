// 외부모듈
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

// 내부모듈
import { RentStatusType } from "@type/product";

type RentalStatusTagProps = {
  status: RentStatusType;
};

const RentalStatusTag = ({ status }: RentalStatusTagProps) => {
  const theme = useTheme();
  switch (status) {
    case "rentable":
      return (
        <Typography variant="b5" color={theme.palette.green.main}>
          대여가능
        </Typography>
      );
    case "renting":
      return (
        <Typography variant="b5" color={theme.palette.blue.main}>
          대여중
        </Typography>
      );
    default:
      return null;
  }
};

export default RentalStatusTag;
