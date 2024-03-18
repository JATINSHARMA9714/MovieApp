import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <>
      {data.map((d,i)=>
      <Link to={`/${data.media_type || title}/details/${d.id}`} key={i}  className='w-[18%] text-zinc-200 relative hover:text-violet-500 h-[60%] rounded-lg   overflow-hidden'>
        <div className='w-full h-[90%] rounded-lg overflow-hidden'>
            <img className='w-full h-full object-cover' src={(d.poster_path || d.backdrop_path || d.profile_path)?`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path||d.profile_path}`:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" />
        </div>
        <div className='w-full h-[10%]  mt-2 text-sm font-semibold flex  items-center justify-between'>
            <h1 className='leading-none w-[70%]'>{d.title || d.name}</h1>
            {d.vote_average&&<div className={`w-10 h-10 ${(d.vote_average/10*100).toFixed() >= 80?'bg-green-800':'bg-orange-600'} rounded-full flex items-center justify-center absolute right-1 bottom-7 text-zinc-100`}><h1>{(d.vote_average/10*100).toFixed()}%</h1></div>}
        </div>
      </Link>)}
      </>
  )
}

export default Cards
