import React, { useState,useEffect } from "react";
import TopNav from "../Partials/TopNav";
import Dropdown from "../Partials/Dropdown";
import Loading from "../Partials/Loading";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import Cards from "../Partials/Cards";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  
  document.title = "DB | Trending"
  const nav = useNavigate();
  const [category,setCategory] = useState("movie");
  const [duration,setDuration] = useState("day");
  const [page,setPage] = useState(1);
  const [trending,setTrending] = useState([]);
  const [hasMore,sethasMore] = useState(true)

      const getTrending = async () => {
        try {
          const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
          if(data.results.length > 0){
            setTrending((prevState)=>[...prevState,...data.results]);
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
        if(trending.length===0){
          getTrending();
        }
        else{
          setPage(1);
          setTrending([]);
          getTrending();
        }
      }

    
      useEffect(() => {
        refreshPage();
      }, [category,duration]);

  return trending.length > 0 ? (
    <div className="w-full p-3">
      <div className="w-full h-[10vh] text-zinc-200  flex gap-2 items-center">
        <div className="left flex gap-3 px-3 items-center">
          <i onClick={()=>nav(-1)} className="ri-arrow-left-circle-line text-2xl hover:text-[#6556CD]"></i>
          <h1 className="text-2xl font-semibold tracking-wide">Trending</h1>
        </div>
        <div className="flex items-center w-[80%] gap-2 justify-between">
            <TopNav/>
            <Dropdown Title={"Category"} options={["Movie","Tv"]} func={(e)=>setCategory(e.toLowerCase())}/>
            <Dropdown Title={"Duration"} options={["Day","Week"]} func={(e)=>setDuration(e.toLowerCase())}/>
        </div>
      </div>

      <InfiniteScroll className="overflow-hidden"
      dataLength={trending.length} next={getTrending} hasMore={hasMore} loader={<h2 className="text-white">Loading...</h2>}
      >
        <div className="w-full border-t-[2px] flex flex-wrap gap-8 p-4  border-zinc-100">
      <Cards data={trending} title={category}/>
      </div>
      </InfiniteScroll>


    </div>
  ):<Loading/>
};

export default Trending;
