import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='sidebar w-[20%] h-screen border-r-2 border-zinc-500 text-white p-10'>
        <h1 className='text-2xl font-bold'>
        <i className="ri-movie-2-line mr-3"></i>
            <span className='tracking-wide'>Movie App</span>
        </h1>
        <nav className='flex flex-col gap-1 text-1xl  text-zinc-300'>
            <h1 className='mt-10 mb-2 font-semibold text-1xl pl-5'>New Feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-fire-fill mr-2"></i>Trending</Link>
            <Link to="/popular" className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-bard-fill mr-2"></i>Popular</Link>
            <Link to="/movie" className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-clapperboard-fill mr-2"></i>Movies</Link>
            <Link to="/tv" className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-tv-fill mr-2"></i>TV Shows</Link>
            <Link to="/person" className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-group-fill mr-2"></i>People</Link>
        </nav>
        <hr className='my-2' />
        <nav className='flex flex-col gap-1 text-1xl  text-zinc-300'>
            <h1 className='mt-4 mb-4 font-semibold text-1xl pl-3'>Website Information</h1>
            <Link className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-information-fill mr-2"></i>About</Link>
            <Link className='hover:bg-[#6556CD] hover:text-zinc-100 p-3 rounded-lg duration-300'><i className="ri-contacts-fill mr-2"></i>Contact</Link>
            
        </nav>
    </div>
  )
}

export default Sidenav
