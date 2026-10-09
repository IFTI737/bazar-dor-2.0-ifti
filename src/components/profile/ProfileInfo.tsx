"use client";

import Link from "next/link";
import SignOutButton from "@/components/shared/SignOutButton";
import UserAvatar from "@/components/shared/UserAvatar";
import { useSession } from "@/lib/auth-client";

const ProfileInfo = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending || !user) {
    return (
      <div className="flex flex-col gap-6">
        <div className="skeleton h-32 w-full rounded-box" />
        <div className="skeleton h-48 w-full rounded-box" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="card flex-col gap-4 border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center">
        <UserAvatar
          name={user.name}
          image={user.image}
          className="size-20 rounded-2xl text-3xl"
        />
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-xl leading-7">{user.name}</h2>
          <p className="truncate text-base-content/70">{user.email}</p>
        </div>
        <SignOutButton className="btn btn-outline btn-error btn-sm sm:btn-md" />
      </div>

      <div className="card gap-3 border border-base-300 bg-base-100 p-5">
        <h3 className="text-lg font-semibold">তথ্য</h3>
        <div className="flex flex-col gap-4 sm:p-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">নাম</span>
            <p className="input w-full items-center">{user.name}</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">ইমেইল</span>
            <p className="input w-full items-center">{user.email}</p>
          </div>
          <Link href="/profile/update" className="btn btn-primary w-full">
            আপডেট
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
