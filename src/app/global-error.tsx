"use client";

import "./globals.css";

// Shown when the navbar or price ticker data can't be loaded from any API
const GlobalError = () => {
  return (
    <html lang="bn" data-theme="bazardor">
      <body className="flex min-h-screen items-center justify-center bg-base-200 p-4 text-base-content">
        <div className="card max-w-xl border border-base-300 bg-base-100 px-6 py-14 text-center">
          <p className="text-5xl">⚠️</p>
          <h1 className="mt-4 text-2xl font-bold">কিছু একটা সমস্যা হয়েছে</h1>
          <p className="mt-2 text-base-content/70">
            বাজার দরের তথ্য আনা যায়নি। পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary btn-sm sm:btn-md"
            >
              🔄 রিফ্রেশ করুন
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
