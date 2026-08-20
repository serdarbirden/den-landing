import Head from "next/head";
import About from "../components/About";
import Activities from "../components/Activities";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Philosophy from "../components/Philosophy";
import Products from "../components/Products";
import Quote from "../components/Quote";
import Research from "../components/Research";
import RevealObserver from "../components/RevealObserver";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>den - direct experience network</title>
        <meta
          name="description"
          content="den (direct experience network): gerçek dünya temas noktalarında, deneyimden ürün ve hizmetler inşa eden teknoloji ve deneyim şirketi."
        />
        <link rel="icon" href="/denlogo.png" type="image/png" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devchauhann/fonts@v1.1.0/cdn/v1/css/all.css"
        />
      </Head>

      <div id="top">
        <Nav />
        <Hero />
        <hr className="rule" />
        <About />
        <hr className="rule" />
        <Activities />
        <Research />
        <Products />
        <Philosophy />
        <Quote />
        <Cta />
        <Footer />
      </div>
      <RevealObserver />
    </>
  );
}

