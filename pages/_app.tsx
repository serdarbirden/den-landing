import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fraunces, Space_Grotesk, Space_Mono } from "next/font/google";
import Head from "next/head";

// Fontlar build sırasında indirilip siteyle birlikte sunulur (self-host, OFL).
// latin-ext: Türkçe karakterler (ş, ğ, ı, İ …). globals.css --serif/--sans/--mono bu değişkenleri kullanır.
const serif = Fraunces({ subsets: ["latin", "latin-ext"], display: "swap" });
const sans = Space_Grotesk({ subsets: ["latin", "latin-ext"], display: "swap" });
const mono = Space_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "700"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-serif: ${serif.style.fontFamily};
          --font-sans: ${sans.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
