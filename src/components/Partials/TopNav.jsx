import React, { useEffect, useState } from "react";

import SearchCard from "./SearchCard";
import axios from "../../utils/axios";

const TopNav = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    setSearch("");
  };


  const getSearchResult = async() => {
    try {
        const {data} = await axios.get(`/search/multi?query=${search}`)
        setResults(data.results);
    } catch (error) {
        console.log("Error: " + error);
    }
  }


  useEffect(()=>{
    getSearchResult()
  },[search])







  return (
    <div className="w-full h-[10vh] text-zinc-400 text-2xl flex justify-center gap-3 items-center p-3 relative">
      <i className="ri-search-line"></i>
      <input
        onChange={handleChange}
        className="w-[50%] bg-transparent p-3 text-zinc-200 outline-none border-none text-xl"
        type="text"
        placeholder="Search"
        value={search}
      />
      <i
        onClick={handleClick}
        className={`ri-close-fill cursor-pointer ${
          search.length ? "" : "text-transparent"
        }`}
      ></i>

      <div className={` rounded absolute z-10 top-[100%] w-[50%] max-h-[50vh] bg-[#1b1b1b] overflow-y-auto ${search.length?"":'hidden'}`}>
        {results&&results.map((res)=><SearchCard key={res.id} data={res}/>)}
      </div>
    </div>
  );
};

export default TopNav;
