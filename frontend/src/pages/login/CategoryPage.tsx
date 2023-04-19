import Header from "@components/layout/Header";
import React from "react";
import { IconButton, Grid, SvgIcon, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as DegitalDeviceIcon } from "../../assets/icons/category/digital_device.svg";
const categories = [
  {
    id: "digital_device",
    label: "디지털기기",
    icon: <SvgIcon component={DegitalDeviceIcon} />,
  },
  {
    id: "household",
    label: "생활가전",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "furniture_interior",
    label: "가구/인테리어",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "living_kitchen",
    label: "생활/주방",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "child",
    label: "유아동",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "clothing_goods",
    label: "의류/잡화",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "beauty",
    label: "뷰티/미용",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "sports_leisure",
    label: "스포츠/레저",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "game",
    label: "취미/게임/음반",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "book",
    label: "도서",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "pet_goods",
    label: "반려동물용품",
    icon: <CloseIcon fontSize="small" />,
  },
  {
    id: "etc",
    label: "기타물품",
    icon: <CloseIcon fontSize="small" />,
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
        <Grid item xs={4}></Grid>
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
