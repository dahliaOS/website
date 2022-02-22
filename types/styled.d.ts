import "styled-components";

type Hex = `#${string}`;
declare module "styled-components" {
  export interface ThemeType {
    background: {
      backgroundColor: Hex;
      backgroundColorLight: Hex;
      backgroundColorDark: Hex;
    };
    text: {
      textColor: Hex;
      textColorLight: Hex;
      textColorDark: Hex;
    };
    accent: {
      accentColor: Hex;
      accentColorLight: Hex;
      accentColorDark: Hex;
    };
  }
}
