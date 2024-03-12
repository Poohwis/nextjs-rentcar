import Image from "next/image";
import hero from "@/public/hero.jpg";
import TypeSelect from "./TypeSelect";
import SearchBar from "./SearchBar";
import SloganBanner from "./SloganBanner";
export default function HeroSection() {
  return (
    <div className="-z-10 w-full h-[500px] overflow-hidden relative flex justify-center items-center">
      <Image
        src={hero}
        alt="hero"
        placeholder="blur"
        fill
        className="absolute -z-10 contrast-50 rounded-t-3xl object-cover"
      />
      <div
        className="w-full max-w-5xl z-10 flex flex-col px-4 items-center 
        "
      >
        <div className="flex flex-col items-start w-full">
          <h1 className="text-black/80 font-extrabold sm:text-6xl text-4xl ">
            Find your
          </h1>
          <h1 className="text-black/80 font-extrabold sm:text-6xl text-4xl">
            Perfect rent
          </h1>
          <p className="text-white/80  text-sm">
            Find your perfect rent at an unbeatable price.
          </p>
        </div>
        {/* Search banner */}
        <div
          className="bg-white w-full rounded-xl 
         mt-6 flex flex-col items-start px-4 py-4  justify-center space-y-4"
        >
          <TypeSelect />
          <SearchBar />
        </div>
        {/* Catch banner */}
        <SloganBanner />
      </div>
    </div>
  );
}
