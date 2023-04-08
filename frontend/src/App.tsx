import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import LoginPage from "@pages/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
