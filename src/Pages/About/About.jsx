import React from 'react'
import { Link } from 'react-router'
import { cardsData } from '../../data/blogData'

export default function About() {
  return (
    <div>
      {/* hero */}
      <section className='relative py-16 flex flex-col items-center gap-6 px-4
        bg-[#0d0d0f]
        bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-size-[40px_40px]'>
        <div className="absolute top-20 left-4 sm:top-48.5 sm:left-40 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(100,40,10,0.45)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
        <div className="absolute top-40 right-4 sm:top-68.5 sm:left-160 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(100,40,10,0.45)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(133,77,14,0.4)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>

        <div className='w-fit flex items-center border text-amber-600 border-amber-600 gap-2 bg-[#ff6a0039]  text-xs px-3 py-2 rounded-full'>
          <span> من نحن</span>
          <span className='w-2 h-2 rounded-full bg-orange-500 animate-heartbeat'></span>
          <span className='w-2 h-2 rounded-full bg-orange-500 animate-fade'></span>
        </div>

        {/* content */}
        <div className='flex flex-col items-center text-center'>
          <header>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold pb-2'>
              مهمتنا هي <span className='text-amber-500'>الإعلام والإلهام</span>
            </h1>
          </header>
          <p className='text-base sm:text-lg text-[#737373] pt-4 mt-0  sm:max-w-125 text-center mx-auto'>
           مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
        </div>


        {/* more info */}
        <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-4'>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-book-open text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>15+</span>
            <span className='text-[#737373] text-[10px]'>تصنيف</span>
          </div>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-pen-nib text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>+50</span>
            <span className='text-[#737373] text-[10px]'> خبير كاتب</span>
          </div>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-newspaper text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>+500</span>
            <span className='text-[#737373] text-[10px]'> مقاله منشوره</span>
          </div>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-users text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>+2مليون</span>
            <span className='text-[#737373] text-[10px]'>قارئ شهريا</span>
          </div>
        </div>
      </section>

          <section dir="rtl" className="bg-[#111111] px-6 py-20 text-white md:px-12 border-t border-[#242424] border-b">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="h-8 w-1 rounded-full bg-orange-500"></span>
            <h2 className="text-4xl font-extrabold">قيمنا</h2>
            <span className="h-8 w-1 rounded-full bg-orange-500"></span>
          </div>
          <p className="mt-6 text-lg text-neutral-400">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group flex cursor-pointer flex-col items-center rounded-2xl border border-white/10 bg-[#171717] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10">
            <i className="fa-solid fa-bullseye text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110"></i>
            <h3 className="mt-5 text-lg font-bold transition-colors duration-300 group-hover:text-orange-500">
              الجودة أولاً
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              محتوى مدروس ومكتوب بخبرة
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex cursor-pointer flex-col items-center rounded-2xl border border-white/10 bg-[#171717] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10">
            <i className="fa-solid fa-bolt text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110"></i>
            <h3 className="mt-5 text-lg font-bold transition-colors duration-300 group-hover:text-orange-500">
              تركيز عملي
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              أمثلة واقعية يمكنك تطبيقها اليوم
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex cursor-pointer flex-col items-center rounded-2xl border border-white/10 bg-[#171717] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10">
            <i className="fa-solid fa-handshake text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110"></i>
            <h3 className="mt-5 text-lg font-bold transition-colors duration-300 group-hover:text-orange-500">
              المجتمع
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              تعلم مع آلاف المصورين
            </p>
          </div>

          {/* Card 4 */}
          <div className="group flex cursor-pointer flex-col items-center rounded-2xl border border-white/10 bg-[#171717] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10">
            <i className="fa-solid fa-rotate text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110"></i>
            <h3 className="mt-5 text-lg font-bold transition-colors duration-300 group-hover:text-orange-500">
              دائماً محدث
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              أحدث الاتجاهات وأفضل الممارسات
            </p>
          </div>
        </div>
      </div>
    </section>

        <section dir="rtl" className="bg-[#0a0a0a] px-6 py-20 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-500">
            فريقنا
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          </span>
          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">تعرف على كتابنا</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        {/* Writers grid */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardsData.posts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-[#171717] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 "
            >
              {/* Avatar */}
              <div className="relative">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-28 w-28 rounded-full border-4 border-neutral-800 object-cover transition-colors duration-300 group-hover:border-orange-500/50"
                />
                <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#171717] bg-orange-500 text-white">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </span>
              </div>

              {/* Info */}
              <h3 className="mt-5 text-lg font-bold">{post.author.name}</h3>
              <p className="mt-1 text-sm font-medium text-orange-500">{post.author.role}</p>

              {/* Social */}
              <div className="mt-5 flex items-center gap-3">
                                <button
                  type="button"
                  aria-label="X"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition hover:bg-orange-400 hover:text-white"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </button>

                <button
                  type="button"
                  aria-label="GitHub"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition hover:bg-neutral-600 hover:text-white"
                >
                  <i className="fa-brands fa-github"></i>
                </button>

               <button
                  type="button"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition hover:bg-sky-600  hover:text-white"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        <section
      dir="rtl"
      className="bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 px-6 py-20 text-center text-white md:px-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        <p className="mt-6 text-lg leading-9 text-white/90">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-xl bg-[#0a0a0a] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1.5"
          >
            <i className="fa-regular fa-envelope"></i>
            تواصل معنا
          </Link>

          <Link
            to="/blog"
            className="flex items-center rounded-xl border border-white/40 bg-transparent px-8 py-4 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-black"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}
