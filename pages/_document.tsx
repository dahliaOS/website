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
          <meta name='theme-color' content={theme.palette.primary.main} />
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
