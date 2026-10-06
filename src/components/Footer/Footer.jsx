import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
  <footer className='border-t bg-[#161616] border-gray-600  py-2' dir='rtl'>
      <div className='relative mx-auto w-[90%] sm:w-[80%] overflow-hidden'>
        {/* upper */}
        <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10'>
          {/* brand column */}
          <div>
            <div className='flex items-center gap-2 text-white font-bold mb-5'>
              <div className='w-10 h-10 bg-linear-to-r from-amber-500 to-orange-600 px-4.5 py-1 font-bold rounded-xl'>
                <span>ع</span>
              </div>
              <div>عدسه</div>
            </div>
            <p className='text-xs text-[#737373] max-w-60'>
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            {/* social icons */}
            <div className='flex items-center gap-2 mt-5'>
              <div className='border border-[#5f5e5e] w-9 h-9 flex items-center justify-center bg-[#262626] rounded-lg text-[#737373] transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer'>
                <a href="https://twitter.com/adasah" target='_blank' rel='noreferrer'>
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
              <div className='border border-[#5f5e5e] w-9 h-9 flex items-center justify-center bg-[#262626] rounded-lg text-[#737373] transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer'>
                <a href="https://github.com/adasah" target='_blank' rel='noreferrer'>
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className='border border-[#5f5e5e] w-9 h-9 flex items-center justify-center bg-[#262626] rounded-lg text-[#737373] transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer'>
                <a href="https://www.linkedin.com/company/adasah" target='_blank' rel='noreferrer'>
                  <i className="fa-brands fa-square-linkedin"></i>
                </a>
              </div>
              <div className='border border-[#5f5e5e] w-9 h-9 flex items-center justify-center bg-[#262626] rounded-lg text-[#737373] transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer'>
                <a
                  href="https://www.youtube.com/@adasah"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* explore column */}
          <div>
            <div className='flex items-center gap-2 text-white font-bold'>
              <div className='w-6 h-px bg-linear-to-r from-amber-500 to-orange-600'></div>
              <div>استكشف</div>
            </div>
            <ul className='flex flex-col gap-3 mt-5 text-xs text-[#737373]'>
   <Link to="/">
              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>
                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>الرئيسية</span>
              </li>
   </Link>

<Link to="/blog">
              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>

                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>المدونة</span>

              </li>
</Link>
<Link to="/about">

              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>

                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>من نحن</span>

              </li>
</Link>
            </ul>
          </div>

          {/* categories column */}
          <div>
            <div className='flex items-center gap-2 text-white font-bold'>
              <div className='w-6 h-px bg-linear-to-r from-amber-500 to-orange-600'></div>
              <div>التصنيفات</div>
            </div>
            <ul className='flex flex-col gap-3 mt-5 text-xs text-[#737373]'>
<Link to={`/blog?category=${encodeURIComponent("إضاءة")}`}>
              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>
                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>إضاءة</span>
              </li>
</Link>
<Link to={`/blog?category=${encodeURIComponent("بورتريه")}`}>
              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>
                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>بورتريه</span>
              </li>

</Link>
<Link to={`/blog?category=${encodeURIComponent("مناظر طبيعية")}`}>
              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>
                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>مناظر طبيعية</span>
              </li>
</Link>
<Link to={`/blog?category=${encodeURIComponent("تقنيات")}`}>
              <li className='group flex items-center w-fit cursor-pointer transition-all duration-300 hover:text-orange-500 hover:-translate-x-1'>
                <span className='w-0 me-0 opacity-0 overflow-hidden whitespace-nowrap flex items-center group-hover:w-3 group-hover:me-1.5 group-hover:opacity-100 transition-all duration-300 text-orange-500'>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                <span>تقنيات</span>
              </li>
</Link>
            </ul>
          </div>

          {/* newsletter column */}
          <div>
            
            <div className='flex items-center gap-2 text-white font-bold'>
              <div className='w-6 h-px bg-linear-to-r from-amber-500 to-orange-600'></div>
              <div>ابقى على اطلاع</div>
            </div>
            <p className='text-xs text-[#737373] max-w-75 mt-5'>اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <div className='flex flex-col gap-3 mt-4'>
              <input
                type='email'
                placeholder='أدخل بريدك الإلكتروني'
                className='bg-[#262626] border border-[#333] focus:border-amber-600 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#737373] text-right outline-none w-full'
              />
              <button className='bg-linear-to-r from-amber-500 to-orange-600 rounded-full px-4 py-2.5 text-xs font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:cursor-pointer'>
                اشترك
              </button>
            </div>
          </div>

          {/* decorative gradients - contained within footer, hidden on small screens to avoid clutter */}
          <div className="hidden md:block absolute top-42.5 left-[60%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(133,77,14,0.4)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
          <div className="hidden md:block absolute top-42.5 left-[30%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(100,40,10,0.45)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
        </div>

        {/* bottom */}
        <div className='border-t border-gray-600 py-5 flex flex-col sm:flex-row items-center justify-between flex-wrap gap-4 text-center sm:text-right'>
          <p className='text-xs text-[#737373] flex items-center gap-1.5'>
            © 2026 عدسة. صنع بكل <span className='text-orange-500'>♥</span> جميع الحقوق محفوظة.
          </p>
          <div className='flex items-center gap-6 text-xs text-[#737373]'>
            <Link to={"privacyPolicy"} className='hover:text-amber-600 transition-all duration-300 cursor-pointer'>سياسة الخصوصية</Link>
            <Link to={"TermsOfService"} className='hover:text-amber-600 transition-all duration-300 cursor-pointer'>شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer> 
  )
}