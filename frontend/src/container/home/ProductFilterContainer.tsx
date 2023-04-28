import { FormControl, MenuItem, Select, Typography } from "@mui/material";

const ProductFilterContainer = () => {
  return (
    <FormControl>
      <Select
        sx={{
          height: "30px",
          borderRadius: "60px",
          mt: "18px",
          mb: "13px",
        }}
        defaultValue={10}
      >
        <MenuItem value={10}>
          <Typography variant="b5">최근 등록순</Typography>
        </MenuItem>
        <MenuItem value={20}>
          <Typography variant="b5">가격순</Typography>
        </MenuItem>
        <MenuItem value={30}>
          <Typography variant="b5">어쩌구저쩌구</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ProductFilterContainer;
