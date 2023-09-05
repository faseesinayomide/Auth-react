import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import Footer from './Footer';
import { ScrollRestoration } from 'react-router-dom';





const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="">
        {" "}
        <nav className="flex justify-between items-center py-20 container mx-auto px-8 sm:px-6 md:px-9 lg:px-10">
          <div className="">
            <a href="#" className="logo">
              <h2 className=" text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#ffd300]">
                PROTOCOL
              </h2>
            </a>
          </div>

          <ul className={`  block flex-col sm:flex-col md:flex-row lg:flex-row   ${open ? 'block' : 'hidden' }`}>
            <li className="mr-5 text-2xl  text-[#ffd300]">
              <a href="#" className="">
                Docs
              </a>
            </li>

            <li className="mr-5 text-2xl  text-[#ffd300]">
              <a href="#" className="">
                Protocol
              </a>
            </li>

            <li className="mr-5 text-2xl  text-[#ffd300]">
              <a href="#" className="">
                Api
              </a>
            </li>

            <li className="mr-5 text-2xl  text-[#ffd300]">
              <a href="#" className="">
                Protocol
              </a>
            </li>
          </ul>
          <div className="block sm:block md:hidden lg:hidden">
            <RiMenu3Fill onClick={()=> setOpen(!open)} className="text-yellow-400 text-4xl" />
          </div>
        </nav>
      </div>

      <div className="min-h-[50vh]">
        <Outlet />
      </div>

      <Footer />

      <ScrollRestoration />
    </>
  );
}

export default Navbar