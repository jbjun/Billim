import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { Grid } from "@mui/material"
import ArrowBackIos from "@mui/icons-material/ArrowBackIos"
import { ThemeProvider } from "@mui/material/styles"
interface IHeaderProps {
  title: string
  onBackHistory?: any
}
export default function Header({ title, onBackHistory }: IHeaderProps) {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0)", boxShadow: "none" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={2}>
            {onBackHistory && (
              <IconButton size="large" edge="start" sx={{ ml: 2, p: 0, color: "black" }} onClick={onBackHistory}>
                <ArrowBackIos />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" component="div" color={"black"} sx={{ flexGrow: 1, textAlign: "center" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}
