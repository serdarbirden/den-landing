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
      body: "Yerinde kurulumla sözleşmeler, e-postalar, belgeler, projeler... Kurumunuzun deneyimi bağlantılı bir hafıza ağına dönüşür. 'Bu tedarikçiyle geçmişte ne yaşadık?' sorusunun cevabı artık kimsenin hafızasına bağlı değil.",
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
      body: "With an On-Site installation, contracts, emails, documents, projects... Your organization's experience becomes a connected memory network. 'What happened with this supplier before?' no longer depends on anyone's recollection.",
      shape: "factory",
    },
    {
      tag: "The Executive's Twin",
      body: "Your decisions, your reasoning, the paths you didn't take. den learns your decision history; ask 'what did I think about this last year?' and it answers with date, context and rationale. It even tells you when you contradict yourself.",
      shape: "head",
    },
  ],
};

/* ───────────── Ana sayfa: "Tek hafıza, iki sürüm." ve kapanış ───────────── */

export type HomeCopy = {
  // Slogan 2 bölümü: model bağımsızlığı ve hafızanın sahipliği (hero'nun hemen ardından).
  aiMemory: {
    label: string;
    heading: string;
    intro: string;
    pillars: { name: string; body: string }[];
    punchline: string;
  };
  // Alt katman: hafızanın içinde ne var — kişi / kurum ikizi ve ürün yüzeyleri.
  inside: {
    label: string;
    heading: string;
    intro: string;
    twins: { name: string; body: string }[];
    surfaces: { name: string; body: string }[];
    link: Cta;
  };
  products: {
    label: string;
    heading: string;
    intro: string;
    cards: { name: string; body: string }[];
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

// Tek ürün (den İkinci Beyin), iki sürüm: Yerinde ve Taşınabilir. "İki ürün" ifadesi kullanılmaz.
export const homeCopy: Record<Lang, HomeCopy> = {
  tr: {
    aiMemory: {
      label: "Yapay Zekâ Hafızası",
      heading: "AI değişebilir. Hafızanız değişmez.",
      intro:
        "Modeller gelir, gider, yenilenir. den'de hafıza modelden ayrı durur: modeli değiştirdiğinizde biriktirdiğiniz bilgi, kararlar ve bağlam yerinde kalır.",
      pillars: [
        {
          name: "Modelden bağımsız",
          body: "Anthropic modelleriyle, Ollama üzerinden yerelde çalışan açık kaynak modellerle ve OpenAI uyumlu uç noktalarla çalışır. Model bir ayardır; hafıza değil.",
        },
        {
          name: "Hafıza size ait",
          body: "Hafıza düz Markdown dosyalarında yaşar; Obsidian ile açabilir, okuyabilir, yedekleyebilirsiniz. Modeli değiştirseniz de hafıza aynı kalır.",
        },
        {
          name: "Ajanlar bağlanır, siz onaylarsınız",
          body: "MCP destekleyen yapay zekâ araçları ve ajanlar hafızayı okur. Yazma varsayılan olarak onayınızdan geçer; ajan erişimleri denetim izine kaydedilir.",
        },
        {
          name: "Şifreli ve taşınabilir",
          body: "Taşınabilir sürümde hafıza uçtan uca şifreli bir pakete alınır ve kurtarma ifadenizle başka bir cihazda geri yüklenir.",
        },
      ],
      punchline: "Yapay zekâyı siz seçersiniz. Hafıza sizde kalır.",
    },
    inside: {
      label: "Hafızanın içinde",
      heading: "Hafızanın içinde ne var?",
      intro:
        "den'in tuttuğu hafıza, sizin ve kurumunuzun dijital ikizidir — bir ikinci beyin. MCP destekleyen yapay zekâ araçları aynı ikize bağlanır.",
      twins: [
        {
          name: "Sizin ikiziniz",
          body: "Kararlarınız, gerekçeleriniz, vazgeçtikleriniz. 'Bu konuda geçen yıl ne düşünmüştüm?' sorusuna tarih, bağlam ve gerekçeyle cevap verir.",
        },
        {
          name: "Kurumunuzun ikizi",
          body: "Yerinde kurulumla sözleşmeler, e-postalar, belgeler ve projeler bağlantılı bir hafıza ağına dönüşür; bilgi kimsenin hatırlamasına bağlı kalmaz.",
        },
      ],
      surfaces: [
        { name: "Sohbet", body: "Sorun, hafızanız kaynak kartlarıyla cevaplasın." },
        { name: "Ağ", body: "Kişi, kurum, proje ve kararlar arasındaki bağlar otomatik çıkarılır." },
        { name: "Karar Defteri", body: "Kararın gerekçesi kalır; geçmişle çelişince uyarır." },
        { name: "Çıktı Paneli", body: "Hafızanızdan tablo, sayfa ve belge üretir." },
      ],
      link: { href: PATHS.product.tr, label: "Ürünü incele" },
    },
    products: {
      label: "Ürün",
      heading: "Tek hafıza, iki sürüm.",
      intro: "Hafızanızın ne olduğu değişmez; nerede yaşadığını siz seçersiniz.",
      cards: [
        {
          name: "Yerinde",
          body: "Hafıza kurumunuzun kendi altyapısında çalışır; veri binanızdan çıkmaz. Rol bazlı erişim yol haritasında. Kurumlar ve karar vericiler için.",
        },
        {
          name: "Taşınabilir",
          body: "Hafıza uçtan uca şifreli bir pakette bulutta durur, istediğiniz cihazda geri yüklenir. Anahtar yalnızca sizde — paketi sizden başka kimse açamaz. Bireysel kullanıcılar için.",
        },
      ],
      link: { href: PATHS.product.tr, label: "Ürünü incele" },
    },
    closing: {
      heading: "Biriktirmeye bugün başlayın.",
      subline: "Kurumunuzun hafızası, sizinle konuşmaya hazır.",
      primary: { href: PATHS.contact.tr, label: "İletişim" },
      secondary: { href: PATHS.product.tr, label: "Ürünü incele" },
      crossLink: {
        before: "Kurumsal dönüşüm programlarımız için ",
        link: { href: PATHS.transformation.tr, label: "Dönüşüm" },
        after: " bölümüne bakın.",
      },
    },
  },
  en: {
    aiMemory: {
      label: "AI Memory",
      heading: "AI can change. Your memory doesn't.",
      intro:
        "Models come, go and get replaced. In den, memory stays separate from the model: when you switch models, the knowledge, decisions and context you have built up stay where they are.",
      pillars: [
        {
          name: "Model-independent",
          body: "Works with Anthropic models, with open-source models running locally through Ollama, and with OpenAI-compatible endpoints. The model is a setting; the memory is not.",
        },
        {
          name: "Your memory is yours",
          body: "The memory lives in plain Markdown files; you can open, read and back them up with Obsidian. Even if you change the model, the memory stays the same.",
        },
        {
          name: "Agents connect, you approve",
          body: "MCP-capable AI tools and agents read the memory. Writes go through your approval by default; agent access is recorded in an audit trail.",
        },
        {
          name: "Encrypted and portable",
          body: "In the Portable edition, the memory goes into an end-to-end encrypted package and is restored on another device with your recovery phrase.",
        },
      ],
      punchline: "You choose the AI. The memory stays with you.",
    },
    inside: {
      label: "Inside the memory",
      heading: "What's inside the memory?",
      intro:
        "The memory den keeps is the digital twin of you and your organization — a second brain. MCP-capable AI tools connect to the same twin.",
      twins: [
        {
          name: "Your twin",
          body: "Your decisions, your reasoning, the paths you didn't take. Ask 'what did I think about this last year?' and it answers with date, context and rationale.",
        },
        {
          name: "Your organization's twin",
          body: "With an On-Site installation, contracts, emails, documents and projects become a connected memory network; knowledge no longer depends on anyone's recollection.",
        },
      ],
      surfaces: [
        { name: "Chat", body: "Ask, and your memory answers with source cards." },
        { name: "Graph", body: "Links between people, organizations, projects and decisions are extracted automatically." },
        { name: "Decision Log", body: "The reasoning stays; it warns you when the past is contradicted." },
        { name: "Output Panel", body: "Produces tables, pages and documents from your memory." },
      ],
      link: { href: PATHS.product.en, label: "Explore the product" },
    },
    products: {
      label: "Product",
      heading: "One memory, two editions.",
      intro: "What your memory is doesn't change; you choose where it lives.",
      cards: [
        {
          name: "On-Site",
          body: "The memory runs on your organization's own infrastructure; data never leaves your building. Role-based access is on the roadmap. For organizations and decision-makers.",
        },
        {
          name: "Portable",
          body: "The memory sits in an end-to-end encrypted package in the cloud and is restored on any device you choose. Only you hold the key — no one else can open the package. For individuals.",
        },
      ],
      link: { href: PATHS.product.en, label: "Explore the product" },
    },
    closing: {
      heading: "Start compounding today.",
      subline: "Your organization's memory is ready to talk to you.",
      primary: { href: PATHS.contact.en, label: "Contact" },
      secondary: { href: PATHS.product.en, label: "Explore the product" },
      crossLink: {
        before: "For our organizational transformation programs, see ",
        link: { href: PATHS.transformation.en, label: "Transformation" },
        after: ".",
      },
    },
  },
};

/* ───────────── /urun — den İkinci Beyin: ortak özellikler ve iki sürüm ───────────── */

// img: public/screens/{img}-{lang}.webp (gerçek arayüz, kurgusal demo verisi); alt: ekran görüntüsünün metin karşılığı.
export type FeatureBlock = { kicker: string; title: string; body: string; shot: string; img: string; alt: string };

export type ProductCopy = {
  meta: Meta;
  hero: { label: string; heading: string; sub: string; shot: string; img: string; mobileImg: string; alt: string };
  shotPrefix: string;
  // Her iki sürümde de aynı olanlar.
  shared: {
    label: string;
    blocks: FeatureBlock[];
    twins: { kicker: string; title: string; cards: TwinCard[] };
  };
  onSite: { label: string; name: string; heading: string; body: string; badges: string[] };
  portable: {
    label: string;
    name: string;
    heading: string;
    body: string;
    features: { name: string; body: string }[];
    badges: string[];
  };
  compare: {
    label: string;
    heading: string;
    columns: [string, string, string];
    rows: [string, string, string][];
    note: string;
  };
  closing: { heading: string; primary: Cta; secondary: Cta };
};

// DİL KURALI (Taşınabilir sürüm): "kripto", "blokzincir", "token", "cüzdan", "Web3" kullanılmaz.
export const productCopy: Record<Lang, ProductCopy> = {
  tr: {
    meta: {
      title: "İkinci Beyin — yapay zekânın hafızası, Yerinde ve Taşınabilir | den",
      description:
        "den İkinci Beyin, yapay zekânın hafızasıdır: MCP destekleyen yapay zekâ araçları aynı hafızaya bağlanır, model değişse de hafıza size ait kalır. Tek ürün, iki sürüm: kurumlar için on-premise (Yerinde), bireyler için uçtan uca şifreli (Taşınabilir).",
    },
    hero: {
      label: "Ürün",
      heading: "İkinci Beyin.",
      sub: "Yapay zekânın hafızası. Bilginiz, kararlarınız ve deneyiminiz tek bir hafızada birikir; sorduğunuzda gerekçesiyle hatırlar. MCP destekleyen yapay zekâ araçları aynı hafızaya bağlanır — model değişse de hafıza sizde kalır. Nerede yaşayacağına siz karar verirsiniz.",
      shot: "Sohbet",
      img: "sohbet",
      mobileImg: "sohbet-mobil",
      alt: "den Sohbet ekranı: hafızadan gelen gerekçeli bir cevap ve altında, bilginin geldiği e-posta, toplantı ve belgeleri gösteren kaynak kartları",
    },
    shotPrefix: "Ekran görüntüsü",
    shared: {
      label: "Her iki sürümde de aynı",
      blocks: [
        {
          kicker: "Sohbet",
          title: "Sorun, hafızanız cevaplasın.",
          body: "Her cevabın altında, bilginin hangi e-postadan, hangi belgeden, hangi karardan geldiğini gösteren kaynak kartları yer alır.",
          shot: "Sohbet",
          img: "sohbet-celiski",
          alt: "den Sohbet ekranı: üstte geçmiş bir kararla çelişki uyarısı, altında yeni CLT teklifinde neyin değiştiğine dair cevap ve kaynak kartları",
        },
        {
          kicker: "Ağ",
          title: "Bu ağı siz çizmediniz.",
          body: "Kişiler, kurumlar, projeler ve kararlar arasındaki bağlantılar arşivinizden otomatik çıkarılır.",
          shot: "Ağ",
          img: "ag",
          alt: "den Ağ ekranı: kişiler, kurumlar, projeler ve kararlar arasındaki otomatik çıkarılmış bağlantı ağı, solda düğüm türleri ve dönem kaydırıcısı",
        },
        {
          kicker: "Karar Defteri",
          title: "Kararın kendisi kadar gerekçesi de kalır.",
          body: "Bağlam, seçenekler, vazgeçilenler ve sonuç tek yerde; yeni bir karar geçmişle çelişince uyarır.",
          shot: "Karar Defteri",
          img: "karar-defteri",
          alt: "den Karar Defteri ekranı: bir kararın bağlamı, gerekçesi, seçenekleri, vazgeçilenleri, sonucu ve kaynakları",
        },
        {
          kicker: "Çıktı Paneli",
          title: "Hafızanızdan tablo, sayfa, belge.",
          body: "İstediğiniz çıktıyı hafızanıza dayanarak üretir; indirirsiniz ya da hafızaya geri kaydedersiniz.",
          shot: "Çıktı Paneli",
          img: "cikti-paneli",
          alt: "den Çıktı Paneli: sohbetin yanında hafızadan üretilmiş, her satırı kaynağa bağlı teklif karşılaştırma tablosu",
        },
      ],
      twins: { kicker: "İki İkiz", title: "Kurumun ikizi, yöneticinin ikizi.", cards: twinCards.tr },
    },
    onSite: {
      label: "Yerinde — kurumlar ve karar vericiler",
      name: "den İkinci Beyin · Yerinde",
      heading: "Hafıza binanızdan çıkmaz.",
      body: "Kendi altyapınızda çalışır. Açık kaynak modellerle tamamen kapalı devre kullanılabilir; ajan erişimleri değiştirilemez bir denetim izine yazılır. Rol bazlı erişim yol haritasında.",
      badges: ["On-premise", "KVKK'ya uygun mimari", "Açık kaynak model desteği", "Ajan denetim izi", "Rol bazlı erişim (yol haritası)"],
    },
    portable: {
      label: "Taşınabilir — bireysel kullanıcılar",
      name: "den İkinci Beyin · Taşınabilir",
      heading: "Hafızanız yanınızda, size kilitli.",
      body: "İkinci beyniniz uçtan uca şifreli bir pakete alınır, bulutta saklanır ve istediğiniz cihazda geri yüklenir. Bütünlüğü kayıt altındadır — paketi sizden başka kimse açamaz, den dahil.",
      features: [
        { name: "Şifreli paket", body: "Hafızanız cihazınızdan şifrelenmeden çıkmaz. Anahtar yalnızca sizde." },
        { name: "Her cihazda", body: "Kurtarma ifadenizle başka bir bilgisayarda hafızanızı olduğu gibi geri yükleyin." },
        {
          name: "Değişmezlik kaydı",
          body: "Paketinizin bütünlüğü ve sürüm geçmişi kayıt altında; hafızanızın değişmediğini her an doğrulayabilirsiniz.",
        },
      ],
      badges: ["Uçtan uca şifreli", "Cihazdan bağımsız", "Bütünlük kaydı"],
    },
    compare: {
      label: "Karşılaştırma",
      heading: "Hangi sürüm?",
      columns: ["", "Yerinde", "Taşınabilir"],
      rows: [
        ["Kime göre", "Kurumlar ve karar vericiler", "Bireysel kullanıcılar"],
        ["Hafıza nerede durur", "Kendi altyapınızda", "Şifreli pakette, bulutta"],
        ["Erişim", "Kurum içi (rol bazlı erişim yol haritasında)", "Yalnızca siz (anahtar sizde)"],
        ["Kurulum", "Kurulum ve devir", "Uygulamadan tek tıkla"],
        ["Fiyatlandırma", "Teklif bazlı", "Aylık abonelik (yakında)"],
      ],
      note: "İkisi aynı üründür; hafızanızı sürümler arasında taşıma yakında geliyor.",
    },
    closing: {
      heading: "Hangi sürüm size uygun, konuşalım.",
      primary: { href: PATHS.contact.tr, label: "İletişim" },
      secondary: { href: PATHS.transformation.tr, label: "Dönüşüm programları" },
    },
  },
  en: {
    meta: {
      title: "Second Brain — the memory for AI, On-Site and Portable | den",
      description:
        "den Second Brain is the memory for AI: MCP-capable AI tools connect to the same memory, and the memory stays yours even when the model changes. One product, two editions: on-premise for organizations (On-Site), end-to-end encrypted for individuals (Portable).",
    },
    hero: {
      label: "Product",
      heading: "Second Brain.",
      sub: "The memory for AI. Your knowledge, decisions and experience accumulate in a single memory; ask, and it remembers with the reasoning. MCP-capable AI tools connect to the same memory — even when the model changes, the memory stays with you. You decide where it lives.",
      shot: "Chat",
      img: "sohbet",
      mobileImg: "sohbet-mobil",
      alt: "den Chat screen: a reasoned answer from memory, with source cards below showing the emails, meetings and documents it came from",
    },
    shotPrefix: "Screenshot",
    shared: {
      label: "The same in both editions",
      blocks: [
        {
          kicker: "Chat",
          title: "Ask, and your memory answers.",
          body: "Under every answer, source cards show which email, which document and which decision the information came from.",
          shot: "Chat",
          img: "sohbet-celiski",
          alt: "den Chat screen: a conflict warning against a past decision at the top, below it an answer on what changed in the new CLT offer, with source cards",
        },
        {
          kicker: "Graph",
          title: "You didn't draw this network.",
          body: "The links between people, organizations, projects and decisions are extracted from your archive automatically.",
          shot: "Graph",
          img: "ag",
          alt: "den Graph screen: an automatically extracted network of people, organizations, projects and decisions, with node types and a period slider on the left",
        },
        {
          kicker: "Decision Log",
          title: "The reasoning stays, not just the decision.",
          body: "Context, options, what was ruled out and the outcome in one place; it warns you when a new decision contradicts the past.",
          shot: "Decision Log",
          img: "karar-defteri",
          alt: "den Decision Log screen: a decision with its context, rationale, options, discarded alternatives, outcome and sources",
        },
        {
          kicker: "Output Panel",
          title: "Tables, pages and documents from your memory.",
          body: "It produces the output you ask for, grounded in your memory; download it or save it back into memory.",
          shot: "Output Panel",
          img: "cikti-paneli",
          alt: "den Output Panel: a bid comparison table generated from memory next to the chat, every row linked to its source",
        },
      ],
      twins: { kicker: "Two Twins", title: "The organization's twin, the executive's twin.", cards: twinCards.en },
    },
    onSite: {
      label: "On-Site — organizations and decision-makers",
      name: "den Second Brain · On-Site",
      heading: "Your memory never leaves your building.",
      body: "It runs on your own infrastructure. It can run fully air-gapped on open-source models; agent access is written to a tamper-evident audit trail. Role-based access is on the roadmap.",
      badges: ["On-premise", "KVKK-ready architecture", "Open-source model support", "Agent audit trail", "Role-based access (roadmap)"],
    },
    portable: {
      label: "Portable — individuals",
      name: "den Second Brain · Portable",
      heading: "Your memory with you, locked to you.",
      body: "Your second brain goes into an end-to-end encrypted package, is stored in the cloud and restored on any device you choose. Its integrity is on record — no one but you can open the package, not even den.",
      features: [
        { name: "Encrypted package", body: "Your memory never leaves your device unencrypted. Only you hold the key." },
        { name: "On every device", body: "Use your recovery phrase to restore your memory, exactly as it was, on another computer." },
        {
          name: "Integrity record",
          body: "Your package's integrity and version history are on record; you can verify at any time that your memory hasn't changed.",
        },
      ],
      badges: ["End-to-end encrypted", "Device-independent", "Integrity record"],
    },
    compare: {
      label: "Comparison",
      heading: "Which edition?",
      columns: ["", "On-Site", "Portable"],
      rows: [
        ["Who it's for", "Organizations and decision-makers", "Individuals"],
        ["Where the memory lives", "On your own infrastructure", "In an encrypted package, in the cloud"],
        ["Access", "Internal (role-based access on the roadmap)", "Only you (you hold the key)"],
        ["Setup", "Installation and handover", "One click from the app"],
        ["Pricing", "By quote", "Monthly subscription (coming soon)"],
      ],
      note: "Both are the same product; moving your memory between editions is coming soon.",
    },
    closing: {
      heading: "Let's talk about which edition fits you.",
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
      description: "den ile iletişime geçin: İkinci Beyin (Yerinde ve Taşınabilir) ve kurumsal dönüşüm programları için bize yazın.",
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
        { href: PATHS.product.tr, title: "Ürün", body: "den İkinci Beyin: Yerinde ve Taşınabilir." },
        { href: PATHS.transformation.tr, title: "Dönüşüm programları", body: "Teşhis, program kurulumu, yürütme ve devir." },
      ],
    },
  },
  en: {
    meta: {
      title: "Contact | den",
      description: "Get in touch with den about Second Brain (On-Site and Portable) and organizational transformation programs.",
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
        { href: PATHS.product.en, title: "Product", body: "den Second Brain: On-Site and Portable." },
        { href: PATHS.transformation.en, title: "Transformation programs", body: "Diagnosis, program setup, delivery and handover." },
      ],
    },
  },
};
