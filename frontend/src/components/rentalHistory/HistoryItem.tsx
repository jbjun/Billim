// 외부모듈
import {
  Box,
  Button,
  Grid,
  Stack,
  SvgIcon,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "date-fns";

// 내부모듈
import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { RentStatusType } from "@type/product";
import { IRentalHistory } from "@type/reservation";
import { firestoreTimestampToDate } from "@lib/utils/time";
import HistoryButton from "./HistoryButton";

const getRentalStatusTextAndColor = (status: RentStatusType) => {
  switch (status) {
    case "renting":
      return {
        color: "#0099FF",
        text: "대여중",
      };
    case "rentable":
      return { color: "#4FC98C", text: "대여가능" };
    case "reservationInProgress":
      return { color: "#7360FF", text: "예약중" };
    case "reservationCancelled":
      return { color: "", text: "예약취소" };
    case "returned":
      return { color: "#4FC98C", text: "반납완료" };
    case "returnDelay":
      return { color: "#E80E42", text: "반납지연" };
    default:
      return { color: "", text: "error" };
  }
};

const RentalBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: RentStatusType }>(({ theme, status }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 8px 3px",
  height: "27px",
  color: getRentalStatusTextAndColor(status).color,
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "14px",
  border: "1px solid #E5E5E5",
  borderRadius: "4px",
  marginRight: "8px",
}));

interface IHistoryItemProps {
  item: IRentalHistory;
  type: "lend" | "borrow";
}

const HistoryItem = ({ item, type }: IHistoryItemProps) => {
  const {
    id,
    status,
    borrower,
    reservationDate,
    product,
    totalPrice,
    lender,
    productId,
  } = item;
  const { img, title, location } = product;
  const { startDate, endDate } = reservationDate;
  const isLend = type === "lend";

  return (
    <>
      <Link
        to={`/product/${productId}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Box overflow="hidden" pt="24px" lineHeight="normal">
          <Box display="flex" alignItems="center" mb="8px">
            <RentalBox status={status}>
              {getRentalStatusTextAndColor(status).text}
            </RentalBox>
            <Typography color="text.gray700" variant="b7">
              {format(firestoreTimestampToDate(startDate), "yyyy-MM-dd HH:mm")}
            </Typography>
            <Typography color="text.gray700" variant="b7">
              ~
            </Typography>
            <Typography color="text.gray700" variant="b7">
              {format(firestoreTimestampToDate(endDate), "yyyy-MM-dd HH:mm")}
            </Typography>
          </Box>
          <Box height="90px" display="flex">
            <Box
              borderRadius="4px"
              overflow="hidden"
              sx={{
                img: {
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                },
              }}
            >
              <img src={img} />
            </Box>
            <Stack pl="8px" spacing={1}>
              <Box display="flex" alignItems="center">
                <SvgIcon
                  sx={{ width: "16px", height: "16px" }}
                  component={LocationIcon}
                  htmlColor="#666666"
                />
                <Typography color="text.gray700" variant="b7">
                  {location}
                </Typography>
              </Box>
              <Typography variant="h7">{title}</Typography>
              <Typography component="p" variant="b7">
                {type === "borrow" ? lender.name : borrower.name}
              </Typography>
              <Typography color="text.gray700" component="p" variant="b6">
                {`${totalPrice.toLocaleString()}원`}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Link>
      {isLend && (
        <HistoryButton
          status={status}
          id={id}
          productId={productId}
          reservationDate={reservationDate}
        />
      )}
      <Box
        sx={{ height: "7px", backgroundColor: "#F3F7FA", margin: "8px -16px" }}
      />
    </>
  );
};

export default HistoryItem;
