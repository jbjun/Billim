import Header from "@components/layout/Header";
import React from "react";
import { IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// id 디지털 기기 생활가전과 같은 이름 부여
const categories = [
  {
    id: "1",
    label: "디지털기기",
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
        sx={{ textAlign: "center" }}
        height="100%"
      >
        <Grid item xs={4}></Grid>
      </Grid>
      <div>CategoryPage</div>
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
