import Head from "next/head";
import { DonusumLang } from "../../content/donusum";

const ORIGIN = "https://denofficial.com";

type Props = {
  title: string;
  description: string;
  // Her dildeki eşlenik sayfanın yolu; hreflang bağlantıları buradan üretilir.
  paths: Record<DonusumLang, string>;
  lang: DonusumLang;
};

export default function DnHead({ title, description, paths, lang }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/denlogo.png" type="image/png" />
      <link rel="canonical" href={`${ORIGIN}${paths[lang]}`} />
      <link rel="alternate" hrefLang="tr" href={`${ORIGIN}${paths.tr}`} />
      <link rel="alternate" hrefLang="en" href={`${ORIGIN}${paths.en}`} />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devchauhann/fonts@v1.1.0/cdn/v1/css/all.css"
      />
    </Head>
  );
}
