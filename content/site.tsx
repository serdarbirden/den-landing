// Çok sayfalı site: sayfa yolları ve Ürün / Hakkında / İletişim sayfaları ile ana sayfadaki
// ürün ve kapanış bölümlerinin içeriği (TR + EN). Dönüşüm içeriği content/donusum.ts'te.
import type { ReactNode } from "react";

export type Lang = "tr" | "en";
type Cta = { href: string; label: string };
type Meta = { title: string; description: string };

// Her sayfanın iki dildeki yolu; menü, dil değiştirici ve hreflang buradan beslenir.
export const PATHS = {
  home: { tr: "/", en: "/en" },
  product: { tr: "/urun", en: "/en/product" },
  transformation: { tr: "/donusum", en: "/en/transformation" },
  about: { tr: "/hakkinda", en: "/en/about" },
  contact: { tr: "/iletisim", en: "/en/contact" },
} satisfies Record<string, Record<Lang, string>>;

export const CONTACT_EMAIL = "serdarbirden@denofficial.com";

export type TwinShape = "factory" | "head";
export type TwinCard = { tag: string; body: string; shape: TwinShape };

// Kurumun İkizi / Yöneticinin İkizi: ana sayfadan Ürün sayfasına taşındı.
const twinCards: Record<Lang, TwinCard[]> = {
  tr: [
    {
      tag: "Kurumun İkizi",
      body: "Sözleşmeler, e-postalar, toplantılar, projeler... Kurumunuzun tüm deneyimi bağlantılı bir hafıza ağına dönüşür. 'Bu tedarikçiyle geçmişte ne yaşadık?' sorusunun cevabı artık kimsenin hafızasına bağlı değil.",
      shape: "factory",
    },
    {
      tag: "Yöneticinin İkizi",
      body: "Kararlarınız, gerekçeleriniz, vazgeçtikleriniz. den, sizin karar geçmişinizi öğrenir; 'bu konuda geçen yıl ne düşünmüştüm?' dediğinizde tarih, bağlam ve gerekçeyle cevap verir. Hatta çeliştiğinizde söyler.",
      shape: "head",
    },
  ],
  en: [
    {
      tag: "The Organization's Twin",
      body: "Contracts, emails, meetings, projects... Your organization's entire experience becomes a connected memory network. 'What happened with this supplier before?' no longer depends on anyone's recollection.",
      shape: "factory",
    },
    {
      tag: "The Executive's Twin",
      body: "Your decisions, your reasoning, the paths you didn't take. den learns your decision history; ask 'what did I think about this last year?' and it answers with date, context and rationale. It even tells you when you contradict yourself.",
      shape: "head",
    },
  ],
};

/* ───────────── Ana sayfa: "İki ürün, tek hafıza." ve kapanış ───────────── */

export type HomeCopy = {
  products: {
    label: string;
    heading: string;
    cards: { audience: string; name: string; body: string }[];
    link: Cta;
  };
  closing: {
    heading: string;
    subline: string;
    primary: Cta;
    secondary: Cta;
    crossLink: { before: string; link: Cta; after: string };
  };
};

