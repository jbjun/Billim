import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { ThemeProvider } from "@mui/material/styles";
import useGoBack from "@lib/hooks/useGoBack";
interface IHeaderProps {
  title?: string;
  needBackHistory?: boolean;
  onBackHistory?: any;
  adornment?: React.ReactElement;
}
export default function Header({
  title,
  onBackHistory,
  needBackHistory,
  adornment,
}: IHeaderProps) {
  const onGoBack = useGoBack();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "none",
        p: 1,
        borderBottom: "1px solid #E5E5E5",
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
