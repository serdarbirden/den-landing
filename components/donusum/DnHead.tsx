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
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="den" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${ORIGIN}${paths[lang]}`} />
      <meta property="og:locale" content={lang === "tr" ? "tr_TR" : "en_US"} />
      <meta property="og:image" content={`${ORIGIN}/og-${lang}.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${ORIGIN}/og-${lang}.png`} />
      <link rel="icon" href="/denlogo.png" type="image/png" />
      <link rel="canonical" href={`${ORIGIN}${paths[lang]}`} />
      <link rel="alternate" hrefLang="tr" href={`${ORIGIN}${paths.tr}`} />
      <link rel="alternate" hrefLang="en" href={`${ORIGIN}${paths.en}`} />
    </Head>
  );
}
