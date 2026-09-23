export default function DnSectionBar({ num, label }: { num: number; label: string }) {
  return (
    <div className="dn-bar reveal">
      <span className="dn-bar-label">
        {String(num).padStart(2, "0")} — {label}
      </span>
    </div>
  );
}
