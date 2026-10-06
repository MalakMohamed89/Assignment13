import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'

import logoImg from '../../assets/logo-GdqARQRt.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full transition-all duration-300 block text-center ${
    isActive
      ? "bg-orange-500/10 border border-orange-500 text-orange-500 lg:bg-linear-to-r lg:from-amber-500 lg:to-orange-600 lg:text-white lg:border-transparent"
      : "hover:text-white"
  }`

  return (
    <nav className="sticky top-0 z-50 w-full py-2 bg-[#161616f6]">
      <div className="flex items-center justify-between mx-auto w-[90%] sm:w-[80%]">
        {/* Left:  hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-block rounded-4xl text-white bg-linear-to-r from-amber-600 to-orange-700 text-xs font-bold px-5 py-3 hover:-translate-y-0.5 hover:cursor-pointer transition-all duration-200"
            to={"/blog"}
          >
            ابدأ القراءة
          </Link>
          <div className='hidden sm:flex p-1.5 w-9 h-9 items-center justify-center text-gray-600 border border-transparent hover:cursor-pointer rounded-lg hover:border hover:border-gray-600 hover:text-amber-600 transition-all duration-300'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          {/* hamburger button - mobile/tablet only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-1.5 w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-300 ${
              isOpen
                ? 'bg-orange-500/10 border-orange-500 text-orange-500'
                : 'text-white border-[#242424] hover:border-amber-600 hover:text-amber-600'
            }`}
            aria-label="فتح القائمة"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* middle: nav links (desktop only) */}
        <div className='hidden md:block border border-[#242424] px-2 py-1 rounded-3xl'>
          <ul className="flex items-center gap-1 text-xs font-bold text-gray-500">
            <li><NavLink to="/about" className={linkClass}>من نحن</NavLink></li>
            <li><NavLink to="/blog" className={linkClass}>المدونة</NavLink></li>
            <li><NavLink to="/" end className={linkClass}>الرئيسية</NavLink></li>
          </ul>
        </div>

        {/* Right: logo */}
<div className='flex items-center gap-3'>
  <div className="text-right" dir="rtl">
    <h2 className='text-white text-sm'>عدسة</h2>
    <p className='text-xs text-amber-600 hidden sm:block'>عالم التصوير الفوتوغرافي</p>
  </div>
  <div className='w-8 sm:w-10 shrink-0'>
    <img className='w-full' src={logoImg} alt="logoImg" />
  </div>
</div>
      </div>

      {/* mobile dropdown menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col gap-2 pb-4" dir="rtl">
          <ul className="flex flex-col gap-1 text-xs font-bold text-gray-500 border border-[#242424] rounded-2xl p-2">
            <li><NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>من نحن</NavLink></li>
            <li><NavLink to="/blog" className={linkClass} onClick={() => setIsOpen(false)}>المدونة</NavLink></li>
            <li><NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>الرئيسية</NavLink></li>
          </ul>
          <div className="flex items-center gap-3 mt-2">
            <Link
              className="flex-1 text-center rounded-4xl text-white bg-linear-to-r from-amber-600 to-orange-700 text-xs font-bold px-5 py-3 transition-all duration-200"
              to={"/blog"}
              onClick={() => setIsOpen(false)}
            >
              ابدأ القراءة
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}