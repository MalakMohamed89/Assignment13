import React from 'react'
import { Link } from 'react-router'

export default function HomeCards({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div
        dir="rtl"
        className="group relative flex flex-col md:flex-row items-stretch bg-[#171717] rounded-2xl sm:rounded-3xl border border-[#2a2a2a] overflow-hidden transition-all duration-300 hover:border-amber-600 cursor-pointer"
      >
        {/* image */}
        <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-auto md:min-h-80 shrink-0">
          <img
            src={post.image}
            alt="cover"
            className="w-full h-full md:absolute md:inset-0 object-cover"
          />
          {/* مميز: يختفي في التلفون */}
          <span className="hidden sm:flex absolute top-4 right-4 items-center gap-1.5 bg-linear-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            <i className="fa-solid fa-star text-[10px]"></i>
            مميز
          </span>
        </div>

        {/* text content */}
        <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 md:w-1/2">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-bold text-amber-500 bg-orange-500/10 border border-amber-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#737373]">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
            </div>

            <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 leading-snug group-hover:text-amber-600 duration-300 transition-all">
              {post.title}
            </h3>

            <p className="text-[#a3a3a3] text-xs sm:text-sm leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4 sm:mt-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
                <img
                  src={post.author.avatar}
                  alt="avatarPicture"
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full border-2 border-[#171717]"></span>
              </div>
              <div>
                <p className="text-white text-xs sm:text-sm font-bold">{post.author.name}</p>
       
                <p className="hidden sm:block text-[#737373] text-xs">
                  {new Date(post.date).toLocaleDateString('ar-EG', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

    
            <span className="hidden sm:flex items-center gap-2 text-amber-500 text-sm font-bold">
              <span className="transition-all duration-300 group-hover:translate-x-1">اقرأ المقال</span>
              <i className="fa-solid fa-arrow-left"></i>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}