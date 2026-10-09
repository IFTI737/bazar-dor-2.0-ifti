import ProfileInfo from "@/components/profile/ProfileInfo";

export const metadata = { title: "আমার প্রোফাইল — বাজার দর" };

const ProfilePage = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div>
        <h1 className="text-2xl leading-8 font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-base-content/70">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
