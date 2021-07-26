import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

export const theme = createMuiTheme({
  palette: createPalette({
    type: "dark",
    background: {
      default: "#1a1a1a",
    },
    primary: {
      light: "#ff6331",
      main: "#ff3d00",
      dark: "#d63400",
    },
    secondary: {
      light: "#252525",
      main: "#1a1a1a",
      dark: "#0a0a0a",
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
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollPaddingTop: "100px",
          scrollBehavior: "smooth",
        },

        /* I was told to get rid of the custom scrollbar by Noah, very upsetting, but
        hey, the codes still there to uncomment out when I found out aa way to
        manipulate him and get him to allow the scroll bar again! */

        /*         "*::-webkit-scrollbar": {
          width: "0.45em",
          background: "#1a1a1a",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "4px",
          backgroundColor: "rgb(255, 87, 34);",
        },
        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgb(0 0 0 / 30%)",
        }, */
      },
    },
  },
});
