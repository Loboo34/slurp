import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { SIdeBarData } from "./SIdeBarData";

const SideBar = ({ onClose, isOpen }) => {
  return (
    <div className="">
      <div className="  md:w-[250px] w-full h-screen bg-[#2a2c31] top-0 absolute hidden   z-50 overflow-auto ">
        <div
          className=" flex  pb-4 bg-[#3eb8db] space-x-1  rounded-2xl m-5 justify-center "
          onClick={onClose}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="text-white pt-4"
          />
          <button className=" text-white pt-3 closeButton">Close Menu</button>

          {/* <button className=" bg-[#cae962]">Community</button> */}
        </div>
        <ul className=" pt-2 pl-2 flex flex-[30%] flex-col">
          {SIdeBarData.map((link) => {
            return (
              <div>
                <li
                  key={link.id}
                  className=" p-3 text-white  text-[15px] font-[Montserrat, Arial]"
                  onClick={() => {
                    window.location.pathname = link.path;
                  }}
                >
                  {""}

                  <div className="hover:text-[#cae962] cursor-pointer">
                    {link.name}
                  </div>
                </li>

                <hr className="w-[100%] h-2 pt-4 opacity-10 hover:text-[#cae962] hover:opacity-20" />
              </div>
            );
          })}
        </ul>
        <div>
          <span className=" text-[#cae962]">Gener</span>
          {/* {GenreData.map((item, key) => (
            <Link to={`/genre/${item.name}`}>
              <div className=" pt-2 pl-4 " key={key}>
                <button className=" pt-2 pb-2 pl-2 pr-4 text-[#d0e6a5] md:hover:bg-[#414248] rounded border-1 relative text-[12px] bg-[#303135]">
                  {item.name}
                </button>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
