"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";

const SignOutButton = ({ className }: { className: string }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে");
          router.push("/");
          router.refresh();
        },
        onError: () => {
          toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন");
        },
      },
    });
  };

  return (
    <button type="button" onClick={handleSignOut} className={className}>
      ↩ সাইন আউট
    </button>
  );
};

export default SignOutButton;
