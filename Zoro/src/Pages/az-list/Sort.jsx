import React from 'react'

import footerLinks from '../../components/Footer/footerLinks';
import { Link } from 'react-router-dom';
import Card from './Card';


const Sort = () => {
  return (
    <div>
   
      <div className=" flex space-x-2 pt-3 pl-4 pb-3 text-[#cae962] ">
        <Link to="/">
          <butoon className=" cursor-pointer ">Home</butoon>
        </Link>
        <span className=" -mt-1 ">.</span>
        <span className=" ">A-Z list</span>
      </div>
      <h1 className=" text-[#cae962] text-[24px] pl-4">Sort By Letters</h1>
      <div className=" pt-4 pl-4 pb-4 flex space-x-3">
        {footerLinks.map((link) => (
          <button
            className=" text-[20px] pt-1 pb-1  bg-black text-white pl-2 pr-2 rounded mr-2 hover:bg-[#cae962] hover:text-black"
            onClick={() => {
              window.location.pathname = link.path;
            }}
          >
            {link.name}
          </button>
        ))}
      </div>
      <div className="pl-4">
        <Card targetType={"Tv"} />
      </div>
    </div>
  );
}

export default Sort;