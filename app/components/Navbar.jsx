"use client";
import Link from "next/link";
import { useState } from "react";
// import { Link } from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className="bg-white text=[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1336px] mx-auto h-[100px] flex justify-between items-center p-4">
        {/* logo */}
        <div>
          {menuIcon ? (
            <Link href="/" onClick={handleSmallerScreensNavigation}>
              {/* <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl ">sutranovum</span> */}
              <img src={"/assets/logos/full_logo.png"} className="w-[150px]" />
            </Link>
          ) : (
            <Link href="/">
              {/* <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl ">sutranovum</span> */}
              <img src={"/assets/logos/full_logo.png"} className="w-[150px]" />
            </Link>
          )}
        </div>

        {/* larger screen navigation links */}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/">home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/about">about</Link>
          </li>
          <li className=" hover:text-[#CEFF00]">
            <Link href="/contact">contact</Link>
          </li>
        </ul>

        {/* larger screen login/signup buttons */}
        <div className="hidden md:flex">
          <div className="flex">
            <Link href="/login">
              <button className="border-2 border-[#ceff00] mr-5 bg-[#CCFF00]  hover:border-slate-800 test-slate-800 hover:bg-slate-800 hover:text-[#CEFF00] rounded-full uppercase font-bold px-8 py-2">login</button>
            </Link>
            <Link href="/signup">
              <button className="border-2 border-[#ceff00] text-white rounded-full hover:border-slate-800 hover:bg-slate-800 uppercase font-bold px-8 py-2 ">sign up</button>
            </Link>
          </div>
        </div>

        {/* smaller screen navigation icons */}
        {/* onClick change the icon */}
        <div onClick={handleSmallerScreensNavigation} className="flex md:hidden">
          {menuIcon ? <AiOutlineClose size={25} className="text-[#ceff00]" /> : <AiOutlineMenu size={25} className="text-[#ceff00]" />}
        </div>

        {/* small screen - NavBar */}
        {/* hides offscreen when not true */}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
          }
        >
          {/* smaller screens - navbar links */}
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl">
              <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-[#ceff00] cursor-pointer">
                <Link href="/">home</Link>
              </li>
              <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-[#ceff00] cursor-pointer">
                <Link href="/about">about</Link>
              </li>
              <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-[#ceff00] cursor-pointer">
                <Link href="/contact">contact</Link>
              </li>
            </ul>
            {/* smaller screens - signup buttons */}
            <div className="flex flex-col justify-center items-center mt-16">
              <Link href="login" onClick={handleSmallerScreensNavigation}>
                <button className="border-2 border-[#ceff00] bg-[#ceff00] text-slate-800 uppercase rounded-full  hover:bg-slate-400 hover:text-[#CEFF00] font-bold py-3 w-[250px] mb-5">login</button>
              </Link>
              <Link href="login" onClick={handleSmallerScreensNavigation}>
                <button className="border-2 border-[#ceff00]  hover:bg-slate-400  uppercase rounded-full font-bold py-3 w-[250px] mb-5">sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
