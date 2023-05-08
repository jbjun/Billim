import React, { useRef, useState } from "react";
import { Box, Button, CircularProgress, Grid, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

interface IProfileImageEditProps {
  src: string;
  onFileChange: any;
}
const ProfileImageEdit = ({ src, onFileChange }: IProfileImageEditProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const openFileChooser = () => {
    inputRef.current?.click();
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item sx={{ position: "relative" }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: 1,
          }}
        >
          <img
            src={src}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "white",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid grey",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
        >
          <input
            id="image-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{ display: "none" }}
            ref={inputRef}
          />
          <IconButton component="span" onClick={openFileChooser}>
            <PhotoCamera />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileImageEdit;
