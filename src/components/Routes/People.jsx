import axios from '../../utils/axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from '../Partials/TopNav';
import Dropdown from '../Partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../Partials/Cards';
import Loading from '../Partials/Loading';

const People = () => {
    document.title = "DB | People"
    const nav = useNavigate();
    const [category,setCategory] = useState("popular");
    const [page,setPage] = useState(1);
    const [people,setPeople] = useState([]);
    const [hasMore,sethasMore] = useState(true)

    const getPeople = async () => {
        try {
          const { data } = await axios.get(`person/${category}?page=${page}`);
          if(data.results.length > 0){
            setPeople((prevState)=>[...prevState,...data.results]);
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
        if(people.length===0){
          getPeople();
        }
        else{
          setPage(1);
          setPeople([]);
          getPeople();
        }
      }

    
      useEffect(() => {
        refreshPage();
      }, [category]);
  return (
    people.length > 0 ? (
        <div className="w-full p-3">
          <div className="w-full h-[10vh] text-zinc-200  flex gap-2 items-center">
            <div className="left flex gap-3 px-3 items-center">
              <i onClick={()=>nav(-1)} className="ri-arrow-left-circle-line text-2xl hover:text-[#6556CD]"></i>
              <h1 className="text-2xl font-semibold tracking-wide">People</h1>
            </div>
            <div className="flex items-center w-[80%] gap-2 justify-between">
                <TopNav/>
            </div>
          </div>
    
          <InfiniteScroll className="overflow-hidden"
          dataLength={people.length} next={getPeople} hasMore={hasMore} loader={<h2 className="text-white">Loading...</h2>}
          >
            <div className="w-full border-t-[2px] flex flex-wrap gap-8 p-4  border-zinc-100">
          <Cards data={people} title="person"/>
          </div>
          </InfiniteScroll>
    
    
        </div>
      ):<Loading/>
  )
}

export default People
