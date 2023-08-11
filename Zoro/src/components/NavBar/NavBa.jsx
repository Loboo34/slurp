import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faReddit,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShuffle,
  faComment,
  faMagnifyingGlass,
  faBars,
  faStream,
} from "@fortawesome/free-solid-svg-icons";

import Log from "../Login/Log";
import SideBar from "../Sidebar/SideBar";
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLogout } from "../../hooks/useLogout"

const Header = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { user } = useAuthContext()
  const { logout} = useLogout()
  // const [active, setActive] = useState(null);
  // const showSidebar = () => {};
  const handleCloseSidebar = () => {
    setSideBar(false);
  };
  const handleClick = (event) => {
    setIsActive((current) => !current);
    //event.currentTarget.classList.toggle('');
  };
  //const handleClick = () => {};
  const handleClose = () => {
    setShowLoginPage(false);
  };
  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      {sideBar && <SideBar onClose={handleCloseSidebar} isActive={isActive} />}
      <div className="  flex  bg-[#080808]  md:flex-1  z-10 items-center w-full">
        <div className=" flex space-x-2">
          <div className="" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-white pl-3 pt-2 text-2xl"
              onClick={() => {
                setSideBar(!sideBar);
              }}
            />
          </div>

          <img
            src="/img/zorologo.png"
            alt="img1"
            className="h-[45px] w-[165px] pl-6 pt-1"
          />
          <h1 className=" pl-4 text-center text-gray-500 leading-4 pt-2 max-md:hidden">
            Join <br />
            now
          </h1>
        </div>
        <div className="pl-4 pt-2 max-md:hidden">
          <FontAwesomeIcon
            icon={faDiscord}
            className="p-2 text-2xl text-blue-500  rounded "
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className="p-2  text-2xl text-blue-500 rounded "
          />
          <FontAwesomeIcon
            icon={faReddit}
            className="p-2  300 text-2xl text-red-600"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="p-2  text-2xl text-blue-500"
          />
        </div>
        <div className="pl-8 pt-3 text-center max-md:hidden flex space-x-3">
          <div className="p-2">
            <FontAwesomeIcon
              icon={faStream}
              className="   text-[20px] text-[#cae962]"
            />
            <br />
            <span
              className="text-white text-[11px] relative cursor-pointer "
              data-tooltip-target="tooltip-default"
            >
              watch2gether
              <p
                className=" bg-white text-black invisible absolute z-10 "
                id="tooltip-default"
                role="tooltip"
              >
                <span className="tooltip-arrow" data-popper-arrow></span>
              </p>
            </span>
          </div>
          <div className=" flex-col p-2">
            <FontAwesomeIcon
              icon={faShuffle}
              className="  text-[20px] text-[#cae962]"
            ></FontAwesomeIcon>
            <br />
            <span className="text-white text-[11px]">Random</span>
          </div>
          <div className="p-2">
            <FontAwesomeIcon
              icon={faComment}
              className="  text-[20px] h-[20px] text-[#cae962]"
            />
            <br />
            <span className="text-white text-[11px]">Random</span>
          </div>
        </div>

        <div className=" flex space-x-2 absolute right-[20px]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pr-4 pt-4 text-1xl text-white "
          />
          {user && (
            <div>
              <h1 className=" text-white">{user.email}</h1>
              <button className=" text-white" onClick={handleLogout}>
                Log out
              </button>
             
            </div>
          )}
          {!user && (
            <div>
              <button
                className=" bg-[#cae962] text-black rounded w-20 h-10 active log-btn"
                onClick={() => {
                  setShowLoginPage(true);
                }}
              >
                Login
              </button>
              {showLoginPage && <Log onClose={handleClose} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
