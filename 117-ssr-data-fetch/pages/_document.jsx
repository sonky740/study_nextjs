import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <div id="overlays" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
