/* eslint-disable @typescript-eslint/no-empty-interface */
// 외부모듈
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Skeleton,
} from "@mui/material";

// 내부모듈
import RentalStatusTag from "@components/common/RentStatusTag";
import { IProductApiReturn } from "@type/product/";
import { useState } from "react";

interface IProductCardProps extends IProductApiReturn {}

export default function ProductCard({
  location,
  title,
  price,
  images,
  status,
}: IProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
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
        component="img"
        onLoad={handleImageLoad}
        sx={{
          width: "44vw",
          height: 166,
          display: imageLoaded ? "block" : "none",
        }}
        image={images[0]}
        title="test image"
      />
      {!imageLoaded && (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="44vw"
          height="166px"
        />
      )}
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
