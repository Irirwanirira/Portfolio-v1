import React from "react";
import { LightMode, darkMode } from "../assets/svgs";

function DarkMode({ isDarkMode, toggleDarkMode }) {
  return (
    <div>
      <button
        className={`${isDarkMode ? "bg-[#333] text-white" : "bg-[#ccc] text-black"} p-1 rounded-md cursor-pointer`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? LightMode : darkMode}
      </button>
    </div>
  );
}

export default DarkMode;
