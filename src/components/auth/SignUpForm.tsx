"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { signUp } from "@/lib/auth-client";

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (user.password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("দুটি পাসওয়ার্ড মেলেনি");
      return;
    }

    setLoading(true);
    const { error } = await signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
    router.push("/signin");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">নাম</span>
          <input
            name="name"
            type="text"
            required
            className="input w-full"
            placeholder="যেমন: রহিম উদ্দিন"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">ইমেইল</span>
          <input
            name="email"
            type="email"
            required
            className="input w-full"
            placeholder="you@example.com"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">পাসওয়ার্ড</span>
          <input
            name="password"
            type="password"
            required
            className="input w-full"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">পাসওয়ার্ড নিশ্চিত করুন</span>
          <input
            name="confirmPassword"
            type="password"
            required
            className="input w-full"
            placeholder="আবার লিখুন"
          />
        </label>

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading && <span className="loading loading-spinner loading-sm" />}
          অ্যাকাউন্ট তৈরি করুন
        </button>
      </form>

      <SocialLogin />

      <p className="text-center text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="text-primary hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </>
  );
};

export default SignUpForm;
