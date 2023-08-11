import React from "react";
import Card from "./Card";
import AnimeData from "../../AnimeData";

const List = () => {  
  return (
    <div className=" continer">
      <div className=" flex space-x-2 w-fit md:space-x-3  mb-3 row">
        <Card AnimeData={AnimeData} />
      </div>
      {/* <div className=' flex space-x-2 w-fit md:space-x-3'>
         <Card />
         <Card />     
    </div> */}
    </div>
  );
};

export default List;
