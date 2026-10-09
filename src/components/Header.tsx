import Link from "next/link";
import { Suspense } from "react";
import BanglaDate from "./BanglaDate";
import NavLinks from "./NavLinks";
import NavList from "./NavList";
import UserInfo from "./UserInfo";
import { getCategories } from "@/lib/api";

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg text-primary-content">
            🛒
          </span>
          <span className="flex flex-col">
            <span className="text-xl leading-7 font-bold">বাজার দর</span>
            <span className="text-xs leading-4 text-base-content/60">
              <BanglaDate />
            </span>
          </span>
        </Link>

        <div className="flex-1" />

        <UserInfo />
      </div>

      <div className="border-t border-base-200 bg-base-100">
        <Suspense fallback={<NavList categories={categories} active="" />}>
          <NavLinks categories={categories} />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
