import React from "react";
import PublicLayouts from "./Layouts/PublicLayouts";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f15a24",
    },
    secondary: {
      main: "#f1f1f1",
    },
    success: {
      main: "#f15a24",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PublicLayouts />
      </div>
    </ThemeProvider>
  );
}

export default App;
