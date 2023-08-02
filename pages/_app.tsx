/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import type { AppProps } from "next/app";
import { Global, ThemeProvider, css, Theme } from "@emotion/react";
import { LightTheme, DarkTheme } from "../utils/Theme";
import { fetcher } from "../utils/Fetcher";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import { usePreferredTheme } from "../utils/hooks/usePreferredTheme";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter();

const GlobalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--inter-font);
  }

  html {
    background: ${theme.palette.primary.main};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  @supports (scrollbar-gutter: stable) {
    html {
      overflow-y: auto;
      scrollbar-gutter: stable;
    }
  }

  @supports (overflow-y: overlay) {
    html {
      overflow-y: overlay;
    }
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0.3em;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.palette.primary.dark};
    border-radius: 8px;
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
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 12000000,
          revalidateOnFocus: false,
        }}
      >
        <ThemeProvider
          theme={preferredTheme === "dark" ? DarkTheme : LightTheme}
        >
          <MUIThemeProvider
            theme={preferredTheme === "dark" ? DarkTheme : LightTheme}
          >
            <main className={inter.className}>
              <Global styles={GlobalStyles} />
              <Component {...pageProps} />
            </main>
          </MUIThemeProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
