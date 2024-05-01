"use client"
import Image from "next/image";
import logo from "@/public/logo.svg";
import Button from "./button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
export default function NavBar() {
  const router = useRouter()
  return (
    <nav className="z-10 sticky top-0 w-full flex justify-center backdrop-blur-2xl bg-white/80">
      <div
        className="flex w-full max-w-5xl
       h-14 items-center justify-between px-4"
      >
        <div className="hover:cursor-pointer" onClick={()=>router.push("/")}>
          <Image src={logo} alt={"logo"} width={40} />
        </div>
        {/* desktop nav */}
        <div className="sm:flex hidden flex-row gap-x-4 items-center">
          <Button label="Manage bookings" bgColor="black" textColor="white" />
          <Button label="List your ride" bgColor="black" textColor="white" />
          <div className="w-[1px] h-10 bg-gray-500"></div>
          <div
            className="text-sm hover:cursor-pointer
          text-black/60 hover:text-black/90 transition-colors"
          >
            Register
          </div>
          <div
            className="text-sm hover:cursor-pointer
          text-black/60 hover:text-black/90 transition-colors"
          >
            Sign in
          </div>
        </div>
        <div className="sm:hidden flex">
          <Menu  size={20} color="black"/>
        </div>
      </div>
    </nav>
  );
}
