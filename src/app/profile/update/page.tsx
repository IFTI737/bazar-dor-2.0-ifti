import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

export const metadata = { title: "তথ্য আপডেট — বাজার দর" };

const UpdateProfilePage = () => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6">
      <div>
        <h1 className="text-2xl leading-8 font-bold">তথ্য আপডেট করুন</h1>
        <p className="text-sm text-base-content/70">
          আপনার নাম পরিবর্তন করে সেভ করুন।
        </p>
      </div>
      <UpdateProfileForm />
    </div>
  );
};

export default UpdateProfilePage;
