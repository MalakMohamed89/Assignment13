import React, { useEffect } from 'react'
import { cardsData } from '../../data/blogData'
import { Link, useParams } from 'react-router'


export default function CardDetails() {
    const {slug} = useParams()

  const post = cardsData.posts.find(
    (post) => post.slug === slug
  );

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const relatedPosts = cardsData.posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)


  const contentParts = post.content
  .split('\n\n')
  .filter(Boolean);

const intro = contentParts[0];

const sections = [];

for (let i = 1; i < contentParts.length; i += 2) {
  sections.push({
    title: contentParts[i].replace('## ', ''),
    text: contentParts[i + 1],
  });
}
  return (
    <div dir="rtl" className="scroll-smooth min-h-screen bg-[#0a0a0a] font-sans text-white">
      {/* ===================== HERO ===================== */}
      <section className="relative isolate min-h-150 w-full overflow-hidden bg-neutral-900">
        {/* Background image */}
        <img
          src={post.image}
          alt="أسرار تصوير البورتريه"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-black/20 to-[#0a0a0a]" />

        <div className="mx-auto flex min-h-150 max-w-7xl flex-col justify-between px-6 py-8 md:px-12">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex">
            <ol className="flex items-center gap-3 rounded-full border border-white/10 bg-neutral-700/60 px-4 py-2 text-sm text-neutral-200 backdrop-blur-md">
              <li>
                <Link to="/" className="flex items-center hover:text-white" aria-label="الرئيسية">
                  <i className="fa-solid fa-house text-base"></i>
                </Link>
              </li>
              <li className="flex items-center text-neutral-400">
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  المدونة
                </Link>
              </li>
              <li className="flex items-center text-neutral-400">
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </li>
              <li className="font-medium text-orange-500">بورتريه</li>
            </ol>
          </nav>

          {/* Hero content */}
          <div className="mt-24 flex flex-col items-start gap-5">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
              <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
                {post.category}
              </span>

              <span className="flex items-center gap-2">
                <i className="fa-regular fa-calendar"></i>
                {new Date(post.date).toLocaleDateString('ar-EG', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>

              <span className="flex items-center gap-2">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.4] md:text-6xl md:leading-[1.35]">
  {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 py-3 pe-3 ps-6 backdrop-blur-md">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-14 w-14 rounded-full border-2 border-orange-500 object-cover"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">{post.author.name}</span>
                <span className="text-sm text-neutral-400">{post.author.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BODY ===================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* ---------- MAIN CONTENT (right side in RTL) ---------- */}
          <main className="min-w-0">
            {/* Quote */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.07] px-8 py-6 text-base italic leading-8 text-orange-100/90">
              {post.excerpt}
            </div>

            {/* Intro */}
            <p className="mt-10 text-lg leading-9 text-neutral-200">
              {intro}
            </p>
{/* Articles */}
{sections.map((section, i) => (
  <article key={i} id={`section-${i + 1}`} className="mt-14 scroll-mt-24">
    <div className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
        <i className="fa-solid fa-camera text-xl"></i>
      </span>
      <h2 className="text-3xl font-extrabold md:text-4xl">{section.title}</h2>
    </div>
    <p className="mt-5 text-lg leading-9 text-neutral-300">{section.text}</p>
  </article>
))}

            {/* Tags */}
            <div className="mt-14 rounded-2xl border border-white/10 bg-neutral-900/70 p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                  <i className="fa-solid fa-tags text-lg"></i>
                </span>
                <h3 className="text-base font-bold">الوسوم</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-300 transition hover:border-orange-500/50 hover:text-orange-400"
                >
                  #بورتريه
                </Link>
                <Link
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-300 transition hover:border-orange-500/50 hover:text-orange-400"
                >
                  #تصوير أشخاص
                </Link>
                <Link
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-300 transition hover:border-orange-500/50 hover:text-orange-400"
                >
                  #إضاءة طبيعية
                </Link>
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                  <i className="fa-solid fa-share-nodes text-lg"></i>
                </span>
                <h3 className="text-base font-bold">شارك المقال</h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                 
                  aria-label="X"
                  className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition hover:bg-blue-400 "
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                 
                  aria-label="LinkedIn"
                  className=" cursor-pointer flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition hover:bg-sky-600"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                 
                  aria-label="WhatsApp"
                  className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition hover:bg-green-600"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <button
                  type="button"
                  aria-label="نسخ الرابط"
                  className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition hover:bg-amber-600"
                >
                  <i className="fa-solid fa-link"></i>
                </button>
              </div>
            </div>

            {/* Author box */}
            <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-neutral-900/70 p-8 sm:flex-row">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-28 w-28 shrink-0 rounded-2xl border-4 border-orange-900/60 object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-orange-500">كاتب المقال</span>
                <h3 className="text-2xl font-extrabold">{post.author.name}</h3>
                <span className="text-sm text-neutral-400">{post.author.role}</span>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                </p>
              </div>
            </div>
          </main>

          {/* ---------- SIDEBAR (left side in RTL) ---------- */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
            {/* Table of contents */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                  <i className="fa-solid fa-list-ul text-lg"></i>
                </span>
                <h3 className="text-base font-bold">محتويات المقال</h3>
              </div>

              <ul className="mt-6 flex flex-col gap-2  scroll-mt-24">
{sections.map((section, i) => (
  <li key={i}>
    <a
      href={`#section-${i + 1}`}
      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-neutral-400 transition hover:bg-[#29190F] hover:text-orange-500"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold">
        {i + 1}
      </span>
      {section.title}
    </a>
  </li>
))}
              </ul>
            </div>

            {/* Date + read time */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
            
              <div className="flex flex-col items-center gap-2 rounded-xl bg-black/60 px-3 py-6 text-center">
                <i className="fa-regular fa-clock text-xl text-orange-500"></i>
                <span className="text-sm font-bold">{post.readTime}</span>
                <span className="text-xs text-neutral-500">وقت القراءة</span>
              </div>

              <div className="flex flex-col items-center gap-2 rounded-xl bg-black/60 px-3 py-6 text-center">
                <i className="fa-regular fa-calendar text-xl text-orange-500"></i>
                <span className="text-sm font-bold"> {new Date(post.date).toLocaleDateString('ar-EG', {
                  day: 'numeric',
                  month: 'long',
              
                })}</span>
                <span className="text-xs text-neutral-500">تاريخ النشر</span>
              </div>
            </div>

            {/* Newsletter card */}
            <div className="flex flex-col items-center rounded-2xl border border-orange-500/20 bg-linear-to-b from-orange-500/12 to-orange-500/4 p-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/25 text-orange-500">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </span>
              <h3 className="mt-5 text-base font-bold">لا تفوّت جديدنا</h3>
              <p className="mt-2 text-sm text-neutral-400">اشترك للحصول على أحدث المقالات</p>
              <Link
                to="/blog"
                className="mt-6 w-full rounded-xl bg-orange-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-500"
              >
                تصفح المزيد
              </Link>
            </div>
          </aside>
        </div>
      </section>
      {/* ===================== RELATED POSTS ===================== */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl border-t border-white/10 px-6 pb-20 pt-14 md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                <i className="fa-solid fa-images text-xl"></i>
              </span>
              <div>
                <h2 className="text-2xl font-extrabold md:text-3xl">مقالات قد تعجبك</h2>
                <p className="mt-1 text-sm text-neutral-400">استكشف المزيد من المحتوى المميز</p>
              </div>
            </div>

            <Link
              to="/blog"
              className="group hidden md:flex items-center gap-2 text-sm font-medium text-orange-500  transition hover:text-orange-400"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1.5  transition-all duration-300"></i>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                  <h3 className="text-lg font-bold leading-8 transition group-hover:text-orange-400">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.author.avatar}
                        alt={item.author.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span>{item.author.name}</span>
                    </div>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}


    </div>
  )
}