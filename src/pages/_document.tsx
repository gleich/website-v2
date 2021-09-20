import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
