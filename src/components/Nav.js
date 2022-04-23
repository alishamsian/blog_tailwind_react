import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Avatar from "../assets/images/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";


const Nav = () => {

  const [isMenu, setIsMenu] = useState(false);

  const login = () => {
    setIsMenu(!isMenu);
  };



  return (
    <header className=" hidden md:flex fixed bg-white z-50 w-screen bg-primary p-3 px-4 md:p-6 md:px-16">
      {/* desctop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-headingColor text-xl font-bold">Ali Blog</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/"
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
              onClick={() => setIsMenu(false)}
            >
              خانه
            </Link>
            <Link to="/category"
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
              onClick={() => setIsMenu(false)}
            >
              دسته بندی
            </Link>
            <Link to="/posts"
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
              onClick={() => setIsMenu(false)}
            >
              پست ها
            </Link>
            <Link to="/about"
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
              onClick={() => setIsMenu(false)}
            >
              درباره من
            </Link>
          </ul>
          <div
            className="relative flex items-center justify-center"
          >
              <div className="absolute -top-2 -right-2 bg-cartNumBg rounded-full w-5 h-5 flex items-center justify-center">
              </div>

          </div>
          <div className="relative">
            <img
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <div
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 left-0"
              >
                  <Link to="/create">
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-textColor text-base ">
                    <MdAdd /> 
                     نوشتن پست
                    </p>
                  </Link>
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-textColor text-base "
                >
                  <MdLogout />
                   خروج از حساب
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav