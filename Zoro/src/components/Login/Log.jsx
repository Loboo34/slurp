import React from "react";
import { useState } from "react";
import Login from "./Login";
import Regester from "./Regester";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";;

const Log = ({ onClose }) => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };


  
  return (
    <div className="">
      <div className=" bg-[#2a2c31] md:w-[500px] w-[200px] rounded-[20px] mt-5 mb-5  absolute z-10 flex md:right-[250%] ">
        <button className=" absolute right-0   " onClick={onClose}>
          <FontAwesomeIcon
            icon={faClose}
            className=" text-2xl  bg-white rounded-full pl-2 pr-2 pb-1 pt-1 -mr-3 -mt-5"
          />
        </button>
        {
          currentForm === "login" ? (
            <Login onFormSwich={toggleForm} />
          ) : (
            <Regester onFormSwich={toggleForm} />
          )
          // currentForm === "login"? <Login onFormSwich={toggleForm}/> : <Regester onFormSwich={toggleForm}/> ? <Verify onFormSwich={toggleForm}/> : ""
        }
        <comment />
      </div>
    </div>
  );
};

export default Log;
