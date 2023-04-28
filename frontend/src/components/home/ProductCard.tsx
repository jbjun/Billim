/* eslint-disable @typescript-eslint/no-empty-interface */
// 외부모듈
import { Box, Typography, CardMedia, CardContent, Card } from "@mui/material";

// 내부모듈
import RentalStatusTag from "@components/RentStatusTag";
import { PerType, ProductType } from "@type/product/";

interface IProductCardProps extends ProductType {}

export default function ProductCard({
  address,
  title,
  price,
  per,
  status,
  id,
}: IProductCardProps) {
  return (
    <Card
      sx={{
        width: "44vw",
        border: "none",
        borderRadius: "10px",
      }}
      variant="outlined"
    >
      <CardMedia
        sx={{ width: "44vw", height: 166 }}
        image="https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg"
        title="test image"
      />
      <CardContent sx={{ m: 0, p: 0 }}>
        <Typography variant="caption" color="text.secondary">
          {address}
        </Typography>
        <Box
          sx={{
            width: "44vw",
            height: 34,
            overflow: "hidden",
          }}
        >
          <RentalStatusTag status={status} />
          <Typography sx={{ ml: 0.5 }} gutterBottom variant="b5">
            {title}
          </Typography>
        </Box>
        <Typography sx={{ display: "inline-block", mt: 2 }} variant="b5">
          <span style={{ fontWeight: "bold" }}>{price}</span>/{" "}
          {getPerTitle(per)}
        </Typography>
      </CardContent>
    </Card>
  );
}

function getPerTitle(per: PerType) {
  switch (per) {
    case "day":
      return "일";
    case "month":
      return "월";
    case "year":
      return "년";

    default:
      break;
  }
}
