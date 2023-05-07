/* eslint-disable @typescript-eslint/no-empty-interface */
// 외부모듈
import { Box, Typography, CardMedia, CardContent, Card } from "@mui/material";

// 내부모듈
import RentalStatusTag from "@components/common/RentStatusTag";
import { IProductApiReturn } from "@type/product/";

interface IProductCardProps extends IProductApiReturn {}

export default function ProductCard({
  location,
  title,
  price,
  images,
  status,
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
        image={images[0]}
        title="test image"
      />
      <CardContent sx={{ m: 0, p: 0 }}>
        <Typography variant="caption" color="text.secondary">
          {location}
        </Typography>
        <Box
          sx={{
            width: "44vw",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <RentalStatusTag status={status} />
          <Typography sx={{ ml: 0.5 }} variant="b5">
            {title}
          </Typography>
        </Box>
        <Typography sx={{ display: "inline-block", mt: 0.8 }} variant="b5">
          <span
            style={{ fontWeight: "bold" }}
          >{`${price.toLocaleString()} 원 `}</span>
          /일
        </Typography>
      </CardContent>
    </Card>
  );
}
