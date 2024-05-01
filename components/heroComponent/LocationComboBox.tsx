"use client";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectButton from "./SelectButton";
import { IoLocationOutline } from "react-icons/io5";
import { provinceOptions} from "@/tempData";
import { useState } from "react";
import { useSearchStore } from "@/store/zustand";

export function LocationComboBox() {
  const { location, setLocation } = useSearchStore();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-full relative">
          <SelectButton
            icon={IoLocationOutline}
            label="Pickup & Return location"
            isActive={open}
          >
            <div className="mx-2 pl-2 w-full bg-transparent text-[12px] focus:outline-none flex flex-row items-center text-nowrap">
              {location?.value ? location?.label : "Select your pickup-return location"}
            </div>
          </SelectButton>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." className="h-9" />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandList className="">
            <CommandGroup tabIndex={10}>
              {provinceOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setLocation({value: option.value, label:option.label , id: option.id});
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <div
                    className={cn(
                      "ml-auto h-2 w-2 rounded-full bg-accent",
                      location?.value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
