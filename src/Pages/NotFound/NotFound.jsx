import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="relative isolate flex min-h-[calc(100vh-100px)] flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-16 text-center text-white"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Orange glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      {/* 404 */}
      <h1 className="bg-linear-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-[120px] font-black leading-none text-transparent md:text-[180px]">
        404
      </h1>

      {/* Icon */}
      <div className="relative mt-10">
        <span className="flex h-32 w-32 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500">
          <i className="fa-regular fa-face-frown text-5xl"></i>
        </span>
        <span className="absolute -top-4 right-0 h-6 w-6 rounded-full bg-orange-500"></span>
        <span className="absolute -bottom-3 left-0 h-4 w-4 rounded-full bg-amber-600"></span>
      </div>

      {/* Text */}
      <h2 className="mt-10 text-3xl font-extrabold md:text-4xl">
        عفواً! الصفحة غير موجودة
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-8 text-neutral-400">
        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-110"
        >
          <i className="fa-solid fa-house"></i>
          الذهاب للرئيسية
        </Link>

        <Link
          to="/blog"
          className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:border-orange-500/50 hover:text-orange-400"
        >
          <i className="fa-regular fa-newspaper"></i>
          تصفح المقالات
        </Link>
      </div>

      {/* Useful links */}
      <div className="mt-14 w-full max-w-xl border-t border-white/10 pt-8">
        <p className="text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-orange-500">
          <Link to="/blog" className="transition hover:text-orange-400">المدونة</Link>
          <span className="text-neutral-600">·</span>
          <Link to="/about" className="transition hover:text-orange-400">من نحن</Link>
          <span className="text-neutral-600">·</span>
          <Link to="/privacyPolicy" className="transition hover:text-orange-400">الخصوصية</Link>
        </div>
      </div>
    </div>
  )
}