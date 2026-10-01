import { useEffect } from "react";
import { Lang, PATHS } from "../content/site";

// Tek sayfalık dönemden kalan çapa bağlantıları yeni sayfalara yönlendirilir.
// "#..." kısmı sunucuya hiç gönderilmediği için bu yönlendirme sunucuda (301) yapılamaz;
// sayfa açılınca istemcide, geçmişe kayıt bırakmadan (replace) yapılır.
// #nasil-calisir ve #guvenlik bölümleri ana sayfada kaldığı için yönlendirilmez.
const LEGACY: Record<Lang, Record<string, string>> = {
  tr: { "#urun": PATHS.product.tr, "#hakkinda": PATHS.about.tr, "#erken-erisim": PATHS.contact.tr },
  en: { "#product": PATHS.product.en, "#about": PATHS.about.en, "#early-access": PATHS.contact.en },
};

export default function LegacyAnchorRedirect({ lang }: { lang: Lang }) {
  useEffect(() => {
    const target = LEGACY[lang][window.location.hash];
    if (target) window.location.replace(target);
  }, [lang]);
  return null;
}
