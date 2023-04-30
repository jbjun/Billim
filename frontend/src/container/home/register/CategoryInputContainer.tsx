// 외부모듈
import {
  Box,
  Container,
  Dialog,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CATEGORYS = [
  "디지털기기",
  "생활가전",
  "가구/인테리어",
  "생활/주방",
  "유아",
  "의류/잡화",
  "뷰티/미용",
  "스포츠/레저",
  "취미/게임/음반",
  "도서",
  "반려동물용품",
  "기타물품",
];

interface ICategoryInputContainerdProps {
  register: UseFormRegisterReturn<"category">;
  categoryValue: string;
  onCategoryClick: (category: string) => void;
}

const CategoryInputContainerd = ({
  register,
  categoryValue,
  onCategoryClick,
}: ICategoryInputContainerdProps) => {
  const [openCategory, setOpenCategory] = useState(false);

  const handleClickOpenCategory = () => {
    setOpenCategory(true);
  };

  const handleClose = () => {
    setOpenCategory(false);
  };

  const handleCagegoryClick = (category: string) => {
    onCategoryClick(category);
    setOpenCategory(false);
  };

  return (
    <>
      <Dialog
        title="상품등록"
        fullScreen
        open={openCategory}
        onClose={handleClose}
      >
        <Container>
          <Stack spacing={2.5} mt="16px">
            {CATEGORYS.map((category) => (
              <Box key={category}>
                <div onClick={() => handleCagegoryClick(category)}>
                  <Typography component="div" mb="12px" variant="b5">
                    {category}
                  </Typography>
                </div>
                <Divider />
              </Box>
            ))}
          </Stack>
        </Container>
      </Dialog>
      <TextField
        {...register}
        variant="standard"
        onClick={handleClickOpenCategory}
        value={categoryValue}
        placeholder="카테고리"
        InputProps={{
          endAdornment: <ArrowDropDownIcon sx={{ mr: "19px" }} />,
        }}
      />
    </>
  );
};

export default CategoryInputContainerd;
