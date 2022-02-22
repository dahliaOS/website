import Document, {
  Head,
  Html,
  NextScript,
  Main,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Theme } from "../utils/Theme";

const Page = () => (
  <Html lang="en">
    <Head>
      {/*
      Copyright 2021 The dahliaOS Authors\n
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 
      */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href="https://dahliaos.io" />
      <meta name="theme-color" content={Theme.accent.accentColor} />
      <meta property="og:image" content="https://imgur.com/PNGGkDP.png" />
      <meta property="og:site_name" content="dahliaOS" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="icon" type="image/png" href="/img/favicon.png" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ff3d00" />
      <meta name="apple-mobile-web-app-title" content="dahliaOS" />
      <link rel="apple-touch-icon" href="assets/img/favicon.png" />
      <meta name="msapplication-TileImage" content="assets/img/favicon.png" />
      <meta name="msapplication-TileColor" content="#ff3d00" />
      <meta
        name="keywords"
        content="dahlia, software, flutter, fuchsia, linux, dahliaOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust"
      />
      <meta
        name="description"
        content="dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS."
      />
      <meta
        name="og:description"
        content="dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS."
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default class DocumentClass extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return <Page />;
  }
}
