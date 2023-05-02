// 외부모듈
import { Box, Stack, SvgIcon, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "date-fns";

// 내부모듈
import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { RentStatusType } from "@type/product";

const RentalBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: RentStatusType }>(({ theme, status }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 8px 3px",
  height: "27px",
  color:
    status === "renting" ? theme.palette.blue.main : theme.palette.green.main,
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "14px",
  border: "1px solid #E5E5E5",
  borderRadius: "4px",
  marginRight: "8px",
}));

interface IHistoryItemProps {
  item: any;
}

const HistoryItem = ({ item }: IHistoryItemProps) => {
  const { img, duration, status, price, productName, borrower } = item;
  const { startDate, endDate } = duration;
  return (
    <Link to="/product/1" style={{ textDecoration: "none", color: "black" }}>
      <Box overflow="hidden" p="24px 0" lineHeight="normal">
        <Box display="flex" alignItems="center" mb="8px">
          <RentalBox status={status}>
            {status === "renting" ? "대여중" : "반납완료"}
          </RentalBox>
          <Typography color="text.gray700" variant="b7">
            {format(startDate, "yyyy-mm-dd hh:mm")}
          </Typography>
          <Typography color="text.gray700" variant="b7">
            ~
          </Typography>
          <Typography color="text.gray700" variant="b7">
            {format(endDate, "yyyy-mm-dd hh:mm")}
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
                자양동
              </Typography>
            </Box>
            <Typography variant="h7">{productName}</Typography>
            <Typography component="p" variant="b7">
              {borrower}
            </Typography>
            <Typography color="text.gray700" component="p" variant="b6">
              {`${price.toLocaleString()}원`}
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{ height: "7px", backgroundColor: "#F3F7FA", margin: "0 -16px" }}
      />
    </Link>
  );
};

export default HistoryItem;
