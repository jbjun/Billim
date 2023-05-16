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
import PotoRegisterContainer from "@container/home/register/PotoRegisterContainer";
import TitleInput from "@container/home/register/TitleInputContainer";
import PriceInput from "@container/home/register/PriceInputContainer";
import TextInput from "@container/home/register/TextInputContainer";
import CategoryInput from "@container/home/register/CategoryInputContainer";
import { useRegistrationProduct } from "@lib/hooks/query/product";

export interface IProductRegisterState {
  title: string;
  text: string;
  category: string;
  price: number | "";
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
      price: "",
      files: [] as File[],
    },
  });

  const { mutate: productRegister } = useRegistrationProduct();

  const { errors, isValid } = formState;

  const categoryValue = watch("category");
  const price = watch("price");
  const files = watch("files");

  const handleCategoryClick = (category: string) => {
    setValue("category", category);
    trigger("category");
  };

  const onSubmit = (data: IProductRegisterState) => {
    const { title, text, price, category, files } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("price", String(price));
    formData.append("category", category);
    formData.append("location", "자양동"); // 쿠키에서 가져오기
    formData.append("publisherId", "1"); // 쿠키에서 가져오기
    formData.append("nickName", "이빌리"); // 쿠키에서 가져오기
    formData.append("profileImg", ""); // 쿠키에서 가져오기
    files.forEach((image, index) =>
      formData.append(`images[${index}]`, image, image.name)
    );

    productRegister(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormControl fullWidth>
          <Stack spacing={2.5} mt="16px">
            <PotoRegisterContainer selectedFiles={files} setValue={setValue} />
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
              setError={setError}
              error={errors.price}
              clearErrors={clearErrors}
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
