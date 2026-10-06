import React from 'react'
import { Link } from 'react-router'

export default function HomeCardsNew({ post }) {


  return (
<Link
to={`/blog/${post.slug}`}

 >
      <div className='min-h-125 group bg-[#171717] rounded-2xl border border-[#2a2a2a] overflow-hidden flex flex-col transition-all duration-300 cursor-pointer hover:-translate-y-1' dir="rtl">
      <div className='relative h-56 overflow-hidden'>
        <img src={post.image} alt={post.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
        <span className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full'>{post.category}</span>
      </div>
      <div className='flex flex-col flex-1 p-6'>
        <div className='flex items-center gap-2 text-xs text-[#737373] mb-4'>
          <i className="fa-regular fa-clock"></i>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>
            {new Date(post.date).toLocaleDateString('ar-EG', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <h3 className='text-white text-lg font-bold leading-snug mb-3 transition-all duration-500 group-hover:text-amber-600'>
          {post.title}
        </h3>
        <p className='text-[#a3a3a3] text-sm leading-relaxed mb-6'>
          {post.excerpt}
        </p>
        <div className='mt-auto pt-5 border-t border-[#2a2a2a] flex items-center justify-between'>

          <div className='flex items-center gap-3'>
            <div className='text-right'>
              <p className='text-white text-sm font-bold'>{post.author.name}</p>
              <p className='text-[#737373] text-xs'>{post.author.role}</p>
            </div>
            <img src={post.author.avatar} alt={post.author.name} className='w-10 h-10 rounded-full object-cover shrink-0' />
          </div>

          <span className='w-9 h-9 shrink-0 flex items-center bg-[#ff6a001f] justify-center rounded-full border border-amber-700 text-amber-500 transition-all duration-300 group-hover:bg-amber-700 group-hover:text-white'>
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </span>

        </div>
      </div>
    </div>
 </Link> )
}