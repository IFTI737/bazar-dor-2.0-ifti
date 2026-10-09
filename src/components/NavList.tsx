import Link from "next/link";
import type { Category } from "@/lib/types";

const NavList = ({
  categories,
  active,
}: {
  categories: Category[];
  active: string;
}) => {
  return (
    <nav className="mx-auto max-w-6xl px-4">
      <ul className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        {categories.map((c) => {
          const href = `/category/${c.slug}`;
          const isActive = active === href;
          return (
            <li key={c.id} className="shrink-0">
              <Link
                href={href}
                className={`flex h-8 items-center gap-1.5 rounded-lg border px-3 text-xs font-semibold transition-colors ${
                  isActive
                    ? "border-secondary bg-secondary text-secondary-content"
                    : "border-transparent hover:bg-base-200"
                }`}
              >
                <span className="font-normal">{c.icon}</span>
                {c.nameBn}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
