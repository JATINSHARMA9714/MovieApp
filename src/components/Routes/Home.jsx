import React, { useEffect, useState } from "react";
import Sidenav from "../Partials/Sidenav";
import TopNav from "../Partials/TopNav";
import Header from "../Partials/Header";
import Loading from "../Partials/Loading";
import axios from "../../utils/axios";
import TrendingCards from "../Partials/TrendingCards";
import Dropdown from "../Partials/Dropdown";

const Home = () => {
  document.title = "DB | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("movie");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/week`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] px-6 h-screen">
        <TopNav />
        <Header data={wallpaper} />
        <div className="flex w-[100%] h-[5vh] items-center text-zinc-200 py-4 px-2 justify-between">
          <h1 className="text-2xl font-semibold">Trending</h1>
          <Dropdown
          Title={"Filter"}
            options={["Movie", "Tv", "All"].reverse()}
            func={(e) => setCategory(e.toLowerCase())}
          />
        </div>
        <TrendingCards data={trending} title={category} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
