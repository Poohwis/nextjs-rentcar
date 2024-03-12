import { Check } from "lucide-react";

export default function SloganBanner() {
  const sloganLists = [
    "Rent easy",
    "Share easy",
    "No hidden fee",
    "24/7 Support",
  ];
  return (
    <div className="sm:flex sm:flex-row grid grid-cols-2 sm:items-center items-start justify-between sm:w-[60%] w-full 
    sm:px-20 px-4 sm:mt-12 mt-4 bg-white/50 backdrop-blur-lg py-2 rounded-xl">
      {sloganLists.map((list, index) => (
        <div
          key={index}
          className="flex flex-row gap-x-1 items-center  sm:justify-center justify-start  "
        >
          <Check size={14} color="white" className="bg-accent rounded-full p-[2px]" />
          <p className="text-[12px] text-black/70">{list}</p>
        </div>
      ))}
    </div>
  );
}
