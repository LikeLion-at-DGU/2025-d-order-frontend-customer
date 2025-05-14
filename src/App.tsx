// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";

//hook
import useVh from "@hooks/useCalcVh";

// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";
function App() {
  useVh();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
