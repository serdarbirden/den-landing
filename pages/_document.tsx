import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

type Props = { lang: string };

// <html lang> sayfa diline göre: /en ve /en/... İngilizce, geri kalanı Türkçe.
export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = ctx.pathname === "/en" || ctx.pathname.startsWith("/en/") ? "en" : "tr";
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
