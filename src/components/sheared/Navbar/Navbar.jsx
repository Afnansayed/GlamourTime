import Link from "next/link";
import React from "react";

const Navbar = () => {


  const navLink = <>
        <li><Link href={'/'}> Home</Link></li>
        <li><Link href={'/'}>Signin</Link></li>
        <li><Link href={'/'}>SignUp</Link></li>
        </>

  return (
    <>
      <div className="navbar bg-base-100 bg-gradient-to-r from-sky-300 to-cyan-50 rounded-full md:px-12  md:py-0 my-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
               {navLink}
            </ul>
          </div>
          <div className="flex items-center gap-2">
          <p className="text-2xl bg-black rounded-full p-2 px-4 text-[#fff] font-serif">G</p>
          <p className="hidden lg:block text-xl font-semibold bg-gradient-to-r from-gray-800  to-[#fff] text-transparent bg-clip-text">GlamourTime</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
               {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <button className=" bg-gray-800 text-[#fff] rounded-lg px-6 py-2 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all">Button</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
