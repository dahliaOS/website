import Document, { Head, Html, NextScript, Main } from "next/document";

const Page = () => {
  return <Html lang='en'></Html>;
};

export default class extends Document {
  render(): JSX.Element {
    return <Page />;
  }
}
