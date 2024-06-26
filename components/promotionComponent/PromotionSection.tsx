"use client";
import { useEffect, useState } from "react";
import ButtonRollup from "../ButtonRollup";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";

export default function PromotionSection() {
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

  //   get featuslate promotion from db later
  const promotionList = [
    { title: "01", image: {} },
    { title: "02", image: {} },
    { title: "03", image: {} },
    { title: "04", image: {} },
    { title: "05", image: {} },
    { title: "06", image: {} },
  ];
  const showSlide = 3;
  return (
    <div
      id="promotion"
      className="w-full flex justify-center my-10 py-6 bg-black "
    >
      <div className="max-w-5xl w-full">
        <h2 className="sm:pl-0 pl-4 text-2xl font-bold text-white/80">
          Promotions & News
        </h2>
        <p className="sm:pl-0 pl-4 text-white/50 text-sm">
          Find your special discount and offer from the sharer
        </p>
        <Carousel
          setApi={setApi}
          className="mt-2 px-2"
          opts={{ align: "start" }}
        >
          <CarouselContent>
            {promotionList.map((list, index) => (
              <CarouselItem key={index} className={`sm:basis-1/${showSlide}  `}>
                <div className="w-full h-[200px] sm:px-0 px-2">
                  <div
                    className="w-full h-full bg-primary rounded-xl hover:cursor-pointer
                   flex justify-center items-center text-white/80 font-extrabold text-6xl"
                  >
                    {list.title}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div
            className={cn(
              current === promotionList.length - showSlide
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
          {promotionList.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full hover:cursor-pointer",
                index === current ? "bg-accent" : "bg-muted-foreground/50",
                index > promotionList.length - showSlide
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
