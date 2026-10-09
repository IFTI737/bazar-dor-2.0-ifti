import AuthLayout from "@/components/auth/AuthLayout";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata = { title: "সাইন আপ — বাজার দর" };

const SignUpPage = () => {
  return (
    <AuthLayout
      title="অ্যাকাউন্ট তৈরি করুন"
      subtitle="বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
