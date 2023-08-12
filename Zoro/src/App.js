import React from "react";
//import { Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,

} from "react-router-dom";
import ViewMore from "./Pages/ViewMore/ViewMore";
import Footer from "./components/Footer/Footer";
import Anime from "./Pages/Anime/Anime";
import Genre from "./Pages/Genre/Genre";
import Home from "./Pages/Home/Home";
import Comments from "./components/comments/Comments";
import MostViewed from "./components/MostViewed/MostViewed";
import Sort from "./Pages/az-list/Sort";
import Movies from "./Pages/movies/Movies";
import TvSeries from "./Pages/Series/TvSeries";
import Popular from "./Pages/MostV/Popular";
import Navbar from "./components/header/NavBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="comments" element={<Comments />}></Route>
      <Route path="anime/:id" element={<Anime />} />
      <Route path="viewmore" element={<ViewMore />} />
      <Route path="genre/:genre" element={<Genre />} />
      <Route path="AZ-list" element={<Sort />} />
      <Route path="movie" element={<Movies />} />
      {/* <Route path="popular" element={<Popular />} /> */}
      <Route path="series" element={<TvSeries />} />
      <Route path="MostViewed" element={<MostViewed />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="pl-0 pr-0 bg-[#090a0cf3] relative">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