export const homeCopy: Record<Lang, HomeCopy> = {
  tr: {
    products: {
      label: "Ürün",
      heading: "İki ürün, tek hafıza.",
      cards: [
        {
          audience: "Kurumlar ve karar vericiler için",
          name: "den İkinci Beyin",
          body: "Yazışmalar, belgeler, toplantılar ve kararlar tek bir yaşayan hafızada birikir; sorduğunuzda gerekçesiyle hatırlar. Kendi sunucunuzda çalışır, veri binanızdan çıkmaz.",
        },
        {
          audience: "Bireysel kullanıcılar için",
          name: "Taşınabilir Hafıza",
          body: "İkinci beyninizi uçtan uca şifreli bir pakete alır, istediğiniz cihazda geri yüklersiniz. Paketi sizden başka kimse açamaz, den dahil.",
        },
      ],
      link: { href: PATHS.product.tr, label: "Ürünleri incele" },
    },
    closing: {
      heading: "Biriktirmeye bugün başlayın.",
      subline: "Kurumunuzun hafızası, sizinle konuşmaya hazır.",
      primary: { href: PATHS.contact.tr, label: "İletişim" },
      secondary: { href: PATHS.product.tr, label: "Ürünleri incele" },
      crossLink: {
        before: "Kurumsal dönüşüm programlarımız için ",
        link: { href: PATHS.transformation.tr, label: "Dönüşüm" },
        after: " bölümüne bakın.",
      },
    },
  },
  en: {
    products: {
      label: "Product",
      heading: "Two products, one memory.",
      cards: [
        {
          audience: "For organizations and decision-makers",
          name: "den Second Brain",
          body: "Correspondence, documents, meetings and decisions accumulate in one living memory; ask, and it remembers with the reasoning. It runs on your own servers, and the data never leaves your building.",
        },
        {
          audience: "For individuals",
          name: "Portable Memory",
          body: "Your second brain goes into an end-to-end encrypted package that you can restore on any device. No one but you can open it, not even den.",
        },
      ],
      link: { href: PATHS.product.en, label: "Explore the products" },
    },
    closing: {
      heading: "Start compounding today.",
      subline: "Your organization's memory is ready to talk to you.",
      primary: { href: PATHS.contact.en, label: "Contact" },
      secondary: { href: PATHS.product.en, label: "Explore the products" },
      crossLink: {
        before: "For our organizational transformation programs, see ",
        link: { href: PATHS.transformation.en, label: "Transformation" },
        after: ".",
      },
    },
  },
};

/* ───────────── /urun — Ürün vitrini ───────────── */

export type FeatureBlock = { kicker: string; title: string; body: string; shot: string };

export type ProductCopy = {
  meta: Meta;
  hero: { label: string; heading: string; sub: string; shot: string };
  shotPrefix: string;
  secondBrain: {
    audience: string;
    name: string;
    heading: string;
    sub: string;
    blocks: FeatureBlock[];
    twins: { kicker: string; title: string; cards: TwinCard[] };
    badges: string[];
  };
  portable: {
    audience: string;
    name: string;
    heading: string;
    sub: string;
    features: { name: string; body: string }[];
    closingLine: string;
    badges: string[];
  };
  compare: { label: string; columns: [string, string, string]; rows: [string, string, string][] };
  closing: { heading: string; primary: Cta; secondary: Cta };
};

