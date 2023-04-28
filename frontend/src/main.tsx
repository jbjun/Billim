// 외부모듈
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

// 내부모듈
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
