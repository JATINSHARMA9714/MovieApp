import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { asyncGetMovie } from "../../store/actions/movieActions";
import { clearMovie } from "../../store/reducers/movieReducer";
import Loading from "../Partials/Loading";
import HorizontalCards from "../Partials/HorizontalCards";

const MovieDetails = () => {
  document.title = "DB | Details";
  const {pathname} = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncGetMovie(id));
    return () => {
      dispatch(clearMovie());
    };
  }, [id]);

  return info != null ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5)),url(https://image.tmdb.org/t/p/original/${
          info.details.backdrop_path || info.details.poster_path
        }`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative w-screen text-zinc-100 px-[5%] py-[2%]"
    >
      {/* Part-1 {navigation} */}
      <div className="w-full h-[10vh] flex  items-center text-xl gap-10">
        <Link onClick={() => nav(-1)}>
          <i className="ri-arrow-left-circle-line text-2xl hover:text-[#6556CD]"></i>
        </Link>
        <a target="_blank" href={`${info.details.homepage}`}>
          <i className="ri-share-forward-box-line hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-global-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
          className="hover:bg-[#a89a47]  px-2 bg-yellow-400 font-bold rounded-lg  text-black"
        >
          IMDb
        </a>
      </div>
      {/* Part-2 Image */}
      <div className="w-full">
        <div className="w-full flex ">
          <div className="h-[55vh] w-[25vw] rounded-lg mt-1  overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover scale-100"
              src={`https://image.tmdb.org/t/p/original/${
                info.details.poster_path ||
                info.details.backdrop_path ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }`}
              alt=""
            />
          </div>
          {/* Heading and stuff */}
          <div className="ml-[5%]  w-fit">
            {/* Title */}
            <h1 className="text-4xl font-semibold">
              {info.details.title ||
                info.details.name ||
                info.details.original_name ||
                info.details.original_title}
              <small className="text-xs text-zinc-400">
                ({info.details.release_date.split("-")[0]})
              </small>
            </h1>
            {/* Review && genres */}
            <div className="flex mt-3 gap-2 items-center">
              {info.details.vote_average && (
                <div
                  className={`px-4 py-1 font-bold ${
                    ((info.details.vote_average / 10) * 100).toFixed() >= 80
                      ? "bg-green-800"
                      : "bg-orange-600"
                  } rounded-full flex items-center justify-center text-zinc-100`}
                >
                  <h1>{((info.details.vote_average / 10) * 100).toFixed()}%</h1>
                </div>
              )}
              <h1 className="px-4 py-1 bg-green-500 rounded-full">
                {info.details.release_date}
              </h1>
              {info.details.genres &&
                info.details.genres.map((g, i) => (
                  <h1 key={i} className="px-4 py-1 bg-blue-600 rounded-full">
                    {g.name}
                  </h1>
                ))}
            </div>
            {/* Description */}
            <h1 className="mt-3 text-1xl font-semibold text-zinc-300">
              Overview
            </h1>
            <p className="text-sm mt-3 w-[60%] text-white">
              {info.details.overview}
            </p>
            {/* Languages Available */}
            <h1 className="mt-3 font-xl font-semibold text-zinc-300">Languages</h1>
            <div className="flex flex-wrap gap-1 mt-3 w-[70%]">
            {info.translation && info.translation.map((d,i)=>{
               return <h1 key={i} className="w-fit text-xs px-2 py-1 bg-zinc-400 rounded-full">
              {d}
            </h1>
            })}
            </div>
            {/* Play Trailer */}
            {info.videos && <Link to={`${pathname}/trailer`} className="flex items-center w-fit mt-3 bg-violet-500 hover:bg-violet-700 text-xs rounded-lg px-3 py-1"><i className="text-xl ri-play-fill"></i>Play Trailer</Link>}
          </div>
        </div>
        {/* Part-3 Available on && buy && rent */}
        {/* Streaming */}
        {Object.keys(info.watchProviders).length > 0 &&
          info.watchProviders.IN &&
          info.watchProviders.IN.flatrate &&
          info.watchProviders.IN.flatrate.length > 0 && (
            <div className="flex w-[18vw] items-center px-1 justify-between  mt-1">
              <h1 className="font-semibold">Streaming on : -</h1>
              <img
                className="w-[2vw] rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${info.watchProviders.IN.flatrate[0].logo_path}`}
                alt=""
              />
            </div>
          )}
        {/* Buy */}
        {Object.keys(info.watchProviders).length > 0 &&
          info.watchProviders.IN &&
          info.watchProviders.IN.buy &&
          info.watchProviders.IN.buy.length > 0 && (
            <div className="flex w-[18vw] items-center px-1 justify-between  mt-2">
              <h1 className="font-semibold">Buy on : -</h1>
              {info.watchProviders.IN.buy.map((data, ind) => (
                <img
                  key={ind}
                  className="w-[2vw] rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${data.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        {/* Rent */}
        {Object.keys(info.watchProviders).length > 0 &&
          info.watchProviders.IN &&
          info.watchProviders.IN.rent &&
          info.watchProviders.IN.rent.length > 0 && (
            <div className="flex w-[18vw] items-center px-1 justify-between  mt-2">
              <h1 className="font-semibold text-nowrap">Rent on : -</h1>
              {info.watchProviders.IN.rent.map((data, ind) => (
                <img
                  key={ind}
                  className="w-[2vw] rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${data.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        {/* None Available */}
        {(Object.keys(info.watchProviders).length === 0 ||
          info.watchProviders.IN === undefined) && (
          <div className="mt-1">
            <h1 className="font-semibold">Not Available on Online Platforms 😔</h1>
          </div>
        )}
        {/*Part 4 - Recommendations */}
        <h1 className="mt-4 text-2xl font-semibold text-zinc-300">Recommendations</h1>
        <div className="w-full h-[40vh] mt-4">
          <HorizontalCards title={"movie"} data={info.recommendation.length==0 ?info.similar :info.recommendation}/>
        </div>
      </div>
      <Outlet/>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
