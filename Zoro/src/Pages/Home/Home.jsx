import React, { useState } from "react";

import Trending from "../../components/Trending/Trending";
import TopAiring from "../../components/TopAiring/TopAiring";
import LatestEP from "../../components/LatestEp/LatestEP";
import New from "../../components/NewOn/New";
import TopUpComing from "../../components/TopUpComing/TopUpComing";
import AllGenres from "../../components/Genres/AllGenres";
import MostViewed from "../../components/MostViewed/MostViewed";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import OnAirAnime from "../../components/currentAiring/OnAirAnime";

import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // const closeSidebar = () => {
  //   setIsSidebarOpen(false);
  // };

  return (
    <div className=" relative">
    
      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}></div>
      <OnAirAnime />
      <Trending />
      <TopAiring />
      <div className=" w-full md:flex relative">
        {}
        <div className=" md:w-9/12">
          <LatestEP />
          {user && (
            <div>
              <h1 className="text-[#91eafd]">Continue Watching</h1>
            </div>
          )}
          <New />
          <TopUpComing />
        </div>
        <div className=" md:w-3/12 pt-6 pl-3 w-full">
          <AllGenres />
          <MostViewed />
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default Home;
