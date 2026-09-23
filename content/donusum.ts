// Dönüşüm (danışmanlık hizmeti) içeriği.
// Şimdilik yalnızca TR var. EN eklemek için DonusumLang'e "en" ekleyip
// aşağıdaki iki nesneye aynı şekle sahip bir `en` anahtarı yazmak yeterli.

export type DonusumLang = "tr";

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
};
