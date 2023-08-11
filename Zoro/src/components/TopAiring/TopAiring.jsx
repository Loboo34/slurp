import React from "react";
import List from "./List";

const TopAiring = () => {
  
  return (
    <div className=" pb-14 pt-10 md:flex w-full md:pl-4">
      <List name= "Top Airing"/>
      <List  name= "Most Popular"/>
      <List  name= "Favourite"/>
      <List  name= "Last Completed"/>
    </div>
  );
};

export default TopAiring;
