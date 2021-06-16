import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

export const theme = createMuiTheme({
  palette: createPalette({
    type: "dark",
    primary: {
      light: "#ff6331",
      main: "#ff3d00",
      dark: "#d63400",
    },
    secondary: {
      light: "#252525",
      main: "#1a1a1a",
      dark: "#131313",
    },

    /* BELOW ARE THINGS THAT WERE UNCHANGED BUT STILL STATED SO YOU DON'T HAVE TO DIG FOR DEFAULT VALUES! */

    /*     error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "ffb74d#",
      main: "#ff9800",
      dark: "#f57c00",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    }, */
  }),
});
