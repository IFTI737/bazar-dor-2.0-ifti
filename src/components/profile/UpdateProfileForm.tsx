"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { updateUser, useSession } from "@/lib/auth-client";

const UpdateProfileForm = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();

    if (!name) {
      toast.error("নাম খালি রাখা যাবে না");
      return;
    }

    setLoading(true);
    const { error } = await updateUser({ name });
    setLoading(false);

    if (error) {
      toast.error(error.message || "তথ্য আপডেট করা যায়নি");
      return;
    }

    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
  };

  if (isPending) {
    return <div className="skeleton h-48 w-full rounded-box" />;
  }

  return (
    <div className="card border border-base-300 bg-base-100">
      <form onSubmit={onSubmit} className="card-body gap-4 p-6">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">নাম</span>
          <input
            name="name"
            type="text"
            required
            defaultValue={session?.user.name}
            className="input w-full"
            placeholder="আপনার নাম"
          />
        </label>

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading && <span className="loading loading-spinner loading-sm" />}
          তথ্য আপডেট করুন
        </button>
        <Link href="/profile" className="btn btn-ghost w-full">
          বাতিল
        </Link>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
