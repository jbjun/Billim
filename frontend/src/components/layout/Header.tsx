import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import ArrowBackIos from "@mui/icons-material/ArrowBackIos"

interface IHeaderProps {
  title?: string
}
export default function Header({ title }: IHeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0)", boxShadow: "none" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid xs={2}>
            <IconButton size="large" edge="start" sx={{ ml: 1, color: "black" }}>
              <ArrowBackIos />
            </IconButton>
          </Grid>
          <Grid xs={8}>
            <Typography variant="h6" component="div" color={"black"} sx={{ flexGrow: 1, textAlign: "center" }}>
              {title}
            </Typography>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}
