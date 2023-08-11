import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faReddit,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Log from "../Login/Log";
import SideBar from "../Sidebar/SideBar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const NavBar = ({ onSidebarToggle, isSidebarOpen, closeSidebar }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const [showLoginPage, setShowLoginPage] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setShowLoginPage(false);
  };
  
  const handleLogout = () => {
    logout();
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div className=" flex relative pt-[10px] pb-[10px]  space-x-2 items-center">
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-2xl md:text-3xl pl-3 md:pr-3 openButton"
            onClick={onSidebarToggle}
          />
          <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>
        <div className=" flex space-x-2 items-center pr-5">
          <img
            src="/img/zorologo.png"
            alt="img1"
            className=" w-[100px] md:w-[160px] pl-2  "
          />
          <h1 className=" pl-4 text-center text-[#91eafd] leading-4  max-md:hidden ">
            Join <br />
            now
          </h1>
        </div>
        <div className="  max-md:hidden flex space-x-2 items-center">
          <FontAwesomeIcon
            icon={faDiscord}
            className=" text-[25px] text-blue-500  rounded "
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className="  text-[25px] text-blue-500 rounded "
          />
          <FontAwesomeIcon
            icon={faReddit}
            className="  300 text-[25px] text-red-600"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="  text-2xl text-blue-500"
          />
        </div>
        <div className=" flex space-x-3 md:space-x-4  absolute right-[7px] items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="  text-[15px] md:text-2xl text-white "
          />
          {user && (
            <div>
              <div className="">
                <img
                  src="/img/chibi1.jpg"
                  alt="profile"
                  className=" rounded-full h-10 w-10 relative"
                  onClick={handleOpen}
                />
                {open ? (
                  <div className=" absolute z-10 bg-[#1d1c1c] text-white w-[300px] right-2 rounded-lg">
                    <div className=" pt-2 pl-3 pb-4">
                      <h1 className=" text-[20px] text-[#91eafd] ">
                        {user.name}
                      </h1>
                      <h1>{user.email}</h1>
                    </div>
                    <ul className=" pb-5 list-none">
                      <li className=" bg-black ml-3 mb-2 mr-3 pt-1 pb-1 pl-3 text-[20px] rounded-lg cursor-pointer hover:text-[#91eafd]">
                        {/* <img src="/icons/profile_icon.svg" alt="profile" className=" text-white " /> */}
                        <h1>Profile</h1>
                      </li>
                      <li className=" bg-black ml-3 mb-2 mr-3 pt-1 pb-1 pl-3 text-[20px] rounded-lg hover:text-[#91eafd]">
                        Watch List
                      </li>
                      <li className=" bg-black ml-3 mb-2 mr-3 pt-1 pb-1 pl-3 text-[20px] rounded-lg hover:text-[#91eafd]">
                        continue watching
                      </li>
                      <li className=" bg-black ml-3 mb-2 mr-3 pt-1 pb-1 pl-3 text-[20px] rounded-lg hover:text-[#91eafd]">
                        Notifications
                      </li>
                      <li className=" bg-black ml-3 mb-2 mr-3 pt-1 pb-1 pl-3 text-[20px] rounded-lg hover:text-[#91eafd]">
                        Settings
                      </li>
                    </ul>
                    <button
                      className=" text-white text-[15px] pb-4 pl-4 hover:text-[#91eafd]"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                ) : null}
              </div>
              {!showLoginPage}
            </div>
          )}
          {!user && (
            <div>
              <button
                className=" bg-[#3eb8db] text-black text-[14px] md:text-[20px] rounded pt-1 pb-1 pl-2 pr-2 "
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

export default NavBar;
