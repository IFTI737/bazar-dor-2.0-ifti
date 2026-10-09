import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { ChangeText } from "@/components/product/ChangeBadge";
import { getProducts } from "@/lib/api";
import { formatPrice, unitBn } from "@/lib/utils";

const Marquee = async () => {
  const products = await getProducts();

  return (
    <div className="border-b border-base-300 bg-base-100 text-sm">
      <MarqueeText direction="right" duration={50} pauseOnHover textSpacing="0">
        {products.map((p) => (
          <Link
            href={`/product/${p.slug}`}
            key={p.id}
            className="inline-flex items-center gap-1.5 border-r border-base-200 px-4 py-2 hover:bg-base-200"
          >
            <span>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span className="text-base-content/70">
              {formatPrice(p.today)} টাকা/{unitBn(p.unit)}
            </span>
            <ChangeText change={p.change} />
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
