import Image from "next/image";
import hero from "@/public/hero.jpg";
import CategorySelect from "./CategorySelect";
import SearchBar from "./SearchBar";
import SloganBanner from "./SloganBanner";
import SearchSection from "./SeacrhSection";
export default function HeroSection() {
  return (
    <div
      id="search"
      className="w-full h-[500px] overflow-hidden relative flex justify-center items-center"
    >
      <Image
        src={hero}
        alt="hero"
        placeholder="blur"
        fill
        className="absolute -z-10 contrast-50 rounded-t-3xl object-cover"
      />
      <div className="w-full max-w-5xl flex flex-col px-4 items-center">
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
        <SearchSection />
        <SloganBanner />
      </div>
    </div>
  );
}
