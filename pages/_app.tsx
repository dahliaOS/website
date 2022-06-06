/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { LightTheme, Theme } from "../utils/Theme";
import { fetcher } from "../utils/Fetcher";
import { StyledEngineProvider } from "@mui/material";
import { SWRConfig } from "swr";
import { usePreferredTheme } from "../hooks/usePreferredTheme";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
html {
  background: ${({ theme }) => theme.background.backgroundColor};
  scroll-behavior: smooth;
  overflow-x: hidden;

}
body {
  max-width: 100vw;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0.25em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.background.backgroundColor};

}
 
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.background.backgroundColorLight}9d;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  /* niceeeee */
  console.log(`
       __            __        __  __             ______    ______  
      /  |          /  |      /  |/  |           /      \  /      \ 
  ____$$ |  ______  $$ |____  $$ |$$/   ______  /$$$$$$  |/$$$$$$  |
 /    $$ | /      \ $$      \ $$ |/  | /      \ $$ |  $$ |$$ \__$$/ 
/$$$$$$$ | $$$$$$  |$$$$$$$  |$$ |$$ | $$$$$$  |$$ |  $$ |$$      \ 
$$ |  $$ | /    $$ |$$ |  $$ |$$ |$$ | /    $$ |$$ |  $$ | $$$$$$  |
$$ \__$$ |/$$$$$$$ |$$ |  $$ |$$ |$$ |/$$$$$$$ |$$ \__$$ |/  \__$$ |
$$    $$ |$$    $$ |$$ |  $$ |$$ |$$ |$$    $$ |$$    $$/ $$    $$/ 
 $$$$$$$/  $$$$$$$/ $$/   $$/ $$/ $$/  $$$$$$$/  $$$$$$/   $$$$$$/  
  `);

  const preferredTheme = usePreferredTheme();

  return (
    <StyledEngineProvider injectFirst>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 12000000,
          revalidateOnFocus: false,
        }}
      >
        <ThemeProvider theme={preferredTheme === "dark" ? Theme : LightTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </StyledEngineProvider>
  );
}

export default MyApp;
