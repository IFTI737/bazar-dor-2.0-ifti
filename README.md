<div align="center">

# 🛒 বাজার দর · BazarDor

**আজকের বাজারদর, এক নজরে।**
A Bangla market-price tracker for everyday essentials: rice, lentils, oil, vegetables, fish, meat, eggs, dairy and spices.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![daisyUI](https://img.shields.io/badge/daisyUI-5-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com)
[![Better Auth](https://img.shields.io/badge/Better_Auth-MongoDB-47A248?logo=mongodb&logoColor=white)](https://better-auth.com)

[**🌐 Live Site**](#-links) · [**📦 Repository**](https://github.com/IFTI737/bazar-dor-2.0)

</div>

---

## 📖 About

বাজার দর হলো একটি Next.js ওয়েব অ্যাপ, যেখানে নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম দেখা যায়, ১২টি বাজারের দাম তুলনা করা যায় এবং গতকালের তুলনায় দাম বেড়েছে না কমেছে তা রঙ দিয়ে বোঝা যায়।

BazarDor shows today's prices for daily essentials, compares them across 12 markets, and highlights what went up or down since yesterday. Product details are behind a login with email/password, Google or GitHub.

> Built for Programming Hero Batch 14, Assignment 07 (B14-A7).

## ✨ Key Features

| | Feature | What it does |
|---|---|---|
| 📈 | **Live price ticker** | An endless marquee under the navbar shows every product's emoji, name, price per unit and ▲/▼ change. Hover to pause, click to open the product. |
| 🔥 | **Today's price movers** | The home page lists the top risers and fallers of the day, coloured red for rising, green for falling and gray for unchanged. |
| 🗂️ | **Category pages with sorting** | `/category/chal`, `/category/mosla` and the rest list their products with a sort menu (ডিফল্ট, কম থেকে বেশি, বেশি থেকে কম) that sorts by real numeric value, Bengali digits included. |
| 🏪 | **Market-by-market comparison** | Each product page shows the lowest, highest and average price and a table of prices across 12 bazars, plus yesterday, last week and last month. |
| 🔐 | **Authentication & protected routes** | Better Auth with MongoDB: email/password, Google and GitHub sign-in. Product and profile pages are protected, and users return to the page they wanted after signing in. |
| 👤 | **Profile & update information** | `/profile` shows the user's photo, name and email, and `/profile/update` lets them change their name. |
| 🇧🇩 | **Bengali-first, responsive UI** | Bengali numerals (`১,৮৫০ টাকা`), a Bangla date in the navbar, skeleton loaders, friendly 404 pages and layouts for mobile, tablet and desktop. |

## 🛠️ Technologies Used

| Area | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Cache Components, `proxy.ts`), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, daisyUI 5 |
| Auth | Better Auth, `@better-auth/mongo-adapter`, MongoDB |
| UI extras | react-marquee-text, react-hot-toast |
| Deployment | Vercel |

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/signin, signup      # auth pages
│   ├── api/auth/[...all]          # Better Auth handler
│   ├── category/[slug]            # category listing + sorting
│   ├── product/[slug]             # product details (protected)
│   ├── profile, profile/update    # user profile (protected)
│   └── layout.tsx, page.tsx, icon.svg
├── components/
│   ├── auth/  home/  product/  category/  profile/  shared/  ui/
├── lib/        # api.ts, auth.ts, auth-client.ts, utils.ts
├── types/      # bazardor.ts
└── proxy.ts    # route protection
```

## 📡 API

Data comes from `https://api.abcz.workers.dev/api/bazardor`:

| Endpoint | Returns |
|---|---|
| `/products` | All products |
| `/products?category=chal` | Products in one category |
| `/categories` | All categories |

## 🚀 Getting Started

```bash
git clone https://github.com/IFTI737/bazar-dor-2.0.git
cd bazar-dor-2.0
npm install
```

Create a `.env.local` file in the project root:

```env
BAZARDOR_API_URL=https://api.abcz.workers.dev/api/bazardor
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=a_long_random_string
BETTER_AUTH_URL=https://bazar-dor-2-0-ifti.vercel.app/
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

OAuth callback URLs:
- Google: `https://bazar-dor-2-0-ifti.vercel.app/api/auth/callback/google`
- GitHub: `https://bazar-dor-2-0-ifti.vercel.app/api/auth/callback/github`

Then run:

```bash
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/).

## 🔗 Links

- **Live Site:** [Bazar-Dor](https://bazar-dor-2-0-ifti.vercel.app/)
- **Repository:** https://github.com/IFTI737/bazar-dor-2.0

---

<div align="center">
Made with 💚 by <a href="https://github.com/IFTI737">Iftekhar Bin Shoib</a>
</div>
