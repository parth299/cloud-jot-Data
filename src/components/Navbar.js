import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import image from './Image/cloud-computing.png';
  
export const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <div className="navbar flex justify-around h-12 items-center font-myfont shadow-lg text-xs text-[#fff] bg-[#444445]">
        <div className="leftNav w-3/6">
          <ul className="flex justify-around">
            <li className=""><img className="w-5 h-5" src={image} alt="" /></li>
            <li className="cursor-pointer"><Link className={`${location.pathname === "/" ? "text-[#0D9AE6]": " "}`} to="/">Home</Link></li>
            <li className="cursor-pointer"><Link className={`${location.pathname === "/about" ? "text-[#0D9AE6]": " "}`} to="/about">About</Link></li>
            <li className="cursor-pointer">Get Connected</li>
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Sign Up</li>
          </ul>
        </div>
      </div>
    </>
  )
}
