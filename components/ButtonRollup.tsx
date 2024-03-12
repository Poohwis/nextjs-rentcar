import { ArrowUpRight } from "lucide-react";

interface ButtonRollupProps {
  children: React.ReactNode;
}
export default function ButtonRollup({ children }: ButtonRollupProps) {
  return (
    <div
      className="bg-black flex items-center justify-center
      text-white pl-3 pr-2 py-2 rounded-full text-base text-nowrap
        hover:cursor-pointer gap-x-2 hover:opacity-90"
    >
      {children}
      <ArrowUpRight
        size={14}
        color="black"
        className="bg-accent rounded-full w-5 h-5 p-[1px]"
      />
    </div>
  );
}
