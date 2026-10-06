import React from 'react'
import { Link } from 'react-router'

export default function PrivacyPolicy() {
  return (
    <main className='bg-[#0d0d0f] min-h-screen overflow-x-hidden' dir='rtl'>
      {/* hero */}
      <section
        className='relative py-14 sm:py-16 flex flex-col items-center gap-5 px-4 overflow-hidden
        bg-[#0d0d0f]
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-size-[72px_72px]'
      >
        <div className='absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(133,77,14,0.3)_0%,transparent_70%)] blur-2xl pointer-events-none'></div>

        {/* breadcrumb */}
        <nav className='relative flex items-center gap-3 text-xs'>
          <Link to='/' className='text-[#A1A1A1] hover:text-orange-500 transition-colors duration-300'>
            الرئيسية
          </Link>
          <i className='fa-solid fa-angle-left text-[10px] text-[#737373]'></i>
          <span className='text-orange-500'>سياسة الخصوصية</span>
        </nav>

        {/* icon */}
        <div className='relative w-19 h-19 flex items-center justify-center rounded-2xl bg-[#ff6a0020] border border-amber-700/60'>
          <i className='fa-solid fa-lock text-orange-500 text-3xl'></i>
        </div>

        <header className='relative text-center'>
          <h1 className='text-4xl sm:text-5xl text-white font-bold pb-3'>سياسة الخصوصية</h1>
          <p className='text-[#737373] text-sm'>آخر تحديث: 15 يناير 2026</p>
        </header>
      </section>

      {/* content */}
      <section className='w-[90%] max-w-250 mx-auto py-12 sm:py-16'>
        {/* notice */}
        <div className='flex items-start gap-3 bg-[#2a170b] border border-amber-900/70 rounded-2xl px-6 py-5 mb-12'>
          <i className='fa-solid fa-shield-halved text-orange-500 text-xl mt-0.5'></i>
          <div>
            <h2 className='text-orange-500 font-bold text-base mb-1'>خصوصيتك تهمنا</h2>
            <p className='text-amber-600/90 text-sm'>
              نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-12'>
          {/* 1 - intro */}
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>1</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>مقدمة</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
            </p>
          </article>

          {/* 2 - info we collect*/}
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>2</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>المعلومات التي نجمعها</h2>
            </div>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>
                  <strong className='text-white font-bold'>بيانات الهوية: </strong>
                  تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                </span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>
                  <strong className='text-white font-bold'>بيانات الاتصال: </strong>
                  تشمل عنوان البريد الإلكتروني.
                </span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>
                  <strong className='text-white font-bold'>البيانات التقنية: </strong>
                  تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                </span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>
                  <strong className='text-white font-bold'>بيانات الاستخدام: </strong>
                  تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                </span>
              </li>
            </ul>
          </article>

          {/* 3 - how to use info*/}
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>3</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>كيف نستخدم معلوماتك</h2>
            </div>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>لتقديم خدمتنا والحفاظ عليها</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>لإخطارك بالتغييرات في خدمتنا</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>لتقديم دعم العملاء</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>لمراقبة استخدام خدمتنا</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
              </li>
            </ul>
          </article>

      
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>4</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>ملفات تعريف الارتباط</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
            </p>
          </article>


          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>5</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>أمان البيانات</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px]'>
              لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.
            </p>
          </article>

   
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>6</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>حقوقك</h2>
            </div>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>طلب الوصول إلى بياناتك الشخصية</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>طلب تصحيح بياناتك الشخصية</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>طلب مسح بياناتك الشخصية</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>الاعتراض على معالجة بياناتك الشخصية</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>طلب تقييد معالجة بياناتك الشخصية</span>
              </li>
              <li className='flex items-center gap-3 text-[15px]'>
                <i className='fa-solid fa-circle-check text-orange-500 text-lg shrink-0'></i>
                <span className='text-[#A1A1A1]'>الحق في سحب الموافقة</span>
              </li>
            </ul>
          </article>

     
          <article>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shrink-0'>7</span>
              <h2 className='text-white text-2xl sm:text-3xl font-bold'>تواصل معنا</h2>
            </div>
            <p className='text-[#A1A1A1] leading-8 text-[15px] mb-4'>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
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
            باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{' '}
            <Link to='/TermsOfService' className='text-orange-500 font-bold hover:text-amber-400 transition-colors duration-300'>
              شروط الخدمة
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}