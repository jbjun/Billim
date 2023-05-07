import { IOrderby } from "@container/home/HomeContainer";
import { Box, Container, Stack, Typography } from "@mui/material";

interface IProductFilterDialog {
  selectedFilterOption: IOrderby;
  handleSelectFilterOption: (value: IOrderby) => void;
}

const FILTER_OPTIONS: IOrderby[] = [
  { text: "최근 등록순", value: "recent" },
  { text: "대여료 낮은순", value: "priceAsc" },
  { text: "대여료 높은순", value: "priceDesc" },
];

const ProductFilterDialog = ({
  handleSelectFilterOption,
  selectedFilterOption,
}: IProductFilterDialog) => {
  return (
    <Container>
      <Stack spacing={3} m="24px 0" width="100vw">
        {FILTER_OPTIONS.map((option) => (
          <div
            onClick={() => handleSelectFilterOption(option)}
            key={option.text}
          >
            <Box>
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
