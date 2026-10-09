import Link from "next/link";
import type { ReactNode } from "react";

const AuthLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 py-4 sm:py-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl leading-8 font-bold">{title}</h1>
        <p className="text-sm text-base-content/70">{subtitle}</p>
      </div>

      <div className="card border border-base-300 bg-base-100">
        <div className="card-body gap-4 p-6">{children}</div>
      </div>

      <Link
        href="/"
        className="text-center text-sm text-base-content/70 hover:text-primary"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default AuthLayout;
