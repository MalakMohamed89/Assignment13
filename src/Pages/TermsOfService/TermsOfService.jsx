import React from 'react'
import { Link } from 'react-router'

export default function TermsOfService() {
  return (
    <main className='bg-[#0d0d0f] min-h-screen overflow-x-hidden' dir='rtl'>
      {/* hero */}
      <section
        className='relative py-14 sm:py-16 flex flex-col items-center gap-5 px-4 overflow-hidden
        bg-[#0d0d0f]
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-size-[72px_72px]'
      >
        <div className='absolute top-1/2 left-20 -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(133,77,14,0.3)_0%,transparent_70%)] blur-2xl pointer-events-none'></div>

        {/* breadcrumb */}
        <nav className='relative flex items-center gap-3 text-xs'>
          <Link to='/' className='text-[#A1A1A1] hover:text-orange-500 transition-colors duration-300'>
            الرئيسية
          </Link>
          <i className='fa-solid fa-angle-left text-[10px] text-[#737373]'></i>
          <span className='text-orange-500'>شروط الخدمة</span>
        </nav>

        {/* icon */}
        <div className='relative w-19 h-19 flex items-center justify-center rounded-2xl bg-[#ff6a0020] border border-amber-700/60'>
          <i className='fa-regular fa-file-lines text-orange-500 text-3xl'></i>
        </div>

        <header className='relative text-center'>
          <h1 className='text-4xl sm:text-5xl text-white font-bold pb-3'>شروط الخدمة</h1>
          <p className='text-[#737373] text-sm'>آخر تحديث: 15 يناير 2026</p>
        </header>
      </section>

      {/* content */}
      <section className='w-[90%] max-w-250 mx-auto py-12 sm:py-16'>
        {/* notice */}
        <div className='flex items-start gap-3 bg-[#241c0a] border border-yellow-800/60 rounded-2xl px-6 py-5 mb-12'>
          <i className='fa-solid fa-triangle-exclamation text-yellow-500 text-xl mt-0.5'></i>
          <div>
            <h2 className='text-yellow-500 font-bold text-base mb-1'>إشعار مهم</h2>
            <p className='text-yellow-600 text-sm leading-7'>
              يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-12'>
        
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>1</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>الموافقة على الشروط</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
            </p>
          </article>

      
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>2</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>رخصة الاستخدام</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px] mb-5'>
              يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
            </p>
            <p className='text-white font-medium text-[15px] mb-4'>بموجب هذا الترخيص لا يجوز لك:</p>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>تعديل أو نسخ المواد</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
              </li>
            </ul>
          </article>

   
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>3</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>إخلاء المسؤولية</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.
            </p>
          </article>

   
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>4</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>القيود</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.
            </p>
          </article>

       
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>5</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>محتوى المستخدم</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px] mb-5'>
              إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.
            </p>
            <p className='text-white font-medium text-[15px] mb-4'>يجب ألا يكون محتواك:</p>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>انتهاك حقوق الملكية الفكرية للآخرين</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>احتواء فيروسات أو أكواد ضارة</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>انتهاك أي قوانين أو لوائح معمول بها</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-xmark text-red-400 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
              </li>
            </ul>
          </article>


          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>6</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>التعديلات</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
            </p>
          </article>


          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>7</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>معلومات الاتصال</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px] mb-4'>
              إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
            </p>
            <a
              href='mailto:hello@adasah.com'
              className='inline-flex items-center gap-2 text-orange-500 hover:text-amber-400 transition-colors duration-300 text-[15px]'
              dir='ltr'
            >
              <i className='fa-regular fa-envelope'></i>
              hello@adasah.com
            </a>
          </article>
        </div>

        {/* footer note */}
        <div className='mt-14 pt-8 border-t border-[#242424] text-center'>
          <p className='text-[#737373] text-sm'>
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{' '}
            <Link to='/privacyPolicy' className='text-orange-500 font-bold hover:text-amber-400 transition-colors duration-300'>
              سياسة الخصوصية
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}