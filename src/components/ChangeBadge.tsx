import type { Product } from "@/lib/types";
import { formatPct } from "@/lib/utils";

const styles = {
  up: { arrow: "▲", color: "text-error" },
  down: { arrow: "▼", color: "text-success" },
  flat: { arrow: "—", color: "text-base-content/50" },
};

export const ChangeText = ({
  change,
  className = "",
}: {
  change: Product["change"];
  className?: string;
}) => {
  const style = styles[change.dir] ?? styles.flat;
  return (
    <span className={`${style.color} ${className}`}>
      {style.arrow} <span className="font-semibold">{formatPct(change.pct)}</span>
    </span>
  );
};

const ChangeBadge = ({ change }: { change: Product["change"] }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-base-200 px-2 py-1 text-xs leading-4">
      <ChangeText change={change} />
    </span>
  );
};

export default ChangeBadge;
