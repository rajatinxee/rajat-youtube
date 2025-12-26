import React, { useEffect, useState } from "react";
import {
  HAM_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/Redux/Slices/appSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    console.log(searchQuery);

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-md">
        {/* left */}
        <div className="flex col-span-1">
          <img
            src={HAM_ICON}
            alt="menu"
            className="h-8 cursor-pointer"
            onClick={toggleSidebar}
          />
          <img src={YOUTUBE_LOGO} alt="YOUTUBE_LOGO" className="h-8 mx-2" />
        </div>

        {/* middle */}
        <div className=" col-span-10 px-10 ">
          <input
            type="text"
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className=" border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200 transition-all duration-100">
            🔍
          </button>
        </div>

        {/* right */}
        <div className="h-8 col-span-1 cursor-pointer">
          <img src={USER_ICON} alt="USER_ICON" className="h-8" />
        </div>
      </div>
    </>
  );
};

export default Head;
