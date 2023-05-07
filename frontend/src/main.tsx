// 외부모듈
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

// 내부모듈
import { router } from "./routes";
import { theme } from "./styles/theme";
import GlobalSnackbar from "@container/common/GlobalSnackbar";
import store from "@store/index";
import GlobalSpinner from "@container/common/GlobalSpinner";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalSnackbar />
          <GlobalSpinner />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
