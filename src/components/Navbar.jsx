import React, { useEffect, useState } from "react";
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/main_logo.png";
import porfile from "../assets/profile_logo.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import { IoMic } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategory,  toggleSidebar } from "../utils/appSlice";
import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { toggleTheme } from "../utils/themeSlice";



function Navbar() {
  const dispatch=useDispatch()

  const [input,setInput]=useState("")
  const searchVideo=()=>{
    dispatch(setCategory(input))

  }

  const toggleNavbar=()=>{
    dispatch(toggleSidebar())  
  }

   
    const darkMode = useSelector((state) => state.theme.darkMode);


 
  return (
    // <div className="flex justify-between px-6 py-2  fixed top-0 w-[100%] bg-white ">
    <div className={`flex justify-between px-6 py-2  fixed top-0 w-[100%] ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
   {/* <div className={`flex justify-between px-6 py-2 fixed top-0 w-[100%] ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}> */}

      <div className=" flex items-center space-x-4 ">
        <AiOutlineMenu className="text-4xl cursor-pointer hover:bg-gray-500 p-2 rounded-xl" onClick={toggleNavbar} />
        <NavLink to={'/'}>
        <img
          src={logo}
          alt="video player logo"
          className="w-20 cursor-pointer rounded-3xl "
        />
        </NavLink>
      </div>

      <div className="flex items-center justify-center w-[40%]">
        <div className="flex w-full max-w-2xl">
          <div className="flex-grow">
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 rounded-l-full border outline-none text-black"
            />
          </div>
          <button onClick={searchVideo} className="px-6 py-2 rounded-r-full border bg-secondary text-secondary-foreground">
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
        
        <button className="ml-4 p-2 rounded-full hover:bg-gray-500">
          <IoMic className="text-xl" />
        </button>
      </div>



      <div className=" space-x-5 flex items-center  ">

      

      <button
      onClick={() => dispatch(toggleTheme())}
      className={` rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      
      <MdDarkMode className="text-4xl p-2 rounded-full  cursor-pointer"/>
    </button>
      <FaRegBell className="text-4xl p-2 rounded-full hover:bg-gray-500 duration-200 cursor-pointer"/> 
        <Avatar src={porfile} size="32" round={true} className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default Navbar;
