// 외부모듈
import { Box, Fab, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type PositionType =
  | "top-center"
  | "top-right"
  | "top-left"
  | "bottom-center"
  | "bottom-right"
  | "bottom-left";

type FloatingActionButtonProps = {
  text?: string;
  position?: PositionType;
};

const getPosition = (position: PositionType) => {
  switch (position) {
    case "bottom-right":
      return { bottom: "72px", right: "16px" };
    default:
      return { bottom: "72px", right: "16px" };
  }
};

const FloatingActionButton = ({
  text,
  position = "bottom-right",
}: FloatingActionButtonProps) => {
  const theme = useTheme();

  return (
    <Box position="fixed" {...getPosition(position)}>
      <Fab
        variant={typeof text === "string" ? "extended" : "circular"}
        style={{
          color: "white",
          backgroundColor: theme.palette.primary[1000],
        }}
      >
        <AddIcon fontSize="small" />
        {text && (
          <Typography
            variant="h6"
            color="white"
            style={{ verticalAlign: "sub" }}
          >
            {text}
          </Typography>
        )}
      </Fab>
    </Box>
  );
};

export default FloatingActionButton;
