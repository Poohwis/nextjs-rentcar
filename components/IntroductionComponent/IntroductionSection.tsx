import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import selectingcar from "@/public/selectingcar.png";
import booking from "@/public/booking.svg";
import carmoving from "@/public/carmoving.svg";

export default function IntroductionSection() {
  const howtoLists = [
    {
      step: "01",
      image: selectingcar,
      title: "Find Your Ride",
      description: "Enter your pickup location and browse available cars.",
    },
    {
      step: "02",
      image: booking,
      title: "Book It",
      description: "Choose your preferred ride and confirm your reservation.",
    },
    {
      step: "03",
      image: carmoving,
      title: "Enjoy Your Road",
      description: "We'll connect you with your ride for a smooth ride.",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <Carousel className="max-w-5xl w-full mt-4">
        <h1 className="text-2xl font-bold text-primary pl-4">How it works?</h1>
        <CarouselContent className="py-10 sm:px-0 sm:hover:cursor-default hover:cursor-pointer">
          {howtoLists.map((list, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/3 flex flex-col relative"
            >
              <div className="flex flex-row justify-between w-full items-center px-4">
                <Image src={list.image} alt={list.title} width={100} />
                <div className="text-8xl font-extrabold text-accent opacity-20">
                  {list.step}
                </div>
              </div>
              <div className="flex flex-col mt-4 justify-start px-4">
                <h2 className="text-xl font-bold text-primary">{list.title}</h2>
                <p className="text-sm text-primary text-balance">
                  {list.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
