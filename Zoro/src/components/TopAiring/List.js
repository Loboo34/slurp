import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";


const List = (props) => {
 
  // const cards = headers.map((name) => {
  //   const list = AnimeData.filter((name) => ListItem,name.includes(name))
  // })
  return (
    <div
      className=" bg-[#313236e9] mb-4 md:mr-3 w-[100%]
    "
    >
      {/* {headers.map((head, key) => (
         
        ))} */}
      <div className=" h-12 pt-3 pl-2 text-[#24d4fc]">
        <h1 className=" text-[16px]">{props.name}</h1>
      </div>
      <div>
        <ListItem />
      </div>
      <div>
        <Link to="viewMore">
          <button className=" text-[#ddd]  bg-[#4e5860e3] hover:bg-[#5a656ee3] text-center w-full pt-2 pb-2 text-[15px] ">
            {" "}
            View More{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default List;
