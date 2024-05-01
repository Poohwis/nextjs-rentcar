import { cn } from "@/lib/utils";
import { IconType } from "@react-icons/all-files";
import { useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";

interface HeroButtonProps {
  children?: React.ReactNode;
  icon: IconType;
  label: string;
  isActive: boolean;
}
export default function SelectButton({
  children,
  icon: Icon,
  label,
  isActive,
}: HeroButtonProps) {
  return (
    <div
      className={cn(
        "bg-muted h-10 rounded-md w-full hover:cursor-pointer border-[1px]",
        isActive ? "border-accent" : "border-muted"
      )}
    >
      <div className="text-[10px] text-muted-foreground opacity-80 pl-2 mt-1 flex-row flex gap-x-1">
        <Icon size={12} />
        {label}
      </div>
      {children}
    </div>
  );
}
