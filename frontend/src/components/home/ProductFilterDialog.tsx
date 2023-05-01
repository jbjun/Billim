import { IFilterOptionState } from "@container/home/ProductFilterContainer";
import { Box, Container, Stack, Typography } from "@mui/material";

interface IProductFilterDialog {
  selectedFilterOption: IFilterOptionState;
  handleSelectFilterOption: (value: IFilterOptionState) => void;
}

const FILTER_OPTIONS: IFilterOptionState[] = [
  { text: "최근 등록순" },
  { text: "대여료 낮은순" },
  { text: "대여료 높은순" },
  { text: "가까운 순" },
];

const ProductFilterDialog = ({
  handleSelectFilterOption,
  selectedFilterOption,
}: IProductFilterDialog) => {
  return (
    <Container>
      <Stack spacing={3} m="24px 0" width="100vw">
        {FILTER_OPTIONS.map((option) => (
          <div onClick={() => handleSelectFilterOption(option)}>
            <Box key={option.text}>
              <Typography
                variant="b5"
                sx={{
                  color:
                    selectedFilterOption.text === option.text
                      ? "#0025AA"
                      : null,
                  fontWeight:
                    selectedFilterOption.text === option.text ? 700 : 400,
                }}
              >
                {option.text}
              </Typography>
            </Box>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default ProductFilterDialog;
