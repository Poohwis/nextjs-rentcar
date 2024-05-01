"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Filter } from "./FilterSection";
import { FilterState } from "./RentListing";

interface FilterPopoverProps {
  filter : FilterState
  selection: Filter;
  setFilter: Dispatch<SetStateAction<FilterState>>;
}

export default function FilterPopover({
  filter,
  selection,
  setFilter,
}: FilterPopoverProps) {
  const [open, setOpen] = useState(false);
  
  const selectedFilterCount = filter[selection.id as keyof FilterState]
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex flex-row items-center justify-center gap-x-1 px-2 py-1 text-[12px] rounded-full hover:cursor-pointer hover:opacity-95",
            open || selectedFilterCount.length > 0 ? "bg-primary text-white/80" : "bg-secondary text-black" 
          )}
        >
          {selection.title} {selectedFilterCount.length > 0  && `(${selectedFilterCount.length})`} 
          <ChevronDown size={14} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <div
          className={cn(
            "gap-y-2 gap-x-2",
            selection.id === "passenger" || selection.id === "bags"
              ? "grid grid-cols-2"
              : "flex flex-col"
          )}
        >
          {selection.options?.map((option) => (
            <div
              onClick={() => {
                setFilter((prevFilter) => {
                  const updatedFilter: FilterState = {
                    ...prevFilter,
                  };
                  const currentArray = updatedFilter[selection.id as keyof FilterState] || [];

                  if (currentArray.includes(option)) {
                    updatedFilter[selection.id as keyof FilterState] = currentArray.filter(
                      (item: string) => item !== option
                    );
                  } else {
                    updatedFilter[selection.id as keyof FilterState] = [...currentArray, option];
                  }

                  return updatedFilter;
                });
              }}
              key={option}
              className={cn(
                "text-[13px] py-1 px-2 min-w-[40px] rounded-lg hover:opacity-95 hover:cursor-pointer",
                selection.id === "passenger" || selection.id === "bags"
                  ? "text-center"
                  : "text-start",
                  filter[selection.id as keyof FilterState].includes(option) ? "bg-primary text-white/80" : 'bg-muted text-black/80'
              )}
            >
              {option} 
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
