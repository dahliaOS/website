/* eslint-disable @next/next/no-page-custom-font */
import Document, { Head, Html, NextScript, Main } from "next/document";
import { DarkTheme } from "../utils/Theme";

const Page = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content={DarkTheme.palette.secondary.main} />
      <meta property="og:image" content="https://imgur.com/pqgjEpd.png" />
      <meta property="og:site_name" content="dahliaOS" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon/favicon-32x32.png"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={DarkTheme.palette.secondary.light}
      />
      <meta name="apple-mobile-web-app-title" content="dahliaOS" />
      <meta
        name="msapplication-TileImage"
        content="/images/favicon/favicon.png"
      />
      <meta
        name="msapplication-TileColor"
        content={DarkTheme.palette.secondary.light}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="keywords"
        content="dahlia, software, flutter, fuchsia, linux, dahliaOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust"
      />
      <meta
        name="description"
        content="Discover an intuitive operating system with a modern user interface, efficient multitasking, advanced networking, security features and respectful privacy. Powered by Linux - designed to be lightweight for a fast and versatile computing experience."
      />
      <meta
        name="og:description"
        content="Discover an intuitive operating system with a modern user interface, efficient multitasking, advanced networking, security features and respectful privacy. Powered by Linux - designed to be lightweight for a fast and versatile computing experience."
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

export default class MyDocument extends Document {
  render() {
    return <Page />;
  }
}
