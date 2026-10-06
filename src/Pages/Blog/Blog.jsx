import React, { useEffect, useState } from 'react'
import HomeCards from '../../components/homeCards/HomeCards';
import { cardsData } from '../../data/blogData';
import HomeCardsNew from '../../components/homeCards/HomeCardsNew';
import { useSearchParams } from 'react-router';


export default function Blog() {

const [viewMode, setViewMode] = useState('grid') 
const [searchWord, setSearchWord] = useState('')
const [currentPage, setCurrentPage] = useState(1);
const [searchParams,setSearchParams]=useSearchParams()
const categoryFromUrl=searchParams.get('category')
const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl ||'جميع المقالات')

useEffect(() => {
  setSelectedCategory(categoryFromUrl || 'جميع المقالات')
  setCurrentPage(1)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}, [categoryFromUrl])

const categories = [
  { id: 'جميع المقالات', name: 'جميع المقالات' },
  { id: 'إضاءة', name: 'إضاءة' },
  { id: 'بورتريه', name: 'بورتريه' },
  { id: 'مناظر طبيعية', name: 'مناظر طبيعية' },
  { id: 'تقنيات', name: 'تقنيات' },
  { id: 'معدات', name: 'معدات' },
]


function filterPostsByCategory(posts, category) {

if(category=='جميع المقالات') return posts
else{
  return posts.filter((post)=>post.category === category)
}
}

//controlled method
function handleSearch(e){
  const word=e.target.value
setSearchWord(word) //display value
  setCurrentPage(1);

}

function clearFilters(){
  setSearchWord("")
  setSelectedCategory ('جميع المقالات')
searchParams({})
}

const filteredPosts = filterPostsByCategory(cardsData.posts, selectedCategory).filter((post)=>(post.title.toLowerCase().includes(searchWord.toLowerCase() ))|| (post.excerpt.toLowerCase().includes(searchWord.toLowerCase() )))



const selectedCategoryName = categories.find((c) => c.id === selectedCategory)?.name

const isFiltering = searchWord !== '' || selectedCategory !== 'جميع المقالات';

const postsPerPage = 6;

const startIndex = (currentPage - 1) * postsPerPage; //1 page -> 0
const currentPosts = isFiltering
  ? filteredPosts
  : filteredPosts.slice(startIndex, startIndex + postsPerPage);
