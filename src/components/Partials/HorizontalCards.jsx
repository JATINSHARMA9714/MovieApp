import React from 'react'
import { Link } from 'react-router-dom'
const HorizontalCards = ({data,title}) => {
  return data && (
    <div className='w-full overflow-x-auto overflow-hidden gap-3 h-full flex '>
      {data.map((d,i)=>{
        return <Link to={`/${d.media_type||title}/details/${d.id}`} key={i} className='w-[15%] hover:text-violet-500 flex-shrink-0 rounded h-[95%] overflow-hidden '>
        <img className='w-full h-[90%] object-cover rounded' src={(d.poster_path || d.backdrop_path)?`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path}`:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" />
        <h1 className=' text-xs mt-2 font-semibold'>{d.title || d.name}</h1>
      </Link>
      })}
      
    </div>
  )
}

export default HorizontalCards
