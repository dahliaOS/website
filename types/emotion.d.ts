import "@emotion/react";
import "@mui/material";
import { Theme as MaterialUITheme } from "@mui/material/styles";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MaterialUITheme {}
}

declare module "@mui/material" {
  interface TypeText {
    light?: string;
    extremelyLight?: string;
  }
}
