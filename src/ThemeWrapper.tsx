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
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      margin: 0,
      fontSize: "2.86rem",
    },
    h2: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.9rem",
    },
    body2: {
      fontSize: "1.6rem",
    },
    button: {
      fontSize: "1.4rem",
      textDecoration: "none",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "1rem 0",
        },
      },
    },
  },
});

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
