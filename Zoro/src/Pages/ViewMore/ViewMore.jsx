import React from "react";


import MostViewed from "../../components/MostViewed/MostViewed";
import Selection from "./Selection";
import ALLGenres from "../../components/Genres/AllGenres";

const ViewMore = () => {
// let PageSize = 10;
//  const [currentPage, setCurrentPage] = useState(1);

//    const page = useMemo(() => {
//      const firstPageIndex = (currentPage - 1) * PageSize;
//      const lastPageIndex = firstPageIndex + PageSize;
//      return AnimeData.slice(firstPageIndex, lastPageIndex);
//    }, [currentPage]);
  return (
    <div className=" pt-12 pb-5">
      <h1>Top Airing</h1>
      <div className="w-full md:flex relative">
        <div className="md:w-9/12 pt-6">
          <Selection />
        </div>
        <div className="  md:w-3/12 pt-6 pl-3 w-full">
          <MostViewed />
          <ALLGenres />
        </div>
      </div>
      {/* <div className=" text-white space-x-4 flex justify-center text-[20px]">
        <a href="#" className=" pt-1 pr-3">&laquo;</a>
        <a href="#" className=" bg-black rounded-full pt-2 pb-2 pl-3 pr-3">1</a>
        <a href="#" className=" bg-black rounded-full pt-2 pb-2 pl-3 pr-3">2</a>
        <a href="#" className=" bg-black rounded-full pt-2 pb-2 pl-3 pr-3">3</a>
        <a href="#" className=" bg-black rounded-full pt-2 pb-2 pl-3 pr-3">4</a>
        <a href="#" className=" bg-black rounded-full pt-2 pb-2 pl-3 pr-3">5</a>
        <a href="#" className=" bg-black rounded-full pt-2 pb-2 pl-3 pr-3">6</a>
        <a href="#" className=" pt-1 pl-3">&raquo;</a>
      </div> */}

    </div>
  );
};

export default ViewMore;
