import Header from "@components/layout/Header";
import React from "react";
import { IconButton, Grid, SvgIcon, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as DegitalDeviceIcon } from "@assets/icons/category/digital_device.svg";
import { ReactComponent as HouseHoldIcon } from "@assets/icons/category/Household_icon.svg";
import { ReactComponent as FurnitureInteriorIcon } from "@assets/icons/category/Furniture_interior.svg";
import { ReactComponent as LivingKitchenIcon } from "@assets/icons/category/Living_kitchen.svg";
import { ReactComponent as BabyGoodsIcon } from "@assets/icons/category/Baby_goods.svg";
import { ReactComponent as ClothingGoodsIcon } from "@assets/icons/category/Clothing_goods.svg";
import { ReactComponent as BeautyIcon } from "@assets/icons/category/Beauty_icon.svg";
import { ReactComponent as SportsLeisureIcon } from "@assets/icons/category/Sports_leisure.svg";
import { ReactComponent as GameIcon } from "@assets/icons/category/Game_icon.svg";
import { ReactComponent as BookIcon } from "@assets/icons/category/Book_icon.svg";
import { ReactComponent as PetGoodsIcon } from "@assets/icons/category/Pet_goods.svg";
import { ReactComponent as ETCIcon } from "@assets/icons/category/ETC.svg";
const categories = [
  {
    id: "digital_device",
    label: "디지털기기",
    icon: (
      <SvgIcon component={DegitalDeviceIcon} inheritViewBox fontSize="large" />
    ),
  },
  {
    id: "household",
    label: "생활가전",
    icon: <SvgIcon component={HouseHoldIcon} inheritViewBox fontSize="large" />,
  },
  {
    id: "furniture_interior",
    label: "가구/인테리어",
    icon: (
      <SvgIcon
        component={FurnitureInteriorIcon}
        inheritViewBox
        fontSize="large"
      />
    ),
  },
  {
    id: "living_kitchen",
    label: "생활/주방",
    icon: (
      <SvgIcon component={LivingKitchenIcon} inheritViewBox fontSize="large" />
    ),
  },
  {
    id: "Baby_goods",
    label: "유아동",
    icon: <SvgIcon component={BabyGoodsIcon} inheritViewBox fontSize="large" />,
  },
  {
    id: "clothing_goods",
    label: "의류/잡화",
    icon: (
      <SvgIcon component={ClothingGoodsIcon} inheritViewBox fontSize="large" />
    ),
  },
  {
    id: "Beauty",
    label: "뷰티/미용",
    icon: <SvgIcon component={BeautyIcon} inheritViewBox fontSize="large" />,
  },
  {
    id: "sports_leisure",
    label: "스포츠/레저",
    icon: (
      <SvgIcon component={SportsLeisureIcon} inheritViewBox fontSize="large" />
    ),
  },
  {
    id: "game",
    label: "취미/게임/음반",
    icon: <SvgIcon component={GameIcon} inheritViewBox fontSize="large" />,
  },
  {
    id: "book",
    label: "도서",
    icon: <SvgIcon component={BookIcon} inheritViewBox fontSize="large" />,
  },
  {
    id: "pet_goods",
    label: "반려동물용품",
    icon: <SvgIcon component={PetGoodsIcon} inheritViewBox fontSize="large" />,
  },
  {
    id: "etc",
    label: "기타물품",
    icon: <SvgIcon component={ETCIcon} inheritViewBox fontSize="large" />,
  },
];
function CategoryPage() {
  const onClose = () => {};
  return (
    <>
      <Header title="카테고리" adornment={<CloseButton onClose={onClose} />} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", p: 2, mt: 2 }}
        height="100%"
        spacing={2}
      >
        {categories.map(({ id, label, icon }) => (
          <Grid item xs={4} key={id}>
            <Stack>
              <IconButton size="large">{icon}</IconButton>
              <Typography>{label}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

function CloseButton({ onClose }: any) {
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        sx={{ p: 0, color: "black" }}
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
}

export default CategoryPage;
