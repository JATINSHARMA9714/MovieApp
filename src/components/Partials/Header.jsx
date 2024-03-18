import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    const [video,setVideo]=useState(null);
    const category=data.media_type;
  // const getVideoData = async() =>{
  //   const res = await axios.get(`/movie/${data.id}/videos`)
  //   setVideo(res.data.results.find((m)=>m.type==="Trailer"));
  // }
  // useEffect(()=>{
  //   getVideoData()
  // },[])
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5)),url(https://image.tmdb.org/t/p/original/${
          data.poster_path || data.backdrop_path || data.profile_path
        }`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full overflow-hidden rounded-lg relative h-[50vh] text-white"
    >
      <div className="p-10 absolute top-[70%] translate-y-[-65%]">
        <h1 className="w-[70%] text-4xl font-semibold">
          {data.title || data.name}
        </h1>
        <p className="w-[70%] mt-6 text-sm;">
          {data.overview.slice(0, 200)}...
          <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
        </p>
        <p className="mt-2">
          <i className="text-yellow-300 ri-megaphone-line mx-1"></i>{" "}
          {data.release_date || "Unknown"}
          <i className="text-yellow-300 ri-film-line mx-2"></i>
          {data.media_type.toUpperCase()}
        </p>
        <div className="mt-4">
          <Link to={`/${category}/details/${data.id}/trailer`} className="p-3 rounded bg-[#6556CD] hover:bg-[#5044a0] text-sm">Watch Trailer</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
