// 외부모듈
import { Box, Fab, Typography, styled, useTheme } from "@mui/material";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useRef } from "react";
import React from "react";
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";

// 내부모듈
import { IProductRegisterState } from "@container/home/register";

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface IPotoRegisterProps {
  setError: UseFormSetError<IProductRegisterState>;
  clearErrors: UseFormClearErrors<IProductRegisterState>;
  register: UseFormRegisterReturn<"files">;
  selectedFiles: File[];
  setValue: UseFormSetValue<IProductRegisterState>;
}

const PotoRegister = ({
  setValue,
  selectedFiles,
  setError,
  clearErrors,
}: IPotoRegisterProps) => {
  const theme = useTheme();
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    // 새로 업로드하는 파일 중 기존에 selectedFiles에 있는 파일과 이름이 같은 것 및 10mb 미만으로 제한
    const filteredFilesArray = filesArray
      .filter(
        (newFile) =>
          !selectedFiles.some(
            (selectedFile) => selectedFile.name === newFile.name
          )
      )
      .filter((file) => file.size < 10000000);

    // 배열의 최대 개수를 10개로 제한
    const combinedFiles = [...selectedFiles, ...filteredFilesArray].slice(
      0,
      10
    );
    setValue("files", combinedFiles);
  };

  const removeFile = (name: string) => {
    const newSelectedFiles = selectedFiles.filter((file) => file.name !== name);
    setValue("files", [...newSelectedFiles]);
  };

  const handleButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  return (
    <>
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
            <PhotoOutlinedIcon style={{ color: theme.palette.text.gray700 }} />
            <Typography variant="b7" color={theme.palette.text.gray700}>
              {`${selectedFiles.length}/10`}
            </Typography>
          </Box>
        </div>
        {selectedFiles.map((file) => (
          <Box
            key={`${file.name}`}
            minWidth="80px"
            maxWidth="80px"
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
    </>
  );
};

export default React.memo(PotoRegister);
