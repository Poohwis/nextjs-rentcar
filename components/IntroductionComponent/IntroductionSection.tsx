"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import selectingcar from "@/public/selectingcar.png";
import booking from "@/public/booking.svg";
import carmoving from "@/public/carmoving.svg";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function IntroductionSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


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
    <div id="process" className="w-full flex justify-center relative my-10">
      <Carousel setApi={setApi} className="max-w-5xl w-full mt-4">
        <h1 className="text-2xl font-bold text-primary sm:pl-0 pl-4">How it works?</h1>
        <CarouselContent>
          {howtoLists.map((list, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/3 flex flex-col relative my-4"
            >
              <div className="flex flex-row justify-between w-full items-center px-6">
                <Image src={list.image} alt={list.title} width={100} />
                <div className="text-8xl font-extrabold text-accent opacity-50">
                  {list.step}
                </div>
              </div>
              <div className="flex flex-col mt-4 justify-start px-6">
                <h2 className="text-xl font-bold text-primary">{list.title}</h2>
                <p className="text-sm text-primary text-balance">
                  {list.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="sm:hidden flex flex-row justify-end -mt-2 gap-x-1 mr-4">
          {howtoLists.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full ",
                index === current ? "bg-accent" : "bg-muted-foreground/50"
              )}
            ></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
