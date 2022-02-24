import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  type: "dark",
  background: {
    backgroundColor: "#1a1a1a",
    backgroundColorLight: "#252525",
    backgroundColorDark: "#0f0f0f",
    backgroundColorContrast: "#1f1f1f",
  },
  accent: {
    accentColor: "#ff6331",
    accentColorLight: "#ff3d00",
    accentColorDark: "#d63400",
  },
  text: {
    textColor: "#acacac",
    textColorDark: "#6b6b6b",
    textColorLight: "#fff",
    textColorExtremelyLight: "#fff",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
  },
};

export const LightTheme: DefaultTheme = {
  type: "light",
  background: {
    backgroundColor: "#FFFDFA",
    backgroundColorLight: "#E6E4E2",
    backgroundColorDark: "#B3B2B1",
    backgroundColorContrast: "#CCCAC8",
  },
  accent: {
    accentColor: "#ff6331",
    accentColorLight: "#ff3d00",
    accentColorDark: "#d63400",
  },
  text: {
    textColor: "#333332",
    textColorDark: "#000",
    textColorLight: "#4D4C4B",
    textColorExtremelyLight: "#fff",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
  },
};
