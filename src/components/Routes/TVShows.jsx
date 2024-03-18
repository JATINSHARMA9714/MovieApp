import axios from '../../utils/axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from '../Partials/TopNav';
import Dropdown from '../Partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../Partials/Cards';
import Loading from '../Partials/Loading';

const TVShows = () => {
    document.title = "DB | Tv Shows"
    const nav = useNavigate();
    const [category,setCategory] = useState("airing_today");
    const [page,setPage] = useState(1);
    const [tv,setTv] = useState([]);
    const [hasMore,sethasMore] = useState(true)

    const getTv = async () => {
        try {
          const { data } = await axios.get(`tv/${category}?page=${page}`);
          if(data.results.length > 0){
            setTv((prevState)=>[...prevState,...data.results]);
            setPage(page+1);
          }
          else{
            sethasMore(false)
          }
        } catch (error) {
          console.log("error: " + error);
        }
      };

      const refreshPage=()=>{
        if(tv.length===0){
          getTv();
        }
        else{
          setPage(1);
          setTv([]);
          getTv();
        }
      }

    
      useEffect(() => {
        refreshPage();
      }, [category]);

  return (
    tv.length > 0 ? (
        <div className="w-full p-3">
          <div className="w-full h-[10vh] text-zinc-200  flex gap-2 items-center">
            <div className="left flex gap-3 px-3 items-center">
              <i onClick={()=>nav(-1)} className="ri-arrow-left-circle-line text-2xl hover:text-[#6556CD]"></i>
              <h1 className="text-2xl font-semibold tracking-wide">Tv Shows</h1>
            </div>
            <div className="flex items-center w-[80%] gap-2 justify-between">
                <TopNav/>
                <Dropdown Title={category} options={["Airing_Today","On_The_Air","Top_Rated","Popular"]} func={(e)=>setCategory(e.toLowerCase())}/>
            </div>
          </div>
    
          <InfiniteScroll className="overflow-hidden"
          dataLength={tv.length} next={getTv} hasMore={hasMore} loader={<h2 className="text-white">Loading...</h2>}
          >
            <div className="w-full border-t-[2px] flex flex-wrap gap-8 p-4  border-zinc-100">
          <Cards data={tv} title="tv"/>
          </div>
          </InfiniteScroll>
    
    
        </div>
      ):<Loading/>
  )
}

export default TVShows