// DİL KURALI (Taşınabilir Hafıza): "kripto", "blokzincir", "token", "cüzdan", "Web3" kullanılmaz.
export const productCopy: Record<Lang, ProductCopy> = {
  tr: {
    meta: {
      title: "Ürünler — İkinci Beyin ve Taşınabilir Hafıza | den",
      description:
        "den'in iki ürünü: kurumlar ve karar vericiler için kendi sunucunuzda çalışan İkinci Beyin, bireyler için uçtan uca şifreli Taşınabilir Hafıza.",
    },
    hero: {
      label: "Ürün",
      heading: "İki ürün, tek hafıza.",
      sub: "den, yaşadığınız her şeyi tek bir hafızada biriktirir. Hafıza nerede çalışacağına siz karar verirsiniz: kendi sunucunuzda ya da yanınızda taşıdığınız şifreli bir kasada.",
      shot: "Sohbet",
    },
    shotPrefix: "Ekran görüntüsü",
    secondBrain: {
      audience: "Kurumlar ve karar vericiler için",
      name: "den İkinci Beyin",
      heading: "Kurumunuzun ve sizin dijital ikiziniz.",
      sub: "Yazışmalar, belgeler, toplantılar ve kararlar tek bir yaşayan hafızada birikir. Sorduğunuzda gerekçesiyle hatırlar. Kendi sunucunuzda çalışır; veri binanızdan çıkmaz.",
      blocks: [
        {
          kicker: "Sohbet",
          title: "Sorun, hafızanız cevaplasın.",
          body: "Her cevabın altında, bilginin hangi e-postadan, hangi belgeden, hangi karardan geldiğini gösteren kaynak kartları yer alır.",
          shot: "Sohbet",
        },
        {
          kicker: "Ağ",
          title: "Bu ağı siz çizmediniz.",
          body: "Kişiler, kurumlar, projeler ve kararlar arasındaki bağlantılar arşivinizden otomatik çıkarılır.",
          shot: "Ağ",
        },
        {
          kicker: "Karar Defteri",
          title: "Kararın kendisi kadar gerekçesi de kalır.",
          body: "Bağlam, seçenekler, vazgeçilenler ve sonuç tek yerde; yeni bir karar geçmişle çelişince uyarır.",
          shot: "Karar Defteri",
        },
        {
          kicker: "Çıktı Paneli",
          title: "Hafızanızdan tablo, sayfa, belge.",
          body: "İstediğiniz çıktıyı hafızanıza dayanarak üretir; indirirsiniz ya da hafızaya geri kaydedersiniz.",
          shot: "Çıktı Paneli",
        },
      ],
      twins: { kicker: "İki İkiz", title: "Kurumun ikizi, yöneticinin ikizi.", cards: twinCards.tr },
      badges: ["On-premise", "KVKK uyumlu", "Açık kaynak model desteği", "Model bağımsız"],
    },
    portable: {
      audience: "Bireysel kullanıcılar için",
      name: "Taşınabilir Hafıza",
      heading: "Hafızanız yanınızda, şifreli ve size kilitli.",
      sub: "İkinci beyninizi uçtan uca şifreli bir pakete alır, bulutta saklar ve istediğiniz cihazda geri yüklersiniz. Sahipliği ve değişmezliği kayıt altındadır — paketi sizden başka kimse açamaz, den dahil.",
      features: [
        { name: "Şifreli paket", body: "Hafızanız cihazınızdan şifrelenmeden çıkmaz. Anahtar yalnızca sizde." },
        { name: "Her cihazda", body: "Kurtarma ifadenizle başka bir bilgisayarda hafızanızı olduğu gibi geri yükleyin." },
        {
          name: "Değişmezlik kaydı",
          body: "Paketinizin sahipliği ve bütünlüğü kayıt altında; hafızanızın değişmediğini her an doğrulayabilirsiniz.",
        },
      ],
      closingLine: "Hafızanız bir uygulamaya, bir şirkete ya da bir modele kilitli değildir.",
      badges: ["Uçtan uca şifreli", "Cihazdan bağımsız", "Sahiplik kaydı"],
    },
    compare: {
      label: "Karşılaştırma",
      columns: ["", "den İkinci Beyin", "Taşınabilir Hafıza"],
      rows: [
        ["Kime göre", "Kurumlar ve karar vericiler", "Bireysel kullanıcılar"],
        ["Hafıza nerede durur", "Kendi sunucunuzda (on-premise)", "Şifreli pakette, bulutta"],
        ["Erişim", "Kurum içi, rol bazlı", "Yalnızca siz (anahtar sizde)"],
        ["Kurulum", "Kurulum ve devir", "Uygulamadan tek tıkla"],
        ["Fiyatlandırma", "Teklif bazlı", "Aylık abonelik"],
      ],
    },
    closing: {
      heading: "Hangisi size uygun, konuşalım.",
      primary: { href: PATHS.contact.tr, label: "İletişim" },
      secondary: { href: PATHS.transformation.tr, label: "Dönüşüm programları" },
    },
  },
  en: {
    meta: {
      title: "Products — Second Brain and Portable Memory | den",
      description:
        "den's two products: Second Brain, running on your own servers for organizations and decision-makers, and Portable Memory, end-to-end encrypted for individuals.",
    },
    hero: {
      label: "Product",
      heading: "Two products, one memory.",
      sub: "den accumulates everything you live through in a single memory. You decide where that memory runs: on your own servers, or in an encrypted vault you carry with you.",
      shot: "Chat",
    },
    shotPrefix: "Screenshot",
    secondBrain: {
      audience: "For organizations and decision-makers",
      name: "den Second Brain",
      heading: "The digital twin of your organization — and of you.",
      sub: "Correspondence, documents, meetings and decisions accumulate in one living memory. Ask, and it remembers with the reasoning. It runs on your own servers; the data never leaves your building.",
      blocks: [
        {
          kicker: "Chat",
          title: "Ask, and your memory answers.",
          body: "Under every answer, source cards show which email, which document and which decision the information came from.",
          shot: "Chat",
        },
        {
          kicker: "Graph",
          title: "You didn't draw this network.",
          body: "The links between people, organizations, projects and decisions are extracted from your archive automatically.",
          shot: "Graph",
        },
        {
          kicker: "Decision Log",
          title: "The reasoning stays, not just the decision.",
          body: "Context, options, what was ruled out and the outcome in one place; it warns you when a new decision contradicts the past.",
          shot: "Decision Log",
        },
        {
          kicker: "Output Panel",
          title: "Tables, pages and documents from your memory.",
          body: "It produces the output you ask for, grounded in your memory; download it or save it back into memory.",
          shot: "Output Panel",
        },
      ],
      twins: { kicker: "Two Twins", title: "The organization's twin, the executive's twin.", cards: twinCards.en },
      badges: ["On-premise", "KVKK compliant", "Open-source model support", "Model-agnostic"],
    },
    portable: {
      audience: "For individuals",
      name: "Portable Memory",
      heading: "Your memory with you — encrypted and locked to you.",
      sub: "Your second brain goes into an end-to-end encrypted package, stored in the cloud and restored on any device you choose. Its ownership and integrity are on record — no one but you can open the package, not even den.",
      features: [
        { name: "Encrypted package", body: "Your memory never leaves your device unencrypted. Only you hold the key." },
        { name: "On every device", body: "Use your recovery phrase to restore your memory, exactly as it was, on another computer." },
        {
          name: "Integrity record",
          body: "Your package's ownership and integrity are on record; you can verify at any time that your memory hasn't changed.",
        },
      ],
      closingLine: "Your memory isn't locked to an app, a company or a model.",
      badges: ["End-to-end encrypted", "Device-independent", "Ownership record"],
    },
    compare: {
      label: "Comparison",
      columns: ["", "den Second Brain", "Portable Memory"],
      rows: [
        ["Who it's for", "Organizations and decision-makers", "Individuals"],
        ["Where the memory lives", "On your own servers (on-premise)", "In an encrypted package, in the cloud"],
        ["Access", "Internal, role-based", "Only you (you hold the key)"],
        ["Setup", "Installation and handover", "One click from the app"],
        ["Pricing", "By quote", "Monthly subscription"],
      ],
    },
    closing: {
      heading: "Let's talk about which one fits you.",
      primary: { href: PATHS.contact.en, label: "Contact" },
      secondary: { href: PATHS.transformation.en, label: "Transformation programs" },
    },
  },
};

