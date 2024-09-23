"use  client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

//define props type
type Props={
   openNav:()=> void
}

const Nav = ({openNav}:Props) => {

     const[navBg,setNavBg]=useState(false)
     useEffect(()=>{
       const handler = ()=>{
        if(window.scrollY >=90){
            setNavBg(true)
        }
        if(window.scrollY < 90){
            setNavBg(false);
        }
       }

       window.addEventListener("scroll",handler);
       return ()=>{
        window.removeEventListener("scroll",handler);
       }

     },[])

  return (
    <div
      className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200`}
      style={{
        background: 'radial-gradient(circle, #0754AF, #032349)', // Customize the colors here
      }}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/*logo*/}
        <Image
          src="/images/Thilini.png"
          alt="logo"
          width={100}
          height={100}
          className="ml-[-1.0rem] sm:ml-0"
        />
        {/*nav links*/}
        <div className="flex items-center space-x-10">
            <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink)=>{
                return (
                <Link key={navlink.id} href={navlink.url}>
                    <p className="nav_link">{navlink.label}</p>
                </Link>
                )
            })}
            </div>
            <div className="flex items-center space-x-4">
           {/*burger*/}
           <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;
