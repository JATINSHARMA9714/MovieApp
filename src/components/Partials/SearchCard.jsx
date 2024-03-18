import React from "react";
import { Link } from "react-router-dom";
const SearchCard = ({ data }) => {
  return (
    <Link to={`${data.media_type}/details/${data.id}`} className=" hover:bg-[#141414] hover:text-[#6556CD] duration-300 flex gap-10 w-[100%] items-center justify-start p-8 text-zinc-100 border-b-2 border-zinc-300">
      <div className="w-14 h-10">
        <img
          className="object-cover rounded w-full h-full"
          src={
            data.poster_path || data.backdrop_path || data.profile_path
              ? `https://image.tmdb.org/t/p/original/${
                  data.poster_path || data.backdrop_path || data.profile_path
                }`
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          alt=""
        />
      </div>
      <span className="text-xs">
        {data.name || data.title || data.original_name || data.original_title}
      </span>
    </Link>
  );
};

export default SearchCard;
