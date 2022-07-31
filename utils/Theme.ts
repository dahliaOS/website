import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const DarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a1a1a",
      light: "#252525",
      dark: "#0f0f0f",
      contrastText: "#1f1f1f",
    },
    secondary: {
      main: "#ff6331",
      light: "#ff3d00",
      dark: "#d63400",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    text: {
      primary: "#acacac",
      secondary: "#6b6b6b",
      light: "#fff",
      extremelyLight: "#fff",
    },
    background: {
      paper: "#fff",
    },
    divider: "#1f1f1f",
  },
});

export const LightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFDFA",
      light: "#E6E4E2",
      dark: "#B3B2B1",
      contrastText: "#F9F9F9",
    },
    secondary: {
      main: "#ff6331",
      light: "#ff3d00",
      dark: "#d63400",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    text: {
      primary: "#333332",
      secondary: "#000",
      light: "#4D4C4B",
      extremelyLight: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#000000",
    },
    divider: "#B3B2B1",
  },
});
