import { Fragment } from "react";
import { Lang, PATHS } from "../content/site";

type Props = {
  lang: Lang;
  // Bu sayfanın yolu (aktif dil bağlantısı).
  current?: string;
  // Bu sayfanın diğer dildeki eşleniği. Eşlenik yoksa diğer dilin ana sayfasına gidilir.
  alternate?: string;
};

export default function LangSwitch({ lang, current, alternate }: Props) {
  const href = (target: Lang) => (target === lang ? current ?? PATHS.home[lang] : alternate ?? PATHS.home[target]);
  return (
    <span className="nav-lang">
      {(["tr", "en"] as Lang[]).map((target, index) => (
        <Fragment key={target}>
          {index > 0 && <span className="nav-lang-sep">/</span>}
          <a
            href={href(target)}
            hrefLang={target}
            lang={target}
            className={target === lang ? "active" : undefined}
            aria-current={target === lang ? "true" : undefined}
          >
            {target.toUpperCase()}
          </a>
        </Fragment>
      ))}
    </span>
  );
}
