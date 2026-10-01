// Ürün ekran görüntüsü. Görseller verilene kadar doğru en-boy oranında yer tutucu gösterilir:
// masaüstünde 1440×900, mobilde 390×844. Görsel verildiğinde src / mobileSrc ile lazy-load edilir.
type Props = {
  label: string;
  src?: string;
  mobileSrc?: string;
  alt?: string;
};

export default function Screenshot({ label, src, mobileSrc, alt }: Props) {
  if (src) {
    return (
      <picture className="dn-shot">
        {mobileSrc && <source media="(max-width: 780px)" srcSet={mobileSrc} />}
        <img src={src} alt={alt ?? label} loading="lazy" decoding="async" />
      </picture>
    );
  }
  return (
    <div className="dn-shot dn-shot--placeholder" role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
