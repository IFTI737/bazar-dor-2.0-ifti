import Link from "next/link";

const NotFoundMessage = ({
  title = "পেজটি খুঁজে পাওয়া যায়নি",
  message = "আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে।",
}: {
  title?: string;
  message?: string;
}) => {
  return (
    <div className="card mx-auto max-w-xl border border-base-300 bg-base-100 px-6 py-14 text-center">
      <p className="text-7xl font-bold text-primary sm:text-8xl">৪০৪</p>
      <h1 className="mt-4 text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-base-content/70">{message}</p>
      <div className="mt-6">
        <Link href="/" className="btn btn-primary btn-sm sm:btn-md">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFoundMessage;
