import Document, { Head, Html, NextScript, Main } from "next/document";
import { ServerStyleSheets } from "@material-ui/core";
import { theme } from "../util/theme";
import React from "react";

export default class Page extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <link rel='canonical' href='https://dahliaos.io' />
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta property='og:image' content='https://imgur.com/PNGGkDP.png' />
          <meta property='og:site_name' content='dahliaOS' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <link rel="icon" type="image/png" href="/img/favicon.png" />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='#ff3d00'
          />
          <meta name='apple-mobile-web-app-title' content='dahliaOS' />
          <link rel='apple-touch-icon' href='assets/img/favicon.png' />
          <meta
            name='msapplication-TileImage'
            content='assets/img/favicon.png'
          />
          <meta name='msapplication-TileColor' content='#ff3d00' />
          <meta
            name='keywords'
            content='dahlia, software, flutter, fuchsia, linux, dahliaOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust'
          />
          <meta
            name='description'
            content='dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS.'
          />
          <meta
            name='og:description'
            content='dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS.'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400&amp;display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Page.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
