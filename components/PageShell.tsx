import type { ReactNode } from "react";
import { Lang } from "../content/site";
import DnHead from "./donusum/DnHead";
import Footer from "./Footer";
import Nav from "./Nav";
import RevealObserver from "./RevealObserver";

type Props = {
  lang: Lang;
  title: string;
  description: string;
  // Bu sayfanın her iki dildeki yolu: menü, dil değiştirici ve hreflang için.
  paths: Record<Lang, string>;
  children: ReactNode;
};

// İç sayfaların ortak iskeleti (Ürün, Dönüşüm, Hakkında, İletişim): koyu zemin, aynı menü ve footer.
export default function PageShell({ lang, title, description, paths, children }: Props) {
  const other: Lang = lang === "tr" ? "en" : "tr";
  return (
    <>
      <DnHead title={title} description={description} lang={lang} paths={paths} />
      <div id="top">
        <Nav lang={lang} current={paths[lang]} alternate={paths[other]} />
        <main className="dn">{children}</main>
        <Footer lang={lang} current={paths[lang]} alternate={paths[other]} />
      </div>
      <RevealObserver />
    </>
  );
}
