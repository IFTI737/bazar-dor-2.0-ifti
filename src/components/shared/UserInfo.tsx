"use client";

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import UserAvatar from "./UserAvatar";
import { useSession } from "@/lib/auth-client";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending) {
    return <div className="skeleton h-10 w-28 rounded-lg" />;
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
          সাইন ইন
        </Link>
        <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
          সাইন আপ
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost h-10 gap-2 px-2 sm:px-4"
      >
        <UserAvatar name={user.name} image={user.image} />
        <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">
          {user.name}
        </span>
        <span className="text-xs">▾</span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu z-50 mt-1 w-64 rounded-box border border-base-300 bg-base-100 p-2"
      >
        <li className="menu-title px-3 py-2 text-base-content">
          <span className="truncate text-sm font-normal">{user.name}</span>
          <span className="truncate text-xs font-normal text-base-content/60">
            {user.email}
          </span>
        </li>
        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>
        <li>
          <SignOutButton className="text-error" />
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
