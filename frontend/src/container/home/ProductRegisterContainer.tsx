// 외부모듈
import {
  Box,
  Container,
  Divider,
  Fab,
  Stack,
  TextField,
  Typography,
  useTheme,
  Checkbox,
  FormControlLabel,
  FormControl,
  Button,
} from "@mui/material";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

// 내부모듈
import Dialog from "@components/layout/Dialog";

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

const PLACE_HOLDER = `대여상품에 대한 정보를 작성해 주세요.
  
  서로 믿고 쓰는 빌림이 되기 위해 꼭 지켜주세요!
    1. 상품에 대해 허위정보를 기재하지 마세요.
    2. 대여료 외 추가비용이 있는 경우 반드시 작성하세요.
    3. 거래할 곳의 위치를 정확하게 작성하세요.
    4. 상품 대여와 무관한 글 작성시 무통보 삭제될 수 있습니다.   
  `;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductRegisterContainer = () => {
  const theme = useTheme();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [openCategory, setOpenCategory] = useState(false);

  const handleButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    setSelectedFiles([...selectedFiles, ...filesArray]);
  };

  const handleClickOpenCategory = () => {
    setOpenCategory(true);
  };

  const handleClose = () => {
    setOpenCategory(false);
  };

  const removeFile = (name: string) => {
    const newSelectedFiles = selectedFiles.filter((file) => file.name !== name);
    setSelectedFiles([...newSelectedFiles]);
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
                <Typography component="div" mb="12px" variant="b5">
                  {category}
                </Typography>
                <Divider />
              </Box>
            ))}
          </Stack>
        </Container>
      </Dialog>
      <Container>
        <FormControl fullWidth>
          <Stack spacing={2.5} mt="16px">
            <Box
              display="flex"
              sx={{
                overflowX: "scroll",
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <div onClick={handleButtonClick}>
                <Box
                  minWidth="80px"
                  height="80px"
                  borderRadius="4px"
                  sx={{ backgroundColor: theme.palette.text.gray100 }}
                  border={`1px solid ${theme.palette.text.gray400}`}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  marginRight="8px"
                >
                  <PhotoOutlinedIcon
                    style={{ color: theme.palette.text.gray700 }}
                  />
                  <Typography variant="b7" color={theme.palette.text.gray700}>
                    {`${selectedFiles.length}/10`}
                  </Typography>
                </Box>
              </div>
              {selectedFiles.map((file) => (
                <Box
                  key={file.name}
                  minWidth="80px"
                  height="80px"
                  // overflow="hidden"
                  borderRadius="4px"
                  position="relative"
                  marginRight="8px"
                  overflow="hidden"
                >
                  <Image src={URL.createObjectURL(file)} alt={file.name} />
                  <Fab
                    onClick={() => removeFile(file.name)}
                    color="primary"
                    size="small"
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                    }}
                  >
                    <ClearIcon sx={{ width: "12px", height: "12px" }} />
                  </Fab>
                </Box>
              ))}
            </Box>
            <input
              ref={inputRef}
              type="file"
              onChange={handleFileSelect}
              accept="image/png, image/jped , image/jpeg"
              style={{ display: "none" }}
              multiple
            />
            <Divider />
            <TextField required variant="standard" placeholder="제목" />
            <TextField
              variant="standard"
              onClick={handleClickOpenCategory}
              value="카테고리"
              InputProps={{
                endAdornment: <ArrowDropDownIcon sx={{ mr: "19px" }} />,
              }}
            />
            <TextField
              variant="standard"
              placeholder="대여료"
              InputProps={{
                endAdornment: (
                  <FormControlLabel
                    label="무료대여"
                    control={
                      <Checkbox
                        color="primary"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: "18px" } }}
                      />
                    }
                  />
                ),
              }}
            />
            <TextField
              multiline
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder={PLACE_HOLDER}
            />
            <Box position="fixed" bottom="16px" width="calc(100% - 32px)">
              <Button fullWidth variant="contained" disabled>
                <Typography variant="h6">상품 등록하기</Typography>
              </Button>
            </Box>
          </Stack>
        </FormControl>
      </Container>
    </>
  );
};

export default ProductRegisterContainer;
