import React from 'react'
import { Link } from 'react-router'
import AvatarImg from "../../assets/avatar-1.png"
import HomeCards from '../../components/homeCards/HomeCards';
import { cardsData } from '../../data/blogData';
import HomeCardsNew from '../../components/homeCards/HomeCardsNew';

export default function Home() {
  return (
<main className='bg-[#0d0d0f] overflow-x-hidden'>
      {/* hero */}
      <section className='relative py-16 flex flex-col items-center gap-6 px-4
        bg-[#0d0d0f]
        bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-size-[40px_40px]'>
        <div className="absolute top-20 left-4 sm:top-48.5 sm:left-40 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(100,40,10,0.45)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
        <div className="absolute top-40 right-4 sm:top-68.5 sm:left-160 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(100,40,10,0.45)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(133,77,14,0.4)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>

        <div className='w-fit flex items-center border border-amber-600 gap-2 bg-[#ff6a0039] text-white text-xs px-3 py-2 rounded-full'>
          <span>مرحباً بك في عدسة</span>
          <span className='w-2 h-2 rounded-full bg-orange-500 animate-heartbeat'></span>
          <span className='w-2 h-2 rounded-full bg-orange-500 animate-fade'></span>
        </div>

        {/* content */}
        <div className='flex flex-col items-center text-center'>
          <header>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold pb-2'>
              اكتشف <span className='text-amber-500'>فن</span>
            </h1>
            <span className='block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold'>
              التصوير الفوتوغرافي
            </span>
          </header>
          <p className='text-base sm:text-lg text-[#737373] pt-4 mt-0 max-w-[90%] sm:max-w-125 text-center mx-auto'>
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
        </div>

        {/* buttons */}
        <div className='flex flex-col sm:flex-row items-center gap-3 text-sm w-full sm:w-auto'>
          <Link to="/about" className='flex items-center justify-center gap-3 rounded-full py-3 px-5 text-white border border-[#737373] transition-all duration-300 cursor-pointer hover:bg-[#ff6a0028] hover:text-amber-600 hover:border-amber-600 w-full sm:w-auto'>
            اعرف المزيد
            <i className="fa-solid fa-circle-info"></i>
          </Link>
          <Link to="/blog" className='group flex items-center justify-center gap-3 rounded-full py-3 px-5 text-white bg-amber-600 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 w-full sm:w-auto'>
            <i className="fa-solid fa-arrow-left-long transition-transform duration-300 group-hover:-translate-x-1.5"></i>
            استكشف المقالات
          </Link>
        </div>

        {/* more info */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-pen-nib text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>6</span>
            <span className='text-[#737373] text-[10px]'>كاتب</span>
          </div>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-folder-open text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>4</span>
            <span className='text-[#737373] text-[10px]'>تصنيفات</span>
          </div>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-users text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>+10ألف</span>
            <span className='text-[#737373] text-[10px]'>قارئ</span>
          </div>
          <div className='bg-[#171717] rounded-xl px-6 sm:px-10 py-5 flex flex-col items-center justify-center border border-[#484848]'>
            <i className="fa-solid fa-newspaper text-[#FF6900] text-lg"></i>
            <span className='text-amber-500 text-lg font-bold'>+50</span>
            <span className='text-[#737373] text-[10px]'>مقالة</span>
          </div>
        </div>
      </section>

{/* special */}
<section className='relative min-h-screen py-16 sm:py-28 overflow-hidden' dir="rtl">


<div className="absolute top-0 right-0 w-72 h-72 sm:w-125 sm:h-125 bg-[radial-gradient(circle_at_top_right,rgba(133,77,14,0.21)_0%,transparent_70%)] pointer-events-none"></div>
  <div className='relative w-[90%] sm:w-[80%] mx-auto'>
    <div className='w-fit flex items-center border border-amber-600 gap-2 bg-[#ff6a0039] text-amber-600 text-xs px-3 py-2 rounded-full'>
      <span className='w-2 h-2 rounded-full bg-orange-500 animate-fade'></span>
      <span className='w-2 h-2 rounded-full bg-orange-500 animate-heartbeat'></span>
      <span>مميز</span>
    </div>

    {/* content */}
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
      <div>
        <h2 className='text-white font-bold py-4 text-3xl sm:text-4xl md:text-5xl'>مقالات مختارة</h2>
        <p className='text-[#737373] text-md'>محتوى منتقى لبدء رحلة تعلمك</p>
      </div>
      <div>
        <Link to={"/blog"} className='group bg-amber-700 text-white cursor-pointer px-5 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2'>
          عرض الكل
          <i className="fa-solid fa-angle-left group-hover:-translate-x-1.5 transition-transform duration-300"></i>
        </Link>
      </div>
    </div>

    {/* cards */}
    <div className='grid grid-cols-1 gap-6 mt-10 mx-auto'>
{cardsData.posts.slice(0, 3).map((post) => (
  <HomeCards key={post.id} post={post} />
))}
    </div>
  </div>
</section>
      {/* categories */}
<section className='min-h-screen py-16 sm:py-28 bg-[#111111]  flex flex-col items-center border-b border-[#2b2b2b] ' dir="rtl">
          <div className='w-fit flex items-center border border-amber-600 gap-2 bg-[#ff6a0039] text-white text-xs px-3 py-2 rounded-full'>
           <span className='w-2 h-2 rounded-full bg-orange-500 animate-fade'></span>
          <span className='w-2 h-2 rounded-full bg-orange-500 animate-heartbeat'></span>
                 <span>  التصنيفات </span>
        </div>
        <h2 className='text-white text-5xl py-3'>استكشف حسب الموضوع</h2>
        <p className='text-[#737373] text-2xl pb-10'>اعثر على محتوى مصمم حسب اهتماماتك</p>

<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6' dir="rtl">
  
  <div className='group relative bg-[#171717] rounded-xl  py-3 pr-6 pl-30  flex flex-col items-start border border-[#484848] transition-all duration-300  hover:border-amber-600 hover:-translate-y-1 hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600
 cursor-pointer'>
<div className='absolute opacity-0 left-7 top-10 p-2 rounded-full bg-[#ffffff33] text-white text-xs  transition-all duration-300 group-hover:opacity-100'><i className="fa-solid fa-angle-left "></i></div>
    <div className='bg-[#ff6a0039] p-3 border border-amber-600 rounded-xl mb-4 transition-all duration-300 group-hover:bg-[#ffffff1a]'>
      <i className="fa-solid fa-lightbulb text-[#FF6900] text-lg transition-all duration-300 group-hover:text-white"></i>
    </div>
        <span className='text-white text-sm font-bold mt-1'>إضاءة</span>
<div className='flex items-center gap-2'>
      <span className='text-amber-500 text-lg font-bold'>3</span>
    <span className='text-[#737373] text-[10px]'>مقالة</span>
</div>

  </div>

  <Link to={`/blog?category=${encodeURIComponent('بورتريه')}`} className='group relative bg-[#171717] rounded-xl  py-3 pr-6 pl-30 flex flex-col items-start border border-[#484848] transition-all duration-300 hover:border-amber-600 hover:-translate-y-1 cursor-pointer hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600'>
   <div className='absolute opacity-0 left-7 top-10 p-2 rounded-full bg-[#ffffff33] text-white text-xs  transition-all duration-300 group-hover:opacity-100'><i className="fa-solid fa-angle-left "></i></div>
    <div className='bg-[#ff6a0039] p-3 border border-amber-600 rounded-xl mb-4 transition-all duration-300 group-hover:bg-[#ffffff1a]'>
      <i className="fa-solid fa-user text-[#FF6900] text-lg transition-all duration-300 group-hover:text-white"></i>
    </div>
        <span className='text-white text-sm font-bold mt-1'>بورتريه</span>
<div className='flex items-center gap-2'>
      <span className='text-amber-500 text-lg font-bold'>3</span>
    <span className='text-[#737373] text-[10px]'>مقالة</span>
</div>

  </Link>

  <Link to={`/blog?category=${encodeURIComponent('مناظر طبيعية')}`} className='group relative bg-[#171717] rounded-xl  py-3 pr-6 pl-30 flex flex-col items-start border border-[#484848] transition-all duration-300 hover:border-amber-600 hover:-translate-y-1 cursor-pointer hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600'>
   <div className='absolute opacity-0 left-7 top-10 p-2 rounded-full bg-[#ffffff33] text-white text-xs  transition-all duration-300 group-hover:opacity-100'><i className="fa-solid fa-angle-left "></i></div>
    <div className='bg-[#ff6a0039] p-3 border border-amber-600 rounded-xl mb-4 transition-all duration-300 group-hover:bg-[#ffffff1a]'>
      <i className="fa-solid fa-mountain text-[#FF6900] text-lg transition-all duration-300 group-hover:text-white"></i>
    </div>
        <span className='text-white text-sm font-bold mt-1'>مناظر طبيعية</span>
<div className='flex items-center gap-2'>
      <span className='text-amber-500 text-lg font-bold'>2</span>
    <span className='text-[#737373] text-[10px]'>مقالة</span>
</div>
  </Link>

  <Link to={`/blog?category=${encodeURIComponent('تقنيات')}`} className='group relative bg-[#171717] rounded-xl  py-3 pr-6 pl-30 flex flex-col items-start border border-[#484848] transition-all duration-300 hover:border-amber-600 hover:-translate-y-1 cursor-pointer hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600'>
   <div className='absolute opacity-0 left-7 top-10 p-2 rounded-full bg-[#ffffff33] text-white text-xs  transition-all duration-300 group-hover:opacity-100'><i className="fa-solid fa-angle-left "></i></div>
    <div className='bg-[#ff6a0039] p-3 border border-amber-600 rounded-xl mb-4 transition-all duration-300 group-hover:bg-[#ffffff1a]'>
      <i className="fa-solid fa-sliders text-[#FF6900] text-lg transition-all duration-300 group-hover:text-white"></i>
    </div>
        <span className='text-white text-sm font-bold mt-1'>تقنيات</span>
<div className='flex items-center gap-2'>
      <span className='text-amber-500 text-lg font-bold'>5</span>
    <span className='text-[#737373] text-[10px]'>مقالة</span>
</div>
  </Link>

  <Link to={`/blog?category=${encodeURIComponent('معدات')}`} className='group relative bg-[#171717] rounded-xl  py-3 pr-6 pl-30 flex flex-col items-start border border-[#484848] transition-all duration-300 hover:border-amber-600 hover:-translate-y-1 cursor-pointer hover:bg-linear-to-r hover:from-amber-500 hover:to-orange-600'>
   <div className='absolute opacity-0 left-7 top-10 p-2 rounded-full bg-[#ffffff33] text-white text-xs  transition-all duration-300 group-hover:opacity-100'><i className="fa-solid fa-angle-left "></i></div>
    <div className='bg-[#ff6a0039] p-3 border border-amber-600 rounded-xl mb-4 transition-all duration-300 group-hover:bg-[#ffffff1a]'>
      <i className="fa-solid fa-gear text-[#FF6900] text-lg transition-all duration-300 group-hover:text-white"></i>
    </div>
        <span className='text-white text-sm font-bold mt-1'>معدات</span>
<div className='flex items-center gap-2'>
      <span className='text-amber-500 text-lg font-bold'>3</span>
    <span className='text-[#737373] text-[10px]'>مقالة</span>
</div>

  </Link>
</div>
</section>

{/* latest articles */}
<section className="relative min-h-screen py-16 sm:py-28 overflow-hidden" dir="rtl">


  <div className="absolute top-0 left-0 h-full w-72 sm:w-125 bg-[radial-gradient(ellipse_at_left,rgba(133,77,14,0.21)_0%,transparent_70%)] pointer-events-none"></div>


  <div className="relative w-[90%] sm:w-[80%] mx-auto">

    <div className='w-fit flex items-center border border-amber-600 gap-2 bg-[#ff6a0039] text-amber-600 text-xs px-3 py-2 rounded-full'>
      <span className='w-2 h-2 rounded-full bg-orange-500 animate-fade'></span>
      <span className='w-2 h-2 rounded-full bg-orange-500 animate-heartbeat'></span>
      <span>الأحدث</span>
    </div>

    {/* content */}
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
      <div>
        <h2 className='text-white font-bold py-4 text-3xl sm:text-4xl md:text-5xl'>أحدث المقالات</h2>
        <p className='text-[#737373] text-md'>محتوى جديد طازج من المطبعة</p>
      </div>

      <div>
        <Link to={"/blog"} className='group text-amber-700 cursor-pointer rounded-lg transition-all duration-300 hover:text-amber-500 inline-flex items-center gap-2'>
          عرض جميع المقالات
          <i className="fa-solid fa-angle-left group-hover:-translate-x-1.5 transition-transform duration-300"></i>
        </Link>
      </div>
    </div>

    {/* cards */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10' dir="rtl">
  {cardsData.posts.slice(3, 6).map((post) => (
    <HomeCardsNew key={post.id} post={post} />
  ))}
</div>
  </div>
</section>
{/* subscribe */}
<section className='relative py-16 sm:py-28 px-4 bg-[#0d0d0f] overflow-hidden' dir="rtl">
  {/* glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 max-w-full h-64 rounded-full bg-[radial-gradient(circle,rgba(133,77,14,0.4)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>

  <div className='relative w-full max-w-250 mx-auto bg-[#171717] border border-[#2a2a2a] rounded-3xl px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center text-center'>
    {/* icon */}
    <div className='w-16 h-16 sm:w-19 sm:h-19 flex items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 mb-6'>
      <i className="fa-regular fa-envelope text-white text-2xl sm:text-3xl"></i>
    </div>

    {/* title */}
    <h2 className='text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4'>
      اشترك في <span className='text-amber-500'>نشرتنا الإخبارية</span>
    </h2>

    {/* description */}
    <p className='text-[#a3a3a3] text-sm sm:text-lg max-w-170 mb-8'>
      احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
    </p>

    {/* form */}
    <div className='flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md sm:max-w-xl mb-6'>
      <input
        type='email'
        placeholder='أدخل بريدك الإلكتروني'
        className='flex-1 bg-[#0d0d0f] border border-[#2a2a2a] focus:border-amber-600 rounded-xl px-5 py-4 text-sm text-white placeholder-[#737373] text-right outline-none transition-all duration-300'
      />
      <button className='bg-linear-to-r from-orange-500 to-orange-600 rounded-xl px-8 py-4 text-sm font-bold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5'>
        اشترك الآن
      </button>
    </div>

    {/* info */}
    <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs text-[#737373]'>
      <div className='flex items-center gap-3'>
<div className='flex items-center'>
  {cardsData.posts.slice(0, 3).map((post, i) => (
    <img
      key={post.id}
      src={post.author.avatar}
      alt={post.author.name}
      className={`w-8 h-8 rounded-full object-cover border-2 border-[#171717] ${i !== 0 ? '-me-2' : ''}`}
    />
  ))}
</div>
        <span>انضم لـ <span className='text-white font-bold'>+10,000</span> مصور</span>
      </div>
      <span>•</span>
      <span>بدون إزعاج</span>
      <span>•</span>
      <span>إلغاء الاشتراك في أي وقت</span>
    </div>
  </div>
</section>
    </main>
  )
}