/* ───────────── /hakkinda — ana sayfadan taşınan içerik ───────────── */

export type AboutCopy = {
  meta: Meta;
  hero: { label: string; heading: string };
  origin: { label: string; paragraphs: ReactNode[] };
  areas: { label: string; tags: string[]; note: string };
  philosophy: { label: string; heading: string; items: { name: string; body: string }[] };
  closing: Cta;
};

export const aboutCopy: Record<Lang, AboutCopy> = {
  tr: {
    meta: {
      title: "Hakkında — Teoriden değil, deneyimden | den",
      description:
        "den, gerçek dünya temas noktalarında inşa edilen bir yapay zeka ürünüdür: nereden doğduğu, test edildiği deneyim alanları ve üç ilkesi.",
    },
    hero: { label: "Hakkında", heading: "Teoriden değil, deneyimden doğduk." },
    origin: {
      label: "Nereden doğdu",
      paragraphs: [
        <>
          <strong>den</strong>, gerçek dünya temas noktalarında inşa edilen bir yapay zeka ürünüdür. Adımızın ilham
          kaynağı Türkçe&apos;nin en yoğun fiil köklerinden biridir: <strong>denemek</strong>,{" "}
          <strong>deneyimlemek</strong>.
        </>,
        <>den de bu köklerden doğdu — teoriden değil, gerçekte var olan bir ağrıya doğrudan temas ederek.</>,
      ],
    },
    areas: {
      label: "Deneyim Alanları",
      tags: ["İnşaat", "Enerji", "Dijital İkiz & BIM", "Finans", "Yazılım & YZ", "Girişimcilik"],
      note: "den bu sahalarda, gerçek işlerin içinde test edilir.",
    },
    philosophy: {
      label: "Felsefemiz",
      heading: "Üç ilke, bir yön.",
      items: [
        { name: "Temas önce gelir", body: "den gerçek verinizle kurulur, demo verisiyle değil." },
        { name: "Hata bir sinyal", body: "den'de hata bile boşa gitmez; hafızanızda bir öğrenme düğümüne dönüşür." },
        { name: "Ölçek sonra gelir", body: "Önce sizin ikizinizi doğru kurarız." },
      ],
    },
    closing: { href: PATHS.contact.tr, label: "İletişim" },
  },
  en: {
    meta: {
      title: "About — From experience, not theory | den",
      description:
        "den is an AI product built at real-world points of contact: where it comes from, the fields it is tested in, and its three principles.",
    },
    hero: { label: "About", heading: "Born from experience, not theory." },
    origin: {
      label: "Where it comes from",
      paragraphs: [
        <>
          <strong>den</strong> is an AI product built at real-world points of contact, not in a lab. Its name comes from
          the Turkish verb roots <strong>denemek</strong> (to try) and <strong>deneyimlemek</strong> (to experience).
        </>,
        <>den was born from those same roots — not from theory, but from direct contact with a real, lived pain point.</>,
      ],
    },
    areas: {
      label: "Experience Areas",
      tags: ["Construction", "Energy", "Digital Twin & BIM", "Finance", "Software & AI", "Entrepreneurship"],
      note: "den is tested inside real businesses, in these fields, every day.",
    },
    philosophy: {
      label: "Our Philosophy",
      heading: "Three principles, one direction.",
      items: [
        { name: "Contact comes first", body: "den is built on your real data, not demo data." },
        { name: "Mistakes are signals", body: "In den, even mistakes aren't wasted; they become learning nodes in your memory." },
        { name: "Scale comes later", body: "First, we get your twin right." },
      ],
    },
    closing: { href: PATHS.contact.en, label: "Contact" },
  },
};

