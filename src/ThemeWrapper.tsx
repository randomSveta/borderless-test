import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

interface ThemeWrapperProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "font-family: Roboto, Helvetica, Arial, sans-serif;",
  },
});

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
