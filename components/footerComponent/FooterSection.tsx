"use client";
import { MouseEvent } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function FooterSection() {
  const scrollToSection = (id:string, e:MouseEvent) =>{
    e.preventDefault()
    const element = document.getElementById(id)
    const offset = 55
    if(element){
    const position = element.offsetTop - offset
    window.scrollTo({top:position ,behavior: 'smooth'})
    }
  }
  return (
    <div className="z-10 w-full flex justify-center bg-primary rounded-t-3xl -mt-5">
      <div className="max-w-5xl w-full flex flex-col">
        <div
          className="w-full flex sm:flex-row flex-col-reverse
         justify-between py-10 sm:gap-y-0 gap-y-6 sm:px-10 px-4"
        >
          <Image
            src={logo}
            alt="logo"
            width={180}
            height={100}
            className="invert"
          />
          <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-6 ">
            <div className="flex flex-col mr-20">
              <h2 className="text-base font-bold text-accent">Contact</h2>
              <ul className="text-sm mt-2 space-y-1 text-white/80">
                <a href="mailto:">service@rentandgo.com</a>
                <li>+ 12 121 1212</li>
              </ul> 
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-bold text-accent">Navigation</h2>
              <div className="flex flex-col text-sm mt-2 space-y-1 text-white/80">
                <a href="/#search" onClick={(e)=>scrollToSection("search",e)}>Rent vehicle</a>
                <a href="/#process" onClick={(e)=>scrollToSection("process",e)}>Process</a>
                <a href="/#promotion" onClick={(e)=>scrollToSection("promotion",e)}>Promotions</a>
                <a href="/#featured" onClick={(e)=>scrollToSection("featured",e)}>Featured</a>
                <a href="/#about" onClick={(e)=>scrollToSection("about",e)}>About us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white/50 w-[95%] self-center"></div>
        <div className="flex flex-col items-end space-x-4 mt-2 mb-4 mr-4">
          <div className="text-[8px] text-white text-balance ">
            demonstration purpose for portfolio showcase only none of contact
            and information are real
          </div>
          <div className="text-[8px] text-white mt-2">
            see more in my
            <span className="px-2 ml-1 bg-white rounded-full text-black hover:cursor-pointer hover:opacity-50">
              <a href="" target="_blank">
                portfolio
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
