// 외부모듈
import { ButtonBase, SvgIcon, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

// 내부모듈
import Dialog from "@components/layout/Dialog";
import ProductFilterDialog from "@components/home/ProductFilterDialog";

export interface IFilterOptionState {
  text: TFilterOption;
}
export type TFilterOption =
  | "최근 등록순"
  | "대여료 낮은순"
  | "대여료 높은순"
  | "가까운 순";

const ProductFilterContainer = () => {
  const [open, setOpen] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] =
    useState<IFilterOptionState>({
      text: "최근 등록순",
    });

  const handleSelectFilterOption = (option: IFilterOptionState) => {
    setSelectedFilterOption(option);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="정렬 기준"
        disableAdornment
        PaperProps={{
          style: {
            bottom: 0,
            position: "absolute",
            marginBottom: 0,
            borderRadius: "10px 10px 0 0",
            width: "100vw",
            overflowX: "hidden",
          },
        }}
      >
        <ProductFilterDialog
          selectedFilterOption={selectedFilterOption}
          handleSelectFilterOption={handleSelectFilterOption}
        />
      </Dialog>
      <ButtonBase
        onClick={() => setOpen(true)}
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "60px",
          height: "29px",
          p: "0 12px",
          mt: "18px",
          mb: "13px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="b5" lineHeight="50%">
          {selectedFilterOption.text}
        </Typography>
        <SvgIcon component={ArrowDropDownIcon} />
      </ButtonBase>
    </>
  );
};

export default ProductFilterContainer;
