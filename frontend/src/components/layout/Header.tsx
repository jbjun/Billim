import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { ThemeProvider } from "@mui/material/styles";
interface IHeaderProps {
  title: string;
  onBackHistory?: any;
  adornment?: React.ReactElement;
}
export default function Header({
  title,
  onBackHistory,
  adornment,
}: IHeaderProps) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "none",
        p: 1,
        borderBottom: "1px solid grey",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Grid item xs={2}>
          {onBackHistory && (
            <IconButton
              size="large"
              edge="start"
              sx={{ p: 0, color: "black" }}
              onClick={onBackHistory}
            >
              <ArrowBackIos />
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
