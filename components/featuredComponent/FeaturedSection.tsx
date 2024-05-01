"use client";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import { featuredList } from "@/tempData";

export default function FeaturedSection() {
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

  //get featured data from db later
  const showSlide = 4;
  return (
    <div id="featured" className="w-full flex justify-center relative my-10">
      <div className="max-w-5xl w-full">
        <h2 className="sm:pl-0 pl-4 text-2xl font-bold text-primary">
          Deciding where to go?
        </h2>
        <p className="sm:pl-0 pl-4 text-black/50 text-sm">
          We recommend these interesting attractions.
        </p>
        <Carousel
          setApi={setApi}
          className="mt-2 px-2"
          opts={{ align: "start" }}
        >
          <CarouselContent>
            {featuredList.map((list, index) => (
              <CarouselItem key={index} className={`sm:basis-1/4`}>
                <div className="w-full h-[200px] sm:px-0 px-2">
                  <div
                    className="w-full h-full bg-primary rounded-xl hover:cursor-pointer
                   flex"
                  >
                    <div className="flex flex-col px-2 justify-between py-2 w-full">
                      <div className="flex flex-col items-end ">
                        <p className="text-[10px] text-white/80">start from</p>
                        <p className="text-sm text-accent">{list.rate}</p>
                        <p className="text-[10px] text-white/80">Bath/day</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <h2 className="text-white/80 text-lg font-bold">
                          {list.title}
                        </h2>
                        <p className="text-white/80 text-[12px] text-balance">
                          {list.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div
            className={cn(
              current === featuredList.length - showSlide
                ? "opacity-0"
                : "opacity-100",
              "transition-all"
            )}
          >
            <CarouselNext className="hidden sm:flex -right-2" />
          </div>
          <div
            className={cn(
              current === 0 ? "opacity-0" : "opacity-100",
              "transition-all"
            )}
          >
            <CarouselPrevious className="hidden sm:flex -left-2" />
          </div>
        </Carousel>
        <div className="flex flex-row justify-end mt-4 gap-x-1 mr-4">
          {featuredList.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full hover:cursor-pointer",
                index === current ? "bg-accent" : "bg-muted-foreground/50",
                index > featuredList.length - showSlide
                  ? "sm:hidden flex"
                  : "flex"
              )}
              onClick={() => api?.scrollTo(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
