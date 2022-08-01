/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import type { AppProps } from "next/app";
import { Global, ThemeProvider, css, Theme } from "@emotion/react";
import { LightTheme, DarkTheme } from "../utils/Theme";
import { fetcher } from "../utils/Fetcher";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import { usePreferredTheme } from "../utils/hooks/usePreferredTheme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "next" });

const GlobalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html {
    background: ${theme.palette.primary.main};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0.25em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.palette.primary.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 8px;
    outline: 1px solid ${theme.palette.primary.dark};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
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
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 12000000,
        revalidateOnFocus: false,
      }}
    >
      <ThemeProvider theme={preferredTheme === "dark" ? DarkTheme : LightTheme}>
        <MUIThemeProvider
          theme={preferredTheme === "dark" ? DarkTheme : LightTheme}
        >
          <CacheProvider value={cache}>
            <Global styles={GlobalStyles} />
            <Component {...pageProps} />
          </CacheProvider>
        </MUIThemeProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
