import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate} from 'react-router-dom'

const Trailer = () => {
    const {pathname} = useLocation();
    const category = pathname.includes("movie")
    const nav = useNavigate();
    const data = useSelector((state)=>{
      if(category){
        return state.movie.info.videos;
      }
      else{
        return state.tv.info.videos;
      }
    })
  return data && (
    <div className='w-full h-screen absolute bg-[#0b0b0b86] flex items-center justify-center top-0 left-0'>
        <Link onClick={()=>nav(-1)}><i className=" absolute top-0 right-8 text-3xl ri-close-circle-fill  hover:text-violet-400"></i></Link>
      <ReactPlayer height={750} width={1400} controls url={`https://www.youtube.com/watch?v=${data.key}`}/>
    </div>
  )
}

export default Trailer
