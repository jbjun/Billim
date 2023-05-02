// 외부모듈
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

// 내부모듈
import useGoBack from "@lib/hooks/useGoBack";
interface IHeaderProps {
  title?: string | React.ReactNode;
  needBackHistory?: boolean;
  onBackHistory?: any;
  adornment?: React.ReactNode;
  color?: string;
}
export default function Header({
  title,
  onBackHistory,
  needBackHistory,
  adornment,
  color,
}: IHeaderProps) {
  const onGoBack = useGoBack();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: color || "#fff",
        boxShadow: "none",
        borderBottom: `1px solid ${color || "#E5E5E5"}`,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
        height="100%"
      >
        <Grid item xs={2}>
          {needBackHistory && (
            <IconButton
              size="large"
              edge="start"
              sx={{ p: 0, color: "black" }}
              onClick={onBackHistory ? onBackHistory : onGoBack}
            >
              <ArrowBackIos fontSize="small" />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="h6"
            component="div"
            color={"black"}
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          {adornment}
        </Grid>
      </Grid>
    </AppBar>
  );
}
