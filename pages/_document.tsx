import Document, { Head, Html, NextScript, Main } from "next/document";

const Page = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default class extends Document {
  render(): JSX.Element {
    return <Page />;
  }
}