/* ───────────── /iletisim — form ana sayfadan taşındı ───────────── */

export type ContactCopy = {
  meta: Meta;
  hero: { label: string; heading: string; sub: string };
  form: {
    fields: { name: string; email: string; company: string; role: string; note: string };
    submit: string;
    secondaryPrefix: string;
    subject: string;
    body: (v: Record<string, string>) => string;
  };
  routes: { label: string; cards: { href: string; title: string; body: string }[] };
};

export const contactCopy: Record<Lang, ContactCopy> = {
  tr: {
    meta: {
      title: "İletişim | den",
      description: "den ile iletişime geçin: İkinci Beyin, Taşınabilir Hafıza ve kurumsal dönüşüm programları için bize yazın.",
    },
    hero: {
      label: "İletişim",
      heading: "Biriktirmeye bugün başlayın.",
      sub: "Kurumunuzun hafızası, sizinle konuşmaya hazır.",
    },
    form: {
      fields: {
        name: "Ad Soyad",
        email: "E-posta",
        company: "Şirket",
        role: "Rol",
        note: "Sizi en çok ne yoruyor? (opsiyonel)",
      },
      submit: "Gönder",
      secondaryPrefix: "Ya da doğrudan yazın:",
      subject: "İletişim Talebi",
      body: (v) =>
        `Ad Soyad: ${v.name}\nE-posta: ${v.email}\nŞirket: ${v.company}\nRol: ${v.role}\nSizi en çok ne yoruyor?: ${v.note}`,
    },
    routes: {
      label: "Göz atın",
      cards: [
        { href: PATHS.product.tr, title: "Ürünler", body: "den İkinci Beyin ve Taşınabilir Hafıza." },
        { href: PATHS.transformation.tr, title: "Dönüşüm programları", body: "Teşhis, program kurulumu, yürütme ve devir." },
      ],
    },
  },
  en: {
    meta: {
      title: "Contact | den",
      description: "Get in touch with den about Second Brain, Portable Memory and organizational transformation programs.",
    },
    hero: {
      label: "Contact",
      heading: "Start compounding today.",
      sub: "Your organization's memory is ready to talk to you.",
    },
    form: {
      fields: {
        name: "Full name",
        email: "Email",
        company: "Company",
        role: "Role",
        note: "What wears you out the most? (optional)",
      },
      submit: "Send",
      secondaryPrefix: "Or write directly:",
      subject: "Contact Request",
      body: (v) =>
        `Name: ${v.name}\nEmail: ${v.email}\nCompany: ${v.company}\nRole: ${v.role}\nWhat wears you out the most?: ${v.note}`,
    },
    routes: {
      label: "Explore",
      cards: [
        { href: PATHS.product.en, title: "Products", body: "den Second Brain and Portable Memory." },
        { href: PATHS.transformation.en, title: "Transformation programs", body: "Diagnosis, program setup, delivery and handover." },
      ],
    },
  },
};