const totalPages = Math.ceil(filteredPosts.length / postsPerPage);



  return (
    <div className='bg-[#0d0d0f] ' >
    {/* hero section for blog */}
      <section className='relative py-16 flex flex-col items-center gap-6 px-4
        bg-[#0d0d0f]
        bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-size-[40px_40px]'>
        <div className="absolute top-20 left-4 sm:top-48.5 sm:left-40 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(100,40,10,0.45)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>

        <div className='w-fit flex items-center border border-amber-600 gap-2 bg-[#ff6a0039] text-white text-xs px-3 py-2 rounded-full'>
          <span className='text-orange-500'>مدونتنا</span>
      <i className="fa-solid fa-newspaper text-orange-500 "></i>
          <span className='w-2 h-2 rounded-full bg-orange-500 animate-fade'></span>
        </div>

        {/* content */}
        <div className='flex flex-col items-center text-center'>
          <header>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold pb-2'>
            استكشف <span className='bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent '>مقالاتنا</span>
            </h2>
          </header>
          <p className='text-base sm:text-lg text-[#737373] pt-4 mt-0 max-w-[90%] sm:max-w-125 text-center mx-auto'>
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>

      </section>

<section className=' sticky-top px-8 sm:px-6 lg:px-8 bg-[#0d0d0f]'>

{/* header bar */}
<div className='flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-3 px-4 py-3 border-b border-[#242424]'>

{/* buttons */}
<div className="flex flex-wrap items-center gap-2 lg:gap-3 w-full lg:w-auto" dir="rtl">
  {categories.map((category) => (
    <button
      key={category.id}
      onClick={() => {
        setSelectedCategory(category.id)
        setCurrentPage(1)
      }}
      className={`flex-1 lg:flex-none whitespace-nowrap text-center rounded-lg text-[12px] font-bold px-4 py-2
        border transition-all duration-200 cursor-pointer
        ${
          selectedCategory === category.id
            ? 'text-white border-transparent bg-linear-to-r from-amber-600 to-orange-700'
            : 'bg-[#161616] text-[#A1A1A1] border-[#242424] hover:border-orange-500'
        }`}
    >
      {category.name}
    </button>
  ))}
</div>

  {/* search */}
  <div dir="rtl" className="relative flex items-center w-full lg:w-auto">
    <i className="left-3 absolute fa-solid fa-magnifying-glass text-[#838383] text-[12px]"></i>
    <input
      value={searchWord}
      onChange={(e) => handleSearch(e)}
      type="text"
      placeholder="ابحث في المقالات ...."
      className="w-full lg:w-auto bg-[#161616] text-[#A1A1A1] text-[12px] placeholder:text-[#A1A1A1] py-3 lg:py-2 px-8 rounded-lg border border-[#242424] focus:outline-none focus:ring-1 focus:ring-orange-500"
    />
  </div>
</div>
<div className='flex items-center justify-between gap-2 px-3 sm:px-4 py-3 border-b border-[#242424]' dir="rtl">

  {/* count */}
  <p className='text-[#838383] text-[11px] sm:text-sm'>
    عرض <span className='font-bold text-white'>{filteredPosts.length}</span> مقالات
    {selectedCategory !== 'جميع المقالات' && (
      <>
        {' '}في{' '}
        <span className='text-orange-500 font-bold'>{selectedCategoryName}</span>
      </>
    )}
  </p>

  <div className='flex items-center gap-2 sm:gap-3'>

    {/* view mode toggle buttons */}
    <div className="flex items-center gap-1 text-[#A1A1A1] p-1 sm:p-2 rounded-lg sm:rounded-xl bg-[#161616] border border-[#242424]" dir="rtl">
      <button
        onClick={() => setViewMode('grid')}
        className={`rounded-md sm:rounded-lg font-bold px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base
          transition-all duration-200 cursor-pointer
          ${viewMode === 'grid' ? 'text-white bg-linear-to-r from-amber-600 to-orange-700' : 'bg-[#161616] text-[#A1A1A1]'}`}
      >
        <i className="fa-solid fa-table-cells-large"></i>
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`rounded-md sm:rounded-lg font-bold px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base
          transition-all duration-200 cursor-pointer
          ${viewMode === 'list' ? 'text-white bg-linear-to-r from-amber-600 to-orange-700' : 'bg-[#161616] text-[#A1A1A1]'}`}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>

    {/* clear filters */}
    {isFiltering && (
      <span
        onClick={() => clearFilters()}
        className='flex items-center gap-1 whitespace-nowrap cursor-pointer text-[10px] sm:text-sm text-[#A1A1A1] hover:text-amber-600 duration-300 transition-all'
      >
        <i className="fa-solid fa-x text-[9px] sm:text-xs"></i>
        مسح الفلتره
      </span>
    )}
  </div>
</div>

<div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'} px-4 py-6`} dir='rtl'>
  {currentPosts.map((post) =>
    viewMode === 'grid'
      ? <HomeCardsNew key={post.id} post={post} />
      : <HomeCards key={post.id} post={post} />
  )}
</div>
{/* paginations */}
{!isFiltering && (
  <div className='flex items-center gap-3 justify-center py-3' dir='rtl'>

    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
        className={`p-2 border border-[#838383] text-white rounded-xl transition-all duration-300
    ${
      currentPage === 1
        ? 'opacity-30 cursor-not-allowed'
        : 'cursor-pointer hover:border-amber-700'
    }
  `}>
      <i className="fa-solid fa-angle-right"></i>
    </button>

    <button className={`px-4 py-2 border cursor-pointer transition-all duration-300 rounded-xl ${
        currentPage ===1
          ? 'bg-linear-to-r from-amber-600 to-orange-700 text-white border-transparent'
          : 'border-[#838383] text-white hover:border-amber-700'
      }`} onClick={() => setCurrentPage(1)}>1</button>

    <button className={`px-4 py-2 border cursor-pointer transition-all duration-300 rounded-xl ${
        currentPage ===2
          ? 'bg-linear-to-r from-amber-600 to-orange-700 text-white border-transparent'
          : 'border-[#838383] text-white hover:border-amber-700'
      }`} onClick={() => setCurrentPage(2)}>2</button>

    <button className={`px-4 py-2 border cursor-pointer transition-all duration-300 rounded-xl ${
        currentPage ===3 
          ? 'bg-linear-to-r from-amber-600 to-orange-700 text-white border-transparent'
          : 'border-[#838383] text-white hover:border-amber-700'
      }`} onClick={() => setCurrentPage(3)}>3</button>

    <button className={`px-4 py-2 border cursor-pointer transition-all duration-300 rounded-xl ${
        currentPage ===4
          ? 'bg-linear-to-r from-amber-600 to-orange-700 text-white border-transparent'
          : 'border-[#838383] text-white hover:border-amber-700'
      }`} onClick={() => setCurrentPage(4)}>4</button>

    <button className={`px-4 py-2 border cursor-pointer transition-all duration-300 rounded-xl ${
        currentPage ===5
          ? 'bg-linear-to-r from-amber-600 to-orange-700 text-white border-transparent'
          : 'border-[#838383] text-white hover:border-amber-700'
      }`} onClick={() => setCurrentPage(5)}>5</button>

<button 
  onClick={() => setCurrentPage(currentPage + 1)} 
  disabled={currentPage === 5} 
  className={`p-2 border border-[#838383] text-white rounded-xl transition-all duration-300
    ${
      currentPage === 5
        ? 'opacity-30 cursor-not-allowed'
        : 'cursor-pointer hover:border-amber-700'
    }
  `}
>
  <i className="fa-solid fa-angle-left"></i>
</button>

  </div>
)}
</section>
    </div>
  )
}
