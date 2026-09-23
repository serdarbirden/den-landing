// Dönüşüm (danışmanlık hizmeti) içeriği, TR ve EN.
// Yeni bir dil eklemek için DonusumLang'e ekleyip aşağıdaki iki nesneye
// aynı şekle sahip bir anahtar yazmak yeterli.

export type DonusumLang = "tr" | "en";

export const CONTACT_EMAIL = "serdarbirden@denofficial.com";

export function meetingHref(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

type Cta = { href: string; label: string };

export type LadderStep = {
  name: string;
  changes: string;
  fallacy: string;
  threshold: string;
};

export type TransformationType = {
  name: string;
  changes: string;
  owner: string;
  prerequisite: string;
  outputs: string[];
};

export type DonusumCopy = {
  meta: { title: string; description: string; path: string };
  hero: { label: string; heading: string; sub: string; primary: Cta; secondary: Cta };
  ladder: {
    label: string;
    heading: string;
    intro: string;
    fieldLabels: { changes: string; fallacy: string; threshold: string };
    svgLabel: string;
    steps: LadderStep[];
  };
  types: {
    label: string;
    heading: string;
    intro: string;
    columns: [string, string, string, string, string];
    rows: TransformationType[];
    dependency: string;
  };
  difference: { label: string; heading: string; paragraphs: [string, string] };
  den: { label: string; heading: string; body: string; link: Cta };
  closing: { heading: string; body: string; primary: Cta; secondary: Cta };
};

export type ProgramCard = {
  name: string;
  duration: string;
  audience: string;
  deliverables: string[];
};

export type ProgramCopy = {
  meta: { title: string; description: string; path: string };
  hero: { parent: Cta; label: string; heading: string; sub: string };
  programs: { label: string; audienceLabel: string; deliverablesLabel: string; items: ProgramCard[] };
  process: { label: string; heading: string; steps: { name: string; body: string }[] };
  frameworks: { label: string; items: string[]; note: string };
  faq: { label: string; heading: string; items: { q: string; a: string }[] };
  closing: { heading: string; primary: Cta; secondary: Cta };
};

const MEETING_SUBJECT_TR = "Teşhis Görüşmesi Talebi";
const MEETING_SUBJECT_EN = "Diagnostic Call Request";

export const donusumCopy: Record<DonusumLang, DonusumCopy> = {
  tr: {
    meta: {
      title: "Dönüşüm — Olgunluk Merdiveni ve Teşhis | den",
      description:
        "Kurumsal dönüşümde hangi basamaktasınız? Dijitalleşmeden yapay zeka dönüşümü ve ajanik dönüşüme uzanan olgunluk merdiveni, teşhis ve KVKK uyumlu on-premise kurulum.",
      path: "/donusum",
    },
    hero: {
      label: "Dönüşüm",
      heading: "Yapay zekaya, olmayan bir temelin üzerine başlanıyor.",
      sub: "Kurumların çoğu dijitalleşmeyi bitirdi, dijital dönüşümü yarıda bıraktı ve yapay zekayı bu boşluğun üzerine kurmaya çalışıyor. Pilotların üretime geçmemesinin nedeni model değil, atlanan basamaktır.",
      primary: { href: meetingHref(MEETING_SUBJECT_TR), label: "Teşhis görüşmesi planla" },
      secondary: { href: "/donusum/program", label: "Programları gör" },
    },
    ladder: {
      label: "Olgunluk Merdiveni",
      heading: "Dört basamak, dört ayrı yönetim problemi.",
      intro:
        "Kurumun hangi basamakta olduğunu bilmek, hangi teknolojiyi seçtiğinden daha belirleyicidir. Her basamağın kendine özgü bir yanılgısı ve bir geçiş eşiği vardır.",
      fieldLabels: { changes: "Ne değişir", fallacy: "Tipik yanılgı", threshold: "Geçiş eşiği" },
      svgLabel:
        "Olgunluk merdiveni: Dijitalleşme, Dijital Dönüşüm, Yapay Zeka Dönüşümü ve Ajanik Kurum basamakları",
      steps: [
        {
          name: "Dijitalleşme",
          changes:
            "İşin aracı değişir. Kâğıt form web formuna, defter ERP'ye taşınır; süreç ve karar hakları aynı kalır.",
          fallacy: "Bunu dijital dönüşüm sanmak. Sistem sayısı artar, çevrim süresi değişmez.",
          threshold: "Kritik süreçlerin uçtan uca dijital izi var, temel metrikler ölçülebiliyor.",
        },
        {
          name: "Dijital Dönüşüm",
          changes:
            "İşin yapılış biçimi değişir. Süreç yeniden tasarlanır, karar hakları aşağı iner, bütçe döngüsü çeyreklik portföye döner.",
          fallacy:
            "Sahipliği bilgi işleme devretmek. Değişmesi gereken iş sürecidir; BT sahipliğinde süreç değişikliği kararı alınamaz.",
          threshold: "Süreçler yazılı ve ölçülü, veri erişilebilir ve yetkilendirilmiş, karar hakları tanımlı.",
        },
        {
          name: "Yapay Zeka Dönüşümü",
          changes:
            "Karar ve içerik üretimi değişir. Deterministik kuralların yerini olasılıksal sistemler alır; doğruluk bir eşiğe, kabul kriteri bir dağılıma döner.",
          fallacy:
            "Deterministik dünyanın satın alma ve kabul süreçleriyle olasılıksal sistem almak. Pilot tuzağının en yaygın hâli.",
          threshold:
            "Üretimde ölçülen değerlendirme seti, denetlenebilir kayıt, tanımlı insan onay noktaları ve pilottan ayrı bir ölçekleme bütçesi.",
        },
        {
          name: "Ajanik Kurum",
          changes:
            "İş akışının sahibi değişir. Çok adımlı akışlar, insan onay bariyerleri arkasında otonom ajanlara devredilir; insan icradan istisna ve onay katmanına geçer.",
          fallacy:
            "Geri alma mekanizması ve finansal işlemlerde durdurma kuralı kurulmadan otonomi seviyesini yükseltmek.",
          threshold:
            "Bu bir bitiş değil, işletim modelidir: otonomi her akış için ayrı ayrı ve ölçüme dayalı yükseltilir.",
        },
      ],
    },
    types: {
      label: "Yaptığımız İş",
      heading: "Üç tür, üç ayrı problem.",
      intro:
        "Her dönüşüm türünün sahibi, ön koşulu ve ölçüsü farklıdır. Ön koşulu sağlanmadan başlatılan tür, teknik olarak çalışan ama benimsenmeyen sonuçlar üretir.",
      columns: ["Dönüşüm türü", "Ne değişir", "Kimin problemi", "Ön koşul", "Çıktılar"],
      rows: [
        {
          name: "Veri Dönüşümü",
          changes: "Veri sahipliği, erişim yönetişimi, kalite eşikleri",
          owner: "BT / veri sorumlusu",
          prerequisite: "Kritik veri kaynaklarının envanteri",
          outputs: [
            "Veri kataloğu ve kaynak izleri",
            "Rol bazlı erişim matrisi",
            "Kullanım senaryosu başına hazırlık kararı",
          ],
        },
        {
          name: "Yapay Zeka Dönüşümü",
          changes: "Karar üretimi, kabul kriteri, test ve yönetişim modeli",
          owner: "Teknoloji / operasyon",
          prerequisite: "Ölçülü süreç, yetkilendirilmiş veri, tanımlı karar hakkı",
          outputs: [
            "Üretime hazır pilot",
            "Değerlendirme seti ve kabul eşiği",
            "İnsan onay noktalarının tasarımı",
          ],
        },
        {
          name: "Ajanik Dönüşüm",
          changes: "İş akışının sahibi ve otonomi seviyesi",
          owner: "Teknoloji + risk birlikte",
          prerequisite: "Denetlenebilir kayıt, geri alma mekanizması, tanımlı onay noktaları",
          outputs: ["Ajan akış tasarımı", "Otonomi seviyesi matrisi", "Durdurma ve geri alma kuralları"],
        },
      ],
      dependency:
        "Sıra atlanamaz: yapay zeka dönüşümü veri dönüşümünü, ajanik dönüşüm de yapay zeka dönüşümünü ön koşul olarak ister.",
    },
    difference: {
      label: "Farkımız",
      heading: "Sunum bırakmıyoruz; kurup bırakıyoruz.",
      paragraphs: [
        "Çoğu dönüşüm programı bir yol haritası sunumuyla biter. Biz kendi ürünümüzü ve kendi kurumlarımızı bu merdivenden geçirdik; teşhisi de kurulumu da aynı ekip yapar.",
        "Programın sonunda elinizde slayt değil, üretimde çalışan bir sistem ve onu işleten iç ekibiniz olur.",
      ],
    },
    den: {
      label: "Kurumsal Hafıza",
      heading: "İsteğe bağlı: kurumsal hafıza katmanı.",
      body: "Dönüşüm programının içine, kurumun kendi sunucusunda çalışan hafıza katmanımız den'i entegre edebiliriz. Kararlarınız, yazışmalarınız ve belgeleriniz tek bir yaşayan hafızada birikir; veri binanızdan çıkmaz. Programdan bağımsız da alınabilir.",
      link: { href: "/", label: "den — İkinci Beyin" },
    },
    closing: {
      heading: "Önce hangi basamakta olduğunuzu belirleyelim.",
      body: "Mevcut durumun teşhisi, en zayıf halkanın darboğazı ve önümüzdeki çeyrek için üç somut aksiyon — bir görüşmeyle başlıyoruz.",
      primary: { href: meetingHref(MEETING_SUBJECT_TR), label: "Teşhis görüşmesi planla" },
      secondary: { href: "/donusum/program", label: "Programları gör" },
    },
  },
  en: {
    meta: {
      title: "Transformation — Maturity Ladder and Diagnosis | den",
      description:
        "Which step of organizational transformation are you on? A maturity ladder from digitization to AI transformation and agentic transformation, with diagnosis and KVKK-compliant on-premise delivery.",
      path: "/en/transformation",
    },
    hero: {
      label: "Transformation",
      heading: "AI is being built on a foundation that was never finished.",
      sub: "Most organizations completed digitization, left digital transformation half-done, and started building AI on top of that gap. Pilots don't reach production because of the step that was skipped — not because of the model.",
      primary: { href: meetingHref(MEETING_SUBJECT_EN), label: "Book a diagnostic call" },
      secondary: { href: "/en/transformation/programs", label: "See the programs" },
    },
    ladder: {
      label: "Maturity Ladder",
      heading: "Four steps, four different management problems.",
      intro:
        "Knowing which step you're on matters more than which technology you choose. Each step has its own characteristic mistake and its own threshold for moving up.",
      fieldLabels: { changes: "What changes", fallacy: "Common mistake", threshold: "Threshold" },
      svgLabel:
        "Maturity ladder: Digitization, Digital Transformation, AI Transformation and Agentic Organization steps",
      steps: [
        {
          name: "Digitization",
          changes:
            "The tools change. Paper forms become web forms, ledgers become ERP; the process and decision rights stay the same.",
          fallacy: "Calling this digital transformation. The number of systems grows; cycle time doesn't move.",
          threshold: "Critical processes have an end-to-end digital trail and basic metrics are measurable.",
        },
        {
          name: "Digital Transformation",
          changes:
            "The way work is done changes. Processes are redesigned, decision rights move down, budgeting shifts to a quarterly portfolio rhythm.",
          fallacy:
            "Handing ownership to IT. What has to change is the business process; IT ownership cannot decide a process change.",
          threshold:
            "Processes are documented and measured, data is accessible and permissioned, decision rights are defined.",
        },
        {
          name: "AI Transformation",
          changes:
            "Decision-making and content production change. Deterministic rules give way to probabilistic systems; accuracy becomes a threshold and acceptance a distribution.",
          fallacy:
            "Buying a probabilistic system with the procurement and acceptance process of a deterministic world — the most common form of the pilot trap.",
          threshold:
            "An evaluation set measured in production, auditable logging, defined human-in-the-loop points, and a scaling budget separate from the pilot.",
        },
        {
          name: "Agentic Organization",
          changes:
            "Ownership of the workflow changes. Multi-step flows are handed to autonomous agents behind human approval barriers; people move from execution to exception and approval.",
          fallacy:
            "Raising autonomy before a rollback mechanism and hard-stop rules for financial actions are in place.",
          threshold:
            "This is not an end state but an operating model: autonomy is raised per workflow, based on measurement.",
        },
      ],
    },
    types: {
      label: "What We Do",
      heading: "Three types, three distinct problems.",
      intro:
        "Each type has a different owner, prerequisite and measure. A type started without its prerequisite produces results that work technically but are never adopted.",
      columns: ["Type", "What changes", "Whose problem", "Prerequisite", "Deliverables"],
      rows: [
        {
          name: "Data Transformation",
          changes: "Data ownership, access governance, quality thresholds",
          owner: "IT / data lead",
          prerequisite: "An inventory of critical data sources",
          outputs: ["Data catalogue and lineage", "Role-based access matrix", "Readiness decision per use case"],
        },
        {
          name: "AI Transformation",
          changes: "Decision-making, acceptance criteria, testing and governance model",
          owner: "Technology / operations",
          prerequisite: "Measured processes, permissioned data, defined decision rights",
          outputs: ["Production-ready pilot", "Evaluation set and acceptance threshold", "Human-in-the-loop design"],
        },
        {
          name: "Agentic Transformation",
          changes: "Workflow ownership and level of autonomy",
          owner: "Technology and risk together",
          prerequisite: "Auditable logging, rollback mechanism, defined approval points",
          outputs: ["Agent workflow design", "Autonomy level matrix", "Hard-stop and rollback rules"],
        },
      ],
      dependency:
        "The order can't be skipped: AI transformation requires data transformation, and agentic transformation requires AI transformation.",
    },
    difference: {
      label: "What Makes Us Different",
      heading: "We don't leave a deck. We build it and hand it over.",
      paragraphs: [
        "Most transformation programs end with a roadmap presentation. We put our own product and our own companies through this ladder; the same team does the diagnosis and the build.",
        "At the end you have a system running in production and an internal team operating it — not a slide deck.",
      ],
    },
    den: {
      label: "Organizational Memory",
      heading: "Optional: an organizational memory layer.",
      body: "We can integrate den, our memory layer, into the program — running on your own servers. Your decisions, correspondence and documents accumulate in one living memory, and the data never leaves your building. Available independently of the program.",
      link: { href: "/en", label: "den — Second Brain" },
    },
    closing: {
      heading: "Let's start by establishing which step you're on.",
      body: "A diagnosis of where you stand, the bottleneck in your weakest area, and three concrete actions for the coming quarter — it starts with one conversation.",
      primary: { href: meetingHref(MEETING_SUBJECT_EN), label: "Book a diagnostic call" },
      secondary: { href: "/en/transformation/programs", label: "See the programs" },
    },
  },
};

export const programCopy: Record<DonusumLang, ProgramCopy> = {
  tr: {
    meta: {
      title: "Dönüşüm Programları — Teşhis, Kurulum, Devir | den",
      description:
        "Kurumsal dönüşüm programları: Teşhis Sprinti, Program Kurulumu, Yürütme ve Devir. Yapay zeka dönüşümü ve ajanik dönüşümü üretime taşıyan, KVKK uyumlu on-premise uygulama.",
      path: "/donusum/program",
    },
    hero: {
      parent: { href: "/donusum", label: "Dönüşüm" },
      label: "Program",
      heading: "Üç program, tek ilke: ölçülemeyen dönüşüm yönetilemez.",
      sub: "Teşhis tek başına alınabilir; uygulama ve devir isteğe bağlı devam eder.",
    },
    programs: {
      label: "Programlar",
      audienceLabel: "Kimin için",
      deliverablesLabel: "Teslimatlar",
      items: [
        {
          name: "Teşhis Sprinti",
          duration: "2–4 hafta",
          audience: "Nereden başlayacağını netleştirmek isteyen yönetim ekipleri.",
          deliverables: [
            "Olgunluk teşhisi (boyut bazlı)",
            "Değer havuzu analizi ve girişim listesi",
            "Önümüzdeki çeyrek için üç aksiyon, sahibi ve tarihi",
          ],
        },
        {
          name: "Program Kurulumu",
          duration: "6–10 hafta",
          audience: "Girişimleri tek tek değil, portföy olarak yönetmeye geçen kurumlar.",
          deliverables: [
            "Karar hakları matrisi ve çeyreklik portföy ritmi",
            "Sonuç metrikleri ve taban ölçüm planı",
            "İlk iki pilotun kapsamı ve üretim kabul eşikleri",
          ],
        },
        {
          name: "Yürütme ve Devir",
          duration: "3–6 ay",
          audience: "Pilotu üretime taşıyıp iç ekibe devretmek isteyenler.",
          deliverables: [
            "Üretime alınmış kullanım senaryosu, değerlendirme seti ve izleme",
            "İnsan onay noktalarının tasarımı ve yönetişim kayıtları",
            "İç ekibe devir paketi ve 30 gün yerinde destek",
          ],
        },
      ],
    },
    process: {
      label: "Nasıl Çalışıyoruz",
      heading: "Dört adım, her birinin bir çıktısı var.",
      steps: [
        { name: "Teşhis", body: "Kurumun hangi basamakta olduğunu ve en zayıf halkayı ölçüyoruz." },
        { name: "Önceliklendirme", body: "Girişimleri değere ve hazırlığa göre sıralıyor, sahiplerini belirliyoruz." },
        { name: "Pilot ve üretim", body: "Seçilen senaryoyu, önceden yazılmış kabul eşiğiyle üretime taşıyoruz." },
        { name: "Devir", body: "Sistemi belgeleriyle birlikte onu işletecek iç ekibe devrediyoruz." },
      ],
    },
    frameworks: {
      label: "Çalıştığımız Çerçeveler",
      items: ["KVKK", "ISO/IEC 27001", "ISO/IEC 42001", "EU AI Act"],
      note: "Bu çerçeveler projelerin nasıl tasarlandığını ve belgelendiğini anlatır; sahip olunan bir sertifika iddiası değildir.",
    },
    faq: {
      label: "Sıkça Sorulanlar",
      heading: "Sorular.",
      items: [
        {
          q: "Dijital dönüşümü bitirmeden yapay zekaya başlayabilir miyiz?",
          a: "Kurumun tamamında değil, ilgili süreçte evet. Ön koşul kurum çapında olgunluk değil, hedeflenen kullanım senaryosunun süreç, veri ve karar hakkı açısından hazır olmasıdır. Teşhis Sprinti bunu senaryo bazında belirler; hazır olmayan senaryo için önce eksik basamağın tamamlanmasını öneririz.",
        },
        {
          q: "Pilot tuzağı nedir, nasıl anlarız?",
          a: "Teknik olarak başarılı bir pilotun üretime hiç geçmemesidir. Tipik belirtileri: kabul kriterinin pilot başlamadan yazılmamış olması, ölçekleme için ayrı bütçe bulunmaması, pilotun sahibinin iş birimi değil yalnızca BT olması ve “bir pilot daha” kararının tekrar etmesi.",
        },
        {
          q: "Program sunum teslimiyle mi bitiyor?",
          a: "Hayır. Teşhis Sprinti yazılı bir teşhis ve sahibi, tarihi belli üç aksiyonla biter. Yürütme ve Devir programının sonunda üretimde çalışan bir kullanım senaryosu, değerlendirme seti, yönetişim kayıtları ve iç ekibe devir paketi teslim edilir.",
        },
        {
          q: "Küçük ve orta ölçekli şirketler için bu yapı ağır değil mi?",
          a: "Yapı aynı, ölçek farklıdır. Küçük kurumlarda teşhis daha kısa sürer, portföy birkaç girişimden oluşur ve karar hakları matrisi tek sayfaya sığar. Programlar ayrı ayrı alınabildiği için çoğu şirket Teşhis Sprinti ile başlar ve ihtiyaca göre devam eder.",
        },
        {
          q: "den ürününü almadan da programa girebilir miyiz?",
          a: "Evet; program üründen bağımsızdır. den'in kurumsal hafıza katmanı yalnızca istenirse programa entegre edilir.",
        },
      ],
    },
    closing: {
      heading: "Teşhisle başlayalım.",
      primary: { href: meetingHref(MEETING_SUBJECT_TR), label: "Görüşme planla" },
      secondary: { href: "/donusum", label: "Olgunluk merdivenine dön" },
    },
  },
  en: {
    meta: {
      title: "Transformation Programs — Diagnosis, Setup, Handover | den",
      description:
        "Organizational transformation programs: Diagnostic Sprint, Program Setup, Delivery and Handover. Taking AI transformation and agentic transformation into production, with KVKK-compliant on-premise delivery.",
      path: "/en/transformation/programs",
    },
    hero: {
      parent: { href: "/en/transformation", label: "Transformation" },
      label: "Programs",
      heading: "Three programs, one principle: transformation that isn't measured can't be managed.",
      sub: "The diagnostic can be taken on its own; delivery and handover continue optionally.",
    },
    programs: {
      label: "Programs",
      audienceLabel: "For",
      deliverablesLabel: "Deliverables",
      items: [
        {
          name: "Diagnostic Sprint",
          duration: "2–4 weeks",
          audience: "Leadership teams that need clarity on where to start.",
          deliverables: [
            "Maturity diagnosis across dimensions",
            "Value pool analysis and initiative list",
            "Three actions for the coming quarter, with owners and dates",
          ],
        },
        {
          name: "Program Setup",
          duration: "6–10 weeks",
          audience: "Organizations moving from one-off initiatives to portfolio management.",
          deliverables: [
            "Decision rights matrix and quarterly portfolio rhythm",
            "Outcome metrics and baseline measurement plan",
            "Scope and production acceptance thresholds for the first two pilots",
          ],
        },
        {
          name: "Delivery and Handover",
          duration: "3–6 months",
          audience: "Teams taking a pilot into production and handing it to their own people.",
          deliverables: [
            "A use case running in production with an evaluation set and monitoring",
            "Human-in-the-loop design and governance records",
            "Handover package and 30 days of on-site support",
          ],
        },
      ],
    },
    process: {
      label: "How We Work",
      heading: "Four steps, each with an output.",
      steps: [
        { name: "Diagnosis", body: "We measure which step the organization is on and where the weakest link is." },
        { name: "Prioritization", body: "We rank initiatives by value and readiness, and name their owners." },
        { name: "Pilot and production", body: "We take the chosen use case into production against a threshold written in advance." },
        { name: "Handover", body: "We hand the system, with its documentation, to the internal team that will run it." },
      ],
    },
    frameworks: {
      label: "Frameworks We Work With",
      items: ["KVKK (Turkish data protection)", "ISO/IEC 27001", "ISO/IEC 42001", "EU AI Act"],
      note: "These frameworks describe how projects are designed and documented; they are not a claim of certification held.",
    },
    faq: {
      label: "FAQ",
      heading: "Questions.",
      items: [
        {
          q: "Can we start with AI before finishing digital transformation?",
          a: "Not across the whole organization, but yes in the relevant process. The prerequisite is not organization-wide maturity; it is that the target use case is ready in terms of process, data and decision rights. The Diagnostic Sprint establishes this per use case; where a use case isn't ready, we recommend completing the missing step first.",
        },
        {
          q: "What is the pilot trap and how do we recognize it?",
          a: "It is when a technically successful pilot never reaches production. Typical signs: acceptance criteria that weren't written before the pilot started, no separate budget for scaling, a pilot owned only by IT rather than the business unit, and repeated decisions to run “one more pilot”.",
        },
        {
          q: "Does the program end with a presentation?",
          a: "No. The Diagnostic Sprint ends with a written diagnosis and three actions with owners and dates. Delivery and Handover ends with a use case running in production, an evaluation set, governance records and a handover package for your internal team.",
        },
        {
          q: "Isn't this structure too heavy for a mid-sized company?",
          a: "The structure is the same; the scale is different. In smaller organizations the diagnosis is shorter, the portfolio is a handful of initiatives, and the decision rights matrix fits on one page. Because the programs can be taken separately, most companies start with the Diagnostic Sprint and continue as needed.",
        },
        {
          q: "Can we join the program without buying den?",
          a: "Yes; the program is independent of the product. den's organizational memory layer is integrated only if you want it.",
        },
      ],
    },
    closing: {
      heading: "Let's start with the diagnosis.",
      primary: { href: meetingHref(MEETING_SUBJECT_EN), label: "Book a call" },
      secondary: { href: "/en/transformation", label: "Back to the maturity ladder" },
    },
  },
};
