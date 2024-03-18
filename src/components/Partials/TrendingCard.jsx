import React from 'react'
import { Link } from 'react-router-dom'

const TrendingCard = ({dat,title}) => {
  return (
    <>
    <Link to={`/${dat.media_type||title}/details/${dat.id}`} className='w-[15%] h-[35vh] m-2 text-zinc-200 hover:text-violet-500 cursor-pointer'>
    <div className='mt-2 rounded w-full h-[90%]  overflow-hidden'>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${
                  dat.poster_path || dat.backdrop_path || dat.profile_path
                }`} alt="" />
     </div>
     <div className='py-1 text-xs flex items-center justify-between px-1'>
     <h1 className=' font-semibold tracking-wide'>{dat.name || dat.title}</h1>
     <h1 className=' font-semibold tracking-wide'>{dat.vote_average}/10</h1>
     </div>
     </Link>
     </>
  )
}

export default TrendingCard
