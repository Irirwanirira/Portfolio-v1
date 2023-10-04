import React from 'react'
import { LightMode, darkMode } from '../assets/svgs'

function DarkMode({isDarkMode,  toggleDarkMode}) {
  return (
    <div>
        <button className={`${
            isDarkMode ? 'bg-#333 text-#fff' : 'bg-#ccc text-#000'} p-10px cursor-pointer`} 
            onClick={ toggleDarkMode}>
            {isDarkMode ?  LightMode : darkMode}
        </button>
    </div>
  )
}

export default DarkMode