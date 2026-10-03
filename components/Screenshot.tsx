import { getImageProps } from "next/image";

// Ürün ekran görüntüsü — gerçek den arayüzü, tamamen kurgusal demo verisiyle çekildi.
// Masaüstü görüntüsü 1440×900 (2x), mobil görüntüsü 390×844 (3x). mobileSrc verilirse
// ≤780px'te <picture> ile mobil görüntü gösterilir (next/image art direction).
// src verilmezse doğru en-boy oranında yer tutucu gösterilir.
const DESKTOP = { width: 2400, height: 1500 };
const MOBILE = { width: 1170, height: 2532 };

type Props = {
  label: string;
  src?: string;
  mobileSrc?: string;
  alt?: string;
  /** Hero görüntüsü: tembel yükleme yerine öncelikli yüklenir. */
  priority?: boolean;
  /** Görüntünün sayfadaki yaklaşık genişliği (next/image `sizes`). */
  sizes?: string;
};

export default function Screenshot({ label, src, mobileSrc, alt, priority = false, sizes }: Props) {
  if (!src) {
    return (
      <div className="dn-shot dn-shot--placeholder" role="img" aria-label={label}>
        <span>{label}</span>
      </div>
    );
  }

  const ortak = { alt: alt ?? label, priority, quality: 85 };
  const { props: masaustuProps } = getImageProps({
    ...ortak,
    ...DESKTOP,
    src,
    sizes: sizes ?? "(max-width: 780px) 100vw, (max-width: 1240px) 92vw, 1192px",
  });

  if (!mobileSrc) {
    return (
      <picture className="dn-shot">
        <img {...masaustuProps} alt={ortak.alt} />
      </picture>
    );
  }

  const { srcSet: masaustuSrcSet, ...masaustu } = masaustuProps;

  const {
    props: { srcSet: mobilSrcSet },
  } = getImageProps({ ...ortak, ...MOBILE, src: mobileSrc, sizes: "100vw" });

  return (
    <picture className="dn-shot dn-shot--art">
      <source media="(max-width: 780px)" srcSet={mobilSrcSet} sizes="100vw" />
      <source media="(min-width: 781px)" srcSet={masaustuSrcSet} sizes={masaustu.sizes} />
      <img {...masaustu} alt={ortak.alt} />
    </picture>
  );
}
