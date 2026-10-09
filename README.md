# 🛒 বাজার দর (BazarDor)

বাজার দর হলো একটি Next.js ওয়েব অ্যাপ, যেখানে চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার আজকের বাজারদর এক নজরে দেখা যায়। প্রতিটি পণ্যের দাম বাজারভিত্তিকভাবে (সর্বনিম্ন, সর্বাধিক, গড়) তুলনা করা যায় এবং গতকালের তুলনায় দাম বেড়েছে না কমেছে তা রঙ দিয়ে দেখানো হয়।

BazarDor is a Bangla market-price tracker for everyday essentials, built for Programming Hero Assignment 07 (B14-A7).

## ✨ Features

1. **Live price ticker** – an infinite marquee under the navbar showing every product's emoji, name, price per unit and ▲/▼ change.
2. **Today's movers** – the top 6 risers and top 6 fallers of the day, colour coded (red for rising, green for falling, gray for no change).
3. **Category pages** – each category (`/category/chal`, `/category/mosla` …) lists its products with a sort dropdown that sorts by numeric price, Bengali numerals included.
4. **Product details** – `/product/[slug]` shows the market summary, minimum/maximum/average price and a market-by-market price table across 12 bazars.
5. **Bengali-first UI** – Bengali digits (`১,৮৫০ টাকা`), Bangla date in the navbar, system Bangla font (same as the demo), skeleton loaders and friendly 404 pages with a “হোম পেজে ফিরে যান” button.
6. **Fully responsive** – mobile, tablet and desktop layouts with a scrollable category bar and stacking hero.

## 🛠️ Technologies

- [Next.js 16](https://nextjs.org) (App Router, Cache Components, Turbopack)
- React 19 + TypeScript
- Tailwind CSS 4 + [daisyUI 5](https://daisyui.com)
- [react-marquee-text](https://www.npmjs.com/package/react-marquee-text) for the price ticker
- [Better Auth](https://better-auth.com) with MongoDB (email/password, Google, GitHub) — in progress
- react-hot-toast

## 📡 API

Data comes from `https://api.abcz.workers.dev/api/bazardor` (`/products`, `/products?category=chal`, `/categories`).

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Copy `.env.example` to `.env.local` and fill in the values when authentication is enabled.

## 🔗 Links

- Live Link:
- GitHub Repository: https://github.com/IFTI737/bazar-dor-2.0-ifti
