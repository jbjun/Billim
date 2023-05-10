// 외부모듈
import Header from "@components/layout/Header";
import {
  IconButton,
  Grid,
  SvgIcon,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// 내부모듈
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
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

const categories = [
  {
    id: "digitalDevice",
    label: "디지털기기",
    icon: DegitalDeviceIcon,
  },
  {
    id: "household",
    label: "생활가전",
    icon: HouseHoldIcon,
  },
  {
    id: "furnitureInterior",
    label: "가구/인테리어",
    icon: FurnitureInteriorIcon,
  },
  {
    id: "livingKitchen",
    label: "생활/주방",
    icon: LivingKitchenIcon,
  },
  {
    id: "babyGoods",
    label: "유아",
    icon: BabyGoodsIcon,
  },
  {
    id: "clothingGoods",
    label: "의류/잡화",
    icon: ClothingGoodsIcon,
  },
  {
    id: "Beauty",
    label: "뷰티/미용",
    icon: BeautyIcon,
  },
  {
    id: "sportsLeisure",
    label: "스포츠/레저",
    icon: SportsLeisureIcon,
  },
  {
    id: "game",
    label: "취미/게임/음반",
    icon: GameIcon,
  },
  {
    id: "book",
    label: "도서",
    icon: BookIcon,
  },
  {
    id: "petGoods",
    label: "반려동물용품",
    icon: PetGoodsIcon,
  },
  {
    id: "etc",
    label: "기타물품",
    icon: ETCIcon,
  },
];
function CategoryPage() {
  const navigator = useNavigate();
  const handleClick = (path: string, label: string) =>
    navigator({
      pathname: `/${path}/home`,
      search: createSearchParams({ label }).toString(),
    });

  return (
    <>
      <Header title="카테고리" needBackHistory />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt="40px"
      >
        {categories.map(({ id, label, icon }) => (
          <Grid item xs={4} key={id}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton onClick={() => handleClick(id, label)}>
                <SvgIcon
                  component={icon}
                  inheritViewBox
                  fontSize="inherit"
                  sx={{ width: "60px", height: "60px" }}
                />
              </IconButton>
              <Typography variant="b7">{label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CategoryPage;
