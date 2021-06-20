import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../util/theme";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
