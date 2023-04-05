import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginPage from "./page/LoginPage";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
