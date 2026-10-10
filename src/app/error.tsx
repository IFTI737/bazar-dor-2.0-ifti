"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="card mx-auto max-w-xl border border-base-300 bg-base-100 px-6 py-14 text-center">
      <p className="text-5xl">⚠️</p>
      <h1 className="mt-4 text-2xl font-bold">কিছু একটা সমস্যা হয়েছে</h1>
      <p className="mt-2 text-base-content/70">
        বাজার দরের তথ্য আনা যায়নি। পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary btn-sm sm:btn-md"
        >
          🔄 রিফ্রেশ করুন
        </button>
        <Link href="/" className="btn btn-ghost btn-sm sm:btn-md">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
