import React, { useContext } from "react";
import { BiSearchAlt2, BiMenu, BiShareAlt } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

// Context
import { MovieContext } from "../../Context/movie.context";

const NavSm = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-7 h-7">
          <BiShareAlt className="w-full h-full text-gray-200" />
        </div>
      </div>
    </>
  );
};

const Navlg = () => {
  return (
    <>
      <div className="container mx-20 px-8 flex items-center justify-between ">
        <div className="flex items-center gap-3 w-1/2">
          <div className="w-12 h-12  ">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>

          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-sm">
            <BiSearchAlt2 className="text-gray-500" />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gray-200 text-xs flex items-center gap-1 hover:text-white cursor-pointer text-sm">
            Bhubaneswar <MdArrowDropDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-navGrey-700 p-3 ">
        <div className="md:hidden">
          {/*Mobile screen*/}
          <NavSm />
        </div>

        <div className="hidden md:block lg:hidden">
          {/*Tab screen*/}
          <NavSm />
        </div>

        <div className="hidden w-full lg:flex">
          {/*PC screen*/}
          <Navlg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
