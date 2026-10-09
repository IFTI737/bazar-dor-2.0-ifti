"use client";

import { usePathname } from "next/navigation";
import NavList from "./NavList";
import type { Category } from "@/lib/types";

// Highlights the category that matches the current route
const NavLinks = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();
  return <NavList categories={categories} active={pathname} />;
};

export default NavLinks;
