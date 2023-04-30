// 외부모듈
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

// 내부모듈
import PotoRegister from "@components/productRegister/PotoRegister";
import TitleInput from "@container/home/register/TitleInputContainer";
import PriceInput from "@container/home/register/PriceInputContainer";
import TextInput from "@container/home/register/TextInputContainer";
import CategoryInput from "@container/home/register/CategoryInputContainer";

export interface IProductRegisterState {
  title: string;
  text: string;
  category: string;
  price: number;
  files: File[];
}

const ProductRegisterContainer = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState,
    setError,
    clearErrors,
  } = useForm<IProductRegisterState>({
    defaultValues: {
      title: "",
      text: "",
      category: "",
      price: 0,
      files: [] as File[],
    },
  });

  const { errors, isValid } = formState;

  const categoryValue = watch("category");
  const price = watch("price");
  const files = watch("files");

  const handleCategoryClick = (category: string) => {
    setValue("category", category);
    trigger("category");
  };

  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormControl fullWidth>
          <Stack spacing={2.5} mt="16px">
            <PotoRegister
              register={register("files")}
              selectedFiles={files}
              setValue={setValue}
              setError={setError}
              clearErrors={clearErrors}
            />
            <Divider />
            <TitleInput
              register={register("title", {
                required: "제목을 입력해 주세요.",
                maxLength: {
                  value: 64,
                  message: "제목은 64자까지 입력 가능해요.",
                },
              })}
              error={errors.title}
              trigger={trigger}
            />
            <CategoryInput
              register={register("category", {
                required: "카테고리를 입력해 주세요.",
              })}
              categoryValue={categoryValue}
              onCategoryClick={handleCategoryClick}
            />
            <PriceInput
              register={{
                ...register("price", {
                  required: "가격을 입력해주세요.",
                  valueAsNumber: true,
                  max: {
                    value: 99999999,
                    message: "최대가격은 99,999,999을 넘을 수 없습니다.",
                  },
                }),
              }}
              price={price}
              setValue={setValue}
            />
            <TextInput
              trigger={trigger}
              register={register("text", {
                required: "내용을 입력해 주세요.",
                maxLength: {
                  value: 1000,
                  message: "내용은 1,000자까지 입력 가능해요.",
                },
              })}
            />
            <Box position="fixed" bottom="16px" width="calc(100% - 32px)">
              <Button
                disabled={!isValid || files.length === 0}
                type="submit"
                fullWidth
                variant="contained"
              >
                <Typography variant="h6">상품 등록하기</Typography>
              </Button>
            </Box>
          </Stack>
        </FormControl>
      </form>
    </Container>
  );
};

export default ProductRegisterContainer;
