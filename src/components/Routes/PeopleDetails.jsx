import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate, useLocation} from "react-router-dom";
import Loading from "../Partials/Loading";
import HorizontalCards from "../Partials/HorizontalCards";
import { asyncGetPerson } from "../../store/actions/personActions";
import { clearPeople } from "../../store/reducers/peopleReducer";

const PeopleDetails = () => {

  document.title = "DB | Details";
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { info } = useSelector((state) =>state.people);

  useEffect(() => {
    dispatch(asyncGetPerson(id));
    return () => {
      dispatch(clearPeople());
    };
  }, [id]);




  return info ? (
    <div className='px-[10%] w-full h-[150vh] text-zinc-200'>
      {/* Part 1 - Navigation */}
      <div className="w-full h-[10vh] flex  items-center text-xl gap-4">
        <Link onClick={() => nav(-1)}>
          <i className="ri-arrow-left-circle-line text-2xl hover:text-[#6556CD]"></i>
        </Link>
        <h1 className="text-2xl font-semibold tracking-wide">Person Details</h1>
      </div>
      <div className="w-full flex gap-4">
      {/* Part 2 - Image and Info */}
      <div className="w-[20%] flex flex-col ">
      <img className="w-full h-[45vh] rounded-sm object-cover scale-100"
              src={`https://image.tmdb.org/t/p/original/${
                info.details.profile_path ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }`}
              alt=""
      />
      {/* 1st Detail */}
      <div className="flex text-lg font-semibold items-center justify-between">
      <h1 className="mt-4 text-zinc-400">Known For : </h1>
      <h1 className="mt-4">{info.details.known_for_department}</h1>
      </div>
      {/* 2nd Detail */}
      <div className="flex text-lg font-semibold items-center justify-between">
      <h1 className="mt-4 text-zinc-400">BirthDate : </h1>
      <h1 className="mt-4">{info.details.birthday}</h1>
      </div>
      {/* 3rd Detail */}
      <div className="flex text-lg font-semibold items-center justify-between">
      <h1 className="mt-4 text-zinc-400">DeathDate : </h1>
      <h1 className="mt-4">{info.details.deathday ? info.details.deathday : "Still Alive"}</h1>
      </div>
      {/* 4th Detail */}
      <div className="flex text-lg font-semibold items-center justify-between">
      <h1 className="mt-4 text-zinc-400">Gender : </h1>
      <h1 className="mt-4">{info.details.gender==1?"Female":"Male"}</h1>
      </div>

              <hr className="mt-4 border-2 " />
      {/* Social Details */}
      <div className="mt-3 flex justify-around text-3xl">
      {info.details.homepage && <a target="_blank" href={`${info.details.homepage}`}>
          <i className="ri-share-forward-box-line hover:text-[#6556CD]"></i>
        </a>}
        {info.externalId.wikidata_id && <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-global-fill hover:text-[#6556CD]"></i>
        </a>}
        {info.externalId.facebook_id && <a
          target="_blank"
          href={`https://facebook.com/${info.externalId.facebook_id}/`}
        >
          <i className="ri-facebook-circle-fill hover:text-[#6556CD]"></i>
        </a>}
        {info.externalId.instagram_id && <a
          target="_blank"
          href={`https://instagram.com/${info.externalId.instagram_id}/`}
        >
          <i className="ri-instagram-fill hover:text-[#6556CD]"></i>
        </a>}
        {info.externalId.twitter_id && <a
          target="_blank"
          href={`https://twitter.com/${info.externalId.twitter_id}/`}
        >
          <i className="ri-twitter-x-fill hover:text-[#6556CD]"></i>
        </a>}
      </div>
      </div>

      {/* Right side name and biography */}
      <div className="w-[80%] px-10">
        <h1 className="text-4xl font-semibold tracking-wide">{info.details.name}</h1>
        <h1 className="mt-4 text-zinc-400 font-semibold">Biography</h1>
        <p className="text-sm mt-3 text-zinc-200">{info.details.biography}</p>
        {/* Movies */}
        <div className="mt-4">
        <h1 className="mb-2 font-semibold text-zinc-400">Movies Worked</h1>
        <HorizontalCards data={info.movieCredits.cast} title={"movie"}/>
        </div>
        {/* Tv Series */}
        <div className="mt-4">
        <h1 className="mb-2 font-semibold text-zinc-400">Tv Series Worked</h1>
        <HorizontalCards data={info.tvCredits.cast} title={"tv"}/>
        </div>
      </div>
      </div>
    </div>
  ):<Loading/>
}

export default PeopleDetails
