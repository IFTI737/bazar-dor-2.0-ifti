import Image from "next/image";
import BanglaDate from "@/components/shared/BanglaDate";

const Hero = () => {
  return (
    <section className="card overflow-hidden rounded-3xl border border-base-300 bg-base-100">
      <div className="flex flex-col items-center gap-8 px-4 py-8 sm:px-6 md:flex-row md:justify-between md:py-10 lg:pl-4">
        <div className="flex max-w-xl flex-col items-start gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <BanglaDate />
          </span>
          <h1 className="text-3xl leading-tight font-bold sm:text-4xl sm:leading-[45px]">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-1 text-base leading-6 text-base-content/70">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a href="#সব-পণ্য" className="btn btn-primary btn-sm mt-3 sm:btn-md">
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src="/bazar-hero.png"
          alt="তাজা বাজারের ঝুড়ি"
          width={315}
          height={263}
          priority
          className="h-auto w-56 sm:w-72 md:w-[315px]"
        />
      </div>
    </section>
  );
};

export default Hero;
