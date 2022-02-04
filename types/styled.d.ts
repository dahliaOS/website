import "styled-components";

type Hex = `#${string}`;
declare module "styled-components" {
  export interface ThemeType {
    background: Hex;
    secondaryBackground: Hex;
    accent: Hex;
  }
}
