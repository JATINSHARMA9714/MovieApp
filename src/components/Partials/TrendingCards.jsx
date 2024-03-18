import React from 'react'
import TrendingCard from './TrendingCard'


const TrendingCards = ({data,category}) => {


  return (
    <div className='w-full h-[33vh] text-zinc-200 overflow-hidden overflow-y-auto'>
     <div className='w-full h-full flex gap-1 flex-wrap'>
     {data && data.map((d)=><TrendingCard key={d.id} title={category} dat={d}/>)}
     </div>
    </div>
  )
}

export default TrendingCards
