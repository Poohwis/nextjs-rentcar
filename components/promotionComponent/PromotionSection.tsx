import ButtonRollup from "../ButtonRollup";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function PromotionSection() {
  //   get featuslate promotion from db later
  const promotionList = [
    { title: "promotionOne", image: {} },
    { title: "promotionTwo", image: {} },
    { title: "promotionThree", image: {} },
    { title: "promotionFour", image: {} },
  ];
  return (
    <div className="w-full flex justify-center pb-10">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-primary">Promotions & News</h2>
        <Carousel className="mt-2" opts={{ align: "start" }}>
          <CarouselContent className="">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/3 ">
                <div className="w-full h-[200px] sm:px-0 px-2 ">
                  <div className="w-full h-full bg-red-200 rounded-xl"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious/>
        </Carousel>
      </div>
    </div>
  );
}
