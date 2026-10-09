import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";

export const metadata = { title: "সাইন ইন — বাজার দর" };

const SignInPage = () => {
  return (
    <AuthLayout
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
    >
      <Suspense fallback={<div className="skeleton h-72 w-full" />}>
        <SignInForm />
      </Suspense>
    </AuthLayout>
  );
};

export default SignInPage;
