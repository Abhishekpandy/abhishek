import {useTheme} from 'next-themes'
import React, { useState, useEffect } from "react";
import { FaSun} from 'react-icons/fa'
import {BiBook, BiHome} from 'react-icons/bi'
import {BsFillMoonFill as FaMoon} from 'react-icons/bs'
import Link from 'next/link';

function Header() {
  const {systemTheme, theme, setTheme} = useTheme()
  const [showSidebar, setShowSidebar] = useState(false);
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  }, [])

  const renderThemeChanger = () =>{
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'dark'){
      return (
        <FaSun className='w-10 h-10' role='button' onClick={()=> setTheme('light')} />
      )
    }else{
      return(
        <FaMoon className='w-10 h-10' role='button' onClick={()=> setTheme('dark')} />
      )
    }
  }

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-5xl bg-transparent font-extrabold items-center cursor-pointer fixed right-4 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-14 w-14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4B8B3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 fixed z-30 flex items-center cursor-pointer right-4 md:right-14 top-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4B8B3D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9.5H5M21 4.5H3M21 14.5H3M19 19.5H5" />
        </svg>
      )}

      <div
        className={`top-0 right-0 w-3/4 md:w-1/2 bg-teal-900  p-10 flex flex-col justify-evenly items-start text-white fixed h-full z-40  ease-in-out duration-300 dark:bg-slate-800 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold">
          iAbhishek
        </h3>
        <Link href='/'><a className=' text-2xl font-extrabold flex justify-center items-center'><BiHome className='mr-2' />Home</a></Link>
        <Link href='/blogs'><a className=' text-2xl font-extrabold flex justify-center items-center'><BiBook className='mr-2' />Blogs</a></Link>

        {renderThemeChanger()}
      </div>
    </>
  );
}

export default Header;
